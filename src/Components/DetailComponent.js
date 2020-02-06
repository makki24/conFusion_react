import React,{Component} from "react";
import {Card,CardImg,CardTitle,CardImgOverlay,CardBody,CardText} from 'reactstrap';
class DishDetail extends Component
{
    constructor(props)
    {
        super(props);

    }
    render()
        {
            const month=['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            const dish=this.props.dish;
            if(dish==null)
             return (<div></div>);
            else
                {
                    const menu=dish.comments.map(
                    (text)=>
                        {
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
                                {menu}
                            </div>
                        </div>
                    );
                }
        }
}

export default DishDetail;