import React,{Component} from "react";
import {Card,CardImg,CardTitle,CardImgOverlay,CardBody,CardText} from 'reactstrap';
import DishDetail  from "./DetailComponent.js"
class Menu extends Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            selectDish: null
        };
    }
    selec(dish)
    {
        this.setState({selectdish:dish});
    }
        render()
        {
            const menu=this.props.dishes.map((dish)=>
            {
                return(
                <div className={"col-12 col-md-5 m-1"}>
                    <Card key={dish.id} onClick={()=>this.selec(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>
                                {dish.name}
                            </CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>);
            });

            return (
                <div className={'container'}>
                    <div className={'row'}>
                    {menu}
                    </div>
                    <DishDetail dish={this.state.selectdish} />
                </div>
            );
        }
}

export default Menu;