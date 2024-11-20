import type { NextPage } from 'next'
import { Center, Flex, Text, Box, Show } from '@chakra-ui/react'
import Header from '../components/header/header'
import NavBar from '../components/navbar/navbar'
import Carousal from '../components/carousal/carousal'
import Events from '../components/events/events'
import DonateNow from '../components/donateNow/donateNow'
import Calendar from '../components/calender/calendar'
import Footer from '../components/footer/footer'
import Cards from '../components/cards/cards'
import { useEffect, useState } from "react"
import axios from "axios"
import VideoPlayer from '../components/videoPlayer/videoPlayer'
import CarousalV2 from "../components/swiper/swiper"

const Home: NextPage = () => {
  const [socialdata, setSocialData] = useState<any>({});
  const getSocialDetails = () => {
    axios.get('/api/social_details').then(res => {
      setSocialData(res.data)
    }).catch(e => {
      console.log(e)
    })

    //   axios.get('/api/temple_status').then(res => {
    //     console.log("temple_status", res)
    // }).catch(e => {
    //     console.log(e)
    // })
  }

  useEffect(() => {
    getSocialDetails()
  }, [])

  return (
    <>
      <Show above='sm'>
        <Header />
      </Show>
      <Center mt={{ base: 0, sm: "61px" }} flexDirection="column">
        <NavBar socialData={socialdata} />
        <VideoPlayer socialData={socialdata} />
        <Text mt="48px" w="90%">
          {socialdata?.metadata?.about}
        </Text>
        <Box h="500px" w="100%">
          <CarousalV2 socialData={socialdata} />
        </Box>
        {/* <Carousal socialData={socialdata}/> */}
        {/* <Events /> */}
        <DonateNow />
        <Cards />
        <Calendar />
      </Center>
      <Footer socialData={socialdata} />
    </>
  )
}

export default Home
