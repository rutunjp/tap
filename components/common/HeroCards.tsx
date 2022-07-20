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
        <HeroCardPersonalised />
        <HeroCardSmart />
      </Stack>
      <Button
        fontSize="24px"
        p={8}
        w={'inherit'}
        bg={'blue.400'}
        color={'white'}
        rounded={'xl'}
        boxShadow={'0 5px 20px 0px rgb(144 205 244 / 43%)'}
        _hover={{
          bg: 'blue.500',
        }}
        _focus={{
          bg: 'blue.500',
        }}
      >
        Create Your Design
        <Icon m={4} boxSize={5} as={ArrowRightIcon}></Icon>
      </Button>
    </VStack>
  )
}
