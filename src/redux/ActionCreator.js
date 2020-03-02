import * as ActionTypes from './ActionTypes'
import {baseUrl} from "../shared/baseUrl";
import {leaders} from "./leaders";
import {LEADERS_LOADING} from "./ActionTypes";
import {LEADERS_FAILED} from "./ActionTypes";
import {ADD_LEADERES} from "./ActionTypes";

export const addComment =(comment) =>
    (
        {
            type:ActionTypes.ADD_COMMENT,
            payload:{
                comment:comment
            }
        }
    );

export const postFeedback=(firstname,lastname,telnum,email,agree,contactType,message)=>(dispatch) =>
{
var newFeedback={
        firstname:firstname,
        lastname:lastname,
        telnum:telnum,
        email:email,
        agree:agree,
        contactType:contactType,
        message:message
    }
    newFeedback.date=new Date().toISOString();

    return fetch(baseUrl+ 'feedback',{
        method:'POST',
        body:JSON.stringify(newFeedback),
        headers:{
            'Content-Type':'application/json'
        },
        credentials:'same-origin'
    }).then(response => {
            if(response.ok)
                return response
            else
            {
                var err= new Error('Error'+ response.status+ response.statusText);
                err.response=response;
                throw err;
            }
        },err =>{
            var error=new Error(err.message);
            throw error;
        })
        .then((response) => response.json())
        .then((feedback)=>{
            alert(JSON.stringify(feedback));
        })
        .catch(err => alert(err.message));

};

export const postComment =(dishId,rating,author,comment) => (dispatch) =>
{
    var newComment={
        dishId: dishId,
        rating: rating,
        author: author,
        comment:comment
    }
    newComment.date=new Date().toISOString();

    return fetch(baseUrl + 'comments',{
        method:"POST",
        body:JSON.stringify(newComment),
        headers:{
            'Content-Type' :'application/json'
        },
        credentials:'same-origin'
    }).then(response => {
            if(response.ok)
                return response
            else
            {
                var err= new Error('Error'+ response.status+ response.statusText);
                err.response=response;
                throw err;
            }
        },err =>{
            var error=new Error(err.message);
            throw error;
        }).then(response => response.json())
        .then(comment => dispatch(addComment(comment)))
        .catch((err) => alert("Comments Failed adding "+err.message));
};
export  const fetchDishes =()=> (dispatch) =>
{
    dispatch(dishesloading(true));

    return fetch(baseUrl + 'dishes')
        .then(response => {
            if(response.ok)
                return response
            else
            {
                var err= new Error('Error'+ response.status+ response.statusText);
                err.response=response;
                throw err;
            }
        },err =>{
            var error=new Error(err.message);
            throw error;
        })
        .then(response => response.json()).then(dishes => dispatch(adddishes(dishes)))
        .catch(err=>dispatch(dishesfailed(err.message)));
};

export const fetchLeaders =() => (dispatch) =>
{
    dispatch(leadersLoading(true));
    return fetch(baseUrl+ 'leaders').then((response) => {
        if(response.ok)
            return response;
        else
        {
            var err=new Error("Error"+response.status+ response.statusText);
        }
    },(error)=>{
        var err=new Error("Server not responding"+ error.message);
        throw err;
    }).then((response) => response.json())
        .then((leaders)=>{
            return dispatch(addLeaders(leaders));
        })
        .catch(err => dispatch(leadersFailed(err)));

}
export  const fetchComments =()=> (dispatch) =>
{
    return fetch(baseUrl + 'comments')
         .then(response => {
            if(response.ok)
                return response
            else
            {
                var err= new Error('Error'+ response.status+ response.statusText);
                err.response=response;
                throw err;
            }
        },err =>{
            var error=new Error(err.message);
            throw error;
        }).then(response => response.json()).then(comments => dispatch(addComments(comments)))
        .catch(err=>dispatch(commentsFailed(err.message)));
};

export  const fetchPromos =()=> (dispatch) =>
{
    dispatch(promosloading(true));

    return fetch(baseUrl + 'promotions')
        .then(response => {
            if(response.ok)
                return response
            else
            {
                var err= new Error('Error'+ response.status+ response.statusText);
                err.response=response;
                throw err;
            }
        },err =>{
            var error=new Error(err.message);
            throw error;
        }).then(response => response.json()).then(promos => dispatch(addpromos(promos)))
    .catch(err=>dispatch(promosfailed(err.message)));
};

export const leadersLoading =() =>
    (
        {
            type:LEADERS_LOADING
        }
    );

export const leadersFailed =(err) =>
    (
        {
            type: LEADERS_FAILED,
            payload:err
        }
    )

export const addLeaders =(leaders) =>
    (
        {
            type: ADD_LEADERES,
            payload:leaders
        }
    )

export const dishesloading =() =>
    (
        {
            type:ActionTypes.DISHES_LOADING
        }
    );

export const adddishes =(dishes) =>
    (
        {
            type:ActionTypes.ADD_DISHES,
            payload:dishes
        }
    );

export const dishesfailed =(errmsg) =>
    (
        {
            type:ActionTypes.DISHES_FAILED,
            payload:errmsg
        }
    );

export const addComments =(comment) =>
    (
        {
            type:ActionTypes.ADD_COMMENTS,
            payload:comment
        }
    );

export const commentsFailed =(errmsg) =>
    (
        {
            type:ActionTypes.COMMENTS_FAILED,
            payload:errmsg
        }
    );

export const promosloading =() =>
    (
        {
            type:ActionTypes.PROMOS_LOADING
        }
    );

export const addpromos =(promos) =>
    (
        {
            type:ActionTypes.ADD_PROMOS,
            payload:promos
        }
    );

export const promosfailed =(errmsg) =>
    (
        {
            type:ActionTypes.PROMOS_FAILED,
            payload:errmsg
        }
    );
