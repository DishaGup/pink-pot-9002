import {
  Button, Flex, FormControl,FormLabel,Heading,Input,Stack,useColorModeValue,HStack,
  Avatar, AvatarBadge, IconButton, Center, Modal, ModalOverlay,ModalContent, ModalHeader,
  ModalFooter, ModalBody, ModalCloseButton} from '@chakra-ui/react';
import React from 'react';


export default function UserProfileEdit({ isOpen, onOpen, onClose }){

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
              <ModalHeader>Check your account details</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                {/* <FormControl>
                  <FormLabel>First name</FormLabel>
                  <Input ref={initialRef} placeholder='First name' />
                </FormControl>
    
                <FormControl mt={4}>
                  <FormLabel>Last name</FormLabel>
                  <Input placeholder='Last name' />
                </FormControl> */}
 
 <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          User Profile Edit
        </Heading>
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
                  
                  // icon={<SmallCloseIcon />}
                />
              </Avatar>
            </Center>
            <Center w="full">
              <Button w="full">Change Icon</Button>
            </Center>
          </Stack>
        </FormControl>
        <FormControl id="userName" isRequired>
          <FormLabel>User name</FormLabel>
          <Input
            placeholder="UserName"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="password"
            _placeholder={{ color: 'gray.500' }}
            type="password"
          />
        </FormControl>
        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            bg={'red.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'red.500',
            }}>
            Cancel
          </Button>
          <Button
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500',
            }}>
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>




              </ModalBody>
    
              <ModalFooter>
                <Button colorScheme='blue' mr={3}>
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