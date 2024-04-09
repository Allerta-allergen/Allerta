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

const QuestionnairePage = () => {
  const [allergiesAnswer, setAllergiesAnswer] = useState(''); // Initialize state with an empty string
  const [relatedConditionsAnswer, setRelatedConditionsAnswer] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook


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
      
        <Heading as="h1" size="xl">Food Allergy Questionnaire</Heading>
        <FormControl>
          <FormLabel mb={2}>Do you have any known food allergies?</FormLabel>
          {/* Set the placeholder with the default text */}
          <Input
            value={allergiesAnswer}
            onChange={(e) => setAllergiesAnswer(e.target.value)}
            placeholder="I am allergic to..."
          />
        </FormControl>
        <FormControl>
          <FormLabel mb={2}>Do you have any related conditions?</FormLabel>
          <Input
            value={relatedConditionsAnswer}
            onChange={(e) => setRelatedConditionsAnswer(e.target.value)}
            placeholder="I have..."
          />
        </FormControl>
        <Button type="submit" colorScheme="blue">Submit</Button>
        <Button as={RouterLink} to="/home" colorScheme="blue">Skip Questionnaire</Button>

      </VStack>
    </Box>
  );
};

export default QuestionnairePage;

