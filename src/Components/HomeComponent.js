import React from "react";
import {Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";
import {Loading} from "./Loading";
import {baseUrl} from "../shared/baseUrl";

function RenderCard ({item,isLoading,errmsg})
{
    if(isLoading)
    {
        return(
            <Loading />
        )
    }
    else if(errmsg)
    {
        return (
            <h4>
                {errmsg}
            </h4>
        );
    }
    else
        return(
        <Card>
            <CardImg src={baseUrl+item.image} alt={item.name } />
            <CardBody>
                <CardTitle>
                    {item.name}
                </CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>:null}
                <CardText>
                    {item.description}
                </CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return(
        <div className={'container'}>
            <div className={'row align-items-start'}>
                <div className={'col-12 col-md'}>
                    <RenderCard item={props.dish} isLoading={props.dishisLoading} errmsg={props.disherrMsg} />
                </div>
                <div className={'col-12 col-md'}>
                    <RenderCard item={props.promotions} isLoading={props.promoisLoading} errmsg={props.promoerrMsg}/>
                </div>
                <div className={'col-12 col-md'}>
                    <RenderCard item={props.leader} isLoading={props.dishisLoading} errmsg={props.errMsg}/>
                </div>
            </div>
        </div>
    );
}

export default Home;