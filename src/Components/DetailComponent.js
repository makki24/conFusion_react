import React from "react";
import {Card,CardImg,CardTitle,CardBody,CardText} from 'reactstrap';


    function Rendercomm({dish})
    {
            const comm=dish.comments.map(
                    (text)=>
                        {
                            let venues=new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(text.date)));
                            return (
                                <div id={text.id}>
                                    <p>{text.comment}</p>
                                    <p>--{text.author} {venues}</p>
                                </div>
                            );
                        }
                    );
            return comm;
    }
    const DishDetail=(props)=>
        {
            const dish=props.dish;
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
                                <Rendercomm dish={dish} />
                            </div>
                        </div>
                    );
                }
        }

export default DishDetail;