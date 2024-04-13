import React, { useState,useEffect } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button,Spacer } from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const HomePage = () => {
  const [ingredients, setIngredients] = useState('');

  const [searchInput, setSearchInput] = useState('');
  const [imageData, setImageData] = useState(null);
  const [ImagePreview, setImagePreview] = useState('');

  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Define setIsLoading state
  const navigate = useNavigate();
  const {t} = useTranslation();


  const handleAnalyzeIngredients = async () => {
    console.log(ingredients)
    setIsLoading(true); // Set loading state (optional)
    try {
      const formData = new FormData();
  
      // Add ingredients to FormData
      formData.append('ingredients', ingredients); // Assuming API expects 'ingredients' field
      console.log(formData);
      const response = await fetch('https://allerta-58721-7cd6fa500797.herokuapp.com/api/text_fake', {
        method: 'POST',
        body: formData,
        // body: ingredients, // Directly use ingredients as body
        // headers: { 'Content-Type': 'text/plain' },
        mode: 'no-cors'
      });
  
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
      // Process the analysis data (navigate to ResultsPage, etc.)
    } catch (error) {
      console.error('Error fetching analysis data:', error);
      // Handle errors appropriately (display user-friendly message)
    } finally {
      setIsLoading(false); // Reset loading state (optional)
    }
  };
  

  const handleImageUpload = async (event) => {
    try {
      setIsUploading(true);
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
  
        // Set the image preview directly
        setImagePreview(imageUrl); // Assuming setImagePreview is a state setter for image preview
      };
      reader.readAsDataURL(file);

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
      navigate("/Allergan.github.io/results", { state: { imageData } });
    }
  }, [imageData]);
  

  return (
    <Box p={8}>
      <Heading as="h1" size="xl">{t('convert')}</Heading>
      <Box mt={6}>
        <FormControl>
          <FormLabel>{t('ingredients')}</FormLabel>
          <Input
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleImageUpload}
            mb={4}
          />
        </FormControl>
        {/* <Heading as="h2" size="md" mt={6} mb={2}>{t('or')}</Heading> */}
        {/* <Input
            type="text"
            name="ingredients"
            placeholder={t('Enter')}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            size="lg"
            mb={4}
          /> */}
        <Box display="flex" alignItems="center"> 
        
        <Button
          as={RouterLink}
          to={{
            pathname: "/Allergan.github.io/results",
            state: {imageData}  
          }}
          colorScheme="blue"
          mt={4}
          ml={2}
          isLoading={isUploading}
          isDisabled={true}
        >
          {t('search')}
        </Button>
        {ImagePreview && (
          <Box mt={4}>
            <img src={ImagePreview} alt="Uploaded Image" />
          </Box>
        )}
        {/* <Spacer /> */}
        {/* <Button mt={4} colorScheme="blue" onClick={handleAnalyzeIngredients}>
        {t('analyse')}
      </Button> */}
      </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
