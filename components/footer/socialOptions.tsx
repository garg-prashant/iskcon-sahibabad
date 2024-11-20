import React, { useMemo } from 'react'
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from 'next/link';
import { navBarData, ctaToLogo } from '../../constants/common';
import { genMapLink } from '../../utils/utils';
import Image from 'next/image';


export default function SocialOptions({ socialData }: any) {

  const xSocialData = useMemo(() => {
    if (socialData) {
      return navBarData.socials.map(item => {
        return {
          cta: item.cta,
          link: item.cta === 'location' ? genMapLink(socialData[item.cta]) : socialData[item.cta]
        }
      })
    }
    return navBarData.socials
  }, [socialData])
  return (<Box position={'relative'} bottom={'22px'}>
    <Flex justifyContent={'space-around'} flexWrap={'wrap'}>
      <Text>© 2023 ISKCON Sahibabad</Text>
      {/* <Text>{socialData?.email}</Text> */}
      <Flex gap={"40px"}>
        {xSocialData.map((item: any) => {
          if (item.link) {
            return <Link href={item.link} key={item.cta} target="_blank">
              <Image src={ctaToLogo[item.cta]} alt={item.cta} />
            </Link>
          }
        })}

      </Flex>

    </Flex>

  </Box>
  )
}
