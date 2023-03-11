import { Center, Flex, Heading, Image, Link } from "@chakra-ui/react"

export const Header = () => {

    return (
        <Flex borderBottom='1px' borderBottomColor='purple.800' paddingX='8' paddingY='2'>
            <Heading ml='4' size='lg'>Paulo Victor Guerra</Heading>
            <Center ml='auto'>
                <Link href='https://www.linkedin.com/in/paulovictorguerra'><Image src='https://img.shields.io/badge/-LinkedIn-%23007785?style=for-the-badge&logo=linkedin&logoColor=white' /></Link>
                <Link href='mailto:pvillor@gmail.com'><Image src='https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white' /></Link>
            </Center>
        </Flex>
    )
}