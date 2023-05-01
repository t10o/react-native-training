import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { NativeBaseProvider } from 'native-base'

import { Todo } from './src/pages/Todo'
import { TodoList } from './src/pages/TodoList'

export default function App() {
  const Stack = createStackNavigator()

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="TodoList" component={TodoList} />

          <Stack.Screen name="Todo" component={Todo} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
