import { Box, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";

const AboutHero = () => {
  return (
    <>
      <Box mx="30" display={"flex"} mt="80px">
        <Box>
          <Heading mb="4" ml="20">
            Brief history
          </Heading>
          <Text mx="20" fontSize="lg">
            Founded in 2005, our fruit store started small, driven by a passion
            for providing the freshest fruits to our community. What began as a
            local market stall grew into a beloved spot known for quality
            produce and friendly service.
            <br />
            Since day one, our focus has been on sourcing the best fruits
            directly from local farms. We've nurtured relationships with growers
            who share our commitment to freshness, ensuring that every fruit on
            our shelves meets our high standards.
          </Text>
        </Box>
        <Image
          src="/fruit-1.jpg"
          width={"250px"}
          height={"250px"}
          borderRadius={"50%"}
          border={"4px"}
          borderColor={"green.300"}
          alt="fruit-store"
        />
      </Box>
    </>
  );
};

export default AboutHero;
