import { Box, Button, Heading, Text } from "@chakra-ui/react"

export const Card = () => {
    return (
        <Box _hover={{ transform: 'translateY(-7px)', borderColor: 'gray.100' }} transition='border 0.2s, ease 0s, transform 0.2s' borderWidth='1px' borderColor='gray.50' boxShadow='lg' padding='7' w={['330px', 'auto']}>
            <Heading as='h3' size='md'>Project</Heading>
            <Box w='100%' mt='4'>
                <Text>Web Page</Text>
                {/* {techs.map(tech => <Text>tech.name</Text>)} */}
                <Button>Visit</Button>
                <Button>Repository</Button>
            </Box>
        </Box>
    )
}