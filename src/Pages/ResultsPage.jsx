import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Heading, Text, Divider, VStack, Card, Image } from '@chakra-ui/react';

const ResultsPage = () => {

  const location = useLocation();
  const imageData = location.state?.imageData; // Retrieve image data from location state
  console.log('Image data:', imageData); // Check the image data

  // Render loading state while waiting for data
  if (!imageData) {
    return (
      <Box p={8}>
        <Text>Loading...</Text>
      </Box>
    );
  }

  // Access data from the response
  const data = imageData.data;

  

  if (!data) {
    return (
      <Box p={8}>
        <Text>Loading...</Text>
      </Box>
    );
  }

  if (!data.is_ingredients_label) {
    return (
      <Box p={8}>
        <Text>Error: Ingredient label not found</Text>
      </Box>
    );
  }

  const potentialAllergens = [];
  const otherIngredients = [];

  data.contains.forEach((ingredient, index) => {
    if (ingredient.user_allergen) {
      potentialAllergens.push(
        <Card key={index} p={4} flex="1" bg="gray.100">
          <Box>
            <Heading as="h2" size="lg" mb={4}>
              {ingredient.name}
            </Heading>
            <VStack align="start" spacing={4}>
              {ingredient.user_allergen && (
                <Text color="red">You are allergic to {ingredient.name}</Text>
              )}
              {ingredient.description && <Text>{`Description: ${ingredient.description}`}</Text>}
            </VStack>
          </Box>
        </Card>
      );
    } else if (ingredient.potential_allergen || ingredient.user_allergen) {
      potentialAllergens.push(
        <Card key={index} p={4} flex="1" bg="gray.100">
          <Box>
            <Heading as="h2" size="lg" mb={4}>
              {ingredient.name}
            </Heading>
            <VStack align="start" spacing={4}>
              {ingredient.user_allergen && (
                <Text color="red">You are allergic to {ingredient.name}</Text>
              )}
              {ingredient.potential_allergen && (
                <Text color="red">You can be allergic to {ingredient.name}</Text>
              )}

              {ingredient.description && <Text>{`Description: ${ingredient.description}`}</Text>}
            </VStack>
          </Box>
        </Card>
      );
    } else {
      otherIngredients.push(
        <Card key={index} p={4} flex="1" bg="gray.100">
          <Box>
            <Heading as="h2" size="lg" mb={4}>
              {ingredient.name}
            </Heading>
            <VStack align="start" spacing={4}>
              {ingredient.description && <Text>{`Description: ${ingredient.description}`}</Text>}
            </VStack>
          </Box>
        </Card>
      );
    }
  });

  return (
    <Box p={8}>
      <Heading as="h1" size="xl">
        Results
      </Heading>
      <Divider my={6} />
      {image && <Image src={URL.createObjectURL(image)} alt="Uploaded" />}
      <VStack align="start" spacing={6}>
        {potentialAllergens}
        <Divider my={6} />
        <Heading as="h2" size="lg">
          Other Ingredients
        </Heading>
        {otherIngredients}
      </VStack>
      <Divider my={6} />
      <Heading as="h2" size="lg">
        Factory Processes:
      </Heading>
      <Text>{data.factory.processes[0].description}</Text>
    </Box>
  );
};

export default ResultsPage;
