import React, { useState } from 'react';
import { Box, Heading, Button, VStack, FormControl, FormLabel, Select, Tag, TagCloseButton, TagLabel, FormHelperText } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const QuestionnairePage = () => {
  const allergyOptions = ['Pollen', 'Dust', 'Peanuts', 'Shellfish', 'Milk', 'Eggs', 'Soy', 'Wheat', 'Fish', 'Tree nuts', 'Sesame', 'Sulfites', 'Mustard', 'Celery', 'Lupin', 'Molluscs'];
  const conditionOptions = ['Asthma', 'Eczema', 'Hay Fever', 'Sinusitis', 'Food Intolerance', 'Anaphylaxis', 'Atopic Dermatitis', 'Contact Dermatitis', 'Hives (Urticaria)', 'Angioedema', 'Allergic Conjunctivitis', 'Allergic Rhinitis', 'Atopic Rhinitis', 'Nonallergic Rhinitis', 'Seasonal Allergic Rhinitis', 'Perennial Allergic Rhinitis', 'Occupational Asthma', 'Exercise-Induced Bronchoconstriction (EIB)', 'Drug Allergy', 'Allergic Contact Dermatitis', 'Latex Allergy'];
  const [selectedAllergens, setSelectedAllergens] = useState([]);
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [allergenDropdownDisabled, setAllergenDropdownDisabled] = useState(false);
  const [conditionDropdownDisabled, setConditionDropdownDisabled] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleAllergenSelect = (e) => {
    const value = e.target.value;
    setSelectedAllergens((prevSelected) => {
      if (!prevSelected.includes(value)) {
        return [...prevSelected, value];
      }
      return prevSelected;
    });
    if (value === '') {
      setAllergenDropdownDisabled(true);
    }
  };

  const handleAllergenRemove = (value) => {
    setSelectedAllergens((prevSelected) => prevSelected.filter((item) => item !== value));
    setAllergenDropdownDisabled(false);
  };

  const handleConditionSelect = (e) => {
    const value = e.target.value;
    setSelectedConditions((prevSelected) => {
      if (!prevSelected.includes(value)) {
        return [...prevSelected, value];
      }
      return prevSelected;
    });
    if (value === '') {
      setConditionDropdownDisabled(true);
    }
  };

  const handleConditionRemove = (value) => {
    setSelectedConditions((prevSelected) => prevSelected.filter((item) => item !== value));
    setConditionDropdownDisabled(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedAllergens.length === 0 || selectedConditions.length === 0) {
      alert('Please select an item from each list');
      return;
    }
    console.log('I am allergic to:', selectedAllergens);
    console.log('I have:', selectedConditions);
    navigate('/Allergan.github.io/home'); // Assuming this is the correct path
  };

  return (
    <Box p={8}>
      <VStack spacing={6} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl">{t('questionnare')}</Heading>
        <FormControl isRequired>
          <FormLabel mb={2}>{t('question1')}</FormLabel>
          <VStack align="flex-start" spacing={2} w="100%">
            {selectedAllergens.map((allergen) => (
              <Tag key={allergen} size="md" colorScheme="blue" borderRadius="full">
                <TagLabel>{t(allergen.toLowerCase())}</TagLabel>
                <TagCloseButton onClick={() => handleAllergenRemove(allergen)} />
              </Tag>
            ))}
            <Select
              value={undefined}
              onChange={handleAllergenSelect}
              placeholder={t('select_allergens')}
              isDisabled={allergenDropdownDisabled}
            >
              <option value="">{t('none')}</option>
              {allergyOptions.map((option) => (
                <option key={option} value={option}>
                  {t(option.toLowerCase())}
                </option>
              ))}
            </Select>
            {selectedAllergens.length === 0 && (
              <FormHelperText textColor="red.500">{t('select_at_least_one_allergen')}</FormHelperText>
            )}
          </VStack>
        </FormControl>
        <FormControl isRequired>
          <FormLabel mb={2}>{t('question2')}</FormLabel>
          <VStack align="flex-start" spacing={2} w="100%">
            {selectedConditions.map((condition) => (
              <Tag key={condition} size="md" colorScheme="blue" borderRadius="full">
                <TagLabel>{t(condition.toLowerCase())}</TagLabel>
                <TagCloseButton onClick={() => handleConditionRemove(condition)} />
              </Tag>
            ))}
            <Select
              value={undefined}
              onChange={handleConditionSelect}
              placeholder={t('select_condition')}
              isDisabled={conditionDropdownDisabled}
            >
              <option value="">{t('none')}</option>
              {conditionOptions.map((option) => (
                <option key={option} value={option}>
                  {t(option.toLowerCase())}
                </option>
              ))}
            </Select>
            {selectedConditions.length === 0 && (
              <FormHelperText textColor="red.500">{t('select_at_least_one_condition')}</FormHelperText>
            )}
          </VStack>
        </FormControl>
        <Button type="submit" colorScheme="blue">{t('submit')}</Button>
      </VStack>
    </Box>
  );
};

export default QuestionnairePage;


