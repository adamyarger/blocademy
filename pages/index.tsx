import Head from 'next/head'
import Header from 'components/header'
import {
  Box,
  chakra,
  Text
} from '@chakra-ui/react';
import Container from 'components/container'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blocademy</title>
      </Head>

      <Header></Header>

      <Box mb={20}>
        <Box
          as="section"
          pt={{ base: "10rem", md: "12rem" }}
          pb={{ base: "0", md: "5rem" }}
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
                fontSize={{ base: "lg", lg: "xl" }}
                mt="6"
              >
                100% open source and FREE
              </Text>
            </Box>
          </Container>
        </Box>
      </Box>
    </div>
  )
}
