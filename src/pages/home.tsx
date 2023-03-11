import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import ore from "../assets/ore.png"
import frontend from "../assets/frontend.png"
import fullstack from "../assets/fullstack.png"
import { skills } from "../database/techs.db";
import { projects } from "../database/projects.db";
import { Card } from "../components/Card";


export const Home = () => {
    return (
            <Center display='flex' flexDirection='column' w='100%' justifyContent='space-evenly' mt='10px'>
                <Heading as='h2' size='xl'>Sobre mim</Heading>
                <Flex w='100%' h={['70vh', 'auto']} flexDirection={['column', 'row']} alignItems='center' justifyContent='space-evenly'>
                    <Image src={ore} w='200px' h='250px' borderRadius='50%' border='solid black'/>
                    <Text w='50%'>Sempre fui ligado ao mundo dos games. Gosto da área de tecnologia porque é um universo gigante, cheio de possibilidades, a partir do qual muitas soluções de problemas foram e são desenvolvidas. Sou Desenvolvedor Full Stack e estou me graduando em Engenharia de Software. Gosto de aprender e pretendo aprimorar habilidades técnicas e interpessoais, com o intuito de solucionar problemas.</Text>
                </Flex>
                <Heading as='h2' size='xl' mb='15px'>Tecnologias</Heading>
                <Flex w='100%' alignItems='center' justifyContent='space-evenly'>
                    {skills.map(end => {
                        return (
                            <Box w='200px' borderLeft='2px' borderColor='purple.800'>
                                <Heading as='h3' size='lg' textAlign='center'>{end.name}</Heading>
                                <Flex flexDirection='column' alignItems='center' mt='10px'>
                                    {end.techs.map(tech => {
                                        return (
                                            <Flex mb='10px'>
                                                <Image w='25px' src={tech.logo}/>
                                                <Heading as='h4' size='md'>{tech.name}</Heading>
                                            </Flex>
                                        )
                                    })}
                                </Flex>
                            </Box>
                        )
                    })}
                </Flex>
                <Heading as='h2' size='xl' mt='15px'>Certificações</Heading>
                <Flex w='80%' h={['50vh', '70vh']} mt='15px' alignItems='center' justifyContent='space-evenly' flexWrap='wrap'>
                    <Image src={frontend} w='500px' h={['40%', '350px']}/>
                    <Image src={fullstack} w='500px' h={['40%', '350px']}/>
                </Flex>
                <Heading as='h2' size='xl' mt='15px' mb='2'>Projetos</Heading>
                <Flex w='90%' justifyContent='space-between' flexWrap='wrap' paddingX='8'  mb='8'>
                    {projects.map(project => <Card name={project.name} isWebPage={project.isWebPage} description={project.description} techs={project.techs} repository={project.repository} visit={project.visit}/>) }
                </Flex>
            </Center>
    )
}