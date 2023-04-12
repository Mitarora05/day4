import Todos from "../../models/todo";

interface ITodo {
    items: Todos[];
}
const Todo: React.FC<ITodo> = ({items}) => {
    return <div>{items.map((item) => (
        <li key={item.id}>{item.text}</li>
    ) )}</div>  
}

export default Todo;