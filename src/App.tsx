import { Flex, MantineProvider, ScrollArea } from '@mantine/core'
import '@mantine/core/styles.css'
import Career from './components/Career'
import Header from './components/Header'

const App = () => {
  return (
    <MantineProvider>
      <ScrollArea h="90vh" w="650px" m="auto" mt="xl" type="never">
        <Flex direction="column" gap="xl" p="md">
          <Header />
          <Career />
        </Flex>
      </ScrollArea>
    </MantineProvider>
  )
}

export default App
