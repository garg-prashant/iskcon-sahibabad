import { Image } from "@chakra-ui/react";

const WideImage = ({...props}:any)=>{
    return <Image {...props} 
    h="400px" w="800px"
    borderRadius="40px" objectFit="cover !important"
    alt={props.alt}
    bg="transparent"
    />
}

export default WideImage