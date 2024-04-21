import React, { useState, useEffect } from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { Box, Heading, Text, Divider, VStack, Card, Image, Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const ResultsPage = () => {
  const location = useLocation();
  const imageData = location.state?.imageData;
  const { t } = useTranslation();

  const potentialAllergens = [];
  const otherIngredients = [];

  const imageUrl = imageData?.imageUrl;

  imageData?.contains.forEach((ingredient, index) => {
    if (ingredient.user_allergen) {
      potentialAllergens.push(
        <Card key={index} p={4} flex="1" bg="gray.100">
          <Box>
            <Heading as="h2" size="lg" mb={4}>
              {ingredient.name}
            </Heading>
            <VStack align="start" spacing={4}>
              <Text color="red">{t('allto')} {ingredient.name}</Text>
              {ingredient.description && <Text style={{ color: 'blue' }}>{`Description: ${ingredient.description}`}</Text>}
            </VStack>
          </Box>
        </Card>
      );
    } else if (ingredient.potential_allergen) {
      potentialAllergens.push(
        <Card key={index} p={4} flex="1" bg="gray.100">
          <Box>
            <Heading as="h2" size="lg" mb={4}>
              {ingredient.name}
            </Heading>
            <VStack align="start" spacing={4}>
              <Text color="red">{t('allmay')} {ingredient.name}</Text>
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

  const filteredOtherIngredients = otherIngredients.filter(ingredient => {
    const name = ingredient.props.children.props.children[0].props.children;
    return !imageData.contains.some(ing => ing.name === name && ing.user_allergen);
  });

  return (
    <Box p={8}>
      {/* ... your existing content ... */}
      {imageData?.contains ? (
        <VStack align="start" spacing={6}>
          {potentialAllergens}
          <Divider my={6} />
          <Heading as="h2" size="lg">
            {t('inal')}
          </Heading>
          {filteredOtherIngredients.length ? filteredOtherIngredients : <Text>{t('no')}</Text>}
        </VStack>
      ) : (
        <Text>{t('no')}</Text>
      )}
      <Button as={RouterLink} to="/Allergan.github.io/home" colorScheme="blue" mt={6}>
        {t('Back')}
      </Button>
    </Box>
  );
};

export default ResultsPage;

