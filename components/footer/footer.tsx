import { Box, Flex } from "@chakra-ui/react";
import footer from '../../assets/footer.svg';
import IskonDetails from "./iskonDetails";
import SocialOptions from "./socialOptions";



const Footer = ({socialData}:any) => {

    return <Box w={'100%'} title="footer"
        aria-label="footer"
        maxHeight={"424px"}
        height={"100%"}
        bg={'black'} color={'white'}
        px="24px"
        >
        <br/>
        <Box backgroundImage={`url(${footer.src})`} height={310} backgroundSize={'contain'} backgroundRepeat={'no-repeat'} backgroundPosition={'bottom'}>
            <Flex direction={'column'} gap={'24px'} justifyContent={'space-around'} h={'100%'}>
                <IskonDetails socialData={socialData}/>
                <Flex justifyContent={'center'} position={'relative'} top={'30px'}>
                    <Box borderBottom={'1px'} maxWidth={'1170px'} w={'100%'}/>
                </Flex>
                <SocialOptions socialData={socialData}/>

            </Flex>
        </Box>

    </Box>
}

export default Footer;