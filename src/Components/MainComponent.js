import React,{Component} from 'react';
import Menu from "./MenuComponent.js"
import { DISHES } from "../shared/dishes.js";
import DishDetail from "./DetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import {Switch,Route,Redirect} from 'react-router-dom';
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import {COMMENTS} from "../shared/comments";
import {PROMOTIONS} from "../shared/promotions";
import {LEADERS} from "../shared/leaders";
class Main extends Component
{
  constructor(props)
  {
    super(props);
    this.state=
        {
            dish: DISHES,
            comments:COMMENTS,
            promotions:PROMOTIONS,
            leaders:LEADERS
        };
  }
  render() {
       const HomePages=()=>
      {
          return(
             <div> {this.state.dish.filter((dish)=>dish.featured)[0].description}</div>
          );
      }
      const HomePage=()=>
      {
          return(
              <Home dish={this.state.dish.filter((dish)=>dish.featured)[0]}
              promotions={this.state.promotions.filter((dish)=>dish.featured)[0]}
              leader={this.state.leaders.filter((dish)=>dish.featured)[0]}
              />
          );
      }
    return (
      <div>
          <Header />
          <Switch>
              <Route path={"/home"} component={HomePage}/>
              <Route exact path={'/menu'} component={ () => <Menu dishes={this.state.dish} />  }/>
              <Route exact path={'/contactus'} component={Contact}/>
              <Redirect to={'/home'}/>
          </Switch>
          <Footer/>
      </div>
    );
  }
}

export default Main;