import React from 'react'
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import iskonLogo from '../../assets/iskonLogo.svg';
import founderPicture from '../../assets/founderPicture.svg';

export default function IskonDetails({socialData}:any) {
  return (<Flex justifyContent={'center'} direction={'column'} alignItems={'center'}>
  <Box maxWidth={'70vw'} w={"100%"}>
      <Flex justifyContent={'space-between'}>
          <Flex gap={"16px"}>
              <Box>
                  <Image as={NextImage} src={iskonLogo} alt="logo" />
              </Box>
              <Box>
                  <Text fontWeight={'bold'}>ISKCON</Text>
                  <Text mt={'8px'} fontSize={'sm'} maxW={300}>{socialData?.metadata?.address}</Text>
              </Box>
          </Flex>
          <Flex gap={"16px"}>
              <Box>
                  <Image as={NextImage} src={founderPicture} alt="logo" />
              </Box>
          </Flex>
      </Flex>
  </Box>
  <Flex >
      <Box borderBottom={'1px'} w={'100px'} pt={'24px'} />
  </Flex>
</Flex>
  )
}
