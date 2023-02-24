import React,{useContext, useState} from 'react'
import { ReactNode } from 'react';
import { useFormik } from 'formik';
import {Flex,CloseButton,Button,useDisclosure,Box, Accordion, AccordionItem,AccordionButton,AccordionPanel,AccordionIcon,
Image, Spacer,HStack,Heading, Tooltip,Text, AspectRatio, VStack, Link,  Drawer,DrawerBody,DrawerFooter,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,FormLabel,Textarea,
InputGroup,Stack,Input,InputLeftAddon,InputRightAddon,Select, Center,FormControl,FormErrorMessage,FormHelperText, Divider, Popover,
PopoverTrigger,PopoverContent,PopoverHeader,PopoverBody,PopoverFooter,PopoverArrow,PopoverCloseButton,PopoverAnchor,useColorModeValue,
List,ListItem,ListIcon,} from '@chakra-ui/react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from "@chakra-ui/alert";
  import { Icon } from '@chakra-ui/react'
  import {FcGlobe,FcAssistant} from "react-icons/fc"
  import { FaCheckCircle } from 'react-icons/fa';
import { AuthContext } from '../../RoutesPage/AuthContextProvider';


const Navbar = () => {

 const[mainpageinfo,setmainpageinfo]=useState([])
 const {isAuth,loginUser} =useContext(AuthContext)
const Accordiancontentss=()=>{
return(
<Flex>
{<VerticalSingleComponentsofAccordian />}
<Spacer/>
{<VerticalSingleComponentsofAccordian/>}

</Flex>


)
}



















const VerticalSingleComponentsofAccordian=()=>{

  return(
 <Box w='100%'>
 <VStack>
 <SingleComponentsofAccordian iconname={FcAssistant} 
  head='Marketing' text='Lorem12'
  />
<SingleComponentsofAccordian iconname={FcAssistant} 
  head='Marketing' text='Lorem12'
  />
  <SingleComponentsofAccordian iconname={FcAssistant} 
  head='Marketing' text='Lorem12'
  />
  <SingleComponentsofAccordian iconname={FcAssistant} 
  head='Marketing' text='Lorem12'
  />
  {/* <SingleComponentsofAccordian iconname={FcAssistant} 
  head='Marketing' text='Lorem12'
  />
  <SingleComponentsofAccordian iconname={FcAssistant} 
  head='Marketing' text='Lorem12'
  /> */}

  

  
 </VStack>
 <Link>See all Item</Link>
 </Box>
)
}


const SingleComponentsofAccordian=({iconname,head,text})=>{
return(<Box>

  <Icon as={iconname} />

<VStack g='5px' >
  <Heading>{head}</Heading>
  <Text>{text}</Text>
</VStack>

</Box>

)
}






const Manageaccordian=()=>{
return(
 
    <Box as="span" flex='1' textAlign='left' fontWeight='500' >
      {<Accordiancontentss/> } 
    </Box>

)
}


const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName:'',
      email: '',
      project: '',
      description:'',
    },
    onSubmit: values => {
setmainpageinfo(values)
loginUser()

// console.log(mainpageinfo)
// console.log(values)
return( <Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Application submitted!
   Verigy your email
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
 {/* { alert(JSON.stringify(values, null, 2))} */}
   
    Thanks for submitting your application. Our team will get back to you soon.
  </AlertDescription>
</Alert>


)
    },
  });
