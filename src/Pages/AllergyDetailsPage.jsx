
import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';

const AllergyDetailsPage = () => {
  const { id } = useParams();
  // Dummy data for demonstration
  const allergyDetails = {
    0: {
      name: 'Milk',
      description: 'Milk allergy is an adverse immune reaction to one or more proteins in cow\'s milk. Symptoms may include hives, rashes, digestive issues, and in severe cases, anaphylaxis.',
      sources: 'Dairy products such as milk, cheese, yogurt, etc.',
    },
    1: {
      name: 'Eggs',
      description: 'Egg allergy is an adverse immune reaction to proteins in egg whites or yolks. Symptoms may include hives, digestive issues, and in severe cases, anaphylaxis.',
      sources: 'Egg-containing foods such as baked goods, mayonnaise, pasta, etc.',
    },
    2: {
      name: 'Wheat',
      description: 'Wheat allergy is an adverse immune reaction to proteins found in wheat. Symptoms may include hives, eczema, digestive issues, and in severe cases, anaphylaxis.',
      sources: 'Wheat-containing foods such as bread, pasta, cereal, etc.',
    },
  };

  const allergy = allergyDetails[id];

  if (!allergy) {
    return (
      <Box p={8}>
        <Heading as="h1" size="xl">Allergy Not Found</Heading>
        <Text mt={4}>Sorry, the requested allergy details are not available.</Text>
      </Box>
    );
  }

  return (
    <Box p={8}>
      <Heading as="h1" size="xl">{allergy.name}</Heading>
      <Text mt={2}>{allergy.description}</Text>
      <Text mt={2}><strong>Sources:</strong> {allergy.sources}</Text>
    </Box>
  );
};

export default AllergyDetailsPage;
