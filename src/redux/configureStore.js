import {applyMiddleware, combineReducers, createStore} from "redux";
import {dishes} from "./dishes";
import {comments} from "./comments";
import {leaders} from "./leaders";
import {promotions} from "./promotions";
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";
import {createForms} from 'react-redux-form'
import {initialFeedback} from "./forms";
export const configureStore = () =>
{
    const store= createStore(
        combineReducers({
            dishes:dishes,
            comments:comments,
            leaders:leaders,
            promotions:promotions,
            ...createForms({
                feedback:initialFeedback
            })
        }),applyMiddleware(thunk,logger)
    );
    return store;
}

