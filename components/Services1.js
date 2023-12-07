import { Image, Box, Heading, Button, Link } from "@chakra-ui/react";
import React from "react";

const ServicesOne = () => {
  return (
    <Box mb="10" position="relative">
      <Image src="producthome.jpg" alt="fruit" borderBottomRadius="30%" />
      <Box
        position="absolute"
        bg="rgba(0, 0, 0, 0.5)"
        top="45%"
        left="50%"
        transform="translate(-50%, -50%)"
        color="white"
        textAlign="center"
        p="4"
        borderRadius="md"
      >
        <Heading>
          Meet Your Fruit Needs, <br />
          From Local Delights to Exotic Treasures, Right Here!
        </Heading>
        <Link href="#products" scrollBehavior="smooth">
          <Button my="4" colorScheme="blackAlpha">
            See Product
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default ServicesOne;
