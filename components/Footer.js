"use client";

import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box bg="green.300" py="10px" align="center" pb="30px">
        <Box fontSize="2xl" mt="10px" fontWeight={"700"}>
          Find Us
        </Box>
        <Box display={"flex"} justifyContent={"center"} gap="10px" mt="20px">
          <Image src="/twt.png" width={30} height={30} alt="twt" />
          <Image src="/ig.png" width={30} height={30} alt="ig" />
          <Image src="/fb.png" width={30} height={30} alt="fb" />
          <Image src="/wa.png" width={30} height={30} alt="wa" />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          gap="10px"
          mt="20px"
          fontWeight={"500"}
        >
          <Text>Info</Text>
          <Text>Support</Text>
        </Box>
        <Box
          display={"flex"}
          flexDir={"row"}
          justifyContent={"center"}
          gap="10px"
          mt="20px"
          fontWeight={"500"}
        >
          <Text mr="15px">
            <EmailIcon mr="5px" />
            xxxxxxxxxxxxx@mail.com
          </Text>
          <Text>
            <PhoneIcon mr="5px" /> 021-XXXXXXX
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
