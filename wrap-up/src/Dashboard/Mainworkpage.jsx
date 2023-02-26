import { Box, Container, GridItem, SimpleGrid,Flex } from '@chakra-ui/react'
import React from 'react'

import LeftWholeWorkspace from './LeftWholeWorkspace'
import NavbarDashboard from './NavbarDashboard'
import Rightwholeworkspace from './Rightwholeworkspace'


const Mainworkpage = () => {
  return (
    <Box>
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
    </Box>
  )
}

export default Mainworkpage
