import React from "react";
import {Card, CardImg, CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from "react-router-dom";


    function Rendercomm({comme})
    {
            const comm=comme.map(
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
                        <div className={'container'}>
                            <div className={'row ml-0'}>
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to={'/menu'}>Menu</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                                </Breadcrumb>
                                <div className={'col-12'}>
                                    <h3>{props.dish.name}</h3>
                                    <hr />
                                </div>
                             </div>
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
                                    <Rendercomm comme={props.comments} />
                                </div>
                            </div>
                        </div>
                    );
                }
        };

export default DishDetail;