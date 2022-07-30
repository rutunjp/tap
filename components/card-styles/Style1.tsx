import { Avatar, Box, Heading, Text, VStack } from '@chakra-ui/react'

export default function Style1() {
  return (
    <VStack maxW={'md'} justify={'center'} bg={'#4DA7E9'} borderRadius="2xl">
      <Avatar width={'64px'} height={'64px'} />
      <Heading color={'white'}>Dipan Parikh</Heading>
      <VStack color={'white'}>
        <Text>Sr. Manager</Text>
        <Text>JP Morgan</Text>
      </VStack>
    </VStack>
  )
}
