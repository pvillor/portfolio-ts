import { Center, Flex, Heading, useDisclosure } from "@chakra-ui/react"
import { Menu } from "./Menu"
import { FaTh } from "react-icons/fa"
import { theme } from "../../styles/theme"

export const Header = () => {
    const { isOpen, onClose, onToggle } = useDisclosure()
    return (
        <Flex borderBottom='1px' borderBottomColor='purple.800' paddingX='8' paddingY='2'>
            <Heading ml='4' size='lg'>Paulo Victor Guerra</Heading>
            <Center ml='auto' onClick={onToggle} as='button' fontSize='2rem'>
                <FaTh color={theme.colors.gray[300]}/>
            </Center>
            <Menu isOpen={isOpen} onClose={onClose}/>
        </Flex>
    )
}