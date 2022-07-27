import { Stack, Image, Text, VStack } from '@chakra-ui/react'
import SectionHeading from './SectionHeading'
export default function EcoFriendly() {
  return (
    <Stack
      direction={['column', 'row']}
      justify={'center'}
      paddingY={'3em'}
      paddingX={'6em'}
    >
      <Image
        maxW={['80%', '40%']}
        src="/images/recycle.svg"
        alt="eco-friendly illustration"
        paddingBottom={'3em`'}
      />
      <VStack>
        <SectionHeading headingText="Eco-Friendly" />
        <Text
          paddingTop={'3em'}
          textAlign={'center'}
          color={'gray.600'}
          fontSize={'xl'}
          className="section-text"
        >
          Every Year 100 million plus business cards are printed annually in
          India alone, out of which 90% of these are disposed away within a week
          of receiving them. Think of all the firs and pines — a precious and
          finite resource — that are being used up and disposed off, after
          serving little to no purpose.
        </Text>
      </VStack>
    </Stack>  
  )
}
