import Head from 'next/head'
import Header from 'components/header'
import {
  Box
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
            container goes here
          </Container>
        </Box>
      </Box>
    </div>
  )
}
