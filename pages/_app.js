import "../styles/globals.css";
import "@fontsource/fira-code";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Fira Code, sans-serif",
    body: "Fira Code, sans-serif",
  },
  styles: {
    global: {
      "html, body": {
        color: "white",
        fontSize: "16px"
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
        <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
