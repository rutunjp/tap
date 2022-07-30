import { Button } from '@chakra-ui/react'

export default function btnCreateCard() {
  return (
    <Button
      display={{ base: 'none', md: 'inline-flex' }}
      fontSize={'sm'}
      fontWeight={600}
      color={'white'}
      bg={'blue.400'}
      _hover={{
        bg: 'blue.500',
      }}
    >
      Create your Smart Card
    </Button>
  )
}
