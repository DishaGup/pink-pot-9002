import { Box, Container, GridItem, SimpleGrid,Flex } from '@chakra-ui/react'
import React,{useContext, useEffect} from 'react'
import { useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import LeftWholeWorkspace from './LeftWholeWorkspace'
import NavbarDashboard from './NavbarDashboard'
import Rightwholeworkspace from './Rightwholeworkspace'
import { AuthContext } from '../RoutesPage/AuthContextProvider'


const Mainworkpage = () => {


  const{handlefetchuserdetails}=useContext(AuthContext)
  const [{ isOver }, drop] = useDrop({
    accept: 'TABLE_CONTAINER', 
    drop: (item, monitor) => {
      // Handle the dropped item
      console.log('Dropped item:', item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  

useEffect(()=>{
  handlefetchuserdetails()
},[])



  return (
    <DndProvider backend={HTML5Backend} debugMode={true}>
    <div ref={drop} border="2px dashed #ccc" p={4} backgroundColor={isOver ? 'lightgray' : 'transparent'}>
 
      <Box mb={8}>
        <NavbarDashboard  />
        </Box>
    <SimpleGrid minChildWidth='43%' w='95%' m='auto' gap={8} wrap='wrap'   autoFlow>
<GridItem>
<LeftWholeWorkspace/>
</GridItem>
<GridItem>
<Rightwholeworkspace/>
</GridItem>
    </SimpleGrid>
    </div> </DndProvider>
  )
}

export default Mainworkpage
