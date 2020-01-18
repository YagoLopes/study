export default function todos(state = [], action){

    //passamos o state vasio para não iniciar com valores 
    // recebe a action do actions/todos.js

    switch(action.type){
        case 'ADD_TODO':
        //adicionando novo Todo
 return [ ...state, {
     id: Math.random(),
    text: action.text,
}]
 //...state serve para retornar todas as informações contidas no array 

        default:
        return state;
        //por padrão exporta a Todo vasia 
    }

}