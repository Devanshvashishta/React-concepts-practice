import React,{ Component } from 'react';
import Classes from './App.module.css';
import Persons from '../components/Persons/Persons';  
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxillary from '../hoc/Auxillary';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons : [
      { id:"qweqw", name: "Max" , age: 28  },
      {id:"daad",name: "Manu", age: 29},
      {id:"ddasdew",name: "Stephanie", age: 26} 
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false,
  }

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount(){
  //   console.log('[App.js] ComponentWIllMount')
  // };
  
  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
   }

  conponentDidUpdate(){
    console.log('[App.js componentDidUpdate');
  }


  // switchNameHandler = (newName) => {
  //  // console.log("Was called!")
  //  //this.state.persons[0].name ="Maximillian"
  //  this.setState( {persons: [
  //   { name: newName , age: 28  },
  //   {name: "Manu", age: 29},
  //   {name: "Stephanie", age: 27}
  // ],  })
  // }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p  =>   {
      return p.id === id
    });

      const person = {
        ...this.state.persons[personIndex]
      };

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

    this.setState((prevState, props)=>{  
      return {persons : persons,
      changeCounter: prevState.changeCounter + 1
      };
       
    } );  
  } ; 

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons,slice();
    const persons = [...this.state.persons];  
    persons.splice(personIndex,1);
    this.setState({persons: persons});  

  }
 
  togglePesonsHandler = () =>{

    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});       
     
  }

  loginHandler = () => {
    this.setState({authenticated: true}); 
};


 render(){  
console.log('[App.js] render');


let persons =null;


if(this.state.showPersons){
  persons = 
    <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangeHandler}
    isAuthenticated={this.state.authenticated} />

}   

  return (

    <Auxillary>
      <button onClick={()=>{this.setState({showCockpit: false});}}>Remove Cockpit</button>
      <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler }}>
      { this.state.showCockpit?(
     <Cockpit title={this.props.appTitle} showPersons={this.state.showPersons}
     personsLength={this.state.persons.length} clicked={this.togglePesonsHandler}
      />
     ): null} 
   {persons}
   </AuthContext.Provider >
    </Auxillary>

  );
}
}

export default withClass(App, Classes.App);
