import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import ore from "../../assets/ore.png"

export const AboutMe = () => (
    <>
    <Heading as='h2' size='xl'>Sobre mim</Heading>
    <Flex w='100%' h={['70vh', 'auto']} flexDirection={['column', 'row']} alignItems='center' justifyContent='space-evenly'>
        <Image src={ore} w='200px' h='250px' borderRadius='50%' border='solid black'/>
        <Text w='50%'>Sempre fui ligado ao mundo dos games. Gosto da área de tecnologia porque é um universo gigante, cheio de possibilidades, a partir do qual muitas soluções de problemas foram e são desenvolvidas. Sou Desenvolvedor Full Stack e estou me graduando em Engenharia de Software. Gosto de aprender e pretendo aprimorar habilidades técnicas e interpessoais, com o intuito de solucionar problemas.</Text>
    </Flex>
    </>
)