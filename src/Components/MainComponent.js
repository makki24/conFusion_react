import React,{Component} from 'react';
import Menu from "./MenuComponent.js"
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from "../shared/dishes.js";
import DishDetail from "./DetailComponent";
class Main extends Component
{
  constructor(props)
  {
    super(props);
    this.state=
        {
          dish:DISHES,
          selectDish: null
        };
  }
  onDishSelect(dishId)
  {
      this.setState({selectDish:dishId})
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
      <div className={'container'}>
          <Menu dishes={this.state.dish} onClick={(id)=>this.onDishSelect(id)}/>
          <DishDetail dish={this.state.dish.filter((dish)=>dish.id===this.state.selectDish)[0]} />
      </div>
      </div>
    );
  }
}

export default Main;