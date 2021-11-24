import React from 'react';
import {logout} from "./Features/userSlice"
import {useDispatch} from "react-redux"

export default function Header(props) {
   
  const dispatch=useDispatch();
     const handlerLogout=(e)=>{
       e.preventDefault();

       dispatch(logout())
     }
   

    return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1 style={{fontStyle:"italic"}}>Resturant </h1>
        </a>
      </div>
    
       
      <div>
        <a href="#/">  
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}   </a>
        {' '} 
        
      
        <div class="btn-group">
         <button className="btn btn-primary" onClick={(e)=>handlerLogout(e)}>Logout</button>
         </div>
        </div>
    </header>
  );
}