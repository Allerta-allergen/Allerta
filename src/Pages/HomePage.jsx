import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import ImageTextExtractor from '../components/ImageTextExtractor/ImageTextExtractor.jsx'
import { Link as RouterLink } from 'react-router-dom';

const HomePage = () => {
  const [searchInput, setSearchInput] = useState('');
  const [extractedText, setExtractedText] = useState('');

  const handleExtractedText = (text) => {
    setExtractedText(text);
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="xl">Convert Ingredient to Potential Allergen</Heading>
      <Box mt={6}>
        <FormControl>
          <FormLabel>Enter list of ingredients or upload a photo of a product label</FormLabel>
          <FormControl mt={4}>
            <ImageTextExtractor onExtractedText={handleExtractedText} /> {/* Pass a callback function to handle the extracted text */}
          </FormControl>
        </FormControl>
        {extractedText && ( // Display the extracted text if available
          <Box mt={4}>
            <Heading as="h2" size="md">Extracted Text:</Heading>
            <Box>{extractedText}</Box>
          </Box>
        )}
        <Heading as="h2" size="md" mt={6} mb={2}>Or</Heading>
        <Input
          type="text"
          placeholder="Enter ingredients or upload photo"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          size="lg" // Increase input size
        />
        <Button as={RouterLink} to="/results" colorScheme="blue" mt={4} ml={2}>Search</Button>
      </Box>
    </Box>
  );
};

export default HomePage;

