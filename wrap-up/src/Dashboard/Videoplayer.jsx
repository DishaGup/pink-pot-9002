import React from 'react'
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader,
    ModalFooter, ModalBody, AspectRatio,ModalCloseButton} from '@chakra-ui/react'
const Videoplayer = ({isOpen,onClose,onOpen}) => {


    const BasicUsage=()=>{
     
      
        return (
          <>
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                
<AspectRatio maxW='560px' ratio={1}>
  <iframe
    title='naruto'
    src='https://www.youtube.com/embed/QhBnZ6NPOY0'
    allowFullScreen
  />
</AspectRatio>

                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      }





  return (
    <>
      { <BasicUsage/ >  }
  </> 
  )
}

export default Videoplayer