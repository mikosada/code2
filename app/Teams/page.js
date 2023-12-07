import React from "react";
import TeamsData from "@/components/TeamsData";
import { Box, Heading } from "@chakra-ui/react";

const Teams = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}?results=6&inc=name,gender,email,cell,id,picture&seed=abcde`
  );
  const team = await response.json();

  return (
    <>
      <Heading align="center" m="5">
        Meet Our Teams
      </Heading>
      {team.results.map((data) => {
        return (
          <Box m="10" boxShadow="dark-lg" p="5" borderRadius="30" key={data.id}>
            <TeamsData
              name={data.name}
              gender={data.gender}
              email={data.email}
              cell={data.cell}
              image={data.picture}
            />
          </Box>
        );
      })}
    </>
  );
};

export default Teams;
