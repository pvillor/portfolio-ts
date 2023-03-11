import { Center, Flex, Heading, Image, Link } from "@chakra-ui/react"

export const Footer = () => {
    return (
        <Center w='100%' display='flex' flexDirection='column' paddingBottom='10'>
            <Flex w='100%' borderTop='1px' borderTopColor='purple.800' paddingX='8' paddingY='2' justifyContent='space-evenly' alignItems='flex-end'>
                <Link href="https://github.com/pvillor"><Image bgColor='gray.50' borderRadius='50%' w='50px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"/></Link>
                <Heading size={['md', 'lg']} mb='2' mt='2'>Paulo Victor Guerra</Heading>
                <Link href="https://www.linkedin.com/in/paulovictorguerra/"><Image bgColor='gray.50' w='50px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"/></Link>
            </Flex>
            <Heading size='8px' textAlign={['center']}>Desenvolvido por Paulo Victor Guerra - 2022 - Todos os direitos reservados</Heading>
        </Center>
    )
}