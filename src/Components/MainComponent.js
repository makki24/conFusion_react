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
import {postComment, fetchPromos, fetchComments, fetchDishes, fetchLeaders, postFeedback} from "../redux/ActionCreator";
import {actions} from 'react-redux-form';
import {TransitionGroup,CSSTransition} from 'react-transition-group'
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
    postComment:(dishId,rating, author, comment) => dispatch(postComment(dishId,rating,author,comment)),
    postFeedback:(firstname,lastname,telnum,email,agree,contactType,message) =>
        dispatch(postFeedback(firstname,lastname,telnum,email,agree,contactType,message)),
    fetchDishes:() => dispatch(fetchDishes()),
    actionsReset:() => dispatch(actions.reset('feedback')),

    fetchPromos:() => dispatch(fetchPromos()),
    fetchComments:() => dispatch(fetchComments()),
    fetchLeaders:() =>dispatch(fetchLeaders()),
});

class Main extends Component
{

  componentDidMount()
  {
      this.props.fetchDishes();
      this.props.fetchPromos();
      this.props.fetchComments();
      this.props.fetchLeaders();
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
              leader={this.props.leaders.leaders.filter((dish)=>dish.featured)[0]}
              leaderIsLoading={this.props.leaders.isLoading}
              leadererrMsg={this.props.leaders.errmsg}
              />
          );
      };

      const dishwithid=(props)=>
      {
          const match=props.match;
          return(
          <DishDetail dish={this.props.dish.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]} comments={
              this.props.comments.comments.filter((dish)=>dish.dishId===parseInt(match.params.dishId,10))
          } postComment={this.props.postComment}
          commentsErrormes={this.props.comments.errmsg}
          isLoading={this.props.dish.isLoading}
          errmsg={this.props.dish.errmsg}/>
          );
      };

    return (
      <div>
          <Header />
          <TransitionGroup>
              <CSSTransition key={this.props.location.key} classNames={'page'} timeout={300}>
                  <Switch>
                      <Route path={"/home"} component={HomePage}/>
                      <Route exact path={'/menu'} component={ () => <Menu dishes={this.props.dish} />  }/>
                      <Route path={'/menu/:dishId'} component={dishwithid}/>
                      <Route exact path={'/contactus'} component={()=><Contact actionsReset={this.props.actionsReset}
                      postFeedback={this.props.postFeedback}/>}/>
                      <Route exact path={'/aboutus'} component={()=> <About leaders={this.props.leaders.leaders}/>} />
                      <Redirect to={'/home'}/>
                  </Switch>
               </CSSTransition>
          </TransitionGroup>
          <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));