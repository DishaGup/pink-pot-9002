import { useState } from "react";
import {
  FormControl,FormLabel,Input,Button,Stack,Box,Heading,FormErrorMessage,InputGroup,InputRightElement, Text,Divider,
  useToast,Flex, CloseButton,HStack,Center,Image,  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
 import { useForm } from "react-hook-form";
import { RiEyeCloseFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import loginimage from '../../Assests/loginmodal.png'

const LoginModal = ({isOpen,onOpen,onClose}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const blue='blue'
      const [showPassword, setShowPassword] = useState(false);
      const [email, setEmail] = useState("");
      const [pwd, setPwd] = useState("");
        const toast = useToast();
       const Signin=data=>console.log(data)
        const handleShowPassword = () => setShowPassword(!showPassword);


  return (
    <Box bg="gray.50" height="fit-content" width='800px' p={1} border='1px solid green' br='10px' zIndex={100} isOpen={isOpen} position='absolute' translateY={-50} translateX={-50} >
    <Box maxW="90%" mx="auto" p={1} border='7px soliid pink'  >
        <HStack justifyContent='space-between' mt='15px'>  
      <Heading as="h1" size="xl" textAlign="center" mb={4} >
        Sign In

      </Heading>
  <CloseButton onClick={onClose} boxSize={17}/>
</HStack>
    
    
          <Stack >
     <Flex justify={'space-around'} > 
    <Box > <Image w='100%' h='350px' src={loginimage} /> </Box>

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
              mt='8px'>
              {/* //onClick={GetSign}> */}

              Sign In
            </Button>
      
        </form>
      </Box>

         </Flex>

         </Stack>



    </Box>
    <Divider
      orientation="vertical"
      width={"20%"}
      mt={"50px"}
      margin={"auto"}
      borderColor="gray.500"
      borderWidth="1px"
    />
    <Flex w="100%" justify={"center"}>
      {" "}
      <Link to="/register" color="blue.500">
        <Button
          border={"2px solid"}
          colorScheme="teal"
          mt="20px"
          >
          Create Account
        </Button>{" "}
      </Link>
    </Flex>
  </Box>
  )
}

export default LoginModal