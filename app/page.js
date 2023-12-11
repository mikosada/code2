import {
  Box,
  Heading,
  Image,
  Text,
  Link,
  Button,
  VisuallyHidden,
} from "@chakra-ui/react";
import Testimonial from "@/components/Testimonial";
import AboutHero from "@/components/AboutHero";

export default function Home() {
  return (
    <>
      <Box position="relative">
        <Image
          src="/fruitshop.jpg"
          fit="cover"
          alt="fruit-store"
          height={{ base: "400px", md: "auto" }}
        />
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
          bg="rgba(0, 0, 0, 0.5)"
          color="white"
          p={{ base: "2", md: "4" }}
          borderRadius="md"
        >
          <Heading size={{ base: "md", md: "xl", lg: "2xl" }}>
            "Freshness in Every Bite, <br />
            Live Healthy"
          </Heading>
          <Heading mt="4" size={{ base: "sm", md: "lg", lg: "xl" }}>
            Each bite a step towards a healthier, fresher you.
          </Heading>
          <Link href="#scroll">
            <Button
              m="5"
              borderRadius={"50"}
              colorScheme={"whiteAlpha"}
              size={{ base: "xs", md: "lg" }}
            >
              Learn more
            </Button>
          </Link>
        </Box>
        <VisuallyHidden
          position="absolute"
          top="95%"
          left="50%"
          transform="translate(-50%,
            -50%)"
          textAlign="center"
          id="scroll"
        >
          <Text>test</Text>
        </VisuallyHidden>
      </Box>
      <AboutHero />
      <Box my="100px">
        <Testimonial />
      </Box>
    </>
  );
}
