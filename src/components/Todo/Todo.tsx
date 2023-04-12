interface ITodo {
    items: string[];
}
const Todo: React.FC<ITodo> = ({items}) => {
    return <div>{items.map((item) => (
        <li key={item}>{item}</li>
    ) )}</div>  
}

export default Todo;