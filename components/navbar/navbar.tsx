import { Text, Flex, Show, useDisclosure, Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Input, DrawerFooter, Center, Box, IconButton } from "@chakra-ui/react"
import Link from "next/link"
import { ctaToLogo, navBarData } from '../../constants/common'
import { genMapLink } from '../../utils/utils'
import Image from "next/image"
import { useMemo } from "react"
import circleCloseIcon from '../../assets/circle_close.svg';
import hamburger from '../../assets/hamburger.svg';
import iskonLogoColor from '../../assets/iskonlogo_color.svg';

const NavBar = ({ socialData }: any) => {

    const xSocialData = useMemo(() => {
        if (socialData) {
            return navBarData.socials.map(item => {
                return {
                    cta: item.cta,
                    link: item.cta === 'location' ? genMapLink(socialData[item.cta]) : socialData[item.cta]
                }
            })
        }
        return navBarData.socials
    }, [socialData])
    const { isOpen, onOpen, onClose } = useDisclosure()
    return <>
        <Show above="501px">
            <Flex p="17px" boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25);" borderRadius="5px"
                justifyContent="space-between" w="90%">
                <Flex gap="40px">
                    {navBarData.navigations.map((item: any) => {
                        return <Text key={item.cta} color="primary" fontSize="16px" fontWeight="700">
                            <Link href={item.link}>
                                {item.cta}
                            </Link>
                        </Text>
                    })}
                </Flex>

                <Flex gap="40px">
                    {xSocialData.map((item: any) => {
                        if (item.link) {
                            return <Link href={item.link} key={item.cta} target="_blank">
                                <Image src={ctaToLogo[item.cta]} alt={item.cta} />
                            </Link>
                        }
                    })}
                </Flex>
            </Flex>
        </Show>
        <Show below="500px">
            <Flex justifyContent={'space-between'} backgroundColor={'#323232'} w={'100%'} alignItems={'center'} py={'2px'} px={'16px'}>
            <Link href={'/'}>
                <Image src={iskonLogoColor} alt="logo" />
            </Link>
                <Text color={'#E3813A'} fontSize={'16.42px'}>ISKCON SAHIBABAD</Text>
            <IconButton backgroundColor={'transparent'} aria-label='menu' icon={<Image src={hamburger} alt="menu"/>} onClick={onOpen} />
            </Flex>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton as={IconButton} icon={<Image src={circleCloseIcon} alt="close"/>} _hover={{background: 'transparent'}}/>
                    <DrawerBody backgroundColor={'#323232'}>
                        <Center mt={'60px'}>
                            <Flex gap="40px" direction={'column'} justifyContent="center">
                                {navBarData.navigations.map((item: any) => {
                                    return <Text key={item.cta} color="primary" fontSize="16px" fontWeight="700">
                                        <Link href={item.link}>
                                            {item.cta}
                                        </Link>
                                    </Text>
                                })}
                            </Flex>

                        </Center>
                        <Center mt={'42px'}>
                            <Flex gap="40px" flexWrap={'wrap'}>
                                {xSocialData.map((item: any) => {
                                    if (item.link) {
                                        return <Box key={item.cta} width={63} border={'1px solid #FFFFFF1A'} padding={"24px 21px"}>
                                            <Link href={item.link}  target="_blank">
                                            <Image src={ctaToLogo[item.cta]} alt={item.cta} />
                                        </Link>
                                            </Box>
                                    }
                                })}
                            </Flex>

                        </Center>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Show>
    </>

}

export default NavBar