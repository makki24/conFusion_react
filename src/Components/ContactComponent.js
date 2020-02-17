import React, {Component} from "react";
import {Breadcrumb, BreadcrumbItem, Form, FormGroup, Label, Col, Input, Button, FormFeedback} from "reactstrap";
import {Link} from "react-router-dom";
class Contact extends Component
{
    constructor(props)
    {
        super(props);
        this.state=
            {
                firstname:'',
                lastname:'',
                telnum:'',
                Email:'',
                message:'',
                agree:'',
                contactType:'tel',
                touched:
                    {
                        firstname: false,
                        lastname: false,
                        telnum: false,
                        Email:false
                    }
            };
        this.handleInputChange= this.handleInputChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleblur=this.handleblur.bind(this);
    }
    handleblur=(field)=>
        (evt)=>this.setState({
            touched:
                {
                    ...this.state.touched, [field]:true
                }
        });
    handleInputChange(event)
    {
        const target=event.target;
        const value=target.type==='checkbox' ? target.checked :target.value;
        const name=target.name;
        this.setState(
            {
                [name]:value
            }
        );
    }
    handleSubmit(event)
    {
        console.log("current string is "+ JSON.stringify(this.state));
        alert("current string is "+ JSON.stringify(this.state));
        event.preventDefault();
    }
    validate(firstname,lastname,telno,email)
    {
        let errors={
            firstname:'',
            lastname:'',
            telno:'',
            email:''
        };
         if (this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'First Name should be >= 3 characters';
        else if (this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'First Name should be <= 10 characters';

        if (this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be >= 3 characters';
        else if (this.state.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last Name should be <= 10 characters';

        const reg=/^\d+$/;
        if(this.state.touched.telnum && !reg.test(telno))
            errors.telno="Number should be digits";
        if(this.state.touched.Email && email.split('').filter((c)=>c==='@').length!=1)
            errors.email="Email should have @";
        return errors;
    }
    render()
    {
        const errors= this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.Email);
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
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor={'firstname'} md={2}>
                                    First name
                                </Label>
                                <Col md={10}>
                                    <Input type={'text'} name={'firstname'} id={'firstname'} placeholder={'First name'} value={this.state.firstname}
                                    onChange={this.handleInputChange}
                                    valid={errors.firstname === ''}
                                    invalid={errors.firstname !== ''}
                                    onBlur={this.handleblur('firstname')}/>
                                    <FormFeedback>
                                        {errors.firstname}
                                    </FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor={'lastname'} md={2}>
                                    Last name
                                </Label>
                                <Col md={10}>
                                    <Input type={'text'} name={'lastname'} id={'lastname'} placeholder={'Last name'} value={this.state.lastname}
                                    onChange={this.handleInputChange}
                                    valid={errors.lastname === ''}
                                    invalid={errors.lastname !== ''}
                                    onBlur={this.handleblur('lastname')}/>
                                    <FormFeedback>
                                        {errors.lastname}
                                    </FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor={'telnum'} md={2}>
                                    Contact tel.
                                </Label>
                                <Col md={10}>
                                    <Input type={'tel'} name={'telnum'} id={'telnum'} placeholder={'Tel. num '} value={this.state.tel}
                                    onChange={this.handleInputChange}
                                    valid={errors.telno === ''}
                                    invalid={errors.telno !== ''}
                                    onBlur={this.handleblur('telnum')}/>
                                    <FormFeedback>
                                        {errors.telno}
                                    </FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor={'Email'} md={2}>
                                    E-mail
                                </Label>
                                <Col md={10}>
                                    <Input type={'email'} name={'Email'} id={'Email'} placeholder={'E-mail'} value={this.state.Email}
                                    onChange={this.handleInputChange}
                                    valid={errors.email === ''}
                                    invalid={errors.email !== ''}
                                    onBlur={this.handleblur('Email')}/>
                                    <FormFeedback>
                                        {errors.email}
                                    </FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:6, offset:2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type={'checkbox'} name={'agree'} checked={this.state.check}
                                            onChange={this.handleInputChange}/>{' '}
                                            <strong> May we contact you ?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                    <Input type={'select'}  name='contactTtype' value={this.state.contactType}
                                    onChange={this.handleInputChange}>
                                        <option>tel.num</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                             <FormGroup row>
                                <Label htmlFor={'message'} md={2}>
                                    Your feedback
                                </Label>
                                <Col md={10}>
                                    <Input type={'textarea'} name={'message'} id={'message'} rows={12} value={this.state.message}
                                    onChange={this.handleInputChange}/>
                                </Col>
                            </FormGroup>
                             <FormGroup row>
                                <Col md={{size:10, offset:2}}>
                                    <Button type={'submit'} color={'primary'}>
                                        Send the feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;