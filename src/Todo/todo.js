import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class TodoList extends Component {
 constructor(){
     super();
     this.state = {
         userInput: '',
         contentInput:'',
         items: [],
         content: []

     }
 }
    onChange(event) {
        this.setState({
            userInput: event.target.value,  
        });
    }
    onChange2(event){
        this.setState({
            contentInput: event.target.value
        });
    }
 

    addTodo(event){
        event.preventDefault();
        this.setState({
            userInput:'',
            contentInput:'',
            items:  [...this.state.items, this.state.userInput],
            content: [...this.state.content, this.state.contentInput]
        });
    }
    removeTodo(event){
        event.preventDefault();
        const array = this.state.items;
        const array2 = this.state.content;
        const index2 = array.indexOf(event.target.value);
        const index = array.indexOf(event.target.value);
        array.splice(index,1);
        array2.splice(index2,1);
        this.setState({
            items: array,
            content: array
        });
    }

    renderTodo(){
        return this.state.items.map((item) => {
            return(
                <div key={(item) } className="mb-3">
                    {item} | <button onClick={this.removeTodo.bind(this)}>X</button >  | <input type="checkbox"></input>
                </div> 
            );
        });
    }
    renderContent(){
        return this.state.content.map((content) => {
            return(
                <div key={(content)}> {content}</div>
                
            );
        });
    }
    render(){
        return (
            <div>
              <h1>Voici la TodoList</h1>
              <form>
                  <input 
                  value={this.state.userInput} 
                  type="text" 
                  placeholder="Insert your text here"
                  onChange={this.onChange.bind(this)}>    
                  </input>
                  <input 
                  value={this.state.contentInput} 
                  onChange={this.onChange2.bind(this)}
                  placeholder="Insert your text here"
                  ></input>
                  <button onClick={this.addTodo.bind(this)}>add</button>
              </form>
              <div>{this.renderTodo()}
              <div>{this.renderContent()}</div></div>
            </div>
            
        );
    }
    
}

export default TodoList;