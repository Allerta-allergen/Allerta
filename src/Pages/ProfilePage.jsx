import React from 'react';
import { Box, Heading, Button, Divider, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {

    const navigate = useNavigate(); // Move useNavigate inside the component

  const handleModifyQuestionnaire = () => {
    // Logic to modify questionnaire
    // This is just a placeholder
    alert('Questionnaire modified!');
  };

  const handleLogout = () => {
    // Logic to logout
    // This is just a placeholder
    alert('Logged out!');
    setTimeout(() => {
        navigate('/login');
      }, 1000);
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="xl">Profile Settings</Heading>
      <Divider my={6} />
      <FormControl mb={4}>
        <FormLabel>Modify Questionnaire</FormLabel>
        <Textarea placeholder="Enter modified questionnaire here..." rows={8} />
      </FormControl>
      <Button colorScheme="blue" onClick={handleModifyQuestionnaire} mb={4}>Save Changes</Button>
      <Divider my={6} />
      <Button colorScheme="red" onClick={handleLogout}>Logout</Button>
    </Box>
  );
};

export default ProfilePage;
