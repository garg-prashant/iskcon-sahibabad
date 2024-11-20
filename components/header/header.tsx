import { Box, Button, Center, Flex, Text, Image, Modal, ModalOverlay, ModalContent, ModalBody, useDisclosure } from "@chakra-ui/react"
import NextImage from "next/image"
import logo from "../../assets/logo.svg"
import donate_logo from "../../assets/donate_logo.svg"
import Link from "next/link"

const headerData = {
    title: "ISKCON SAHIBABAD",
    donateCTA: "DONATE NOW",
    navigations: [
        // { cta: "Live Darshan", link: "/live_darshan" },
        // { cta: "Blog", link: "/blog" },
        // { cta: "Contact Us", link: "/contactus" },
    ]
}

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra UI's modal state handlers

    return (
        <>
            <Flex p="15px 11px 11px 53px" justifyContent="space-between" alignItems="center">
                <Flex alignItems="center">
                    <Box>
                        <Image as={NextImage} src={logo} w="75px" h="55px" alt="logo" />
                    </Box>
                    <Text ml="24px" fontSize="32.842px" fontWeight="700" lineHeight="39px" color="primary">
                        {headerData.title}
                    </Text>
                </Flex>
                <Flex gap="27px">
                    {headerData.navigations.map((item: any) => {
                        return (
                            <Center key={item.cta}>
                                <Link href={item.link}>
                                    <Text fontSize="15px" fontWeight="700" color="primary">{item.cta}</Text>
                                </Link>
                            </Center>
                        );
                    })}
                    <Center
                        borderRadius="10px"
                        boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                        px="42px"
                        h="100px"
                        position="relative"
                        overflow="hidden"
                    >
                        <Button
                            background="primaryDark"
                            w="215.8px"
                            h="52px"
                            borderRadius="6.5px"
                            onClick={onOpen} // Open the modal when clicked
                        >
                            <Text fontSize="16.9px" color="#fff" fontWeight="700" lineHeight="52px">
                                {headerData.donateCTA}
                            </Text>
                        </Button>
                        <Image
                            position="absolute"
                            right={-6}
                            as={NextImage}
                            src={donate_logo}
                            h="99.53px"
                            alt="logo"
                            w="161.813px"
                        />
                    </Center>
                </Flex>
            </Flex>

            {/* Modal */}
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody p="0">
                        {/* Use the 7.jpeg image */}
                        <Image src="/assets/7.jpeg" alt="Popup Image" w="100%" />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default Header;
