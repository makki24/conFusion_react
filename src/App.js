import React,{Component} from 'react';
import Menu from "./Components/MenuComponent.js"
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from "./shared/dishes.js";
class App extends Component {
  constructor(props)
  {
    super(props);
    this.state=
        {
          dish:DISHES
        };
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
      <Menu dishes={this.state.dish}/>
      </div>
    );
  }
}

export default App;
