import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, Link } from "@chakra-ui/react";
import { theme } from "../../styles/theme"

interface MenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export const Menu = ({ isOpen, onClose }: MenuProps) => {
    return (
        <Drawer placement='top' onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay mt='8vh'/>
            <DrawerContent ml='auto' mt='80px' w={['450px', '350px']}>
                <DrawerHeader borderBottomWidth='1px' borderColor='purple.700' bgColor='gray.900' color='gray.300'>Menu</DrawerHeader>
                <DrawerBody bgColor='gray.900'>
                    <Flex align='center' flexDirection='column' mt='10px'>
                        <Link ml='4' marginBottom='4' bgColor={theme.colors.purple[500]} href='sobreMim' w='100%' h='30px' borderRadius='5px' _hover={{cursor: 'pointer', bgColor: theme.colors.purple[600]}}>
                            <Heading as='h2' fontSize='lg' textAlign='center' mt='1' color='#f5f5f5'>Sobre mim</Heading>
                        </Link>
                        <Link ml='4' marginBottom='4' bgColor={theme.colors.purple[500]} href='sobreMim' w='100%' h='30px' borderRadius='5px' _hover={{cursor: 'pointer', bgColor: theme.colors.purple[600]}}>
                            <Heading as='h2' fontSize='lg' textAlign='center' mt='1' color='#f5f5f5'>Tecnologias</Heading>
                        </Link>
                        <Link ml='4' marginBottom='4' bgColor={theme.colors.purple[500]} href='sobreMim' w='100%' h='30px' borderRadius='5px' _hover={{cursor: 'pointer', bgColor: theme.colors.purple[600]}}>
                            <Heading as='h2' fontSize='lg' textAlign='center' mt='1' color='#f5f5f5'>Certificações</Heading>
                        </Link>
                        <Link ml='4' marginBottom='4' bgColor={theme.colors.purple[500]} href='sobreMim' w='100%' h='30px' borderRadius='5px' _hover={{cursor: 'pointer', bgColor: theme.colors.purple[600]}}>
                            <Heading as='h2' fontSize='lg' textAlign='center' mt='1' color='#f5f5f5'>Projetos</Heading>
                        </Link>
                        <Link ml='4' marginBottom='4' bgColor={theme.colors.purple[500]} href='sobreMim' w='100%' h='30px' borderRadius='5px' _hover={{cursor: 'pointer', bgColor: theme.colors.purple[600]}}>
                            <Heading as='h2' fontSize='lg' textAlign='center' mt='1' color='#f5f5f5'>Contato</Heading>
                        </Link>
                    </Flex>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}