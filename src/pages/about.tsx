import type { NextPage } from 'next'

import { Heading, Flex, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'

const About: NextPage = () => {

  return (
    <Flex
      direction="row"
      width="100%"
      height="90%"
      alignItems="center"
      justifyContent="space-between"
      padding="2rem"
    >
      <Flex
        width="66%"
        height="100%"
        direction="column"
        justifyContent="space-between"
        gap="3rem"
      >
          <Heading>
              About Bet for Good
          </Heading>

          <Text>

            Good for bet
            Bet with heart.
            // TODO: PITCH HERE
              With this boilerplate, you get a 👉mobile friendly👈 DApp, a few example pages, a scalable header,
              the wallet connection + one example transaction done for you🤌.
          </Text>

      </Flex>
    </Flex>
  )
}

export default About
