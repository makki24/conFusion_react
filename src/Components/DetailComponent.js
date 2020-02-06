import React,{Component} from "react";
import {Card,CardImg,CardTitle,CardImgOverlay,CardBody,CardText} from 'reactstrap';
import Commments from "./CommentComponent.js";
class DishDetail extends Component
{
    constructor(props)
    {
        super(props);

    }
    render()
        {
            const dish=this.props.dish;
            if(dish==null)
             return (<div></div>);
            else
            {
                return(
                    <div key={dish.id} className={'row'}>
                        <div className={'col-12 col-md-5 m-1'}>
                            <Card>
                                <CardImg top src={dish.image} alt={dish.name} />
                                <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className={'col-12 col-md-5 m-1'}>
                            <h2>Comments</h2>
                            <Commments mess={dish.comments}/>
                        </div>
                    </div>
                );
            }
        }
}

export default DishDetail;