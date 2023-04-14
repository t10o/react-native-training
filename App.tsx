import { Box, NativeBaseProvider, Text } from 'native-base'

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} alignItems="center" justifyContent="center">
        <Text>Hello React Native</Text>
      </Box>
    </NativeBaseProvider>
  )
}
