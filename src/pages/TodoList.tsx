import { MaterialIcons } from '@expo/vector-icons'
import { Fab, FlatList, Icon } from 'native-base'

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

      <Fab
        bottom={10}
        right={7}
        backgroundColor="blue.500"
        icon={<Icon size="2xl" as={MaterialIcons} name="add" color="white" />}
      />
    </>
  )
}
