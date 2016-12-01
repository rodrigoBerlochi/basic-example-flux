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
    },

    fetchListSuccess(data){
        AppDispatcher.dispatch({
            type: constants.FETCH_LIST_SUCCESS,
            data: data
        });
    },

    fetchListError(data){
        AppDispatcher.dispatch({
            type: constants.FETCH_LIST_ERROR,
            data: data
        });
    },

    fetchListStarted(){
        AppDispatcher.dispatch({
            type: constants.FETCH_LIST //no data payload, but store could use this type to show a loading ui for example
        });
    }

};

export default AppActions;