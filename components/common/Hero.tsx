import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
export default function Hero() {
  const MotionHeading = motion(Heading)
  const MotionText = motion(Text)
  return (
    <Stack
      minH={'90vh'}
      align={'center'}
      direction={{ base: 'column', md: 'row' }}
    >
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <MotionHeading
            color={'red.400'}
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
          >
            <MotionText
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}
              as="s"
            >
              Business Cards
              <br />
            </MotionText>
            <MotionText
              color={'green.500'}
              fontWeight={700}
              fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}
            >
              Smart Cards
              <br />
            </MotionText>
          </MotionHeading>
          <Text
            fontSize={{ base: 'md', lg: 'lg' }}
            color={'gray.600'}
            letterSpacing={1.3}
            fontWeight={400}
          >
            The Future Business Card
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
            >
              Create your Card
            </Button>
            <Button rounded={'full'} bg="gray.100" _hover={{ bg: 'gray.300' }}>
              Learn More
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          padding={'1em'}
          margin={'auto'}
          alt={'Login Image'}
          objectFit={'cover'}
          src={'/images/heroCard.svg'}
        />
      </Flex>
    </Stack>
  )
}
