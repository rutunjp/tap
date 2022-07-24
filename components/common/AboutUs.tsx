import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import { IoEarthOutline } from 'react-icons/io5'
import { BsGraphUp } from 'react-icons/bs'
import { BiRupee } from 'react-icons/bi'
import { MdLoop } from 'react-icons/md'
import { ReactElement } from 'react'

interface FeatureProps {
  text: string
  iconBg: string
  icon?: ReactElement
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack py={2} direction={'row'} align={'center'}>
      <Flex
        w={9}
        h={9}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

export default function AboutUs() {
  return (
    <Container maxW={'5xl'} py={20}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading as="h4" fontSize="22px">
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.200',
                zIndex: -1,
              }}
            >
              About Us <br />
            </Text>
          </Heading>
          <Heading as="h3" fontSize="36px">
            Your mini website in a card
          </Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Gone are the days to worry about your Business cards getting
            outnumbered at a large business meet.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.300')}
              />
            }
          >
            <Feature
              icon={
                <Icon as={IoEarthOutline} color={'green.500'} w={5} h={5} />
              }
              iconBg={'green.100'}
              text={'Direct Whatsapp Message'}
            />
            <Feature
              icon={<Icon as={BsGraphUp} color={'blue.500'} w={5} h={5} />}
              iconBg={'blue.100'}
              text={'Receive Payments'}
            />
            <Feature
              icon={<Icon as={BiRupee} color={'yellow.500'} w={5} h={5} />}
              iconBg={'yellow.100'}
              text={'NFC & QR Enabled'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}
