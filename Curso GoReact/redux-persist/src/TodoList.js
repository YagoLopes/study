import React, {Component} from 'react';
import { bindActionCreators} from 'redux';  //é uasa para disparar a ação na lista de Tdos atravez do botão
import { connect } from 'react-redux';

import * as todoActions from './actions/todos'; //passa todas as actions de Todos para a variavel todoActions


class TodoList extends Component{

constructor(props){
    super(props);

    console.log()
}

state = {
    newTodoText:'',
}

addNewTodo = () => {
  this.props.addTodo(this.state.newTodoText);
  this.setState({ newTodoTex: ''});
};


    render(){
      return(
          <div>
<ul>
  {this.props.todos.map(todo => (
     <li key={todo.id}>{todo.text}</li> 
  ))}
</ul>


<input 
type="text" 
value={this.state.newTodoText}
onChange={(e) => this.setState({newTodoTex: e.target.value})}
/>
<button onClick={this.addNewTodo}>Novo Todo</button>
</div>

      );


    }

}
const mapStateToProps = state => ({
todos: state.todos,
});

const mapDispatchToProps = dispatch =>  //repassando todas as ações para as propiedades com isso as props serão capas de acessar as actions 
bindActionCreators(todoActions, dispatch);

export default connect(mapStateToProps,mapDispatchToProps) (TodoList);