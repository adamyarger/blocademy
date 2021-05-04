import Head from 'next/head'
import Header from 'components/header'
import {
  Box,
  chakra,
  Text
} from '@chakra-ui/react';
import Container from 'components/container'
import CourseDirectory from 'components/course-directory'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blocademy</title>
      </Head>

      <Header></Header>

      <Box
        as="section"
        pt={{ base: "10rem", md: "12rem" }}
        pb={{ base: "0", md: "5rem" }}
        mb={20}
      >
        <Container>
          <Box textAlign="center">
            <chakra.h1
              maxW="18ch"
              mx="auto"
              fontSize={{ base: "2.25rem", sm: "3rem", lg: "4rem" }}
              fontFamily="heading"
              fontWeight="extrabold"
              mb="16px"
              lineHeight="1.2"
            >
              Your Career In Blockchain Starts Here
              </chakra.h1>

            <Text
              maxW="560px"
              mx="auto"
              opacity={0.7}
              fontSize={{ base: "xl", lg: "2xl" }}
              mt="6"
            >
              100% open source and FREE
              </Text>
          </Box>
        </Container>
      </Box>

      <Box
        as="section"
        pt={{ base: "10", md: "12" }}
        pb={{ base: "0", md: "5rem" }}
        mb={20}
      >
        <Container maxW="760px">
          <CourseDirectory />
        </Container>
      </Box>
    </div>
  )
}
