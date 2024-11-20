import { Box, Flex,Text, Link, Show, Button, Center, IconButton } from "@chakra-ui/react"
import philosophyImage from "../../assets/philosophy.svg"
import communityImage from "../../assets/community.svg"
import meditaionImage from "../../assets/meditation.svg"
import next_circle from "../../assets/next_circle.svg"
import prev_circle from "../../assets/prev_circle.svg"
import Image from "next/image"
import { useState } from "react"


const cardsData = [
    {
        title: "Daily Worship Services ",
        description: "ISKCON temples hold daily worship services where devotees gather to sing kirtans (devotional songs) and perform aarti (offering of lamps) to Lord Krishna and other deities.",
        link: "#",
        image: meditaionImage,
        bg: "#fff",
        color: "#000",
    },
    {
        title: "Festivals",
        description: "ISKCON celebrates various Hindu and Vaishnava festivals with great enthusiasm. Some of the major festivals include Janmashtami (Lord Krishna's appearance day), Gaura Purnima (appearance day of Chaitanya Mahaprabhu), and Ratha Yatra (chariot festival).",
        link: "#",
        image: communityImage,
        bg: "#FF6436",
        color: "#fff"
    },
    {
        title: "Harinama Sankirtan",
        description: "Devotees engage in public chanting of the Hare Krishna mantra, known as Harinama Sankirtan, as a way to spread the message of Krishna consciousness.",
        link: "#",
        image: philosophyImage,
        bg: "#5D5D5D",
        color: "#fff"
    }
]

const Cards = ()=>{
    const [selectedCard, setSelectedCard] = useState<number>(0)
    return(<>
        <Show above="501px">
        <Flex justifyContent="space-between" w="90%" mt="60px" gap={'36px'}>
            {cardsData.map((card:any)=>{
                return <Flex key={card.title} boxSize="433px"
                as={Link} href={card.link}
                p="40px" flexDirection="column" alignItems="center" bg={card.bg}
                justifyContent="space-evenly" borderRadius="6.88px" className="shadow" color={card.color}
                >
                    <Text>{card.title}</Text>
                    <Text noOfLines={3}>{card.description}</Text>
                    <Image src={card.image} alt="img"/>
                </Flex>
            })}
        </Flex>

        </Show>
        <Show below="500px">
            <Text className="mobileTextTitle" my="60px">Join us</Text>
        <Center w={'90%'}>
        <Flex key={cardsData[selectedCard].title} boxSize="433px"
                as={Link} href={cardsData[selectedCard].link}
                p="40px" flexDirection="column" alignItems="center" bg={cardsData[selectedCard].bg}
                justifyContent="space-evenly" borderRadius="6.88px" className="shadow" color={cardsData[selectedCard].color}
                >
                    <Text>{cardsData[selectedCard].title}</Text>
                    <Text noOfLines={3}>{cardsData[selectedCard].description}</Text>
                    <Image src={cardsData[selectedCard].image} alt="img"/>
                </Flex>
           
        </Center>
        <Flex justifyContent={'center'} gap={'32px'} mt={'32px'}>
               {selectedCard !== 0 && <IconButton transform={'rotate(180deg)'} aria-label="prev" borderRadius={'16px'} icon={<Image src={prev_circle} alt="prev"/>} onClick={()=> setSelectedCard((prev)=> prev-1)}></IconButton>}
                {selectedCard !==  cardsData.length - 1 && <IconButton icon={<Image src={next_circle} alt="next"/>} borderRadius={'16px'} aria-label="next" onClick={()=> setSelectedCard((prev)=> prev+1)}></IconButton>}

        </Flex>

        </Show>
    </>
    )    
}
export default Cards