import Todos from "../../models/todo";
import TodoItem from "../TodoItem/TodoItem";

interface ITodo {
  items: Todos[];
}
const Todo: React.FC<ITodo> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <TodoItem key={item.id} text={item.text}/>
      ))}
    </div>
  );
};

export default Todo;
