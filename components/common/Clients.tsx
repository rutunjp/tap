import { List, ListItem, Grid, Image } from '@chakra-ui/react'

export default function Clients() {
  return (
    <Grid
      width={'50%'}
      templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
      gap={6}
    >
      <Image src="/images/dga.png" alt="dgalogo" className="client-logo" />
      <Image src="/images/dga.png" alt="dgalogo" className="client-logo" />
      <Image src="/images/dga.png" alt="dgalogo" className="client-logo" />
    </Grid>
  )
}
