import { useMemo, useState } from "react";
import { Flex, Box, Text, Center, Image, Show } from "@chakra-ui/react"
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar as RCalendar, utils } from 'react-modern-calendar-datepicker';
import calendarBG from "../../assets/calendar_bg.svg";
import NextImage from "next/image";

const calendarData = {
    entries: [
        // { date: "2024-11-26", label: "Utpanna Ekadashi" },
        // { date: "2024-11-26", label: "Disappearance Day: Srila Narahari Sarkar Thakur" },
        // { date: "2024-11-27", label: "Disappearance Day: Srila Kaliya Krishna Das" },
        // { date: "2024-11-28", label: "Disappearance Day: Srila Sarang Thakur" },
        // { date: "2024-12-07", label: "Udann Shashthi" },
        { date: "2024-12-26", label: "Saphala Ekadashi" },
    ],
    title: "DATE DETAILS"
}

const addZero = (n: number) => {
    if (n.toString().length == 1) {
        return "0" + n;
    }
    return n
}

const Calendar = () => {
    const [selection, setSelection] = useState<any>(null)

    const handleSelection = (date: any) => {
        const strDate = `${date.year}-${addZero(date.month)}-${addZero(date.day)}`
        const match = calendarData.entries.filter(item => item.date === strDate)
        setSelection(match[0])
    }

    const selectedDays = useMemo(() => {
        return calendarData.entries.map((item: any) => {
            const date = new Date(item.date)
            return {
                day: date.getDate(),
                month: date.getMonth() + 1,
                year: date.getFullYear()
            }
        })
    }, [calendarData])

    return <Flex justifyContent="space-evenly" w="90%" mt="78.72px" mb="100px" flexWrap={'wrap'}>
        <Show below="500px">
            <Text mb={'24px'} className="mobileTextTitle">{calendarData.title}</Text>
        </Show>

        <Box>
            <RCalendar
                disabledDays={selectedDays}
                onDisabledDayError={handleSelection}
            />
        </Box>
        <Center flexDirection="column" w="100%" maxW="700px" justifyContent="top">
            <Show above="501px">
                <Text color="#000" fontSize="28.78px" fontWeight="700" lineHeight="39.141px">{calendarData.title}</Text>
            </Show>
            <Center position="relative" mt="90px" w="70%">
                <Image as={NextImage} src={calendarBG} alt="calender" position="absolute" />
                <Box w="fit-content">
                    {calendarData.entries.map((item: any, index: number) => {
                        return <Flex key={index} borderBottomWidth="2px"
                            borderColor="#000" mb="16px">
                            <Text>{item.date}</Text>
                            <Text ml="43px">{item.label}</Text>
                        </Flex>

                    })}
                </Box>
            </Center>

        </Center>
    </Flex>
}

export default Calendar