import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useNavigate,Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SignupPage = () => {
  const toast = useToast();
  const navigate = useNavigate(); // Move useNavigate inside the component
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { t } = useTranslation();

  const handleSignup = () => {
    // Here you can implement your signup logic
    // For simplicity, I'm just showing a toast message
    toast({
      title: 'Signup',
      description: `Email: ${email}, Password: ${password}`,
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    setTimeout(() => {
      navigate('/Allergan.github.io/questionnaire');
    }, 1000);
  };

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg="gray.100"
    >
      <VStack spacing={4} align="center">
        <Box>
          <Heading as="h2" size="lg">Discover Your Allergen Insights With Just A Photo</Heading>
          <Heading as="h2" size="md" color="blue.500">Safeguarding Your Health</Heading>
        </Box>
        <Box p={8} maxWidth="400px" borderWidth={1} borderRadius={8} boxShadow="lg">
          <Box textAlign="center">
            <Heading>{t('signup')}</Heading>
          </Box>
          <Box mt={4}>
            <FormControl>
              <FormLabel>{t('email')}</FormLabel>
              <Input
                type="email"
                placeholder={t('username')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>{t('pass')}</FormLabel>
              <Input
                type="password"
                placeholder={t('password')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>{t('pass')}</FormLabel>
              <Input
                type="password"
                placeholder={t('confirm')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button
              colorScheme="blue"
              width="full"
              mt={4}
              onClick={handleSignup}
            >
              {t('signup')}
            </Button>
            <Text >
            <Link onClick={() => navigate("/Allergan.github.io/login")}  >
                {t('login')}
              </Link>
              </Text>
          </Box>
        </Box>
      </VStack>
    </Flex>
  );
};

export default SignupPage;
