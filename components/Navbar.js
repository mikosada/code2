import { Box, Button, Flex, HStack, Heading } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <Box position="sticky" top="0" left="0" right="0" zIndex="999">
        <Flex justifyContent={"space-between"} bg={"green.300"}>
          <Box my="2" mx="2">
            <Link href="/">
              <HStack>
                <Image
                  src="/logo.jpg"
                  width={50}
                  height={50}
                  alt="logo-fruit"
                />
                <Heading
                  color="white"
                  size={{ base: "md", md: "xl" }}
                  display={{ base: "none", md: "block" }}
                >
                  Fruit Day
                </Heading>
              </HStack>
            </Link>
          </Box>

          <Box my="2" mx="2">
            <Link href="/About-Us">
              <Button
                size={{ base: "sm", md: "lg" }}
                mr={{ base: "5", md: "10" }}
                variant="ghost"
                color="white"
                fontSize={{ base: "12", md: "14", lg: "16" }}
                _hover={{ color: "black" }}
              >
                About Us
              </Button>
            </Link>

            <Link href="/Services">
              <Button
                size={{ base: "sm", md: "lg" }}
                mr={{ base: "5", md: "10" }}
                variant="ghost"
                color="white"
                fontSize={{ base: "12", md: "14", lg: "16" }}
                _hover={{ color: "black" }}
              >
                Products
              </Button>
            </Link>

            <Link href="/Teams">
              <Button
                size={{ base: "sm", md: "lg" }}
                mr={{ base: "5", md: "10" }}
                variant="ghost"
                color="white"
                fontSize={{ base: "12", md: "14", lg: "16" }}
                _hover={{ color: "black" }}
              >
                Teams
              </Button>
            </Link>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
