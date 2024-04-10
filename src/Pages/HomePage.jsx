import React, { useState,useEffect } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [searchInput, setSearchInput] = useState('');
  const [imageData, setImageData] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

  const handleImageUpload = async (event) => {
    try {
      setIsUploading(true);
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('image', file);
      const response = await fetch('https://allerta-58721-7cd6fa500797.herokuapp.com/api/photo', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setImageData(data);
        console.log('Response from server:', data);
        setIsUploading(false);
      } else {
        console.error('Failed to upload image:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  useEffect(() => {
    if (imageData) {
      navigate("/results", { state: { imageData } });
    }
  }, [imageData]);
  

  return (
    <Box p={8}>
      <Heading as="h1" size="xl">Convert Ingredient to Potential Allergen</Heading>
      <Box mt={6}>
        <FormControl>
          <FormLabel>Enter list of ingredients or upload a photo of a product label</FormLabel>
          <Input
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleImageUpload}
            mb={4}
          />
        </FormControl>
        <Heading as="h2" size="md" mt={6} mb={2}>Or</Heading>
        <Input
          type="text"
          placeholder="Enter ingredients"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          size="lg"
        />
        <Button
          as={RouterLink}
          to={{
            pathname: "/results",
            state: {imageData}  
          }}
          colorScheme="blue"
          mt={4}
          ml={2}
          isLoading={isUploading}
          isDisabled={isUploading}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
