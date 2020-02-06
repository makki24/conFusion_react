import React,{Component} from "react";
import Commments from "./CommentComponent.js";
class Comments extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        const month=['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        const menu=this.props.mess.map(
            (text)=>{
                let str=text.date;
                str=str.slice(0,10);
                let venues=", ";
                let venue=month[Number(str.slice(5,7))];
                venues+=venue+" ";
                venue=Number(str.slice(8,10))+1;
                venues+=venue+", ";
                venue=str.slice(0,4);
                venues+=venue;
                console.log(venues);
                return (
                    <div id={text.id}>
                        <p>{text.comment}</p>
                        <p>--{text.author}{venues}</p>
                    </div>
                );
            }
        );
        return (
            <div>
              {menu}
            </div>
        );
    }
}
export default Comments;