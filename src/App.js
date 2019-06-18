import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component  {
  state = {
    persons: [
    {id:"1", name: "Asheesh", age: "23"},
    {id:"2", name: "Ripu", age: "25"},
    {id:"3", name: "Arun", age: "27"}
  ],
  showPersons: false
  }


  changeBindingHandeller=(event) => {
    this.setState({
      persons: [
        {name: 'Asheesh', age: "24"},
        {name: "Ripu", age: "25"},
        {name: event.target.value, age: "27"}
      ]
     });
  }

  changeNameHandeller = (event,id)=>{
    console.log(id);
    const personIndex= this.state.persons.findIndex(p=>{
      return p.id === id;
    })

    const person= {
      ...this.state.persons[personIndex]
  }

  person.name=event.target.value;
  const persons= [...this.state.persons];
  persons[personIndex]=person;
  
  this.setState({persons: persons});
}

  toggleNameHandeller= () => {
    const persons = this.state.showPersons;
    this.setState({showPersons: !persons});
  }

  deletePersonHandeller= (personIndex)=>{
    // let persons = this.state.persons.slice();
    let persons= [...this.state.persons];
    persons.splice(personIndex,1);
  this.setState({persons: persons});
  }

  render(){
    const style={
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1 px solid grey',
      padding:'8px',
      margin: '10px',
      cursor: 'pointer'
    };

    let persons= null;
    var classes=[];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }
    if(this.state.showPersons){
      persons = (
        <div> 
        { this.state.persons.map((person,index) => {
          return <Person name={person.name} age={person.age} key={person.id} click = {this.deletePersonHandeller.bind(index)} change={(event)=>this.changeNameHandeller(event,person.id)}/> // 
        })
        }     
        </div>
      );

      style.backgroundColor ='red';
    }
  return (
    <div className="App">
      <h1>This is my First React Application</h1>
      <p className={classes.join(' ')}>This is a React Application</p>
      <button style={style} onClick={this.toggleNameHandeller}>Toggle Persons</button>
    {persons}
    </div>
  );
  // return React.createElement('div',{className:'App'},React.createElement('h1',null,'This is my First React application.'));
}
}

export default App;