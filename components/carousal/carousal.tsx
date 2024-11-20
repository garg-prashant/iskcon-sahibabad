// @ts-nocheck
import React, { useMemo, useState } from "react";
import dynamic from 'next/dynamic'
import { config } from "react-spring";

const RCarousel = dynamic(() => import("react-spring-3d-carousel"), {
    ssr: false,
})
import WideImage from "./wideImage";
import { Box, Center, Text } from "@chakra-ui/react";
import arrowLeft from "../../assets/arrow_left.svg"
import arrowRight from "../../assets/arrow_right.svg"
import Image from "next/image";

const state = {
    offsetRadius: 3,
    showNavigation: false,
    enableSwipe: true,
    config: config.slow
};


const Carousel = ({socialData}:any) => {
    const [goToSlide, setGoToSlide] = useState(1)    
    const slides = useMemo(()=>{
        const headerImages= socialData?.metadata?.header_images
        if(headerImages){
            return headerImages.map((item, index)=> {
                const x = item.split("/")
                return {
                        content: <WideImage src={`https://drive.google.com/uc?export=view&id=${x[x.length-2]}`} alt={index} />,
                        key: index, 
                        discription: ""
                    }
            })
        }
        return []
    },[socialData])



    slides.map((slide, index) => {
        return { ...slide, onClick: () => setGoToSlide(index) };
    });

    const handelPrev = ()=>{
        if(goToSlide > 0){
            setGoToSlide(goToSlide - 1)
        }else{
            setGoToSlide(slides.length - 1)
        }
    }

    const handelNext = ()=>{
        if(goToSlide === slides.length - 1){
            setGoToSlide(0)
        }else{
            setGoToSlide(goToSlide + 1)
        }
    }

    return (
        <Box w="90%" mt="48px">
        <Box h="400px" flexDirection="column" w="100%" 
        // overflow="hidden"
        >
            <RCarousel
                goToSlideDelay={100}
                slides={slides}
                goToSlide={goToSlide}
                offsetRadius={state.offsetRadius}
                showNavigation={state.showNavigation}
                animationConfig={state.config}
            />
        </Box>
        <Center gap="10px" mt="36px">
            <Box onClick={handelPrev} mr="6px" cursor="pointer">
            <Image src={arrowRight} height={24} width={24} alt="left"/>
            </Box>
            {slides.map((item:any, index:number)=>{
                return <Box boxSize="12px" borderRadius="full" bg={index === goToSlide ? "#FF8080" : "#999999"} key={index}/>
            })}
            <Box onClick={handelNext} ml="6px" cursor="pointer">
            <Image src={arrowLeft} height={24} width={24} alt="right"/>
            </Box>
        </Center>
        <Center mt="24px">
            <Text fontSize="14px" fontWeight="600" letterSpacing="1.4px">
                {slides[goToSlide]?.discription}
            </Text>
        </Center>
       </Box>
    );
}

export default Carousel