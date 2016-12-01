//
// This is the client side entry point for the React app.
//
import React from "react";
import ReactDOM from "react-dom";
import AppStore from './store.jsx';
import AppAction from './actions.jsx';

import { Container } from 'flux/utils';

//components
import Button from './components/button.component.jsx';
import Input from './components/input.component.jsx';
import List from './components/list.component.jsx';


/*
let's transform App in a flux container that is created using higher order functions by flux-FB
*/

class App extends React.Component {

  constructor(){
    super();
    /*this.state = {
      cities: AppStore.getState()
    };*/
  }

  /*componentDidMount(){
    this.storeSubscription = AppStore.addListener(data => this.handleStorageChange(data));
  }*/

  /*handleStorageChange(data){
    this.setState({
      cities: AppStore.getState()
    });
    console.dir(this.state);
  }*/

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

//mandatory implement these two methods
App.getStores = () => ([AppStore]);
App.calculateState = (prevState) => ({cities: AppStore.getState()});

const AppContainer = Container.create(App);

/* JSX:*/ 
ReactDOM.render(
    <AppContainer />,
    document.getElementById('app')    
);


