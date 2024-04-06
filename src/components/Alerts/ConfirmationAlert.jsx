import React from 'react';
import { useDisclosure, Alert, AlertIcon, Box, CloseButton, Button, AlertTitle, AlertDescription } from '@chakra-ui/react';

function ConfirmationAlert() {
  const { isOpen: isVisible, onClose } = useDisclosure({ defaultIsOpen: true });

  return (
    <>
      {isVisible && (
        <Alert   
        status='success'
          variant='subtle'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          height='100px'
          width="100vw"
        >
          <AlertIcon />
          <Box>
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>Your Booking is Confirmed</AlertDescription>
          </Box>
          <CloseButton
            alignSelf='flex-start'
            position='relative'
            right={-1}
            top={-1}
            onClick={onClose}
          />
        </Alert>
      )}
    </>
  );
}

export default ConfirmationAlert;
