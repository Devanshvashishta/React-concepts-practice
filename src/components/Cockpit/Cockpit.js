import React,{ useEffect, useRef , useContext } from 'react';
import Classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

function Cockpit(props) {
 
    const toggleButtonRef = useRef(null);

    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);
        


    useEffect(()=>{
        console.log('[Cockpit.Js] useEffect')
        //http  request...

        // setTimeout(()=>{
        //     alert('Saved data to cloud!')
        // },1000);
        toggleButtonRef.current.click();
        return ()=>{      
           
  console.log('[cockpit.js] clean up work in useEffect')
        };
    },[]);
    
    useEffect(()=>{
        console.log('[Cockpit.Js] 2nd useEffect');
        return ()=>{
            console.log('[cockpit.js] clean up work in 2nd useEffect')
                  };   
    });

    const classes = [];
    let btnClass='';
if(props.showPersons){
    btnClass = Classes.Red;
} 
if(props.personsLength <=2){
    classes.push(Classes.red);
}
if(props.personsLength<=1){
  classes.push(Classes.bold);
}

    return (
        <div className={Classes.Cockpit}>
             <h1>{props.title}</h1>
      <p className={classes.join(' ')}>It's really working!</p>
      <button  ref={toggleButtonRef} className={btnClass }
      onClick={props.clicked}>Toggle Person</button> 
      
          
      <button onClick={authContext.login}>Log in</button> 
          
          
        </div>
    )
}

export default React.memo(Cockpit);
