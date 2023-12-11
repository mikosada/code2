import React from "react";
import { Container, Box, Heading, Text, Grid } from "@chakra-ui/react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Container maxW="container.xl">
        <Heading align="center" mt="5" mb="20" size="2xl">
          About us
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap="6">
          <Box>
            <Heading mb="5" size="2xl">
              Our Vision
            </Heading>
            <Text>
              Our vision is to become the cornerstone of every healthy household
              by offering an extensive array of fresh, seasonal fruits and
              promoting wellness through nutritious choices. <br />
              <br />
              We aspire to continually innovate, introducing new varieties and
              ensuring sustainability in our practices. By fostering strong
              relationships with both customers and suppliers, we aim to create
              a vibrant community centered around health, quality, and a love
              for delicious fruits.
            </Text>
          </Box>
          <Box align="center">
            <Image
              src="/fruithistory.jpg"
              width={500}
              height={500}
              alt="history"
            />
          </Box>
        </Grid>
        <Grid templateColumns="repeat(2, 1fr)" gap="6" mt="20" mb="20">
          <Box align="center">
            <Image src="/mission.jpg" width={350} height={100} alt="mission" />
          </Box>
          <Box mt="6rem">
            <Heading mb="5" size="2xl">
              What We Do?
            </Heading>

            <Text>
              At our fruit shop, we are committed to providing the freshest,
              highest quality fruits to our customers. We strive to source
              locally when possible, supporting our community's farmers and
              ensuring the best produce for our customers' tables. With a
              dedication to exceptional service and a passion for promoting
              healthy lifestyles, we aim to be the go-to destination for
              premium, flavorful fruits.
            </Text>
          </Box>
        </Grid>

        <Container maxW="container.lg" mb="20">
          <Box>
            <Box>
              <Heading size="md" my="1">
                Founding Story:
              </Heading>
              <Text mb="4">
                Fruit Day was established in 2005 by XXX with a passion for
                delivering the freshest and highest quality fruits to the
                community.
              </Text>
              <Heading size="md" my="1">
                Early Years:
              </Heading>
              <Text mb="4">
                In the initial stages, XXX personally sourced the finest fruits
                from local farmers and vendors. Their dedication to quality and
                personalized service quickly gained the trust and loyalty of
                customers.
              </Text>
            </Box>
            <Box>
              <Heading size="md" my="1">
                Milestones:
              </Heading>
              <Box mb="4">
                <Heading size="md" my="1">
                  2007:
                </Heading>
                Fresh Harvest Fruits expanded, opening its first standalone
                store, introducing a wider variety of fruits, and focusing on
                organic and exotic selections.
                <Heading size="md" my="1">
                  2010:
                </Heading>
                The store launched an educational initiative, collaborating with
                local schools to promote healthy eating habits among children,
                conducting workshops, and hosting fruit tasting events.
                <Heading size="md" my="1">
                  2015:
                </Heading>
                Celebrating 10 years, Fresh Harvest Fruits was recognized for
                its community contributions, receiving the "Local Business of
                the Year" award.
              </Box>
            </Box>

            <Box>
              <Heading size="md" my="1">
                Expansion and Impact:
              </Heading>
              <Text>
                With time, Fruit Day expanded its reach, opening more locations
                and diversifying its fruit selection. Its impact extended beyond
                providing top-quality produce, becoming an integral part of the
                community through initiatives such as Fruit Education Workshops,
                Health and Wellness Seminars, Community Harvest Festival, etc.
              </Text>
            </Box>
          </Box>
        </Container>

        <Box>
          <Heading align="center" my="2rem" size={"2xl"}>
            Company Culture
          </Heading>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap="3rem"
            my="5rem"
          >
            <Box boxShadow="dark-lg" px="5" py="3" borderRadius={20}>
              <Heading size="lg"> Embracing Freshness </Heading>
              <Text mt="5">
                At Fresh Harvest Fruits, our core value revolves around
                freshness. We believe in sourcing the freshest produce, ensuring
                that our customers receive fruits at the peak of flavor and
                nutrition. This commitment to freshness reflects not only in our
                products but in our approach to everything we do.
              </Text>
            </Box>
            <Box boxShadow="dark-lg" px="5" py="3" borderRadius={20}>
              <Heading size="lg"> Community Engagement</Heading>
              <Text mt="5">
                We strive to be an active part of our community. Supporting
                local farmers, promoting healthy eating habits in schools, and
                participating in community events align with our goal to foster
                a thriving and healthy environment.
              </Text>
            </Box>
            <Box boxShadow="dark-lg" px="5" py="3" borderRadius={20}>
              <Heading size="lg">Customer-Centric Approach</Heading>
              <Text mt="5">
                Our customers are at the heart of our business. We aim to
                provide exceptional service, tailored recommendations, and a
                delightful shopping experience. We listen to our customers’
                needs and preferences, adapting our offerings to meet their
                expectations.
              </Text>
            </Box>
            <Box boxShadow="dark-lg" px="5" py="3" borderRadius={20}>
              <Heading size="lg">Sustainability and Responsibility</Heading>
              <Text mt="5">
                We are committed to sustainable practices. From minimizing waste
                to environmentally friendly packaging, we prioritize
                eco-conscious decisions that reduce our carbon footprint and
                contribute positively to the planet.
              </Text>
            </Box>
            <Box boxShadow="dark-lg" px="5" py="3" borderRadius={20}>
              <Heading size="lg">Team Collaboration</Heading>
              <Text mt="5">
                We believe in the strength of a unified team. Encouraging open
                communication, fostering a supportive work environment, and
                acknowledging each team member's contribution are the
                cornerstones of our success.
              </Text>
            </Box>
            <Box boxShadow="dark-lg" px="5" py="3" borderRadius={20}>
              <Heading size="lg">Continuous Learning and Growth</Heading>
              <Text mt="5">
                Embracing a culture of continuous improvement, we encourage
                learning and growth among our employees. Whether it's through
                training programs, skill development initiatives, or staying
                updated on industry trends, we empower our team to excel.
              </Text>
            </Box>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default About;
