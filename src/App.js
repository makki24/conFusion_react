import React,{Component} from 'react';
import Main from "./Components/MainComponent.js"
import './App.css';
import {BrowserRouter} from "react-router-dom"
import {configureStore} from "./redux/configureStore";
import {Provider} from "react-redux";

const store =configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <div>
        <Main />
        </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
