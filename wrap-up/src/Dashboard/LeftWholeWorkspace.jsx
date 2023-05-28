import React from 'react'


import {
    Box, Table, Text, Link, Image, Thead,  Tbody, Tr, Th, Td, TableCaption, TableContainer, CloseButton, HStack,  VStack, UnorderedList, ListItem, 
    useDisclosure,Button } from '@chakra-ui/react'
  import { FcTodoList, FcPhoneAndroid, FcContacts, FcSmartphoneTablet} from 'react-icons/fc'
  import { Icon } from '@chakra-ui/react'
import { useContext } from 'react'
import { AuthContext } from '../RoutesPage/AuthContextProvider'
  

  const LeftWholeWorkspace = () => {
let {colorMode}=useContext(AuthContext)

    const Addsonleftworkspace = ({ src, textss, badgetext, colors, childrens }) => {

        const {
          isOpen: isVisible,
          onClose,
          onOpen,
        } = useDisclosure({ defaultIsOpen: true })
    
        return (
          <>
            {isVisible ? (
    
              <Box bgColor={colorMode=="light"? colors :"gray.500"} borderRadius={8} wrap='wrap' m='10px' p='10px' color={colorMode=="light"?'black.700':"cream"} textColor={colorMode=="light"?'blackAlpha.700':'cream'} >
                <CloseButton size='md' onClick={onClose} />
                <HStack>
    
                  <Box m='10px'>
                    <Icon as={src} boxSize={8} />
                  </Box>
    
                  <VStack flexBasis={1} textAlign='left' align='flex-start' color={colorMode=="light"?'blackAlpha.700':'cream'} >
                    <Text>{textss}</Text>
                    {childrens}
                    <Button variant='outline' p={1} borderRadius={7} >{badgetext}</Button>
                  </VStack>
    
                </HStack>
    
              </Box>
    
    
            ) : ('')
    
    
            }
    
          </>
    
        )
      }
    
      const LeftWorkspacetoast = () => {
    
        return (
    
          <UnorderedList px={5}  color={colorMode=="light"?'blackAlpha.700':'cream'}>
            <ListItem> You’re assigned a new task or project
            </ListItem>
            <ListItem> You’re @mentioned by someone else
            </ListItem>
            <ListItem> You’re given access to some new info</ListItem>
            <ListItem> When you need to be in the loop</ListItem>
    
            <Link> Read more about inbox</Link>
    
          </UnorderedList>
        )
      }
    


  return (
    <TableContainer
    w='content-fit'
    gap='10px'
    maxWidth='100%'
    p={3}
    overflowY='auto'
    zIndex={-1}
    borderRadius={8}
    border='2px'
   
    overflowX={'auto'}
    borderColor='#FED7E2'>
  
      <Table variant='simple'  colorScheme='pink' rowGap='50px'  overflowY='auto' >
      
        <TableCaption border='2 px solid red' borderColor='#FED7E2'>Missing something? Tell us what you’d like to see on your Home page.</TableCaption>
        <Thead>
          <Tr>
            <Th fontWeight='700' fontSize='18px'  >Inbox</Th>
          </Tr>

        </Thead>
        <Tbody>
          <Tr>
            <Addsonleftworkspace src={FcTodoList} colors='#C6F6D5' textss='Hello and welcome. Here is an example tasks you might find helphul.' />
          </Tr>

          <Tr>

            <Addsonleftworkspace src={FcContacts} childrens={<LeftWorkspacetoast />} colors='#EDFDFD' textss='Inbox helps you stay updated. You’ll get notifications when:' badgetext='Read more about inbox' />

          </Tr>
          <Tr>
            <Addsonleftworkspace colors='#F0FFF4' textss='Get our mobile app to see all notifications directly on your phone.' badgetext='Try mobile' src={FcPhoneAndroid} />
          </Tr>
          <Tr>
            <Addsonleftworkspace colors='#E9D8FD' textss='Try our integrations to make work easier and connect with your team better' badgetext='Explore integrations' src={FcSmartphoneTablet} />

          </Tr>
        </Tbody>

      </Table>   </TableContainer>)
    
}

export default LeftWholeWorkspace


