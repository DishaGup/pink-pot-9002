import React, {  useContext,useEffect} from 'react'
import {
    Table, Thead,  Tbody,  Tr, Th, Td, TableCaption, TableContainer, Divider,Text } from '@chakra-ui/react'
  import {  FcCollaboration} from 'react-icons/fc'
  import { Icon } from '@chakra-ui/react'
  import {Link} from 'react-router-dom'
  import { Button, Center,  Heading,  Checkbox} from '@chakra-ui/react'
   
import { AuthContext } from '../RoutesPage/AuthContextProvider'

 export default  function Rightwholeworkspace (){

const{colorMode,visibleTodos,task,setShowActive,handlefetchtask,showActive,mainpageinfo,handledelete,handletoggle}=useContext(AuthContext)

const{firstname,lastname,projectname,projectdesc} =mainpageinfo
const choosecolor=['blue','pink','purple','cyan','green','whatsapp','red','bloodymoon','brown','crimson','peach','facebook','teal','twitter','peachpuff','yellow','violet','snow','gray','slate','telegram']
 
useEffect(()=>{
  handlefetchtask()
  },[])
  
    return (
      <TableContainer w='full' gap='20px'  minHeight={'5rem'} overflowX='auto'  overflowY='auto' boxShadow='2xl' borderRadius={8}>
        <Table variant='simple' colorScheme='pink' rowGap='50px'  >
          <TableCaption  mt='80px'  >
            <Heading size='md' >{ projectname?`${projectname} project `:' No tasks to work on'}</Heading> 
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
           {
         
           


           visibleTodos && visibleTodos.length >0 ? (visibleTodos.map((el) => (
   
             <Tr   key={el._id} > 
            <Link  to={`/workpage/single/${el._id}`} >     <Td  fontWeight='600' textDecoration={el?.status?'line-through':''}    color={`${choosecolor[Math.floor(Math.random()*20)]}`} >{el?.title}</Td>
            </Link>
              <Td bg= {el.priority==='high'?'red.200':el.priority==='low'?'green.200':'cream.300'}    borderRadius={5} w='fit-content'    >{el?.priority}</Td>
             <Td onClick={()=>handletoggle(el._id,el.status)} >{el?.status?'completed':'Incompleted'}</Td>
             <Td  w='fit-content' ><Button _hover={{bg:'red.300'}}  bg='red.500'  borderRadius={15} color='white'  onClick={()=>handledelete(el._id)} >  Remove</Button> </Td>
           
         </Tr>
       
            
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