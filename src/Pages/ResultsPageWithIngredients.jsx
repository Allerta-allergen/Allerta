import React from 'react';
import { Box, Heading, Text, VStack, Card } from '@chakra-ui/react';

const ResultsPageWithIngredients = ({ analysisData }) => {
  const potentialAllergens = [];
  const otherIngredients = [];

  analysisData?.ingredients?.forEach((ingredient, index) => {
    // Assuming the API response includes an "ingredients" array with potential allergens

    if (ingredient.userAllergen) {
      potentialAllergens.push(
        <Card key={index} p={4} flex="1" bg="gray.100">
          <Box>
            <Heading as="h2" size="lg" mb={4}>
              {ingredient.name}
            </Heading>
            <VStack align="start" spacing={4}>
              <Text color="red">You are allergic to {ingredient.name}</Text>
              {ingredient.description && <Text style={{ color: 'blue' }}>{`Description: ${ingredient.description}`}</Text>}
            </VStack>
          </Box>
        </Card>
      );
    } else if (ingredient.potentialAllergen) {
      potentialAllergens.push(
        <Card key={index} p={4} flex="1" bg="gray.100">
          <Box>
            <Heading as="h2" size="lg" mb={4}>
              {ingredient.name}
            </Heading>
            <VStack align="start" spacing={4}>
              <Text color="red">You may be allergic to {ingredient.name}</Text>
              {ingredient.description && <Text style={{ color: 'blue' }}>{`Description: ${ingredient.description}`}</Text>}
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
        Ingredient Analysis (Text)
      </Heading>
      <Divider my={6} />
      {analysisData?.ingredients && ( // Check for ingredients array
        <VStack align="start" spacing={6}>
          {potentialAllergens.length > 0 && (
            <>
              <Heading as="h2" size="lg">
                Potential Allergens
              </Heading>
              {potentialAllergens}
            </>
          )}
          {otherIngredients.length > 0 && (
            <Heading as="h2" size="lg">
              Other Ingredients
            </Heading>
          )}
          {otherIngredients}
        </VStack>
      )}
      {!analysisData?.ingredients && <Text>No ingredients data available</Text>}
    </Box>
  );
};

export default ResultsPageWithIngredients;
