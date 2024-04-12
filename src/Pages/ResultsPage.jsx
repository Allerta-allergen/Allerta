import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Heading, Text, Divider, VStack, Card, Image } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const ResultsPage = () => {
  const location = useLocation();
  const imageData = location.state?.imageData; // Retrieve image data from location state
  console.log('Image data:', imageData); // Check the image data
  const {t} = useTranslation();

  const potentialAllergens = [];
  const otherIngredients = [];

  // Assuming image URL property name in imageData is 'imageUrl'
  const imageUrl = imageData?.imageUrl; // Access image URL using optional chaining

  imageData?.contains.forEach((ingredient, index) => {
    if (ingredient.user_allergen) {
            potentialAllergens.push(
              <Card key={index} p={4} flex="1" bg="gray.100">
                <Box>
                  <Heading as="h2" size="lg" mb={4}>
                    {ingredient.name}
                  </Heading>
                  <VStack align="start" spacing={4}>
                    {ingredient.user_allergen && (
                      <Text color="red">{t('allto')} {ingredient.name}</Text>
                    )}
                    {ingredient.description && <Text style={{ color: 'blue' }}>{`Description: ${ingredient.description}`}</Text>}
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
                      <Text color="red">{t('allto')}{ingredient.name}</Text>
                    )}
                    {ingredient.potential_allergen && (
                      <Text color="red">{t('allmay')} {ingredient.name}</Text>
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

// ... your existing code ...

return (
  <Box p={8}>
    {/* ... your existing content ... */}
    {imageData?.contains ? (
      <VStack align="start" spacing={6}>
        {potentialAllergens}
        <Divider my={6} />
        <Heading as="h2" size="lg">
              {t('no')}
        </Heading>
        {imageData.contains.map((ingredient, index) => (
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
        ))}
      </VStack>
    ) : (
      <Text>{t('no')}</Text>
    )}
  </Box>
);

};

export default ResultsPage;
