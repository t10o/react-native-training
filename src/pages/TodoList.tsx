import { FlatList } from 'native-base'
import { TODO_LIST } from '../dummy-data/todo-list'
import { TodoListItem } from '../features/TodoList/TodoListItem'

export const TodoList = (): JSX.Element => {
  return (
    <FlatList
      data={TODO_LIST}
      renderItem={({ item }) => (
        <TodoListItem label={item.label} isFinished={item.isFinished} />
      )}
    />
  )
}
