import { FormControl, FormLabel, Input, Box } from '@chakra-ui/react' 
import CreateForm from '../components/common/CreateForm'

export default function createCard() {
  return (
    <Box margin={'auto'} maxW={['80%', '50%']}>
      <CreateForm />
    </Box>
  )
}
