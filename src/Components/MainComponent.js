import React,{Component} from 'react';
import Menu from "./MenuComponent.js"
import { DISHES } from "../shared/dishes.js";
import DishDetail from "./DetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

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
          <Header />
      <div className={'container'}>
          <Menu dishes={this.state.dish} onClick={(id)=>this.onDishSelect(id)}/>
          <DishDetail dish={this.state.dish.filter((dish)=>dish.id===this.state.selectDish)[0]} />
      </div>
          <Footer/>
      </div>
    );
  }
}

export default Main;