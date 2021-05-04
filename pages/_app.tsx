import type { AppProps } from 'next/app';
import Head from 'next/head';
import {
  ChakraProvider,
  extendTheme
} from '@chakra-ui/react';

const blue = {
  "50": "#e3f2ff",
  "100": "#bcdfff",
  "200": "#90ccff",
  "300": "#60b7ff",
  "400": "#3ba7ff",
  "500": "#1897ff",
  "600": "#2188ff",
  "700": "#2476eb",
  "800": "#2664d8",
  "900": "#2643b9"
};

const theme = extendTheme({
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif"
  },
  colors: {
    heroBg: "#040d21",
    brand: blue,
    blue: blue
  }
});

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=Poppins:ital,wght@0,500;1,500&amp;display=swap" rel="stylesheet"></link>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;