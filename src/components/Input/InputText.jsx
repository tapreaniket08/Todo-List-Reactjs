const InputText=(props)=>
{  
   return (
      <input 
      type="text"
      value={props.value}
      onKeyUp={props.onKeyUpInput} 
      onChange={props.onInputTextChange}/>
   );
};
export default InputText;