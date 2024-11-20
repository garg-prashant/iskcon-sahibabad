import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { TwoImages } from './twoImages'
import { ClassNames } from '@emotion/react'

export default function MobileTwoImages({leftImage}) {
  if (leftImage) {
    return (
      <Flex>
        <TwoImages mobile={true} leftImage={true}/>
        <Text maxWidth={'177px'} textAlign={'left'} className='mobileTextDonation'>
        The International Society for Krishna Consciousness (ISKCON), commonly known as the Hare Krishna movement, is a prominent global spiritual organization founded by A.C. Bhaktivedanta Swami Prabhupada in 1966. Bhaktivedanta Swami Prabhupada in 1966. 
        </Text>
      </Flex>
    )
  } 
    return (
      <Flex>
        <Text maxWidth={'177px'} textAlign={'left'} className='mobileTextDonation'>
        The International Society for Krishna Consciousness (ISKCON), commonly known as the Hare Krishna movement, is a prominent global spiritual organization founded by A.C. Bhaktivedanta Swami Prabhupada in 1966. Bhaktivedanta Swami Prabhupada in 1966. 
        </Text>
        <TwoImages mobile={true} leftImage={false}/>
      </Flex>
    )

}
