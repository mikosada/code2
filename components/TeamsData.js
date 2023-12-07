import { Box, HStack, Text, Image } from "@chakra-ui/react";
import React from "react";

const TeamsData = ({ name, gender, email, cell, image }) => {
  return (
    <Box my="5" px="5">
      <Image src={image.large} borderRadius="full" />
      <HStack>
        <Text fontSize="xl" fontWeight="700">
          {name.first}
        </Text>
        <Text fontSize="xl" fontWeight="700">
          {name.last}
        </Text>
      </HStack>
      <Text>Gender: {gender}</Text>
      <Text>Email: {email}</Text>
      <Text>Phone: {cell}</Text>
    </Box>
  );
};

export default TeamsData;
