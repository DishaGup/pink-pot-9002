import React, { useState, useRef, useContext } from 'react'
import { createStandaloneToast } from '@chakra-ui/toast'
import { GiHamburgerMenu } from "react-icons/gi"
import { Button, Center, Container, Flex, Heading, Input, Spacer, Tooltip, useDisclosure, Stack, SimpleGrid, Checkbox, FormControl,FormErrorMessage,
  FormHelperText,ButtonProps,useColorMode,} from '@chakra-ui/react'
import { BsBellFill, BsChevronDown, BsPlusCircle,BsSun, BsMoonStarsFill } from "react-icons/bs"

import { Icon } from '@chakra-ui/react'
import { FaUserPlus, FaPencilAlt } from 'react-icons/fa'
import { BiCube } from 'react-icons/bi'
import { FcTodoList, FcPhoneAndroid, FcContacts, FcStart, FcTemplate, FcSmartphoneTablet, FcCollaboration, FcAddRow, FcHome, FcAdvertising, FcSettings } from 'react-icons/fc'
import {
  Box, Grid, GridItem, Table, Text, Link, Image, Thead, Wrap, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, CloseButton,
  Divider, HStack, Avatar, VStack, UnorderedList, ListItem, Badge, Drawer, FormLabel, InputGroup, Select, Textarea, InputLeftAddon, InputRightAddon,
  DrawerBody, Modal, Menu, MenuButton, MenuList, MenuItem, MenuItemOption,MenuGroup,MenuOptionGroup,MenuDivider,ModalOverlay,
  ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,DrawerFooter,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton
} from '@chakra-ui/react'
import { AuthContext } from '../RoutesPage/AuthContextProvider'
export default function Workpage(props: ButtonProps) {
  const {isAuth,logoutUser} =useContext(AuthContext)
  const [modals, setIsmodals] = useState(false)
  const [task, settask] = useState([])
  const { colorMode, toggleColorMode } = useColorMode()


  function Drawerburgerdashboard({ isOpen, onClose, firstField }) {
    const sidebarspace = () => {

      return (
        <HStack>
          <Icon as={FcAdvertising} />
          <Text>Start </Text>
          <Spacer />
          <Icon as={FcSettings} />
          <Icon as={BsChevronDown} />
        </HStack>
      )
    }

    return (
      <>
        {/* <Button leftIcon={<AddIcon />} colorScheme='teal' onClick={onOpen}>
          Create user
        </Buton> */}
        <Drawer
          isOpen={isOpen}
          placement='left'
          initialFocusRef={firstField}
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
              <Image src='' />
            </DrawerHeader>

            <DrawerBody>
              <Stack spacing='24px' textAlign='left' align='left' >
                <Flex>
                  <Icon as={FcHome} boxSize={8} /> <Link w='90%'><Button ref={firstField} w='100%'>Home</Button></Link>
                </Flex>
                <Divider />
                <Box>
                  <Heading size='h5' >Space</Heading>
                  <Select placeholder={sidebarspace()}  >
                    <option> {sidebarspace()}  </option>
                    <option >+ Space</option>
                  </Select>
                </Box>

                <Flex>
                  <Icon as={FcTemplate} boxSize={8} /> <Link w='90%'><Button w='100%'>Task dashboard</Button></Link>
                </Flex>

                <Flex>
                  <Icon as={FcStart} boxSize={8} /> <Link w='90%'><Button w='100%'>Start</Button></Link>
                </Flex>
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth='1px'>
              <Flex>
                <Link w='90%'><Button w='100%'>+   Project</Button></Link>
              </Flex>

            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }


  const Dashboardnavbar = () => {
    const { isOpen: isdashboard, onOpen: opendash, onClose } = useDisclosure()
    const [typetask, settypetask] = useState('')
    const firstField = React.useRef()
    const [priority,setpriority]=useState('')
    const isError = task === ''

const handlesubmittask=()=>{
let newtask={
typetask:typetask,
status:false,
priority:priority
}

settask([...task,newtask])

}



    const { isOpen: istaskhere, onOpen: opentask, onClose: closetaskhere } = useDisclosure()
    return (
      <Box borderBottom='1px' borderBottomColor='orange.200' >
        <Flex w='95%' m='auto' >
          <HStack gap={3} >
            <Icon as={GiHamburgerMenu} onClick={opendash} />
            <Heading size='md'>Home</Heading>
          </HStack>
          {isdashboard && <Drawerburgerdashboard isOpen={isdashboard} onClose={onClose} firstField={firstField} />

          }
          <Spacer />
          <HStack gap={3} >
          <Button
          aria-label="Toggle Color Mode"
          onClick={toggleColorMode}
          _focus={{ boxShadow: 'none' }}
          w="fit-content"
          {...props}>
          {colorMode === 'light' ? <BsMoonStarsFill  boxSize={8} /> : <BsSun   boxSize={8}/>}
        </Button>
            <Tooltip label='Search tasks,projects,files and more' >
              <Input type='search' placeholder='Search' />
            </Tooltip>
            <Tooltip label='Your assistant' >
              <Icon />
            </Tooltip>
            <Menu>
              <Tooltip label='Add your task' >
                <MenuButton as={Button} >
                  <Icon as={FcAddRow} boxSize={10} />
                </MenuButton>
              </Tooltip>
              <MenuList>
                <MenuItem as='button' onClick={opentask} icon={<BsPlusCircle />} >Work item</MenuItem>
                <MenuItem icon={<BiCube />}  >Space</MenuItem>
                <MenuItem icon={< FaPencilAlt />} >Request</MenuItem>
                <MenuItem icon={<FaUserPlus />}>Invite</MenuItem>

              </MenuList>
            </Menu>

            {/* <Avatar src='#' size='md'/> */}
            <Menu>
              <Tooltip label='Profile and settings' >
                <MenuButton as={Button} >
                  <Avatar src='#' size='sm' />
                </MenuButton>
              </Tooltip>
              <MenuList>
                <MenuItem>
                  <HStack>
                    <Avatar></Avatar>
                    <VStack>
                      <Text>name</Text>
                      <Text>status</Text>
                    </VStack>
                  </HStack>
                </MenuItem>
                <MenuDivider />
                <MenuItem>Naame 's team</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Apps and Integration</MenuItem>
                <MenuItem>Upgrade</MenuItem>
                <MenuItem>Help</MenuItem>
                <MenuDivider />
                <MenuItem onClick={logoutUser}  >
                  Log Out</MenuItem>

              </MenuList>
            </Menu>


          </HStack>
          <Modal onClose={closetaskhere} isOpen={istaskhere} isCentered >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Create your Task</ModalHeader>
              <ModalCloseButton />
              <ModalBody>

                <FormControl  isRequired >
                  <FormLabel>Task name</FormLabel>
                  <Input type='text' value={typetask} onChange={(e) => settypetask(e.target.value)}/>
                {!isError ? (
        <FormHelperText>
    please recheck your task
        </FormHelperText>
      ) : (
        <FormErrorMessage>Task is required.</FormErrorMessage>
      )} 
                </FormControl>
<FormControl>
<FormLabel>Select priority of task
</FormLabel>
<Select placeholder='Select priority' value={priority} onChange={(e) => setpriority(e.target.value)} >
<option value="">High</option>
<option value="">Low</option>
<option value="">No</option>

</Select>
</FormControl>

              </ModalBody>
              <ModalFooter>

              <FormControl  colorScheme='teal' as='button' bgColor='gray.400' m={8} onClick={handlesubmittask} >
  <Input type='submit' value='Add task' />
</FormControl>
                <Button onClick={closetaskhere}>Close</Button> 
              </ModalFooter>
            </ModalContent>
          </Modal>

        </Flex>

      </Box>
    )

  }




  const Addsonleftworkspace = ({ src, textss, badgetext, colors, childrens }) => {


    const {
      isOpen: isVisible,
      onClose,
      onOpen,
    } = useDisclosure({ defaultIsOpen: true })

    return (
      <>
        {isVisible ? (

          <Box bgColor={colors} borderRadius={8} wrap='wrap' m='10px' p='10px'>
            <CloseButton size='md' onClick={onClose} />
            <HStack>

              <Box m='10px'>
                <Icon as={src} boxSize={8} />
              </Box>

              <VStack flexBasis={1} textAlign='left' align='flex-start' >
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

      <UnorderedList px={5} >
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


  const LeftWholeWorkspace = () => {
    const [scrollBehavior, setScrollBehavior] = React.useState('inside')
    return (
      <TableContainer w='95%' gap='10px' maxWidth='100%' border='2 px solid red' borderColor='#FED7E2' overflowY='auto' scrollBehavior={scrollBehavior} >
        <Table variant='simple' colorScheme='pink' rowGap='50px' border='2 px solid red' borderColor='#FED7E2' overflowY='auto' scrollBehavior={scrollBehavior}  >
          <TableCaption>Missing something? Tell us what you’d like to see on your Home page.</TableCaption>
          <Thead>
            <Tr>
              <Th>Inbox</Th>
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

        </Table>
      </TableContainer>
    )

  }

  const Rightwholeworkspace = () => {

    return (
      <TableContainer w='90%' gap='10px' maxWidth='100%' overflowX='hidden' border='2 px solid red' borderColor='#FED7E2' overflowY='auto' >
        <Table variant='simple' colorScheme='pink' rowGap='50px' border='2 px solid red' borderColor='#FED7E2'  >
          <TableCaption> <Heading size='md' >No tasks to work on</Heading>
            Here you’ll see tasks assigned to you.</TableCaption>
          <Thead>
            <Tr>
              <Th>Assigned to me</Th>
            </Tr>
            <Divider />
          </Thead>
          <Tbody>

            {task && task.length != 0 ? (task.map(() => {
              <Addtakstoworkspace />
            })


            ) : (
              <Tr  >
                <Center mt={110}>

                  <Icon as={FcCollaboration} boxSize={200} mt={50} />

                </Center>
              </Tr>
            )
            }




          </Tbody>

        </Table>
      </TableContainer>

    )

  }





  const Wholeworksapce = ({ isOpen, onClose, firstField }) => {


    return (
      <Box>
        <SimpleGrid w='90%' margin='auto' gap='20px' wrap='wrap' minChildWidth='300px' >

          <GridItem boxShadow='2xl' p='6' rounded='md' bg='white'   >

            <LeftWholeWorkspace />

          </GridItem>
          <GridItem boxShadow='2xl' p='6' rounded='md' bg='white'>

            <Rightwholeworkspace />
          </GridItem>


        </SimpleGrid>

      </Box>

    )


  }

  const Addtakstoworkspace = ({ nameofproject, nameoftasks, statusoftask }) => {


    return (
      <>
        <Heading>{nameofproject}</Heading>

        <Textarea placeholder='Click to add the description'>

        </Textarea>

        <Box>
          <Grid gridTemplateColumns='0.25fr 2fr 1fr'>
            <GridItem>
              <Checkbox />
            </GridItem>
            <GridItem>
              {nameoftasks}
            </GridItem>
            <GridItem>
              {statusoftask}
            </GridItem>
          </Grid>


        </Box>


      </>



    )

  }



  return (
    <div>
      <Dashboardnavbar />

      <Grid  >
        <Wholeworksapce wrap='wrap' />
      </Grid>
    </div>
  )
}

