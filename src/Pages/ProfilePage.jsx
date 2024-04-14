import React, { useState } from 'react';
import { Box, Heading, Button, Divider, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [questionnaireAnswer, setQuestionnaireAnswer] = useState('');
  const {t} = useTranslation();

  // Function to handle modifying the questionnaire
  const handleModifyQuestionnaire = () => {
    // Logic to modify questionnaire (e.g., send to server)
    alert('Questionnaire modified!');
    navigate('/Allergan.github.io/home')
  };

  // Function to handle logout
  const handleLogout = () => {
    // Logic to logout
    alert('Logged out!');
    setTimeout(() => {
      navigate('/Allergan.github.io');
    }, 1000);
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="xl">{t('pr')}</Heading>
      <Divider my={6} />
      <FormControl mb={4}>
        <FormLabel>{t('question1')}</FormLabel>
        <Textarea
          placeholder={t('allto')}
          rows={2}
          value={questionnaireAnswer}
          onChange={(e) => setQuestionnaireAnswer(e.target.value)} // Update questionnaire answer state
        />
        <FormLabel>{t('question2')}</FormLabel>
        <Textarea
          placeholder={t('have')}
          rows={2}
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
