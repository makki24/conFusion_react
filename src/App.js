import React,{Component} from 'react';
import Main from "./Components/MainComponent.js"
import './App.css';
class App extends Component {
  constructor(props)
  {
    super(props);
  }
  render() {
    return (
      <div>
      <Main />
      </div>
    );
  }
}

export default App;
