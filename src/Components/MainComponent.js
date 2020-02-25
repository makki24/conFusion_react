import React,{Component} from 'react';
import Menu from "./MenuComponent.js"
import DishDetail from "./DetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import {connect} from 'react-redux';
import {addComment} from "../redux/ActionCreator";

const mapStateToProps = (state) =>
{
    return{
        dish:state.dishes,
        comments:state.comments,
        leaders: state.leaders,
        promotions: state.promotions
    }
}
const mapDispatchToProps= (dispatch) => ({
    addComment:(dishId,rating, author, comment) => dispatch(addComment(dishId,rating,author,comment))
});
class Main extends Component
{
  constructor(props)
  {
    super(props);
  }
  render() {
      const HomePage=()=>
      {
          return(
              <Home dish={this.props.dish.filter((dish)=>dish.featured)[0]}
              promotions={this.props.promotions.filter((dish)=>dish.featured)[0]}
              leader={this.props.leaders.filter((dish)=>dish.featured)[0]}
              />
          );
      };

      const dishwithid=(props)=>
      {
          const match=props.match;
          return(
          <DishDetail dish={this.props.dish.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]} comments={
              this.props.comments.filter((dish)=>dish.dishId===parseInt(match.params.dishId,10))
          } addComment={this.props.addComment}/>
          );
      };

    return (
      <div>
          <Header />
          <Switch>
              <Route path={"/home"} component={HomePage}/>
              <Route exact path={'/menu'} component={ () => <Menu dishes={this.props.dish} />  }/>
              <Route path={'/menu/:dishId'} component={dishwithid}/>
              <Route exact path={'/contactus'} component={Contact}/>
              <Route exact path={'/aboutus'} component={()=> <About leaders={this.props.leaders}/>} />
              <Redirect to={'/home'}/>
          </Switch>
          <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));