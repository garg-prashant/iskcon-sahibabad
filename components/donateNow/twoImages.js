import { Box, Flex, Image, Show } from "@chakra-ui/react"
import femaleWorker from '../../assets/femaleWorker.svg'
import children from '../../assets/children.svg'
import templeSmall from '../../assets/templeSmall.svg'
import temple from '../../assets/temple.svg'
import NextImage from "next/image"

export const TwoImages = ({ leftImage, mobile }) => {

    if (leftImage) {
        return <Box zIndex={9} h="300px">
            <Box border='3px solid white' borderRadius='8px'
                boxShadow={'0 .125rem .25rem rgba(0,0,0,.075)'} maxWidth='240px'
                position={mobile ? 'relative' : 'block'}
                left={mobile ? '-30px' : '0px'}
                top={mobile ? '-40px' : '0px'}
                overflow="hidden" zIndex={10}>
                <Image as={NextImage} src={femaleWorker} alt="worker" />
            </Box>
            <Box position='relative'
                top={mobile ? '-100px' : '-130px'}
                left={mobile ? '10px' : '110px'}
                border='3px solid white' borderRadius='8px'
                boxShadow={'0 .125rem .25rem rgba(0,0,0,.075)'} maxWidth={mobile ? '100px' : '167px'}
                overflow="hidden" zIndex={11}>
                <Image as={NextImage} src={children} alt="worker" />
            </Box>
        </Box>
    }
    return <Box h="300px">
        <Box border='3px solid white'
            borderRadius='8px' position='relative' boxShadow={'0 .125rem .25rem rgba(0,0,0,.075)'}
            left={mobile ? '4px' :'-20px'}
            maxWidth={mobile ? '100px' : '167px'} zIndex={11} overflow="hidden">
            <Image as={NextImage} src={templeSmall} alt="smalltemple" />
        </Box>
        <Box border='3px solid white' position='relative'
            top={mobile ? '-30px' : '-128px'}
            left='30px'
            borderRadius='8px' boxShadow={'0 .125rem .25rem rgba(0,0,0,.075)'}
            maxWidth='240px' overflow="hidden" zIndex={10}>
            <Image as={NextImage} src={temple} alt="temple" />
        </Box>
    </Box>

}

