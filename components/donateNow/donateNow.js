import { Box, Center, Flex, Show, Text, Modal, ModalOverlay, ModalContent, ModalBody, useDisclosure } from "@chakra-ui/react";
import { TwoImages } from "./twoImages";
import MobileTwoImages from './mobileTwoImages';

const DonateNow = () => {
    const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra UI's modal state manager

    const handleClick = () => {
        console.log("Donate Now clicked!"); // For debugging
        onOpen(); // Open the modal
    };

    return (
        <>
            <Show above="501px">
                <Box width="90%" position="relative" mt="69px" mb="80px">
                    <Box
                        width="90%"
                        height="300px"
                        borderWidth="3px"
                        position="absolute"
                        right="70px"
                        top="35px"
                        zIndex={1}
                        className="gradient-2"
                    />
                    <Flex justifyContent="space-between">
                        <TwoImages leftImage={true} />
                        <Text
                            className="donateNowText"
                            ml="-20px"
                            onClick={handleClick} // Attach click event
                            cursor="pointer"
                        >
                            Donate now
                        </Text>
                        <TwoImages leftImage={false} />
                    </Flex>
                </Box>
            </Show>
            <Show below="500px">
                <Text mb="62px" mt="100px" className="mobileTextTitle">DONATE</Text>
                <Center className="gradient-3" w="90%">
                    <Flex direction="column" m="16px">
                        <MobileTwoImages leftImage={true} />
                        <Flex
                            justifyContent="center"
                            boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px -1px 5px 0px rgba(0, 0, 0, 0.25) inset"
                            p="17px 13px"
                            mb="58px"
                        >
                            <Center
                                backgroundColor="#FF6436"
                                width={274}
                                height={66}
                                borderRadius="7px"
                                onClick={handleClick} // Attach click event
                                cursor="pointer"
                            >
                                <Text fontSize="25px" color="#FFF">DONATE</Text>
                            </Center>
                        </Flex>
                        <MobileTwoImages />
                    </Flex>
                </Center>
            </Show>

            {/* Modal */}
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody p="0">
                        {/* Show the 7.jpeg image */}
                        <Box>
                            <img src="/assets/7.jpeg" alt="Popup Image" style={{ width: "100%" }} />
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default DonateNow;
