import TodoList from "../components/TodoList/TodoList"
import styles from './Todo.module.css'

const Todo =()=>{
    return(
        <div className={styles.Background}>
            <h1> To Do List</h1>
            <TodoList/>
        </div>
    );
};

export default Todo;