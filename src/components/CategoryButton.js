import react from 'react'
import './button.css'
 
const CategoryButton =({label,onClick})=>{
return(

    <button onClick={onClick}>{label}</button>

);
};

export default CategoryButton;