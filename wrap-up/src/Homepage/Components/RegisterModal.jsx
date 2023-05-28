import { useContext, useState } from "react";
import {
  FormControl,FormLabel,Input,Button,Stack,Box,Heading,FormErrorMessage,InputGroup,InputRightElement, Text,Divider,
  useToast,Flex, CloseButton,HStack,Center,Image,  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  SimpleGrid,} from "@chakra-ui/react";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
 import { useForm } from "react-hook-form";
import { RiEyeCloseFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import registerimage from '../../Assests/registerimage.png'
import { AuthContext } from "../../RoutesPage/AuthContextProvider";

const RegisterModal = ({isOpen,onOpen,onClose}) => {

  const navigate=useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const blue='blue'
      const {isAuth,registerUser,mainpageinfo,setmainpageinfo,handlelogindata} =useContext(AuthContext)
      const [showPassword, setShowPassword] = useState(false);
      const [email, setEmail] = useState("");
      const [pwd, setPwd] = useState("");
      const [firstname, setFirstname] = useState("");
      const [lastname, setLastName] = useState("");
      const [projectname, setprojectname] = useState("");
      const [projectdesc, setprojectdesc] = useState("");
        const toast = useToast();
       const Signin=data=>registerUser(data).then((res)=>{console.log(res)
         toast({
          title: `Please Login`,
          status: "success",
          isClosable: true,
          duration: 2000,
          position:'top'
        })
      navigate('/')
      isOpen=!isOpen
      }).catch((err)=>{
        toast({
          title: `${err.response.data.message}, Register again`,
          status: "error",
          duration: 2000,
          isClosable: true,
          position:'top'
        })
        console.log(err.response.data)
      })
        const handleShowPassword = () => setShowPassword(!showPassword);


  return (
    <Modal isCentered size={{ base:'sm',md:'xl' ,lg:'2xl'}} bg="gray.50"  onClose={onClose}  height="fit-content" width='800px' p={1} border='1px solid green' br='10px' zIndex={100} isOpen={isOpen} position='absolute' translateY={-50} translateX={-50} >
   <ModalOverlay  bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)' />
   <ModalContent>
   <ModalHeader fontSize='28px'>Create account</ModalHeader>
          <ModalCloseButton  fontSize='20px'/>
          <ModalBody>
          
          <Stack >

    <Box bg="white"  borderRadius="md"  backgroundImage={registerimage}   boxShadow="lg" mt={"30px"}>

   
         <form onSubmit={handleSubmit(Signin)} w='100%' p={3}> 
         <SimpleGrid justify={'space-around'}   minChildWidth='180px' rowGap={'15px'} columnGap={'12px'} w='90%' m='auto' > 

         <FormControl id="firstname" isRequired isInvalid={errors.firstname}>

              <FormLabel>First Name</FormLabel>
              <Input bg='green.100'
                type="text"
                name="firstname"
                {...register("firstname", { required: true })}
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              <FormErrorMessage>
                Please enter a valid Data
              </FormErrorMessage>
            </FormControl>
       
       
            <FormControl id="lastname" isRequired isInvalid={errors.email}>
              <FormLabel>Last Name</FormLabel>
              <Input bg='green.100'
                type="text"
                name="lastname"
                {...register("lastname", { required: true })}
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
              <FormErrorMessage>
                Please enter a valid Data
              </FormErrorMessage>
            </FormControl>

       

       
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

            <FormControl id="projectname" isRequired isInvalid={errors.projectname}>
              <FormLabel>Project Name</FormLabel>
              <Input bg='green.100'
                type="text"
                name="projectname"
                {...register("projectname", { required: true })}
                value={projectname}
                onChange={(e) => setprojectname(e.target.value)}
              />
              <FormErrorMessage>
                Please enter a valid Data
              </FormErrorMessage>
            </FormControl>

            <FormControl id="projectdesc" >
              <FormLabel>Project Description</FormLabel>
              <Input bg='green.100'
                type="text"
                name="projectdesc"
                {...register("projectdesc")}
                value={projectdesc}
                onChange={(e) => setprojectdesc(e.target.value)}
              />
              <FormErrorMessage>
                Please enter a valid Data
              </FormErrorMessage>
            </FormControl>
            </SimpleGrid>
                     <Button
              type="submit" 
                w='150px'
              mt='10px'
             bgcolor='green'
             color={'white'}
             colorScheme="teal"
            //  _hover={{transform:'none'}}

              >
              
                Create Account
            </Button>
         
        </form>
       
      </Box>
         </Stack>
          </ModalBody>

   </ModalContent>  
  </Modal>
  )
}

export default RegisterModal