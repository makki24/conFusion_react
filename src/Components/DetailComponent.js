import React, {Component} from "react";
import {
    Card,
    CardImg,
    CardTitle,
    CardBody,
    CardText,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Modal,
    ModalHeader, ModalBody, Label,Row,
    Col
} from 'reactstrap';
import {Link} from "react-router-dom";
import {LocalForm, Control, Errors} from "react-redux-form";
import {Loading} from "./Loading";
import {baseUrl} from "../shared/baseUrl";

const minlength=(len) =>(val)=> val && (val.length>=len);
const maxlength=(len) =>(val)=> !(val) || (val.length<=len)
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
    class CommentForm extends Component
    {

        constructor(props)
        {
            super(props);
            this.state=
                {
                  isModOpen:false
                };
        }
        toggleMod()
        {
            this.setState({
                isModOpen:!this.state.isModOpen
            })
        }
        handleSubmit(value)
        {
            this.props.addComment(this.props.dishId,value.rating,value.name,value.comment)
        }
        render()
        {
            return (
            <div>
                <Button onClick={()=>this.toggleMod()} className={'btn btn-outline-secondary'}>
                                        <i className={'fa fa-pencil fa-lg'}></i>{' Submit Comment'}
                </Button>
                <Modal isOpen={this.state.isModOpen} toggle={()=>this.toggleMod()}>
                    <ModalHeader toggle={()=>this.toggleMod()}>
                        Submit Comment
                    </ModalHeader>
                    <ModalBody>
                            <LocalForm onSubmit={(value)=>this.handleSubmit(value)}>
                                <Row className={'form-group'}>
                                    <Label htmlFor={'selection'} sm={12}>
                                        Rating
                                    </Label>
                                    <Col md={{size:12}}>
                                        <Control.select model={'.rating'}  className={'form-control'} name={'rating'}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className={'form-group'}>
                                    <Label htmlFor={'name'} sm={12}>
                                        Your Name
                                    </Label>
                                    <Col md={{size:12}}>
                                        <Control.text model={'.name'} className={'form-control'} name={'name'} id={'name'}
                                        placeholder={'Your Name'} validators={{minlength: minlength(2),maxlength:maxlength(15)}}/>
                                        <Errors model={'.name'} className={'text-danger'} show={'touched'} messages={{
                                            minlength: 'Must be greater than 2 characters',maxlength:'Must be 15 characters' +
                                                'or less'
                                        }}/>
                                    </Col>
                                </Row>
                                <Row className={'form-group'}>
                                    <Label htmlFor={'comment'} sm={12}>
                                        Comment
                                    </Label>
                                    <Col md={{size:12}}>
                                        <Control.textarea model={'.comment'} className={'form-control'} name={'comment'}
                                         id={'comment'} rows={8}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={{size:12}}>
                                    <Button type={'submit'} color={'primary'}>
                                        Submit
                                    </Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
            );
        }
    }
    function DishDetail(props)
    {
        if(props.isLoading)
         {
             return (
                 <div className={'container'}>
                     <div className={'row'}>
                         <Loading/>
                     </div>
                 </div>
             )
         }
        else if(props.errmsg)
        {
            return (
                 <div className={'container'}>
                     <div className={'row'}>
                         <h4>{props.errmsg}</h4>
                     </div>
                 </div>
             )
        }
        else
        {
            const dish=props.dish;
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
                                <CardImg top src={baseUrl+dish.image} alt={dish.name} />
                                <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className={'col-12 col-md-5 m-1'}>
                            <h2>Comments</h2>
                            <Rendercomm comme={props.comments} />
                            <CommentForm addComment={props.addComment} dishId={props.dish.id}/>
                        </div>
                    </div>

                </div>

            );
        }
    }

export default DishDetail;