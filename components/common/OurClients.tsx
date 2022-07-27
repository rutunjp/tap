import { Stack, VStack, Box, Text, SimpleGrid, Image } from '@chakra-ui/react'
import SectionHeading from './SectionHeading'
export default function OurClients() {
  return (
    <Stack
      margin={'auto'}
      paddingY={'4em'}
      paddingX={'8em'}
      justify={'center'}
      align={'center'}
      spacing={32}
      direction={['column', 'row']}
      marginBottom={'10em'}
    >
      <VStack maxW={'50%'} justify={'center'}>
        <SectionHeading headingText="Our Clients" />
        <Text
          textAlign={'center'}
          color={'gray.600'}
          fontSize={'xl'}
          className="section-text"
          paddingY={'3em'}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          dignissimos amet asperiores eaque, est voluptas quas perferendis illum
        </Text>
      </VStack>

      <Stack
        justifyContent={'center'}
        maxW={'50%'}
        direction={['row']}
        spacing="50px"
      >
        <Image maxW={24} src="/images/netflix.svg" alt="tesla"></Image>
        <Image
          color={'gray.200'}
          maxW={24}
          src="/images/tesla.svg"
          alt="tesla"
        ></Image>
        <Image maxW={24} src="/images/dell.svg" alt="tesla"></Image>
      </Stack>
    </Stack>
  )
}
