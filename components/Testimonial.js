import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";

const Testimonial = () => {
  return (
    <>
      <Heading align="center" mb="30px" fontSize={{ base: "3xl", md: "5xl" }}>
        Testimonials
      </Heading>
      <Box display={"flex"} justifyContent="center">
        <SimpleGrid
          spacing={8}
          templateColumns={{
            base: "repeat(1 , minmax(200px, 1fr))",
            md: "repeat(3 , minmax(200px, 1fr))",
          }}
          m="40px"
        >
          <Card boxShadow="dark-lg">
            <CardHeader>
              <Heading size="md"> Person 1</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                "The freshness of their fruits is unmatched! Every bite bursts
                with flavor. I wouldn't shop for fruits anywhere else."
              </Text>
            </CardBody>
          </Card>
          <Card boxShadow="dark-lg">
            <CardHeader>
              <Heading size="md"> Person 2 </Heading>
            </CardHeader>
            <CardBody>
              <Text>
                "I've been buying fruits from this shop for years, and I can
                vouch for their consistency in delivering top-notch fruits. From
                seasonal picks to exotic varieties, they always have something
                delightful in store."
              </Text>
            </CardBody>
          </Card>
          <Card boxShadow="dark-lg">
            <CardHeader>
              <Heading size="md"> Person 3</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                "This fruit shop is a gem! The staff is so friendly and
                knowledgeable, always willing to offer advice on picking the
                ripest fruits. I love the vibrant colors and flavors bursting
                from their selection. A must-visit for fruit enthusiasts!"
              </Text>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Testimonial;
