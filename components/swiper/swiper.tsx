import React, { useMemo, useState, useRef } from "react";
import { Box, Center, Flex, Show, Text } from '@chakra-ui/react';

import ReactCardCarousel from "react-card-carousel";
import WideImage from "./wideImage";
import arrowLeft from "../../assets/arrow_left.svg"
import arrowRight from "../../assets/arrow_right.svg"
import Image from "next/image";

function CONTAINER_STYLE() {
    return {
        position: "relative",
        height: "100vh",
        width: "100%",
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "middle"
    };
}

function CARD_STYLE() {
    return {
        height: "200px",
        width: "600px",
        paddingTop: "80px",
        textAlign: "center",
        background: "transparent",
        color: "#FFF",
        fontFamily: "sans-serif",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "10px",
    };
}

const Swiper = ({ socialData }: any) => {

    const carouselRef = useRef<any>(null);

    const [goToSlide, setGoToSlide] = useState(1)

    const handelPrev = () => {
        if (goToSlide > 0) {
            setGoToSlide(goToSlide - 1)
        } else {
            setGoToSlide(slides.length - 1)
        }
        carouselRef?.current.prev();
    }

    const handelNext = () => {
        if (goToSlide === slides.length - 1) {
            setGoToSlide(0)
        } else {
            setGoToSlide(goToSlide + 1)
        }
        carouselRef?.current.next();
    }

    const slides = useMemo(() => {
        const headerImages = socialData?.metadata?.header_images
        if (headerImages) {
            return headerImages.map((item: any, index: number) => {
                const x = item.split("/")
                return `https://drive.google.com/uc?export=view&id=${x[x.length - 2]}`
            })
        }
        return []
    }, [socialData])

    return (<>
        <Show below="500px">
            <Center>
            <Text className="mobileTextTitle" 
            width={'fit-content'} 
            mt={'24px'}>Gallary</Text>
            </Center>
        </Show>
        <Flex position="relative" flexDirection="column" h="500px">
            <ReactCardCarousel ref={carouselRef}
            // autoplay={true} autoplay_speed={3000}
            >
                {["1.JPG","2.JPG","3.JPG","4.JPG","5.jpeg","6.jpeg"].map((item: any, index: number) => {
                    return <WideImage src={`/assets/${item}`} alt={index} key={index} />
                })}
            </ReactCardCarousel>

            <Center gap="10px" position="absolute" zIndex={999} bottom={0} margin="0 auto" left={0} right={0}>
                <Box onClick={handelPrev} mr="6px" cursor="pointer">
                    <Image src={arrowRight} height={24} width={24} alt="left" />
                </Box>
                {slides.map((item: any, index: number) => {
                    return <Box boxSize="12px" borderRadius="full" bg={index === goToSlide ? "#FF8080" : "#999999"} key={index} />
                })}
                <Box onClick={handelNext} ml="6px" cursor="pointer">
                    <Image src={arrowLeft} height={24} width={24} alt="right" />
                </Box>
            </Center>
        </Flex>
    </>
    );
};

export default Swiper;
