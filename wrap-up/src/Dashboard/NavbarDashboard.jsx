import React, { useState, useRef, useContext,useEffect} from 'react'
import axios from 'axios'
import {
    Box, Text, Link, Image, Divider, HStack, Avatar, VStack, UnorderedList, ListItem, Badge, Drawer, FormLabel, InputGroup, Select, Textarea, InputLeftAddon, InputRightAddon,
    DrawerBody, Modal, Menu, MenuButton, MenuList, MenuItem,MenuDivider,ModalOverlay,
    ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,DrawerFooter,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton, useBoolean
  } from '@chakra-ui/react'
  import {useNavigate} from 'react-router-dom'
  import { FcStart, FcTemplate,  FcAddRow, FcHome, FcAdvertising, FcSettings } from 'react-icons/fc'
  import { Icon } from '@chakra-ui/react'
  import { Button, Center, Container, Flex, Heading, Input, Spacer, Tooltip, useDisclosure, Stack, SimpleGrid, Checkbox, FormControl,FormErrorMessage,
    FormHelperText,ButtonProps,useColorMode} from '@chakra-ui/react'
    import {  BsChevronDown, BsPlusCircle,BsSun, BsMoonStarsFill } from "react-icons/bs"
    import { FaUserPlus, FaPencilAlt } from 'react-icons/fa'
    import { BiCube } from 'react-icons/bi'
    import { GiHamburgerMenu } from "react-icons/gi"
    import { AuthContext } from '../RoutesPage/AuthContextProvider'
import Contact from './Contact'
import UserProfileEdit from './UserProfileEdit'
import Videoplayer from './Videoplayer'
const NavbarDashboard = (props) => {
    const {handlefetchtask,isAuth,logoutUser,visibleTodos,task,setShowActive,handlesubmittask,mainpageinfo} =useContext(AuthContext)
    // const [task, settask] = useState([])
    const { isOpen: isdashboard, onOpen: opendash, onClose } = useDisclosure()
    const { isOpen: iscontact, onOpen: opencontact, onClose:closecontact } = useDisclosure()
    //const[contact,setcontact]=useBoolean()
   
  
    //console.log(mainpageinfo)
    
    const navigate=useNavigate()
    const [typetask, settypetask] = useState('')
    const firstField = React.useRef()
    const [priority,setpriority]=useState('')
    const [desc,setdesc]=useState('')
    const isError = task === ''
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen:isprofile , onOpen:openprofile, onClose:closeprofile } = useDisclosure()
    const { isOpen:isvideo, onOpen:openvideo, onClose:closevideo } = useDisclosure()
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
                      <Icon as={FcStart} boxSize={8} /> <Link w='90%'><Button  onClick={openvideo} onClose={closevideo}  w='100%'>Start</Button></Link>
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
 
      const{firstname,lastname,projectname} =mainpageinfo
    
    const { isOpen: istaskhere, onOpen: opentask, onClose: closetaskhere } = useDisclosure()
    return (
        <>
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
          {colorMode === 'light' ? <BsMoonStarsFill  boxsize={8} /> : <BsSun   boxsize={8}/>}
        </Button> 
            <Tooltip label='Search tasks,projects,files and more' >
              <Input type='search' placeholder='Search' />
            </Tooltip>
            <Tooltip label='Your assistant' >
              <Icon  onClick={opencontact} />
            </Tooltip>

{ iscontact && <Contact  onOpen={opencontact} onClose={closecontact} isOpen={iscontact}    />

}
{
  isvideo && <Videoplayer   onOpen={openvideo} onClose={closevideo} isOpen={isvideo}       />
}


         
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
          { mainpageinfo && mainpageinfo.length>=1 &&<MenuList>
              <MenuItem>
                <HStack>
                  <Avatar name={`${firstname} ${lastname}`}  ></Avatar>
                  <VStack mx={6}>
                    <Text size='19px' fontWeight={500} >{`${firstname} ${lastname}`}</Text>
                    <Text>status</Text>
                  </VStack>
                </HStack>
              </MenuItem>
              <MenuDivider />
              <MenuItem>{`${firstname} ${lastname} 's team`}</MenuItem>
              <MenuItem  onClick={openprofile}  >Settings</MenuItem>
              <MenuItem>Apps and Integration</MenuItem>
              <MenuItem>Upgrade</MenuItem>
              <MenuItem>Help</MenuItem>
              <MenuDivider />
              <MenuItem onClick={()=>{
                localStorage.removeItem("token") 
                navigate('/')
              }}  >
                Log Out</MenuItem>

            </MenuList>
            }            </Menu>


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
<option value="high">High</option>
<option value="low">Low</option>
<option value="None">No</option>

</Select>
</FormControl>
<FormControl style={{margin:'5px'}} >
                  <FormLabel>Task Description</FormLabel>
                  <Input type='text' value={desc} onChange={(e) => setdesc(e.target.value)}/>
              
                </FormControl>

              </ModalBody>
              <ModalFooter>

              <FormControl  colorScheme='teal' as='button' bgColor='gray.400' m={8} onClick={()=>handlesubmittask(typetask,priority,desc)} >
  <Input type='submit' value='Add task' />
</FormControl>
                <Button onClick={closetaskhere}>Close</Button> 
              </ModalFooter>
            </ModalContent>
          </Modal>

        </Flex>

{
  isprofile && <UserProfileEdit  isOpen={isprofile} onOpen={openprofile}  onClose={closeprofile}       />
}


      </Box>
   </> )

}

export default NavbarDashboard