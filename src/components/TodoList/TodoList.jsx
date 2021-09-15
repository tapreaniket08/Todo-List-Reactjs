import { useEffect, useState } from "react";
import Button from "../Button/Button";
import InputText from "../Input/InputText";
import List from "../List/List";
import styles from './TodoList.module.css';

const TodoList= ()=>
{
    const [inputTextval, setInputTextval]=useState('');
    const [todoList,setTodoList] =useState([]);
    
    useEffect(()=>{
     const localTodoList = localStorage.getItem('todoList');
     if(localTodoList){
         const todoList=JSON.parse(localTodoList);
         setTodoList(todoList);
     }
    },[]);
    
    useEffect(()=>{
        localStorage.setItem('todoList',JSON.stringify(todoList));
    },[todoList]);

    const onInputTextChange=(event)=>{
        const textValue= event.target.value;
        setInputTextval(textValue);
    };
     
    const onButtonClick=()=>{
        if(inputTextval.trim())
        { 
            const list=[...todoList];
            const listItem={
                item:inputTextval,
                itemEditText:inputTextval,
                isDone:false,
                isEdit:false
            };
            list.push(listItem);
            setInputTextval('');
            setTodoList(list);
        }
        else{
            setInputTextval('');
        }
       
    };

   const inputKeyUpHandler=(event)=>{
        if(event.which === 13){
            onButtonClick();
        }
   };
   
   const isDoneHandler=(listIndex)=>{
         const list =[...todoList];
         list[listIndex].isDone = true; 
         setTodoList(list);
    };
    
    const isdeleteHandler=(listIndex)=>{
        const list=[...todoList];
        list.splice(listIndex,1);
        setTodoList(list);    
    };
    const swapListItemHandler=(initialIndex,finelIndex)=>{
      const list=[...todoList];
      const temp=list[initialIndex];
      list[initialIndex]=list[finelIndex];
      list[finelIndex]=temp;
      setTodoList(list);
    }

    const listItemEditHandler=(listIndex)=>{
        const list =[...todoList];
        list[listIndex].isEdit=true;
        setTodoList(list);
    }

    const listItemEditSubmitHandler=(listIndex)=>{
        const list =[...todoList];
        list[listIndex].isEdit=false;
        setTodoList(list);               
    }
    
    const editChangeHandler = (listIndex, editValue)=>{
        const list = [...todoList];
        list[listIndex].itemEditText = editValue;
        setTodoList(list);
    };

    const editCancelHandler = (listIndex)=>{
        const list = [...todoList];
        list[listIndex].itemEditText = list[listIndex].item;
        list[listIndex].isEdit = false;
        setTodoList(list);
    };


    return(
        <div className={styles.centerList}>
            <InputText 
                 onInputTextChange={onInputTextChange}
                 onKeyUpInput={inputKeyUpHandler}
               
                value={inputTextval}/>
       
            <Button
            buttonText="Add list data"
            onButtonClick={onButtonClick}/>
            <List todoList={todoList}
            doneHandler={isDoneHandler}
            deleteHandler={isdeleteHandler}
            swapListItem={swapListItemHandler}
            onEditClick={listItemEditHandler}
            onEditSubmitClick={listItemEditSubmitHandler}
            onEditCancel={editCancelHandler}
            onChangeEdit={editChangeHandler}
            /> 
        </div>
    );
};
 export default TodoList;