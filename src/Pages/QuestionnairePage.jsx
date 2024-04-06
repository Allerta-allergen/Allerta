// pages/QuestionnairePage.js

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Heading,
  Text,
  Link,
  Button,
  VStack,
} from '@chakra-ui/react';

const QuestionnairePage = () => {
  return (
    <Box p={8}>
      <VStack spacing={6}>
        <Heading as="h1" size="xl">Food Allergy Questionnaire</Heading>
        <Box>
          <Text mb={2}>Do you have any known food allergies?</Text>
          <Link as={RouterLink} to="/home">Yes</Link>
        </Box>
        <Box>
          <Text mb={2}>Have you ever experienced allergic reactions to specific ingredients or foods?</Text>
          <Link as={RouterLink} to="/home">Yes</Link>
        </Box>
        <Button as={RouterLink} to="/home" colorScheme="blue">Skip Questionnaire</Button>
      </VStack>
    </Box>
  );
};

export default QuestionnairePage;
