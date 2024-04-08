
import React from 'react';
import {
  Box,
  Heading,
  Text,
  Divider,
  VStack,
  Card,
} from '@chakra-ui/react';

const ResultsPage = () => {
  const data = {
      "food": "Milk chocolate",
      "is_ingredients_label": true,
      "contains": [
        {
          "name": "Sugar",
          "user_allergen": false,
          "potential_allergen": false,
          "description": null
        },
        {
          "name": "Cocoa butter",
          "user_allergen": false,
          "potential_allergen": false,
          "description": null
        },
        {
          "name": "Cocoa mass",
          "user_allergen": false,
          "potential_allergen": false,
          "description": null
        },
        {
          "name": "Whole milk powder",
          "user_allergen": false,
          "potential_allergen": true,
          "description": "Contains milk"
        },
        {
          "name": "Whey powder",
          "user_allergen": false,
          "potential_allergen": true,
          "description": "Contains milk"
        },
        {
          "name": "Milk fat",
          "user_allergen": false,
          "potential_allergen": true,
          "description": "Contains milk"
        },
        {
          "name": "Emulsifier (lecithins)",
          "user_allergen": false,
          "potential_allergen": true,
          "description": "Commonly soy or sunflower origin"
        },
        {
          "name": "Vanillin",
          "user_allergen": false,
          "potential_allergen": false,
          "description": null
        },
        {
          "name": "Minimum Cocoa Solids",
          "user_allergen": false,
          "potential_allergen": false,
          "description": null
        }
      ],
      "factory": {
        "free_from": null,
        "processes": [
          {
            "name": null,
            "user_allergen": false,
            "potential_allergen": false,
            "description": "Specific additional ingredients processed in the factory are not indicated"
          }
        ]
      }
    };

    if (!data.is_ingredients_label) {
      return (
        <Box p={8}>
          <Text>Error: Ingredient label not found</Text>
        </Box>
      );
    }
 
    return (
      <Box p={8}>
        <Heading as="h1" size="xl">Results</Heading>
        <Divider my={6} />
        <VStack align="start" spacing={6}>
          {data.contains.map((ingredient, index) => (
            <Card key={index} p={4} flex="1" bg="gray.100">
              <Box>
                <Heading as="h2" size="lg" mb={4}>{ingredient.name}</Heading>
                <VStack align="start" spacing={4}>
                  <Text fontSize="lg"><strong>Details:</strong></Text>
                  <Text>{`Potential Allergen: ${ingredient.potential_allergen}`}</Text>
                  {ingredient.description && (
                    <Text>{`Description: ${ingredient.description}`}</Text>
                  )}
                  {/* Render additional fields that are not null and not false */}
                  {Object.entries(ingredient)
                    .filter(([key, value]) => key !== 'description' && value !== null && value !== false)
                    .map(([key, value]) => (
                      <Text key={key}>{`${key}: ${value}`}</Text>
                    ))}
                </VStack>
              </Box>
            </Card>
          ))}
        </VStack>
        <Divider my={6} />
        <Heading as="h2" size="lg">Factory Processes:</Heading>
        <Text>{data.factory.processes[0].description}</Text>
      </Box>
    );
  };
  

export default ResultsPage;
