import { Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react'

export default function CreateForm() {
  return (
    <VStack maxWidth={['md']} margin="auto" >
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input type={'text'}></Input>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>LinkedIn url</FormLabel>
        <Input type={'url'}></Input>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Whatsapp url</FormLabel>
        <Input type={'url'}></Input>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input type={'email'}></Input>
      </FormControl>
      <FormControl>
        <FormLabel>Photo</FormLabel>
        <Input type={'file'}></Input>
      </FormControl>
      <FormControl>
        <Button bg={'blue.400'} color={'white'} type="submit">
          Create Your Card!
        </Button>
      </FormControl>
    </VStack>
  )
}
