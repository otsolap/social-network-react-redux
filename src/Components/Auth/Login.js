import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { isLoaded } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';


class Login extends Component {
    // constructor luo uusia INSTANSSEJA loginnista, siksi käytämme thissiä.
    // THIS viittaa INSTANSSIIN, ei ITSE loginniin.
    // eli this muokkaa this.statea.... siksi siinä on se this.
    // constructor-method on varmaan siis välimies? joo constructor tekee lOGIN-INSTANSSIN. Näin Loginnia ei mutaatioiteta.
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        //  binding method => this. this on instance objektissa, joka luotiin.
        //  eli this varmistaa, että Login ei ole se muokattu, vaan se on handleinput tai submit.
        // this varmistaa, että muokkaus siis keskittyy tiettyyn osaan eikä parenttiin.
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput = (event) => {
        this.setState({
            // event target value on web-domainista revitti.
            // debugger ftw.
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }

    render() {
        const { authError, auth } = this.props;


        if (auth.uid) return <Redirect to='/' />
        return (
            <div className="herobanner">
                <h1> MAKE SOCIAL MEDIA GREAT AGAIN </h1>
                <h4>Social Media is a disease. Meet the cure.</h4>
                <div className="row">
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="validate"
                                value={this.state.email}
                                onChange={this.handleInput}
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <form id="login" className="col s12" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="validate"
                                    value={this.state.password}
                                    onChange={this.handleInput}
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div >
                        <button className="btn waves-effect waves-light" type="submit" name="action">
                            Login
                                </button>
                    </form >
                    <div>
                        {authError ? <p>{authError}</p> : null}
                    </div>
                </div >
                <span>Don't have an account yet? <a href="/register">Register here! </a></span>
            </div >
        );
    }
};

//state.auth tulee rootreducerista.
// ja authError tulee authActions.
// muista että se on authError, ei Autherror tai autherror.
// kirjainkoolla väliä.
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (auths) => dispatch(signIn(auths))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);