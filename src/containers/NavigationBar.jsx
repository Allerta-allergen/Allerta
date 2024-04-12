import { Flex, Box, Spacer, Link,Image } from "@chakra-ui/react";
import logo from '../assets/logo.png';
import LanguageSwitcher from './../LanguageSwitcher'; // Import your LanguageSwitcher component
import { useTranslation } from "react-i18next";


function NavigationBar() {

  const { t } = useTranslation(); // Destructure t function from useTranslation hook

  return (
    <Flex bg="#f7fff0" p={3} color="black">
      <Image src={logo} alt="Logo" h={10} mr={4} /> 
      <Box p="2">
        <Link href="/home">{t('home')}</Link>
      </Box>
      <Spacer />
      <Box p="2">
        <Link href="/profile">{t('profile')}</Link>
      </Box>
      <Box p="2">
        <LanguageSwitcher />
      </Box>
    </Flex>
  );
}

export default NavigationBar;
