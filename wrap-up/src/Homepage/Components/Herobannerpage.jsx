import { Container,Image,Box, VStack, Heading, Stack,Spacer,Text,Button, HStack, AspectRatio, Flex, Link,Icon, Divider } from '@chakra-ui/react'
import React from 'react'
import {ArrowForwardIcon} from '@chakra-ui/icon'
import {FcRight} from "react-icons/fc"

const Herobannerpage = () => {
 

 const AfterherobannerPage=({backcolor,headss,paragraph,spans,linktext,source,color,rowoppo=false  })=>{

return(
<Box backgroundColor= {backcolor} >

<Flex   w='100%' h='600px' zIndex={8} position='relative' 
 >

<Stack justifyContent='space-evenly'  direction={rowoppo?'row-reverse':'row'}  >
{/* //  direction={{xl:'row',base:'column-reverse',md:'column-reverse'}} >  */}
<VStack color={color} w='40%' align='flex-start' gap='15px' ml='10px' my='80px' p='50px' >
<Text> {spans} 
</Text>
<Heading>{headss} </Heading>
<Text>
 {paragraph}
 </Text>

<Link to='#' > {linktext} <Icon as={FcRight} />  </Link>
</VStack>

<Box w='50%' alignContent='flex-end' >
<Image  w='94%' objectFit='cover' src={source}  />

</Box>
</Stack>

</Flex>
</Box>
)


 }

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  return (
    <Flex  direction='column' gap='50px' >
    <Container m='0' mb='450px' >
   <Box  w='88%' h='80vh' margin='auto' position='absolute'  left="30" right='0' top='-20' zIndex={9}
 
  backgroundImage={{xl:"url('https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=100,width=1520/tp/storage/uploads/5a479da8-1540-4e2e-92a4-102095cb6f8e/rebrand-hero-illustration-main-home-2x.png')",md:''}}
  bgPosition="center"  bgRepeat="no-repeat" 

  >
     
 

  <VStack position='relative'  top="50%" left="3%"  zIndex={2} >
<Heading>Remove barriers, find clarity <br /> exceed goals</Heading>
<Text>Anything is possible with the most powerful work management software at your fingertips.</Text>
<Spacer/>
<Button colorScheme='teal' size='lg'>
   Log in
  </Button>
<Spacer/>
<Text>TRUSTED BY 20,000+ ORGANIZATIONS WORLDWIDE</Text>
 <Spacer/>

<HStack h='4cm'   zIndex={5} gap='20px' wrap='wrap' >
 
 <Image  src='https://web-static.wrike.com/tp/storage/uploads/3b19367a-9020-408b-8af7-5e89773b8d4b/1440-logoroll-logo-google.svg' />

 <Image src='https://web-static.wrike.com/tp/storage/uploads/3b19367a-9020-408b-8af7-5e89773b8d4b/1440-logoroll-logo-lyft.svg' />

 <Image src='https://web-static.wrike.com/tp/storage/uploads/473c0f49-59e8-4422-89d7-184c44f362cf/1440-logoroll-logo-nickelodeon.svg' />
 
 <Image src='https://web-static.wrike.com/tp/storage/uploads/17e81db2-0802-47a7-8037-8cb11d166299/1440-logoroll-logo-syneos.svg' />
 <Image src='https://web-static.wrike.com/tp/storage/uploads/1440-logoroll-logo-siemens.svg' />
 <Image src='https://web-static.wrike.com/tp/storage/uploads/1440-logoroll-logo-snowflake.svg' />
 <Image src='https://web-static.wrike.com/tp/storage/uploads/3b19367a-9020-408b-8af7-5e89773b8d4b/1440-logoroll-logo-oglivy.svg' />


</HStack>
</VStack>

   </Box>




  
   </Container>
   <Divider/>
   <AfterherobannerPage backcolor='#181f38' headss='Wall to Wall, We Do it All' paragraph='Wrike Lightspeed, the latest innovation of Wrike’s platform, makes it easy for every team to find the fastest way to productivity by working as one. Tap into the most powerful work management solution without tradeoffs and experience
 configurability, scalability, and ease of use — all at once.' color='white'
   spans='WRIKE LIGHTSPEED IS HERE'linktext='Learn more'source='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=615,dpr=2/tp/storage/uploads/18695481-7007-4fb2-86b9-e837ec726ede/lightspeed-promo-analyze-2x.png'  />
<AfterherobannerPage  source='https://web-static.wrike.com/tp/storage/uploads/772ccef9-5cc8-498d-81d3-c4dae398dfb3/product-screenshot-cit.png' 
spans='NEW RELEASE' linktext='Learn more' color='black' rowoppo={true}
headss='Work Your Way With Custom Item Types' paragraph="Mirror your team business processes in Wrike with terminology that best reflects your team's culture and work style.Meet the specific and unique needs of your team by customizing work types, workflows, automated processes, and more — making work easy to recognize and understand. Best of all, automating your daily routines and team-specific workflows is easier than ever with our no-code business logic tools."/>

<AfterherobannerPage  backcolor='white' headss='Share your Wrike success' paragraph='Join work management enthusiasts around the world as a Wrike Ambassador. Celebrate your achievements in Wrike, raise your company profile, and share your success by promoting our award-winning work management platform to other teams.'
spans='WRIKE AMBASSADORS' linktext='Learn more' source='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=615,dpr=2/tp/storage/uploads/f66b3607-aed9-40c4-b701-c0706207053a/rebrand-promo-illustration-wrike-ambassador-2x.png'
color='black'
/>


<AfterherobannerPage  backcolor='white' headss='Without a single source of truth for work, it could cost you' paragraph='New research from Wrike sheds light on the hidden cost of modern work complexities caused by low visibility, wasted time, project delays, and employee churn. The results are staggering.'
spans='' linktext='Download free report' source='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=615,dpr=2/tp/storage/uploads/1f3923ce-f80d-4dec-8b66-904df15a9752/promo-ebook-dark-matter-of-work-light-theme-2x.png'
color='black'  rowoppo={true}
/>
   </Flex>
  )
}

export default Herobannerpage