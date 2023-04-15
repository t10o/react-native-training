import { NativeBaseProvider } from 'native-base'
import { Layout } from './src/components/layouts'
import { TodoList } from './src/pages/TodoList'

export default function App() {
  return (
    <NativeBaseProvider>
      <Layout>
        <TodoList />
      </Layout>
    </NativeBaseProvider>
  )
}
