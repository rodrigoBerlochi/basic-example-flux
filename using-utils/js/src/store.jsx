//import {EventEmitter} from 'fbemitter';
import AppDispatcher from './dispatcher.jsx';
import constants from './constants.jsx';
import { ReduceStore } from 'flux/utils';
import _ from 'lodash';
/*event emitter and getState() are resolved internally*/

class AppStore extends ReduceStore{
    getInitialState(){
        return [];      
    }

    reduce(state, action){
        //the reducer
        switch(action.type) {
            case constants.ADD_ITEM:
                return _.concat(state, action.data);
            case constants.REMOVE_ITEM:
                return _.filter(state, function(el) { return el !== action.data; });
            default:
                return state;
        }
    }
}

export default new AppStore(AppDispatcher);

/******************************************** */
/*const CHANGE_EVENT = 'change';
let _emitter = new EventEmitter();
let storeData = [];

let AppStore = {

    getState(){
        return storeData;
    },

    addListener(callback){
        return _emitter.addListener(CHANGE_EVENT, callback);
    }

};

AppStore.dispatchToken = AppDispatcher.register((action) => {

    //the reducer
    switch(action.type) {
        case constants.ADD_ITEM:
            storeData.push(action.data);
            _emitter.emit(CHANGE_EVENT);
            break;
        case constants.REMOVE_ITEM:
            storeData.splice(action.data, 1);
            _emitter.emit(CHANGE_EVENT);
            break;
    }

});

export default AppStore;*/