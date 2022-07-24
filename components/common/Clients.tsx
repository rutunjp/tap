import { List, ListItem } from '@chakra-ui/react'
import ClientTestimonialCard from './ClientTestimonialCard'

export default function Clients() {
  return (
    <List>
      <ListItem>
        <ClientTestimonialCard />
      </ListItem>
    </List>
  )
}
