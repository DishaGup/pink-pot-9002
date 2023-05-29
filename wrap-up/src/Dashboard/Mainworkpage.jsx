import { Box, Container, GridItem, SimpleGrid,Flex,Grid } from '@chakra-ui/react'
import React,{useContext, useEffect} from 'react'

import LeftWholeWorkspace from './LeftWholeWorkspace'
import NavbarDashboard from './NavbarDashboard'
import Rightwholeworkspace from './Rightwholeworkspace'
import { AuthContext } from '../RoutesPage/AuthContextProvider'


const Mainworkpage = () => {



  return (
  
    <div border="2px dashed #ccc" p={4} >
 
      <Box mb={8}>
        <NavbarDashboard  />
        </Box>
    <Flex direction={{base:'column-reverse',xl:'row'}}  w='95%' m='auto' gap={5}   autoFlow>
  
<GridItem>
<LeftWholeWorkspace/>
</GridItem>

<GridItem>
<Rightwholeworkspace/>
</GridItem>
    </Flex>
    </div> 
  )
}

export default Mainworkpage
