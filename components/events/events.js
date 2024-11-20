import { Flex, Box, Text } from "@chakra-ui/react"
import Image from "next/image"
import dot from '../../assets/dot.svg'
import events from '../../assets/events.svg'

const eventsData = [1, 'UPCOMING', 2, 'Events', 3];

const Events = () => {
    return <Flex justifyContent="space-between" width={"90%"} mt={"69px"} height={449.324}>
        {eventsData.map(item => {
            if (isNaN(item)) {
                return <Flex key={item} py={"75px"} direction={'column'} alignItems={'center'}>
                    <Box w={"23px"}>
                        <Image src={dot} alt="dot" />
                    </Box>
                </Flex>
            } else {
                return <Box key={item} >
                    <Image src={events} alt="event" />
                </Box>
            }
        })}
    </Flex>
}

export default Events