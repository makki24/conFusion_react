import React, {Component} from "react";
import {Breadcrumb, BreadcrumbItem,Row, Label, Col, Button} from "reactstrap";
import {Link} from "react-router-dom";
import {Control, Errors, Form} from "react-redux-form";

const required=(val) => val && val.length;
const minlength=(len) => (val) => val && (len<=val.length);
const maxlength=(len) => (val) => !(val) || (len>=val.length);
const isNumber= (val) =>  !isNaN(Number(val));

const validEmail=(val)=>/^[A-Z0-9._+%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
class Contact extends Component
{
    constructor(props)
    {
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    handleSubmit(values)
    {
   //     console.log("current string is "+ JSON.stringify(values));
        console.log("hey"+ values.lastname);
       // alert("current string is "+ JSON.stringify(values));
        this.props.postFeedback(values.firstname,values.lastname,values.telnum,values.email,values.agree,values.contactType,values.message);
        this.props.actionsReset();
    }
    render()
    {
        return(
             <div className="container">
                <div className={'row ml-0'}>
                    <Breadcrumb>
                            <BreadcrumbItem><Link to={'/home'}>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className={'col-12'}>
                        <h3>Contact us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info" href={'skype.com'}><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className={'row row-content'}>
                    <div className={'col-12'}>
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className={'col-12 col-md-9'}>
                        <Form model={'feedback'} onSubmit={(values)=>this.handleSubmit(values)}>
                            <Row className={'form-group'}>
                                <Label htmlFor={'firstname'} md={2}>
                                    First name
                                </Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" name={'firstname'} id={'firstname'} placeholder={'First name'}
                                    className={'form-control'} validators={{required,minlength:minlength(2),
                                    maxlength:maxlength(15)}}/>
                                    <Errors model={'.firstname'} className={'text-danger'} show={'touched'} messages={{required:'requiered ',
                                    minlength:"must be 2",maxlength:"less then 15"}}/>
                                </Col>
                            </Row>
                            <Row className={'form-group'} >
                                <Label htmlFor={'lastname'} md={2}>
                                    Last name
                                </Label>
                                <Col md={10}>
                                    <Control.text model={'.lastname'}  name={'lastname'} id={'lastname'} placeholder={'Last name'}
                                    className={'form-control'} validators={{required,minlength:minlength(3),
                                    maxlength:maxlength(15)}}/>
                                    <Errors model={'.lastname'} className={'text-danger'} show={'touched'} messages={{required:'requiered ',
                                    minlength:"must be 2",maxlength:'less than 15'}}/>
                                </Col>
                            </Row>
                            <Row className={'form-group'}>
                                <Label htmlFor={'telnum'} md={2}>
                                    Contact tel.
                                </Label>
                                <Col md={10}>
                                    <Control.text model={'.telnum'} name={'telnum'} id={'telnum'} placeholder={'Tel. num '}
                                    className={'form-control'} validators={{required,minlength:minlength(2),
                                    maxlength:maxlength(15)}}/>
                                     <Errors model={'.telnum'} className={'text-danger'} show={'touched'} messages={{required:'requiered ',
                                    minlength:"must be 2",maxlength:'less than 15'}}/>
                                </Col>
                            </Row>
                            <Row className={'form-group'}>
                                <Label htmlFor={'Email'} md={2}>
                                    E-mail
                                </Label>
                                <Col md={10}>
                                    <Control.text model={'.email'} name={'email'} id={'email'} placeholder={'email'}
                                    className={'form-control'} validators={{required,validEmail}}/>
                                    <Errors model={'.email'} className={'text-danger'} show={'touched'} messages={{required: 'requiered',validEmail:
                                        "invalid Email"
                                    }} />
                                </Col>
                            </Row>
                            <Row className={'form-group'}>
                                <Col md={{size:6, offset:2}}>
                                    <div className={'form-check'}>
                                        <Label check>
                                            <Control.checkbox model={".agree"} name={'agree'} id='agree' className={'form-check-input'}/>{' '}
                                            <strong> May we contact you ?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                    <Control.select model={'.contactType'} className={'form-control'} name='contactTtype' >
                                        <option>tel.num</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                             <Row className={'form-group'}>
                                <Label htmlFor={'message'} md={2}>
                                    Your feedback
                                </Label>
                                <Col md={10}>
                                    <Control.textarea model={'.message'} name={'message'} id={'message'} rows={12} className={'form-control'}/>
                                </Col>
                            </Row>
                             <Row className={'form-group'}>
                                <Col md={{size:10, offset:2}}>
                                    <Button type={'submit'} color={'primary'}>
                                        Send the feedback
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;