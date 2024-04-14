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
  HStack,
} from '@chakra-ui/react';
import { useNavigate,Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LoginPage = () => {
  const toast = useToast();
  const navigate = useNavigate(); // Move useNavigate inside the component
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {t} = useTranslation();

  const handleLogin = () => {
    // Here you can implement your login logic
    // For simplicity, I'm just showing a toast message
    toast({
      title: 'Login',
      description: `Email: ${email}, Password: ${password}`,
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    setTimeout(() => {
      navigate('/Allergan.github.io/home');
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
      <Heading as="h2" size="lg">{t('discover')}</Heading>
      <Heading as="h2" size="md" color="blue.500">{t('safe')}</Heading>
          </Box>
      <Box p={8} maxWidth="400px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box textAlign="center">
          <Heading>{t('login')}</Heading>
          <Text mt={2} color="gray.500">{t('credentials')}</Text>
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
          <Button
            colorScheme="blue"
            width="full"
            mt={4}
            onClick={handleLogin}
          >
            {t('login')}
          </Button>
          <HStack mt={4} spacing={2}>
            <Text color="red">{t('no_account')}{' '}</Text>
          <Link
            onClick={() => navigate("/Allergan.github.io/signup")}
            fontWeight="bold"
            textDecoration="underline"
            _hover={{ color: "red.500", textDecoration: "underline" }}
              >
    {t('signup')}
  </Link>
</HStack>

        </Box>
      </Box>
      </VStack>
    </Flex>
  );
};

export default LoginPage;
