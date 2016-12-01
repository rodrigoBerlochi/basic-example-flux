//
// This is the client side entry point for the React app.
//
import React from "react";
import ReactDOM from "react-dom";
import AppStore from './store.jsx';
import AppAction from './actions.jsx';

//components
import Button from './components/button.component.jsx';
import Input from './components/input.component.jsx';
import List from './components/list.component.jsx';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      cities: AppStore.getState()
    };
  }

  componentDidMount(){
    //here the app container subscribes manually to the Store chages and pass the callback
    this.storeSubscription = AppStore.addListener(data => this.handleStorageChange(data));
  }

  handleStorageChange(data){
    this.setState({
      cities: AppStore.getState()
    });
    console.dir(this.state);
  }

  _addItem(item){
    AppAction.addItem(item);
  }

  _removeItem(index){
    AppAction.removeItem(index);
  }

  _addItemByClick(){
    var item = this.refs.cityInput.refs.cityName.value;
    if(!item){
      console.warn('Input is empty');
      return;
    }
    this.refs.cityInput.refs.cityName.value = '';
    this._addItem(item);
  }

  _addItemByEnter(item){
    this._addItem(item);
  }

  componentWillUpdate() {
    console.log('let\'s render it again...');
  }

  componentDidUpdate(oldProps, oldState){
    console.dir('oldprops', oldProps);
    console.dir('oldState', oldState);
  }

  shouldComponentUpdate(newProps, newState){
    //if (this.state.cities.length === newState.cities.length) {
     // return false; //if false, no rendering triggered
    //} 
    
    return true;
    
  }

  render(){
    return(
      <div> {/*super important*/}

        <h1>Best cities in the world</h1>

        <Input ref="cityInput" referenceName="cityName" mode="regular" label="Type a city name"
          onCreateNewItem={this._addItemByEnter.bind(this)} placeholder="Write here"/>
        <br />

        <Button text="Click me" onNewItem={this._addItemByClick.bind(this)} />

        <List  list={this.state.cities}/>

      </div> //also this one
    );
  }

};

/* JSX:*/ 
ReactDOM.render(
    <App />,
    document.getElementById('app')    
);


