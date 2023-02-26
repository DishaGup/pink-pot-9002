import React, {  useContext} from 'react'
import {
    Table, Thead,  Tbody,  Tr, Th, Td, TableCaption, TableContainer, Divider } from '@chakra-ui/react'
  import {  FcCollaboration} from 'react-icons/fc'
  import { Icon } from '@chakra-ui/react'
  import { Button, Center,  Heading,  Checkbox} from '@chakra-ui/react'
   
import { AuthContext } from '../RoutesPage/AuthContextProvider'

 export default  function Rightwholeworkspace (){

const{visibleTodos,task,setShowActive,showActive,mainpageinfo,handledelete,handletoggle}=useContext(AuthContext)

const{email,firstName,lastName,project} =mainpageinfo
const choosecolor=['blue','pink','purple','cyan','green','whatsapp','red','bloodymoon','brown','crimson','peach','facebook','teal','twitter','peachpuff','yellow','violet','snow','gray','slate','telegram']

    return (
      <TableContainer w='full' gap='20px'  overflowX='hidden'  overflowY='auto' boxShadow='2xl' borderRadius={8}>
        <Table variant='simple' colorScheme='pink' rowGap='50px'  >
          <TableCaption   > <Heading size='md' >{ task.length!=0?`${project} project `:' No tasks to work on'}</Heading>
            Here you’ll see tasks assigned to you.</TableCaption>
          <Thead border='2 px solid red' borderColor='#FED7E2'>
            <Tr>
              <Th fontWeight='700' fontSize='18px' >Assigned to me</Th>
            </Tr>
            <Divider />
            <Tr>
      <Checkbox colorScheme='green'   checked={showActive} 
          onChange={e => setShowActive(e.target.checked)}  >
      Show only active todos 
  </Checkbox>
      </Tr>
          </Thead>
          <Tbody rowGap={5} fontSize='18px' >
           {task && task.length != 0 ? (task.map((el) => (
      <>
             <Tr  rowGap='10px'gap='10px' borderBottom='1px'  borderBottomColor='orange.400'  key={el.id} > 
             <Td  fontWeight='600' textDecoration={el?.status?'line-through':''}    color={`${choosecolor[Math.floor(Math.random()*20)]}`} >{el?.typetask}</Td>
             <Td bg= {el.priority==='high'?'red.200':el.priority==='low'?'green.200':'cream.300'}    borderRadius={5} w='fit-content'    >{el?.priority}</Td>
             <Td onClick={()=>handletoggle(el.id)} >{el?.status?'completed':'Incompleted'}</Td>
             <Td  w='fit-content' ><Button _hover={{bg:'red.300'}}  bg='red.500'  borderRadius={15} color='white'  onClick={()=>handledelete(el.id)} >  Remove</Button> </Td>
            
         </Tr>
             
              </> 
           ))


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