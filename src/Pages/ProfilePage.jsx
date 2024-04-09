import React, { useState } from 'react';
import { Box, Heading, Button, Divider, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [questionnaireAnswer, setQuestionnaireAnswer] = useState('');

  // Function to handle modifying the questionnaire
  const handleModifyQuestionnaire = () => {
    // Logic to modify questionnaire (e.g., send to server)
    alert('Questionnaire modified!');
  };

  // Function to handle logout
  const handleLogout = () => {
    // Logic to logout
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
        <FormLabel>Questionnaire Answer</FormLabel>
        <Textarea
          placeholder="Enter modified questionnaire here..."
          rows={8}
          value={questionnaireAnswer}
          onChange={(e) => setQuestionnaireAnswer(e.target.value)} // Update questionnaire answer state
        />
      </FormControl>
      <Button colorScheme="blue" onClick={handleModifyQuestionnaire} mb={4}>Save Changes</Button>
      <Divider my={6} />
      <Button colorScheme="red" onClick={handleLogout}>Logout</Button>
    </Box>
  );
};

export default ProfilePage;
