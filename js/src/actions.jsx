import AppDispatcher from './dispatcher.jsx';
import constants from './constants.jsx';

let AppActions = {

    addItem(item){
        AppDispatcher.dispatch({
            type: constants.ADD_ITEM,
            data: item
        });
    },

    removeItem(id){
        AppDispatcher.dispatch({
            type: constants.REMOVE_ITEM,
            data: id
        });
    }

};

export default AppActions;