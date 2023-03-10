import { Box } from "@chakra-ui/react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/home";

export const App = () => {
    return (
        <Box bgColor='gray.900' color='gray.50'>
            <Header />
            <Home />
            <Footer />
        </Box>
    )
}