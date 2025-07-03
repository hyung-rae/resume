import { Flex, Group, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import Career from './components/Career'
import Header from './components/Header'
import License from './components/License'
import Link from './components/Link'
import Skill from './components/Skill'
import Portfolio from './components/Portfolio'

const App = () => {
  return (
    <MantineProvider>
      <Flex direction="column" gap="xl" w="700px" m="auto" p="xl">
        <Header />
        <Career />
        <Skill />
        <Portfolio />
        <Group grow align="flex-start">
          <License />
          <Link />
        </Group>
      </Flex>
    </MantineProvider>
  )
}

export default App
