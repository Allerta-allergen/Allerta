import React from 'react';
import {FormControl, FormLabel, Input } from '@chakra-ui/react';


const UploadForm = ({ onImageUpload }) => {
  const handleFileChange = (event) => {
    try {
      const file = event.target.files[0];

      // Check if file is an image (PNG or JPG)
      if (!file.type.startsWith('image')) {
        throw new Error('Please upload a valid image file (PNG or JPG)');
      }

      onImageUpload(file);
    } catch (error) {
      console.error('Error uploading image:', error.message);
    }
  };

  return (
    <FormControl>
      <FormLabel>Upload a photo of a product label</FormLabel>
      <Input
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleFileChange}
        mb={4}
      />
    </FormControl>
  );
};

export default UploadForm;
