const Button =(props)=>{
   return(
       <button onClick={props.onButtonClick}>{props.buttonText}</button>
   );
     
};

export default Button;