import React,{Component} from "react";
import {Card,CardImg,CardTitle,CardImgOverlay,CardBody,CardText} from 'reactstrap';
import {Media} from 'reactstrap';
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
    renderDish(dish)
    {
        if(this.state.selectdish==null)
            return (<div></div>);
        else
        {
            return (
                <Card key={dish.id}>
                    <CardImg top src={dish.image} alt={dish.name} />
                     <CardBody>
                         <CardTitle>{dish.name}</CardTitle>
                         <CardText>{dish.description}</CardText>
                     </CardBody>
                </Card>
            )
        }
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
                    <div className={'row'}>
                        <div className={'col-12 col-md-5 m-1'}>
                            {this.renderDish(this.state.selectdish)}
                        </div>
                    </div>
                </div>
            );
        }
}

export default Menu;