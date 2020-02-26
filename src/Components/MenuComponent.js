import React from "react";
import {Card, CardImg, CardTitle, CardImgOverlay, Breadcrumb, BreadcrumbItem,} from 'reactstrap';
import {Link} from "react-router-dom";
import {Loading} from "./Loading";
    function Menu(props)
    {
        const menu=props.dishes.dishes.map((dish)=>
            {

                return(
                <div className={"col-12 col-md-5 m-1"}>
                    <Card key={dish.id}>
                        <Link to={`menu/${dish.id}`}>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardImgOverlay>
                                <CardTitle>
                                    {dish.name}
                                </CardTitle>
                            </CardImgOverlay>
                        </Link>
                    </Card>
                </div>);
            });
        if(props.dishes.isLoading)
            {
                return (
                 <div className={'container'}>
                     <div className={'row'}>
                         <Loading/>
                     </div>
                 </div>
              );
            }
        else if(props.dishes.errmsg)
            {
                return (
                    <div className={'container'}>
                         <div className={'row'}>
                             <h4>{props.dishes.errmsg}</h4>
                         </div>
                    </div>
                );
            }
        else
            return (
                    <div className={'container'}>
                        <div className={'row ml-0'}>
                            <Breadcrumb>
                                <BreadcrumbItem><Link to={'/home'}>Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>Menu</BreadcrumbItem>
                            </Breadcrumb>
                            <div className={'col-12'}>
                                <h3>Menu</h3>
                                <hr />
                            </div>
                        </div>
                        <div className={'row'}>
                        {menu}
                        </div>
                    </div>
            );
    }

export default Menu;