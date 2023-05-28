import React, { useContext, useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
// import { DndProvider } from 'react-dnd/dist/esm';

import {
  Box,
  Table,
  Text,
  Link,
  Image,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  CloseButton,
  HStack,
  VStack,
  UnorderedList,
  ListItem,
  useDisclosure,
  Button,GridItem, SimpleGrid,
} from '@chakra-ui/react';
import {
  FcTodoList,
  FcPhoneAndroid,
  FcContacts,
  FcSmartphoneTablet,
} from 'react-icons/fc';
import { Icon } from '@chakra-ui/react';
import Rightwholeworkspace from './Rightwholeworkspace';
import NavbarDashboard from './NavbarDashboard';

const LeftWholeWorkspace = () => {
  const Addsonleftworkspace = ({ src, textss, badgetext, colors, childrens }) => {
    const { isOpen: isVisible, onClose, onOpen } = useDisclosure({ defaultIsOpen: true });

    return (
      <>
        {isVisible && (
          <Box bgColor={colors} borderRadius={8} wrap='wrap' m='10px' p='10px' color='black.700' textColor='blackAlpha.700'>
            <CloseButton size='md' onClick={onClose} />
            <HStack>
              <Box m='10px'>
                <Icon as={src} boxSize={8} />
              </Box>
              <VStack flexBasis={1} textAlign='left' align='flex-start' color='black.700'>
                <Text>{textss}</Text>
                {childrens}
                <Button variant='outline' p={1} borderRadius={7}>
                  {badgetext}
                </Button>
              </VStack>
            </HStack>
          </Box>
        )}
      </>
    );
  };

  const LeftWorkspacetoast = () => {
    return (
      <UnorderedList px={5}>
        <ListItem>You’re assigned a new task or project</ListItem>
        <ListItem>You’re @mentioned by someone else</ListItem>
        <ListItem>You’re given access to some new info</ListItem>
        <ListItem>When you need to be in the loop</ListItem>
        <Link>Read more about inbox</Link>
      </UnorderedList>
    );
  };

  return (
    <DraggableTableContainer>
      <Table variant='simple' colorScheme='pink' rowGap='50px' overflowY='auto'>
        <TableCaption border='2 px solid red' borderColor='#FED7E2'>
          Missing something? Tell us what you’d like to see on your Home page.
        </TableCaption>
        <Thead>
          <Tr>
            <Th fontWeight='700' fontSize='18px'>
              Inbox
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Addsonleftworkspace src={FcTodoList} colors='#C6F6D5' textss='Hello and welcome. Here is an example tasks you might find helpful.' />
          </Tr>
          <Tr>
            <Addsonleftworkspace
              src={FcContacts}
              childrens={<LeftWorkspacetoast />}
              colors='#EDFDFD'
              textss='Inbox helps you stay updated. You’ll get notifications when:'
              badgetext='Read more about inbox'
            />
          </Tr>
          <Tr>
            <Addsonleftworkspace
              colors='#F0FFF4'
              textss='Get our mobile app to see all notifications directly on your phone.'
              badgetext='Try mobile'
              src={FcPhoneAndroid}
            />
          </Tr>
          <Tr>
            <Addsonleftworkspace
              colors='#E9D8FD'
              textss='Try our integrations to make work easier and connect with your team better'
              badgetext='Explore integrations'
              src={FcSmartphoneTablet}
            />
          </Tr>
        </Tbody>
      </Table>
    </DraggableTableContainer>
  );
};

export const DraggableTableContainer = ({ children }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'TABLE_CONTAINER' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag}>
      <TableContainer
        w='content-fit'
        gap='10px'
        maxWidth='100%'
        p={3}
        overflowY='auto'
        zIndex={-1}
        borderRadius={8}
        border='2px'
        borderColor='#FED7E2'
        opacity={isDragging ? 0.5 : 1}
      >
        {children}
      </TableContainer>
    </div>
  );
};

const Mainworkpage = () => {
 // const { handlefetchuserdetails } = useContext(AuthContext);
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

//   useEffect(() => {
//     handlefetchuserdetails();
//   }, []);

  return (
    <DndProvider backend={HTML5Backend} debugMode={true}>
      <div ref={drop} border='2px dashed #ccc' p={4} backgroundColor={isOver ? 'lightgray' : 'transparent'}>
        <Box mb={8}>
          <NavbarDashboard />
        </Box>
        <SimpleGrid minChildWidth='43%' w='95%' m='auto' gap={8} wrap='wrap' autoFlow>
          <GridItem>
            <LeftWholeWorkspace />
          </GridItem>
          <GridItem>
            <Rightwholeworkspace />
          </GridItem>
        </SimpleGrid>
      </div>
    </DndProvider>
  );
};

export default Mainworkpage;
