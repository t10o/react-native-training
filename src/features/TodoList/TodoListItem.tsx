import { MaterialIcons } from '@expo/vector-icons'
import { Icon, Text, VStack } from 'native-base'

interface Props {
  label: string
  isFinished: boolean
}

export const TodoListItem = ({ label, isFinished }: Props): JSX.Element => {
  return (
    <>
      <VStack
        flex={1}
        flexDirection="row"
        alignItems="center"
        shadow={3}
        borderRadius="full"
        bg="white"
        py={4}
        px={6}
        mb={5}
      >
        {isFinished ? (
          <Icon
            size="xl"
            as={MaterialIcons}
            name="check-circle"
            color="green.500"
            mr={3}
          />
        ) : (
          <Icon
            size="xl"
            as={MaterialIcons}
            name="radio-button-unchecked"
            color="blue.500"
            mr={3}
          />
        )}

        <Text>{label}</Text>
      </VStack>
    </>
  )
}
