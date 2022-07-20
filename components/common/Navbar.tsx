import { ReactNode } from 'react'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Icon,
  Img,
  textDecoration,
  color,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const Links = ['About Us', 'Products', 'Tap & Earn', 'How It Works?']

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg={'white.100'} px={12} py={4}>
        <Flex h={16} as={'nav'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack width="60%">
            <Link mr={'auto'}>
              <Img
                h={['36px', '48px']}
                p={['5px']}
                src="/images/retapSvgDark.svg"
                alt="retap logo"
              />
            </Link>
            <HStack
              spacing={6}
              justify={'flex-end'}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <Link color={'gray.600'} _hover={{ color: 'black' }} key={link}>
                  {link}
                </Link>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Stack spacing={4}>
            {Links.map((link) => (
              <Link key={link}>{link}</Link>
            ))}
          </Stack>
        ) : null}
        <Divider background={'blackAlpha.300'} />
      </Box>
    </>
  )
}
