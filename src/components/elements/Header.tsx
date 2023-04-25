import { MaterialIcons } from '@expo/vector-icons'
import {
  Box,
  HStack,
  Icon,
  IconButton,
  StatusBar,
  Text,
  View,
} from 'native-base'
import { LayoutChangeEvent } from 'react-native'

interface Props {
  onLayout: (e: LayoutChangeEvent) => void
}

export const Header = ({ onLayout }: Props): JSX.Element => {
  return (
    <View onLayout={onLayout}>
      <StatusBar barStyle="dark-content" />

      <Box safeAreaTop />

      <HStack px="1" py="3" alignItems="center" w="100%" maxW="350">
        <IconButton
          icon={
            <Icon
              size="xl"
              as={MaterialIcons}
              name="grid-view"
              color="blue.500"
            />
          }
        />

        <Text color="black" fontSize="30">
          All Tasks
        </Text>
      </HStack>
    </View>
  )
}
