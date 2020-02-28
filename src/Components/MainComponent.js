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
import {addComment, fetchPromos,fetchComments, fetchDishes} from "../redux/ActionCreator";
import {actions} from 'react-redux-form';
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
    addComment:(dishId,rating, author, comment) => dispatch(addComment(dishId,rating,author,comment)),
    fetchDishes:() => dispatch(fetchDishes()),
    actionsReset:() => dispatch(actions.reset('feedback')),

    fetchPromos:() => dispatch(fetchPromos()),
    fetchComments:() => dispatch(fetchComments()),
});

class Main extends Component
{

  componentDidMount()
  {
      this.props.fetchDishes();
      this.props.fetchPromos();
      this.props.fetchComments();
  }
    constructor(props)
  {
    super(props);
  }
  render() {
      const HomePage=()=>
      {
          return(
              <Home dish={this.props.dish.dishes.filter((dish)=>dish.featured)[0]}
              dishisLoading={this.props.dish.isLoading}
              disherrMsg={this.props.dish.errmsg}
              promotions={this.props.promotions.promos.filter((dish)=>dish.featured)[0]}
              promoisLoading={this.props.promotions.isLoading}
              promoerrMsg={this.props.promotions.errmsg}
              leader={this.props.leaders.filter((dish)=>dish.featured)[0]}
              />
          );
      };

      const dishwithid=(props)=>
      {
          const match=props.match;
          return(
          <DishDetail dish={this.props.dish.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]} comments={
              this.props.comments.comments.filter((dish)=>dish.dishId===parseInt(match.params.dishId,10))
          } addComment={this.props.addComment}
          commentsErrormes={this.props.comments.errmsg}
          isLoading={this.props.dish.isLoading}
          errmsg={this.props.dish.errmsg}/>
          );
      };

    return (
      <div>
          <Header />
          <Switch>
              <Route path={"/home"} component={HomePage}/>
              <Route exact path={'/menu'} component={ () => <Menu dishes={this.props.dish} />  }/>
              <Route path={'/menu/:dishId'} component={dishwithid}/>
              <Route exact path={'/contactus'} component={()=><Contact actionsReset={this.props.actionsReset}/>}/>
              <Route exact path={'/aboutus'} component={()=> <About leaders={this.props.leaders}/>} />
              <Redirect to={'/home'}/>
          </Switch>
          <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));