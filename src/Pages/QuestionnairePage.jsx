import React, { useState } from 'react';
import { Link as RouterLink,useNavigate } from 'react-router-dom';
import {
  Box,
  Heading,
  Button,
  VStack,
  Input,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';


const QuestionnairePage = () => {
  const [allergiesAnswer, setAllergiesAnswer] = useState(''); // Initialize state with an empty string
  const [relatedConditionsAnswer, setRelatedConditionsAnswer] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook
  const {t} = useTranslation();


  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission here
    console.log('I am allergic to:', allergiesAnswer);
    console.log('I have:', relatedConditionsAnswer);
    navigate('/home')

  };

  return (
    <Box p={8}>
      <VStack spacing={6} as="form" onSubmit={handleSubmit}>
      
        <Heading as="h1" size="xl">{t('questionnare')}</Heading>
        <FormControl>
          <FormLabel mb={2}>{t('question1')}</FormLabel>
          {/* Set the placeholder with the default text */}
          <Input
            value={allergiesAnswer}
            onChange={(e) => setAllergiesAnswer(e.target.value)}
            placeholder={t('allto')}
          />
        </FormControl>
        <FormControl>
          <FormLabel mb={2}>{t('question2')}</FormLabel>
          <Input
            value={relatedConditionsAnswer}
            onChange={(e) => setRelatedConditionsAnswer(e.target.value)}
            placeholder={t('have')}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" >{t('submit')}</Button>
        {/* <Button as={RouterLink} to="/home" colorScheme="blue">Skip Questionnaire</Button> */}

      </VStack>
    </Box>
  );
};

export default QuestionnairePage;

