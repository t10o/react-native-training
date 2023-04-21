import { MaterialIcons } from '@expo/vector-icons'
import {
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  StatusBar,
  Text,
} from 'native-base'

export const Header = (): JSX.Element => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <Box safeAreaTop />

      <HStack px="1" py="3" alignItems="center" w="100%" maxW="350">
        <Flex align="center" justify="space-between" direction="row">
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
        </Flex>
      </HStack>
    </>
  )
}
