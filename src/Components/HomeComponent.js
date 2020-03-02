import React from "react";
import {Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";
import {Loading} from "./Loading";
import {baseUrl} from "../shared/baseUrl";
import {FadeTransform} from 'react-animation-components' ;
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
        <FadeTransform in transformProps={{exitTransform: 'scale(0.5) translateY(-50%)'}}>
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
        </FadeTransform>
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
                    <RenderCard item={props.leader} isLoading={props.leaderIsLoading} errmsg={props.leadererrMsg}/>
                </div>
            </div>
        </div>
    );
}

export default Home;