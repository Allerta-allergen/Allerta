import { Flex, Box, Spacer, Link,Image } from "@chakra-ui/react";
import logo from '../assets/logo.png';


function NavigationBar() {


  return (
    <Flex bg="#f7fff0" p={3} color="black">
      <Image src={logo} alt="Logo" h={10} mr={4} /> 
      <Box p="2">
        <Link href="/home">Home</Link>
      </Box>
      <Spacer />
      <Box p="2">
        <Link href="/profile">Profile</Link>
      </Box>
    </Flex>
  );
}

export default NavigationBar;
