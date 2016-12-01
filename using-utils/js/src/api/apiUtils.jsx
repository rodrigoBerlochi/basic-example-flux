import  'whatwg-fetch';
import AsyncActions from '../actions.jsx'; //could be a different action file

let AsyncAPI = {

    fetchData(){
        AsyncActions.fetchListStarted();

        fetch('data.json')
        .then((resp) => {
            return resp.json();
        })
        .then((jsonData) => {
            AsyncActions.fetchListSuccess(jsonData);
        })
        .catch((error) => {
            AsyncActions.fetchListError(error);
        });
    }

};

export default AsyncAPI;