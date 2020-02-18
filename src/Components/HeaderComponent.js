import React,{Component} from "react";
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    NavItem,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form, FormGroup, Label, Input
} from "reactstrap";
import {NavLink} from 'react-router-dom';
class Header extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            isNavOpen: false,
            isModOpen:false
        };
        this.toggleMod=this.toggleMod.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    toggleNav()
    {
        this.setState(
            {
                isNavOpen : !this.state.isNavOpen
            });
    }
    toggleMod()
    {
        this.setState(
            {
                isModOpen: !this.state.isModOpen
            }
        )
    }
    handleSubmit(event)
    {
            event.preventDefault();
        this.toggleMod();
        alert("username : "+ this.username.value+"\nPassword : "+this.password.value+"\n Remember : "+this.remember.checked);

    }
    render()
    {
        return (
           <div>
            <Navbar dark expand={'md'}>
                <div className="container">
                <NavbarToggler onClick={()=>this.toggleNav()} />
                    <NavbarBrand className={"mr-auto"} href="/home"> <img src={'assets/images/logo.png'} height={'30'} width={'41'} alt={"Ristorante Con Fusion"} />
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                            </Nav>
                        <Nav className={'ml-auto'}>
                            <NavItem><Button onClick={this.toggleMod}><i className={'fa fa-sign-in fa-lg'}></i>Login</Button></NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
           <div className="Jumbotron">
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>
           <Modal isOpen={this.state.isModOpen} toggle={this.toggleMod}>
               <ModalHeader toggle={this.toggleMod}>
                Login
               </ModalHeader>
               <ModalBody>
                   <Form onSubmit={this.handleSubmit}>
                       <FormGroup>
                           <Label htmlFor={'username'}> Username</Label>
                           <Input id={'username'} type={'text'} name={'username'} innerRef={(input)=>
                           this.username=input} />
                       </FormGroup>
                       <FormGroup>
                           <Label htmlFor={'password'}> Password</Label>
                           <Input id={'password'} type={'password'} name={'password'} innerRef={(input)=>
                           this.password=input} />
                       </FormGroup>
                       <FormGroup check>
                           <Label check>
                               <Input id={'remeber'} type={'checkbox'} name={'remember'} innerRef={(input)=>
                           this.remember=input} />
                           Remember Me
                           </Label>
                       </FormGroup>
                       <Button type={'submit'} color={'primary'} role={'button'}>Submit</Button>
                   </Form>
               </ModalBody>
           </Modal>
           </div>
           </div>
        );
    }
}
export default Header;