import React from 'react'
import {Flex,CloseButton,Button,useDisclosure,Box, Accordion, AccordionItem,AccordionButton,AccordionPanel,AccordionIcon,
Image, Spacer,HStack,Heading, Tooltip,Text, AspectRatio, VStack, Link,  Drawer,DrawerBody,DrawerFooter,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,FormLabel,Textarea,
InputGroup,Stack,Input,InputLeftAddon,InputRightAddon,Select} from '@chakra-ui/react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from "@chakra-ui/alert";
  import { Icon } from '@chakra-ui/react'
  import {FcGlobe,FcAssistant} from "react-icons/fc"

const Navbar = () => {
 
const Accordiancontentss=()=>{
return(
<Flex>
<VerticalSingleComponentsofAccordian />


</Flex>


)
}


const VerticalSingleComponentsofAccordian=()=>{

  return(
 <Box>
 <VStack>
  <SingleComponentsofAccordian iconname={FcAssistant} 
  head='Marketing' text='Lorem12'
  />


  
 </VStack>
 <Link>See all Item</Link>
 </Box>
)
}


const SingleComponentsofAccordian=({iconname,head,text})=>{
return(<Box>
<AspectRatio ratio='3/2'>
  <Icon as={iconname} />
</AspectRatio>
<VStack g='5px' >
  <Heading>{head}</Heading>
  <Text>{text}</Text>
</VStack>

</Box>

)
}






const Manageaccordian=({heads})=>{
return(
  <Accordion allowToggle  w='40%'  onChange={()=>{
    //  <AccordionPanel w='100%' _expanded={{w:'100%'}} >
    //    <Accordiancontentss/>
    // </AccordionPanel>
  }}  >
  <AccordionItem w='80px' >
    <h2> 
      <AccordionButton  >
        <Box as="span" flex='1' textAlign='left' fontWeight='500' >
        {heads}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel w='100%' >
       <Accordiancontentss/>
    </AccordionPanel>
  </AccordionItem>
</Accordion>

)
}


const Freetrialdrawer=()=>{
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()

  return (
    <>
      {/* <Button 
      // leftIcon={<AddIcon />}
      colorScheme='teal' onClick={onOpen}>
        Create user
      </Button> */}
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
            <Stack spacing='24px'>
              <Box>
                <FormLabel htmlFor='username'>Name</FormLabel>
                <Input
                  ref={firstField}
                  id='username'
                  placeholder='Please enter user name'
                />
              </Box>

              <Box>
                <FormLabel htmlFor='url'>Url</FormLabel>
                <InputGroup>
                  <InputLeftAddon>http://</InputLeftAddon>
                  <Input
                    type='url'
                    id='url'
                    placeholder='Please enter domain'
                  />
                  <InputRightAddon>.com</InputRightAddon>
                </InputGroup>
              </Box>

              <Box>
                <FormLabel htmlFor='owner'>Select Owner</FormLabel>
                <Select id='owner' defaultValue='segun'>
                  <option value='segun'>Segun Adebayo</option>
                  <option value='kola'>Kola Tioluwani</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor='desc'>Description</FormLabel>
                <Textarea id='desc' />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}













    const {
        isOpen: isVisible,
        onClose,
        onOpen,
      } = useDisclosure({ defaultIsOpen: true })
    
      return( 
      <Box>
      
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
 justifyContent='space-between'>
 
 <Image src='#' />
<Spacer/>
<HStack w='40%' alignItems='flex-end' >
  {<Manageaccordian heads='Why Us?' />}
  {<Manageaccordian heads='Features' />}
  {<Manageaccordian heads='Resources' />}
  {<Manageaccordian heads='pricing' />}
</HStack>

<Spacer/>
<HStack  w='30%' align='center' mr='30px'
 justify='flex-end' 
 justifyContent='space-between'
>
<Tooltip label='Get in Touch With Us.' >
  <Text>Contact Sales</Text>
    
  </Tooltip>
  
  <Tooltip label='Choose your Language.' >
  <Text> <Icon as={FcGlobe} />En</Text>
    
  </Tooltip>
  <Tooltip label='Let us help you' >
  <Text> Login</Text>
    
  </Tooltip>
  <Tooltip label='' >
  <Button bg='green.400' color='white' onClick={Freetrialdrawer}  >
    Start for Free
  </Button>
    
  </Tooltip>

</HStack>
  </Flex>



      </Box>)

    }
 
 


export default Navbar