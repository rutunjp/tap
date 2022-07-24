import {
  Stack,
  Box,
  Heading,
  Text,
  HStack,
  Button,
  VStack,
  useBreakpointValue,
  Icon,
} from '@chakra-ui/react'
import HeroCardSmart from './HeroCardSmart'
import HeroCardPersonalised from './HeroCardPersonalised'
import { ArrowRightIcon } from '@chakra-ui/icons'
import SectionHeading from './SectionHeading'
export default function HeroCards() {
  return (
    <VStack className="HeroCards" justify={'center'} paddingY={'3em'}>
      <SectionHeading headingText="Our Products" />

      <Stack
        direction={['column', 'row']}
        paddingTop={12}
        paddingBottom={14}
        w="full"
        spacing={16}
        justify={'center'}
      >
        <HeroCardSmart />
        <HeroCardPersonalised />
      </Stack>
    </VStack>
  )
}
