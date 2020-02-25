import {combineReducers, createStore} from "redux";
import {dishes} from "./dishes";
import {comments} from "./comments";
import {leaders} from "./leaders";
import {promotions} from "./promotions";

export const configureStore = () =>
{
    const store= createStore(
        combineReducers({
            dishes:dishes,
            comments:comments,
            leaders:leaders,
            promotions:promotions
        })
    );
    return store;
}

