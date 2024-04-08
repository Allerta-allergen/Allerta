import React, { useState } from 'react';
import axios from 'axios';

function ImageTextExtractor() {
    const [image, setImage] = useState(null);
    const [extractedText, setExtractedText] = useState('');

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        setImage(file);

        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post('/allergen/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setExtractedText(response.data);
        } catch (error) {
            console.error('Error extracting text:', error);
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {extractedText && <div>Extracted Text: {extractedText}</div>}
        </div>
    );
}

export default ImageTextExtractor;
