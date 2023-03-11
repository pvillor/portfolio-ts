import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react"

interface CardProps {
    name: string,
    isWebPage: boolean,
    description: string,
    techs: string[],
    repository: string,
    visit: string
}

export const Card = ({ name, isWebPage, description, techs, repository, visit }: CardProps) => {
    return isWebPage ? (
        <Box _hover={{ transform: 'translateY(-7px)', borderColor: 'gray.100' }} transition='border 0.2s, ease 0s, transform 0.2s' borderWidth='1px' borderColor='gray.50' boxShadow='lg' padding='7' w={['350px', '45%']} mt='6' minH='350px' bgColor='purple.900' borderRadius='10px' color='gray.50'>
            <Heading as='h3' size='md'>{name}</Heading>
            <Flex w='100%' mt='4' flexDirection='column' h='90%' justifyContent='space-between'>
                <Text>{description}</Text>
                {techs.map(tech => <Heading textAlign='center' size='sm'>{tech}</Heading>)}
                <Flex w='100%' justifyContent='space-around'>
                    <Link href={visit}><Button bgColor='purple.500' _hover={{ bgColor: 'purple.600' }}>Visit</Button></Link>
                    <Link href={repository}><Button bgColor='purple.500' _hover={{ bgColor: 'purple.600' }}>Repository</Button></Link>
                </Flex>
            </Flex>
        </Box>
    ) : (
        <Box _hover={{ transform: 'translateY(-7px)', borderColor: 'gray.100' }} transition='border 0.2s, ease 0s, transform 0.2s' borderWidth='1px' borderColor='gray.50' boxShadow='lg' padding='7' w={['350px', '45%']} mt='6' minH='350px' bgColor='purple.900' borderRadius='10px' color='gray.50'>
            <Heading as='h3' size='md'>{name}</Heading>
            <Flex w='100%' mt='4' flexDirection='column' h='90%' justifyContent='space-between'>
                <Text>{description}</Text>
                {techs.map(tech => <Heading textAlign='center' size='sm'>{tech}</Heading>)}
                <Flex w='100%' justifyContent='space-around'>
                    <Link href={repository}><Button bgColor='purple.500' _hover={{ bgColor: 'purple.600' }}>Repository</Button></Link>
                </Flex>
            </Flex>
        </Box>
    )
}