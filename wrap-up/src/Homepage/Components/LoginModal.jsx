import { useContext, useState } from "react";
import {
  FormControl,FormLabel,Input,Button,Stack,Box,Heading,FormErrorMessage,InputGroup,InputRightElement, Text,Divider,
  useToast,Flex, CloseButton,HStack,Center,Image,  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,useDisclosure,
  ModalCloseButton,} from "@chakra-ui/react";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
 import { useForm } from "react-hook-form";
import { RiEyeCloseFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import loginimage from '../../Assests/loginmodal.png'
import { AuthContext } from "../../RoutesPage/AuthContextProvider";
import RegisterModal from "./RegisterModal";

const LoginModal = ({isOpen,onOpen,onClose}) => {

  const { isOpen:isregister, onOpen:onregister, onClose:closeregister } = useDisclosure()


  const navigate=useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const blue='blue'
      const {isAuth,loginUser,mainpageinfo,setmainpageinfo,handlelogindata} =useContext(AuthContext)
      const [showPassword, setShowPassword] = useState(false);
      const [email, setEmail] = useState("");
      const [pwd, setPwd] = useState("");
        const toast = useToast();
       const Signin=datas=>handlelogindata(datas).then((res)=>{
     
        localStorage.setItem("token",res.data.token)
        localStorage.setItem("user_id",res.data.userId)
        setmainpageinfo(res.data.user)
           toast({
          title: `Login Successful`,
          description:"Redirecting to Dashboard",
          status: "success",
          isClosable: true,
          duration: 2000,
          position:'top'
        })
        
      navigate('/workpage')
      isOpen=!isOpen

      }).catch((err)=>{
        toast({
        //  title: `${err.response.data.message}, Login again`,
          title: `Login again`,
          status: "error",
          duration: 2000,
          isClosable: true,
          position:'top'
        })
       
      })
        const handleShowPassword = () => setShowPassword(!showPassword);


  return (
    <Modal isCentered size={{ base:'xl' ,lg:'2xl'}} bg="gray.50"  onClose={onClose}  height="fit-content" width='800px' p={1} border='1px solid green' br='10px' zIndex={100} isOpen={isOpen} position='absolute' translateY={-50} translateX={-50} >
   <ModalOverlay />
   <ModalContent>
   <ModalHeader fontSize='28px'>   Sign In</ModalHeader>
          <ModalCloseButton  fontSize='20px'/>
          <ModalBody>
          
          <Stack >
     <Flex justify={'space-around'} > 
    <Box display={{base:'none',sm:'block'}} > <Image w='100%' h='350px' src={loginimage} /> </Box>

    <Box bg="white"  borderRadius="md" w='300px'  boxShadow="lg" mt={"50px"} ml='-50px' >
         <form onSubmit={handleSubmit(Signin)} w='100%'> 
         <FormControl id="email" isRequired isInvalid={errors.email}>
              <FormLabel>Email</FormLabel>
              <Input bg='green.100'
                type="email"
                name="email"
                {...register("email", { required: true })}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormErrorMessage>
                Please enter a valid email address
              </FormErrorMessage>
            </FormControl>

            <FormControl id="password" isRequired isInvalid={errors.password}>
              <FormLabel>Password</FormLabel>
              <InputGroup >
                <Input bg='green.100'
                  type={showPassword ? "text" : "password"}
                 // type='password'
                  name="password"
                  {...register("password", { required: true })}
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                />
                <InputRightElement>
                  <Button size="sm" onClick={handleShowPassword}>
                    {showPassword ? <IoMdEye /> : <RiEyeCloseFill />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>Please enter a password</FormErrorMessage>
            </FormControl>
                     <Button
              type="submit" 
              backgroundColor={"gray.200"}
              //isLoading={loading}
              loadingText="Signing In"
              colorScheme="teal"
              variant="outline"
              w='150px'
              mt='10px'>
              Sign In
            </Button>
      
        </form>
      </Box>

         </Flex>

         </Stack>


          


          </ModalBody>
          <ModalFooter>     
   
      <Link to="#" color="blue.100">
        <Button onClick={onregister}
        onClose={onClose}
          border={"2px solid"}
          colorScheme="teal"
          mt="20px"
          w='150px'
         
          >
          Create Account
        </Button>{" "}
      </Link>
     </ModalFooter>
   </ModalContent>
{ 
  isregister && <RegisterModal  isOpen={isregister} onOpen={onregister} onClose={closeregister}  />
}

    <Box maxW="90%" mx="auto" p={1} border='7px soliid pink'  >
        

    </Box>
    <Divider
      orientation="vertical"
      width={"20%"}
      mt={"50px"}
      margin={"auto"}
      borderColor="gray.500"
      borderWidth="1px"
    />
  
  </Modal>
  )
}

export default LoginModal