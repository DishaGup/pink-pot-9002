import {
  Button, Flex, FormControl,FormLabel,Heading,Input,Stack,useColorModeValue,HStack,
  Avatar, AvatarBadge, IconButton, Center, Modal, ModalOverlay,ModalContent, ModalHeader,
  ModalFooter, ModalBody, ModalCloseButton, Toast, useToast} from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../RoutesPage/AuthContextProvider';
import { useEffect } from 'react';


 function UserProfileEdit({ isOpen, onOpen, onClose }){
  const {mainpageinfo,handleedituserdetails} =useContext(AuthContext)
let [obj,setobj]=useState(mainpageinfo[0])
 
  //return (obj)
 

let {firstname,lastname,email,password,projectname,projectdesc}=obj
const toast=useToast()  

 function InitialFocus() {
    
    
      const initialRef = React.useRef(null)
      const finalRef = React.useRef(null)
    
      return (
        <>
          <Button onClick={onOpen}>Open Modal</Button>
    
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>  <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          User Profile Edit
        </Heading>Check your account details</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
              <FormControl>
                  <FormLabel>First name</FormLabel>
                  <Input ref={initialRef} placeholder='First name' value={firstname} onChange={(e)=>setobj({...obj,firstname:e.target.value})} />
                </FormControl>
    
                <FormControl mt={4}>
                  <FormLabel>Last name</FormLabel>
                  <Input placeholder='Last name' value={lastname}  onChange={(e)=>setobj({...obj,lastname:e.target.value})} />
                </FormControl> 
 
 <Flex
          align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
            p={6}
        my={10}>   
        <FormControl id="userName">
          <FormLabel>User Icon</FormLabel>
          <Stack direction={['column', 'row']} spacing={6}>
            <Center>
              <Avatar size="xl" src="https://bit.ly/sage-adebayo">
                <AvatarBadge
                  as={IconButton}
                  size="sm"
                  rounded="full"
                  top="-10px"
                  colorScheme="red"
                  aria-label="remove Image"
                  
                      />
              </Avatar>
            </Center>
            <Center w="full">
              <Button w="full"  onClick={()=>toast({
                position:'top',
                title:'No Change',
                description:'you can not change this!',
                duration:3000,
                closable:true,
              })} >Change Icon</Button>
            </Center>
          </Stack>
        </FormControl>
          <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
            value={email}
            onChange={(e)=>setobj({...obj,email:e.target.value})} 
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="password"
            _placeholder={{ color: 'gray.500' }}
            type="password"
            onChange={(e)=>setobj({...obj,password:e.target.value})} 
          />
        </FormControl>
           </Stack>
    </Flex>




              </ModalBody>
    
              <ModalFooter>
                <Button colorScheme='blue' mr={3}  onClick={handleedituserdetails} >
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
   

return (
<>
{ <InitialFocus/>}
</>


  );
}
export default UserProfileEdit