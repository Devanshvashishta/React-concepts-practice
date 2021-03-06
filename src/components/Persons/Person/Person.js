import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import Classes from './Person.module.css';
import withClass from '../../../hoc/withClass';
import Auxillary
 from '../../../hoc/Auxillary';
 import AuthContext from '../../../context/auth-context';
class Person extends Component  {
     constructor(props){
         super(props        )
         this.inputElementRef = React.createRef();
     }

     static contextType  = AuthContext;
    componentDidMount(){
        //this.inputElement.focus(); 
        this.inputElementRef.current.focus();       
        console.log(this.context.authenticated);
    }
    render(){
   console.log('[Person.js] rendering...')
    return (
    <Auxillary>
     {this.context.authenticated  ? <p>Authenticated!</p> : <p>Please log in!  </p>}

        
    <p key='1' onClick={this.props.click}>I am a {this.props.name} and I am {this.props.age} years old.</p>
    <p key='2'>{this.props.children}</p> 
    <input key='3' 
    //ref={(inputEl)=>{this.inputElement = inputEl}}
    ref={this.inputElementRef}
     type="text" onChange={this.props.changed} value={this.props.name} />
    </  Auxillary> )}
}


Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed:  PropTypes.func    
};
export default withClass(Person, Classes.Person) ;
