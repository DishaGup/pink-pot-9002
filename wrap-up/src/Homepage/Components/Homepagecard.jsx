import React from 'react'
import { AspectRatio, Box, Heading, Icon, VStack,Flex,Text,Link, SimpleGrid, Spacer,Center } from '@chakra-ui/react'
import {MdOutlineSchool} from 'react-icons/md'
import {TbArrowNarrowRight,TbSpeakerphone,TbTemplate} from 'react-icons/tb'
import {SiStartrek,SiWechat} from 'react-icons/si'
import {GiCommercialAirplane} from 'react-icons/gi'
const Homepagecard = () => {
 
 const Cardscomponent=({headicons,head,detail,linktext})=>{

return(
<Box _hover={{bgColor:'#63171B',color:'white'}}  textAlign='left' bgColor='#FFFAF0' p='50px' borderRadius={50} >
<VStack  align='flex-start' gap='3px' >

<Icon  as={headicons} boxSize={10} />

<Heading>{head}</Heading>
<Text>{detail}</Text>
<Flex>
    <Link>
  {linktext}
    </Link>
    <Spacer/>
    <Icon as={TbArrowNarrowRight} />
</Flex>

</VStack>



</Box>

)

 }
 
 
 



 
 
    return (
    <div>
        <Center>
     <VStack g={2}>
        <Heading>Become a Wrike Expert</Heading>
        <Text>Want to deliver more of your best work? Learn how to effectively use all that Wrike can offer you and your team.</Text>
        </VStack>   
        </Center>



<SimpleGrid  columns={3}  w='90%' margin='auto' gap='25px' m={10} >
<Cardscomponent    headicons={MdOutlineSchool} head='Wrike Discover' linktext='Start a course today' detail='Learn the basics or our advanced features — and everything in between — in our online courses and certifications.'  />
<Cardscomponent    headicons={SiStartrek} head='Getting Started Guide' linktext='Read more' detail='Not a visual learner? Our Getting Started Guide has all you need to be productive in Wrike with both videos and text explanations.'  />
<Cardscomponent    headicons={GiCommercialAirplane} head='Best Practices' linktext='Learn more' detail='Looking for a step-by-step to start off your project management right? Our best practices guide is just what you need.
'  />
<Cardscomponent    headicons={SiWechat} head='Help Center' linktext='Check it out
' detail='Get support, find tutorials, and ask questions of the Wrike community in our Help Center, available anytime.'  />
<Cardscomponent    headicons={TbSpeakerphone} head='Wrike Webinars' linktext='Watch a session' detail='Learn best practices from the experts and from customers just like you in our free webinars, available both live and on‑demand.
'  />
<Cardscomponent    headicons={TbTemplate} head='Templates' linktext='See what’s available' detail='Get tried-and-true setups in Wrike with a click: go Agile, better manage events, onboard employees, and more — all for free.
'  />






</SimpleGrid>

    </div>
  )
}

export default Homepagecard