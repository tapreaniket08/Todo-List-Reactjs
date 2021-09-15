

import Button from '../Button/Button';
import InputText from '../Input/InputText';
import style from './List.module.css';

const List =(props)=>{
    const listMaxIndex= props.todoList.length -1; 
    const listItems= props.todoList.map((listItem,index)=>{
        return( 
        <li key={index}>
             
            {listItem.isEdit &&(
                < >
                 <InputText 
                    value={listItem.inputTextval}
                    onInputTextChange={(event)=>{
                        const editValue = event.target.value;
                        props.onChangeEdit(index, editValue)}
                    }/>

                <Button className={style.styleing}
                    onButtonClick ={()=>{props.onEditSubmitClick(index)}}
                    buttonText="Submit"/>

               <Button className={style.styleing} 
                    onButtonClick={()=>{props.onEditCancel(index)}}
                     buttonText="Cancel" />      
                 </>
            )}

            {!listItem.isEdit &&( 
                <>
                    {/*conditional styling */}
                    <span className={listItem.isDone? style.isDoneItem:''}>
                    {listItem.item}
                    </span>

                    {!listItem.isDone &&(
                        <button onClick={()=>{props.onEditClick(index)}}>
                            Edit
                        </button> 
                    )}

                    {index!==0 &&(
                    <button onClick={()=>{props.swapListItem(index,index-1)}}>
                        Up
                    </button>
                    )}

                    {index!==listMaxIndex&&( 
                    <button onClick={()=>{props.swapListItem(index,index+1)}}>
                        Down
                    </button>
                    )}

                    {/*conditional rerandering*/}
                    {!listItem.isDone &&(
                    <button onClick={()=>{props.doneHandler(index)}}>
                        Done
                    </button>
                    )}

                    {/*conditional rerandering*/}
                    {listItem.isDone && (
                        <button onClick={()=>{props.deleteHandler(index)}}>Delete</button>
                    )}
                </>
            )} 
        </li>
        )
    })

     return(
         <ol>
             {listItems}
         </ol>
     );
    
};
 export default List;