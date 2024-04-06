
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Heading,
  Text,
  Link,
  VStack,
} from '@chakra-ui/react';

const ResultsPage = () => {
  // Dummy data for demonstration
  const potentialAllergens = ['Milk', 'Eggs', 'Wheat'];

  return (
    <Box p={8}>
      <Heading as="h1" size="xl">Results</Heading>
      <VStack spacing={4} mt={6}>
        <Text>Here are the potential allergens found in the input:</Text>
        {potentialAllergens.map((allergen, index) => (
          <Link key={index} as={RouterLink} to={`/allergy/${index}`}>{allergen}</Link>
        ))}
      </VStack>
    </Box>
  );
};

export default ResultsPage;
