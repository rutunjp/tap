import { Stack, VStack, Box, Text } from '@chakra-ui/react'
import ClientTestimonialCard from './ClientTestimonialCard'
import SectionHeading from './SectionHeading'
export default function OurClients() {
  return (
    <Stack
      margin={'auto'}
      paddingY={'4em'}
      paddingX={'8em'}
      justify={'center'}
      align={'center'}
      spacing={16}
      direction={['column', 'row']}
      marginBottom={'10em'}
    >
      <VStack justify={'center'}>
        <SectionHeading headingText="Our Clients" />
        <Text
          textAlign={'center'}
          color={'gray.600'}
          fontSize={'xl'}
          className="section-text"
          paddingY={'3em'}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          dignissimos amet asperiores eaque, est voluptas quas perferendis
          illum 
        </Text>
      </VStack>
      <ClientTestimonialCard />
    </Stack>
  )
}
