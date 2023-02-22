import { Text,Flex,Image, Box, HStack,Avatar,TagLabel,Tag, SimpleGrid, GridItem,Heading,ListItem,UnorderedList, color, Divider, Spacer, VStack } from '@chakra-ui/react'
import React,{useEffect, useState} from 'react'
import{FaInstagram,FaTwitter,FaFacebookF,FaLinkedinIn,FaYoutube} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import { Icon } from '@chakra-ui/react'
const Footer = () => {
const[timerslide,settimerslide]=useState('-20')
const SlideshowofComapnycomponents =()=>{

   return(
    <Tag size='lg' colorScheme='red' borderRadius='full'>
  <Avatar
    src='https://bit.ly/sage-adebayo'
    size='xs'
    name='Segun Adebayo'
    ml={-1}
    mr={2}
  />
  <TagLabel>Segun</TagLabel>
</Tag>
   ) 
}
useEffect(()=>{

},[])



  const Slideshowofcompany=()=>{
const timersetslide=()=>{
setInterval(() => {
    settimerslide((time)=>{
        if(timerslide==-1120){
            timerslide=-20
        }
return time-2;
    })

        }, 1000)
}


return(
<HStack style={{transform: `translate3d(${timerslide}px, 0px, 0px)`}} >
<SlideshowofComapnycomponents/>
<SlideshowofComapnycomponents/>
<SlideshowofComapnycomponents/>
<SlideshowofComapnycomponents/>
<SlideshowofComapnycomponents/>
<SlideshowofComapnycomponents/>
<SlideshowofComapnycomponents/>
<SlideshowofComapnycomponents/>
<SlideshowofComapnycomponents/>
<SlideshowofComapnycomponents/>
<SlideshowofComapnycomponents/>
<SlideshowofComapnycomponents/>
<SlideshowofComapnycomponents/>
<SlideshowofComapnycomponents/>
<SlideshowofComapnycomponents/>


</HStack>


)




  }
  
  
  const Footerrowone=()=>{

const footeronelistone=['Product tour', 'Pricing','Templates,Apps & Integrations','Task management','Gantt charts','Wrike Status','Security','CA Notice at Collection','API']
const footeronelisttwo=['All Teams','Marketing','Creative','Project Management','Product Development','Business Operations', 'Professional Services','Students']
const footeronelistthree=['Help Center','Community','Webinars','Interactive Training','Support','Google project management', 'tools']
const footeronelistfour=['About Us','Careers','Our Customers','Blog','Events','Newsroom','Partner Program','User Conference','Contact Us']
const footeronelistfive=['Project Management Guide','Professional Services Guide','Kanban Guide','Agile Guide','Remote Work Guide','Collaborative Work Management Guide']
const footeronelistsix=[ 'Return to Work Guide','Marketing Project Management Guide','Scrum Guide','Product Management Guide','Digital Marketing Guide','Go-to-Market Guide']
const footeronelistseven=['What Is the Scaled Agile Framework? SAFe Explained','How to Leverage the 30-60-90 Day Plan for New Hires','Omnichannel Marketing Ultimate Guide','How to Take Better Meeting Notes','What Is Wrike AI?','Top Priorities for Marketing Success During the 2023 Recession (Part Two)','Best Project Management Software for a Small Business: Ultimate Guide']
return(
<Box bg='#0c3245' color='white' p='50px' textAlign='left' >

<SimpleGrid columns='4' columnGap='50px' row='2' rowGap='70px' >
<GridItem colSpan={1} >
<UnorderedList listStyleType='none'  >
<Heading size='md'  pb='4' pl='2' >Product</Heading>

{ footeronelistone.map((el)=> <ListItem p='5px' gap='10px'   _hover={{color:'cyan',textDecoration:'underline'}}>{el}</ListItem> ) }

</UnorderedList>
</GridItem>

<GridItem colSpan={1}>
<UnorderedList listStyleType='none' >
<Heading size='md'  pb='4' pl='2' >Solutions</Heading>

{ footeronelisttwo.map((el)=> <ListItem p='5px' gap='10px'   _hover={{color:'cyan',textDecoration:'underline'}}>{el}</ListItem> ) }

</UnorderedList>
</GridItem>

<GridItem colSpan={1}>
<UnorderedList listStyleType='none' >
<Heading size='md'  pb='4' pl='2' >Resources</Heading>

{ footeronelistthree.map((el)=> <ListItem p='5px' gap='10px'   _hover={{color:'cyan',textDecoration:'underline'}}>{el}</ListItem> ) }

</UnorderedList>
</GridItem>

<GridItem colSpan={1}>
<UnorderedList listStyleType='none' >
<Heading size='md'  pb='4' pl='2' >Company</Heading>
{ footeronelistfour.map((el)=> <ListItem p='5px' gap='10px'   _hover={{color:'cyan',textDecoration:'underline'}}>{el}</ListItem> ) }

</UnorderedList>
</GridItem>


<GridItem colSpan={1} >
<UnorderedList listStyleType='none' >
<Heading size='md'   pb='4' pl='2' >Guides</Heading>
{ footeronelistfive.map((el)=> <ListItem p='5px' gap='10px'   _hover={{color:'cyan',textDecoration:'underline'}}>{el}</ListItem> ) }

</UnorderedList>

</GridItem>

<GridItem colSpan={1} mt='40px' >
<UnorderedList listStyleType='none' >

{ footeronelistsix.map((el)=> <ListItem p='5px' gap='10px'   _hover={{color:'cyan',textDecoration:'underline'}}>{el}</ListItem> ) }

</UnorderedList>

</GridItem>

<GridItem colSpan={2} >
<UnorderedList listStyleType='none' >
<Heading size='md'   pb='4' pl='2' >Latest in the Blog</Heading>
{ footeronelistseven.map((el)=> <ListItem p='5px' gap='10px'   _hover={{color:'cyan',textDecoration:'underline'}}>{el}</ListItem> ) }

</UnorderedList>

</GridItem>



</SimpleGrid>
</Box>
)


  }
const Footerrowlastcontainer=()=>{


    return(
        <Box  bg='#0c3245' color='white' textAlign='left'>
        <Flex w='95%' m='auto' justifyContent='space-between' p='10px'>
<HStack w='20%'>
    <Box><Image src='https://web-static.wrike.com/tp/static/assets/img/footer/apple_en.svg'/></Box>
  
    <Box   ><Icon boxSize={12} p={2}  as={FcGoogle} /> </Box>
</HStack>

<HStack w='20%' m='auto' justify='space-around' align='center' >
<Icon as={FaInstagram} />
<Icon as={FaTwitter} />
<Icon as={FaFacebookF} />
<Icon as={FaLinkedinIn} />
<Icon as={FaYoutube} />


</HStack>
<VStack>
    <Text>©2006-2023 Wrike, Inc. All rights reserved. Patented.
    </Text>
    <Text>Privacy Policy. Terms of Service. Cookie Preferences</Text>
</VStack>

        </Flex>
        </Box>
    )
}
  
  
  
  
  
  
    return (
    <div>

{/* <Slideshowofcompany/> */}
<Footerrowone />
<Divider colorScheme='whiteAlpha' variant='dashed'  />
<Footerrowlastcontainer/>
    </div>
  )
}

export default Footer