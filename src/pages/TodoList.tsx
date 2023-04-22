import { MaterialIcons } from '@expo/vector-icons'
import { FlatList, Icon, IconButton } from 'native-base'

import { TODO_LIST } from '../dummy-data/todo-list'
import { TodoListItem } from '../features/TodoList/TodoListItem'

export const TodoList = (): JSX.Element => {
  return (
    <>
      <FlatList
        data={TODO_LIST}
        renderItem={({ item }) => (
          <TodoListItem label={item.label} isFinished={item.isFinished} />
        )}
      />

      <IconButton
        position="absolute"
        right="50%"
        bottom={3}
        backgroundColor="blue.500"
        borderRadius="full"
        icon={<Icon size="2xl" as={MaterialIcons} name="add" color="white" />}
      />
    </>
  )
}
