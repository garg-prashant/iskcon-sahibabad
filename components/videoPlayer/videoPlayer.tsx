import { Center, Show } from "@chakra-ui/react"
import { useMemo } from "react"

const VideoPlayer = ({socialData}:any) =>{
    const videoLink = useMemo(()=>{
        const link = socialData?.metadata?.construction_video_link;
        if(link){
            const x = link.split("/")
            return `https://drive.google.com/uc?export=view&id=${x[x.length-2]}`
        }
        return null
    },[socialData])
    return <>
    <Show above="501px">
    <Center mt="48px">
        {videoLink && <video poster="/assets/vid.png"
        width="100%" height="240" loop muted autoPlay>
            <source src={videoLink} type="video/mp4"/>
        </video>}
    </Center>
    </Show>
    <Show below="500px">
    <Center>
        {videoLink && <video width="100%" height="240" loop muted autoPlay>
            <source src={videoLink} type="video/mp4"/>
        </video>}
    </Center>
        
    </Show>
    </>
}

export default VideoPlayer