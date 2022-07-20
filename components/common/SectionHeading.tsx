import { Heading, Text, useBreakpointValue } from '@chakra-ui/react'
export default function SectionHeading({ headingText }: any) {
  return (
    <Heading>
      <Text
        as={'span'}
        position={'relative'}
        fontSize={['52px', '64px', '76px']}
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
        {headingText} <br />
      </Text>
    </Heading>
  )
}