//  console.log(mainpageinfo)
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormLabel   htmlFor="firstName">First Name</FormLabel>
      <Input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      <FormLabel htmlFor="lastName">Last Name</FormLabel>
      <Input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      <FormLabel htmlFor="email">Email Address</FormLabel>
      <Input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
        <FormLabel htmlFor="project">Project name</FormLabel>
      <Input
        id="project"
        name="project"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.project}
      />
        <FormLabel htmlFor="email">Write project's description</FormLabel>
      <Input
        id="description"
        name="description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.description}
      />
     
      <Button my={5} colorScheme='pink' type="submit">Submit</Button>
    </form>
  );
};
const Freetrialdrawer=({ isOpen, onOpen, onClose })=>{
 
  const firstField = React.useRef()

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement='right'
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            Create a new account
          </DrawerHeader>

          <DrawerBody>
       

   {  <SignupForm/>}


          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
        <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
         
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

const Openmap=({isOpen,onOpen,onClose})=>{

return(
<Center isOpen={isOpen}   >
   
  {/* // <AspectRatio  isOpen={isOpen} placement='center'> */}
  <CloseButton size='md' onClick={onClose} />
  <iframe
    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng' />
{/* // </AspectRatio> */}
</Center>
)

}

function PriceWrapper({ children }) {
  return (
    <Box
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      bg='whiteAlpha.900'
      borderRadius={'xl'} zIndex={21} >
      {children}
    </Box>
  );
}


function ThreeTierPricing() {
  return (
    <Box   w='100vh' placement='center' bg='whiteAlpha.900'>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Plans that fit your need
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
          Start with 14-day free trial. No credit card needed. Cancel at
          anytime.
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        z-index={22}
        py={10}>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Hobby
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                79
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                unlimited build minutes
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Lorem, ipsum dolor.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                5TB Lorem, ipsum dolor.
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="red" variant="outline">
                Start trial
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}>
              <Text
                textTransform="uppercase"
                bg={useColorModeValue('red.300', 'red.700')}
                px={3}
                py={1}
                color={useColorModeValue('gray.900', 'gray.300')}
                fontSize="sm"
                fontWeight="600"
                rounded="xl">
                Most Popular
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Growth
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  149
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /month
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  unlimited build minutes
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  5TB Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  5TB Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  5TB Lorem, ipsum dolor.
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="red">
                  Start trial
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Scale
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                349
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                unlimited build minutes
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Lorem, ipsum dolor.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                5TB Lorem, ipsum dolor.
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="red" variant="outline">
                Start trial
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}




const { isOpen:islogin, onOpen:onlogin, onClose:closelogin } = useDisclosure()
const{isOpen:ismap,onOpen:showmap,onClose:closemap}=useDisclosure()

    const {
        isOpen: isVisible,
        onClose,
        onOpen,
      } = useDisclosure({ defaultIsOpen: true })
    
      return( 
      <Box  position='fixed' top={0} z-index={100} bgColor='cream' right={0} left={0} mb={8}  boxShadow='xl' rounded='sm' bg='white'>
      
  {    isVisible ? (
        <Flex w='100%' margin='auto' h='1cm' backgroundColor='cyan' >
        <Alert status='info' >
          <AlertIcon w='10% 'fontSize={32}   />
            <AlertTitle mr={2} >Meet WrapUp</AlertTitle>
            <AlertDescription>
            the most powerful work management platform that will put you light-years ahead of the competition.

            </AlertDescription>
         
          <CloseButton
            alignSelf='flex-start'
            position="absolute" right="8px" top="8px"
            onClick={onClose}
          />
        </Alert>
        </Flex>
      ) : (
        ''
      )
      }
  <Flex  align='center' mr='30px'
 justify='flex-end' 
 justifyContent='space-between'
 alignItems='center'>
 
 
 

<HStack w='47%' alignItems='flex-end' mx='70px' >
<Center>
<Image maxW='2cm'   src='https://i.ibb.co/J5WLcDd/Logo-Wrap-up-Project-Company.png' />
  <Text size='xl'  >Wrap-Up</Text>
  </Center>
  
  <Popover boundary  PopoverContent bg='whiteAlpha.900' >
  <PopoverTrigger>
    <Button>Why us</Button>
  </PopoverTrigger>
  <PopoverContent w='full'>
    {/* <PopoverArrow />
    <PopoverCloseButton /> */}
 
 <PopoverBody w='100%' px={20} bg='whiteAlpha.900' > 
{<ThreeTierPricing/>}
    {/* {<Manageaccordian />} */}

  </PopoverBody> 
  </PopoverContent>
</Popover>








{/*   
  {<Manageaccordian heads='Why Us?' />}
  {<Manageaccordian heads='Features' />} */}
 {/*  {<Manageaccordian heads='Resources' />}
  {<Manageaccordian heads='pricing' />} */}
</HStack>

<Spacer/>
<HStack  w='30%' align='center' mr='30px'
 justify='flex-end' 
 justifyContent='space-between'
 alignItems='center'
>

<Popover boundary  PopoverContent bg='whiteAlpha.900' >
<Tooltip label='Get in Touch With Us.' >
  <PopoverTrigger>
  
  <Button>Contact Sales</Button>
 
  </PopoverTrigger>
  </Tooltip>
  <PopoverContent w='full'>

  <PopoverBody w='100%' px={20} bg='whiteAlpha.900' > 
{<ThreeTierPricing/>}
    
  </PopoverBody> 
  </PopoverContent>
</Popover>




  <Tooltip label='Choose your Language.' >
  <Text  onClick={showmap} onClose={closemap} > <Icon as={FcGlobe} />En</Text>
    
  </Tooltip>
  <Tooltip label='Let us help you' >
  <Text> Login</Text>
    
  </Tooltip>
  <Tooltip label='' >
  <Button bg='green.400' color='white' onClick={onlogin}  >
    Start for Free
  </Button>
    
  </Tooltip>

</HStack>
  </Flex>
{
islogin && <Freetrialdrawer   isOpen={islogin} onOpen={onlogin} onClose={closelogin} /> 

}
{
  ismap && <Openmap isOpen={ismap} onOpen={showmap} onClose={closemap} />
}

      </Box>)

    }
 
 


export default Navbar