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
import PopupBanner from '../components/banner/banner'

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
      <PopupBanner />
      <Show above='sm'>
        <Header />
      </Show>
      <Center mt={{ base: 0, sm: "61px" }} flexDirection="column">
        <NavBar socialData={socialdata} />
        <VideoPlayer socialData={socialdata} />
        <Text mt="48px" w="90%">
          {socialdata?.metadata?.about}
        </Text>
        <Flex h="auto" w="100%" flexDirection="row" justifyContent="center" alignItems="center" p={4}>
          <Box w="100%" maxW="1200px" mb={8} p={4} borderWidth="1px" borderRadius="8px" boxShadow="md">
            <Text ml="12px" fontSize="20px" fontWeight="700" lineHeight="39px" color="primary">
              Chandan Yatra 2025
            </Text>
            <img
              src="/assets/chandan-yatra.jpeg"
              alt="Chandan Yatra 2025"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                objectFit: 'cover',
                marginTop: '16px'
              }}
            />
          </Box>
          <Box w="100%" maxW="1200px" p={4} borderWidth="1px" borderRadius="8px" boxShadow="md">
            <Text ml="12px" fontSize="20px" fontWeight="700" lineHeight="39px" color="primary">
              First Great yagya on our new temple - Narsimha yagya on 11th May at 4/39, sector 5 Rajendra Nagar Sahibabad evening 5pm 🙏
            </Text>
            <img
              src="/assets/akshaya-tritiya.jpeg"
              alt="Narsimha Yagya"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                objectFit: 'cover',
                marginTop: '16px'
              }}
            />
          </Box>
        </Flex>
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
