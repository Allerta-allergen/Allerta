import React, { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';

import { Link as RouterLink } from 'react-router-dom';


const HomePage = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleTakePhoto = () => {
    // Use browser's getUserMedia API to access camera
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        // Display camera stream
        const video = document.createElement('video');
        video.srcObject = stream;
        video.autoplay = true;
        document.body.appendChild(video);

        // Take photo when user clicks a button
        const takePhotoButton = document.createElement('button');
        takePhotoButton.textContent = 'Take Photo';
        takePhotoButton.onclick = () => {
          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
          const photoURL = canvas.toDataURL('image/jpeg');
          
          // Do something with the photo URL (e.g., upload or display)
          alert('Photo taken! URL: ' + photoURL);

          // Stop camera stream
          stream.getTracks().forEach(track => track.stop());

          // Remove video element
          video.remove();
        };
        document.body.appendChild(takePhotoButton);
      })
      .catch((error) => {
        console.error('Error accessing camera:', error);
        alert('Error accessing camera. Please try again.');
      });
  };

  const handleUploadPhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      // You can upload the file to a server or do something else with it
      alert(`File uploaded: ${file.name}`);
    }
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="xl">Convert Ingredient to Potential Allergen </Heading>
      <Box mt={6}>
        <FormControl>
          <FormLabel>Enter list of ingredients or upload a photo of a product label</FormLabel>
          <Button colorScheme="teal" mt={4} mb={2} onClick={handleTakePhoto}>Take Photo</Button>
          <FormControl mt={4}>
            <Input type="file" accept="image/*" onChange={handleUploadPhoto} style={{ display: 'none' }} />
            <Button colorScheme="teal" onClick={() => document.querySelector('input[type="file"]').click()}>Upload Photo</Button>
          </FormControl>
        </FormControl>
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
