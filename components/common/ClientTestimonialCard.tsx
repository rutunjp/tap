import {
  Box,
  VStack,
  Image,
  Heading,
  Button,
  Flex,
  Grid,
  Spacer,
  Text,
  List,
  ListItem,
} from '@chakra-ui/react'
import { Stack } from 'framer'

export default function ClientTestimonialCard() {
  return (
    <Grid templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']} gap={6}>
      <VStack>
        <Image
          className="client-pic"
          maxW={'12em'}
          borderRadius={'25px'}
          src="/images/dipenGada.jpg"
          alt="dipenGada"
        />
        <Text>Ar.Dipen Gada</Text>
      </VStack>

      <VStack>
        <Image
          className="client-pic"
          maxW={'12em'}
          maxH={'235px'}
          borderRadius={'25px'}
          src="/images/rahulDalvi.jpg"
          alt="rahul Dalvi"
        />
        <Text>Ar.Rahul Dalvi</Text>
      </VStack>

      <VStack>
        <Image
          className="client-pic"
          maxW={'12em'}
          maxH={'235px'}
          height={'235px'}
          borderRadius={'25px'}
          src="/images/mayurShah.jpg"
          alt="dipenGada"
        />
        <Text>Ar.Mayur Shah</Text>
      </VStack>
    </Grid>
  )
}
