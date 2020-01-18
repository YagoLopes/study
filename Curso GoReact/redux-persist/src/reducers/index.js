import { combineReducers} from 'redux';

import todos from './todos';

//importando todos os reducers da pasta reducers para a variavel todos

export default combineReducers({
    todos,
});

//combinando todos os reducers com o metodo combinerReducers