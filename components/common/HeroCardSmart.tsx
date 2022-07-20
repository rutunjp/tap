import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react'
import { CheckIcon, CloseIcon, ArrowRightIcon } from '@chakra-ui/icons'

export default function HeroCardSmart() {
  return (
    <Center py={6}>
      <Box
        minW={'330px'}
        w={'full'}
        bg={'white'}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
      >
        <Stack textAlign={'center'} p={6} color={'white'} align={'center'}>
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text color={'blackAlpha.800'} fontSize={'4xl'} fontWeight={'bold'}>
              Smart
            </Text>
          </Stack>{' '}
          <Text m={0} color={'gray.500'} fontSize={'2xl'} fontWeight={'medium'}>
            Tap Card
          </Text>
        </Stack>

        <Box bg={'white'} px={6} py={10}>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              NFC Enabled
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              QR Code
            </ListItem>
            <ListItem>
              <ListIcon as={CloseIcon} color="red.300" />
              Custom Design
            </ListItem>
            <ListItem>
              <ListIcon as={CloseIcon} color="red.300" />
              Limited to 5 iterations
            </ListItem>
          </List>

          <Button
            mt={10}
            w={'full'}
            bg={'green.400'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: 'green.500',
            }}
            _focus={{
              bg: 'green.500',
            }}
          >
            Create Your Design
          </Button>
        </Box>
      </Box>
    </Center>
  )
}
