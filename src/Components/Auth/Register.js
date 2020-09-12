import React, { Component } from 'react';
import Firebase from 'firebase';
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom';

class Register extends Component {
    firestore = Firebase.firestore(); // Firestore!

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
    }

    render() {
        const { auth } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className="herobanner">
                <h1>MAKE SOCIAL MEDIA GREAT AGAIN</h1>
                <h4>Social Media is a disease. Meet the cure.</h4>
                <div className="row">
                    <form id="register" className="col s12" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input field col s6">
                                <input
                                    placeholder="Firstname"
                                    name='firstname'
                                    id="firstname"
                                    type="text"
                                    className="validate"
                                    value={this.state.firstname}
                                    onChange={this.handleInput}
                                />
                                <label htmlFor="firstname">First Name</label>
                            </div>
                            <div className="input field col s6">
                                <input
                                    placeholder="Lastname"
                                    name='lastname'
                                    id="lastname"
                                    type="text"
                                    className="validate"
                                    value={this.state.lastname}
                                    onChange={this.handleInput}
                                />
                                <label htmlFor="lastname">Last name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input field col s6">
                                <input
                                    placeholder="Username"
                                    id="username"
                                    name='username'
                                    type="text"
                                    className="validate"
                                    value={this.state.username}
                                    onChange={this.handleInput}
                                />
                                <label htmlFor="username">Username</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    placeholder="Email"
                                    id="email"
                                    type="email"
                                    name='email'
                                    className="validate"
                                    value={this.state.email}
                                    onChange={this.handleInput}
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    placeholder="Password"
                                    id="password"
                                    type="password"
                                    name='password'
                                    className="validate"
                                    value={this.state.password}
                                    onChange={this.handleInput}
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div >
                        <button className="btn waves-effect waves-light" type="submit" name="action">
                            Register
                                </button>
                    </form >
                </div >
            </div >
        );
    }
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)