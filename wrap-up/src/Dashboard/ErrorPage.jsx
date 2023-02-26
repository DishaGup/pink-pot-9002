import React from 'react'
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const ErrorPage = () => {


  return (
    <Box textAlign="center" py={10} px={6}  w='100vh' mb={80} mt={30}  h='15cm'  bgColor={'whiteAlpha.900'} >
    <Heading
      display="inline-block"
      as="h2"
      size="2xl"
      bgGradient="linear(to-r, teal.400, teal.600)"
      backgroundClip="text">
      404
    </Heading>
    <Text fontSize="18px" mt={3} mb={2}   w='100vh' bgColor={'whiteAlpha.900'}   >
      Page Not Found
    </Text>
    <Text color={'gray.500'} mb={6}  w='100vh' bgColor={'whiteAlpha.900'}>
      The page you're looking for does not seem to exist
    </Text>
<Link to='/' >  <Button
      colorScheme="teal"
      bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
      color="white"
      variant="solid"
      w='100vh' bgColor={'whiteAlpha.900'}>
      Go to Home
    </Button></Link>
   
  </Box>






  )
}

export default ErrorPage