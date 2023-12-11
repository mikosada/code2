import {
  Card,
  CardBody,
  CardHeader,
  Container,
  ListItem,
  UnorderedList,
  Grid,
  Heading,
  Image,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";

const Products = () => {
  return (
    <>
      <Container maxW="container.xl">
        <Box>
          <Heading ml="10" mt="20" mb="10" size="2xl" id="products">
            Our Products
          </Heading>
        </Box>

        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
          gap="6"
          m="10"
        >
          <Card align="center">
            <CardHeader>
              <Image src="/fruitcard.jpg" w="300px" borderRadius="lg" />
            </CardHeader>
            <CardBody>
              <Heading size="lg">Fresh Fruits</Heading>
              <UnorderedList>
                <ListItem>
                  Seasonal fruits (apples, oranges, berries, etc.)
                </ListItem>
                <ListItem>
                  Exotic fruits (mangoes, dragon fruit, passion fruit, etc.)
                </ListItem>
                <ListItem>Organic fruits</ListItem>
                <ListItem>Pre-cut fruit packs or salads</ListItem>
              </UnorderedList>
              <Text color="blue.600" fontSize="xl" textAlign="center" mt="3">
                $1.00 to $5.00 per pound
              </Text>
            </CardBody>
          </Card>
          <Card align="center">
            <CardHeader>
              <Image src="/hampers.jpg" w="300px" h="200px" borderRadius="lg" />
            </CardHeader>
            <CardBody>
              <Heading size="lg">Fruit Baskets and Hampers</Heading>
              <UnorderedList>
                <ListItem>
                  Customizable fruit baskets for gifts or special occasions
                </ListItem>
                <ListItem>
                  Gourmet fruit hampers with assorted fruits and accompaniments
                </ListItem>
              </UnorderedList>
              <Text color="blue.600" fontSize="xl" textAlign="center" mt="3">
                $25.00 to $100.00
              </Text>
            </CardBody>
          </Card>
          <Card align="center">
            <CardHeader>
              <Image src="/jam.jpg" w="300px" h="200px" borderRadius="lg" />
            </CardHeader>
            <CardBody>
              <Heading size="lg">Specialty Items</Heading>
              <UnorderedList>
                <ListItem>Fruit jams, preserves, and spreads</ListItem>
                <ListItem>Fruit-infused vinegar or oils</ListItem>
                <ListItem>Freeze-dried fruits</ListItem>
              </UnorderedList>
              <Text color="blue.600" fontSize="xl" textAlign="center" mt="3">
                $3.00 to $15.00 per jar
              </Text>
            </CardBody>
          </Card>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Products;
