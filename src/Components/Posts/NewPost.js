import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { newPost } from '../../store/actions/postActions';
// import Firebase from 'firebase';
import { Redirect } from 'react-router-dom';


class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            // Voit laittaa tyhjät statet, koska nää tekee ne.
            // mutta muistutuksena se on title ja message.
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.newPost({
            title: this.state.title,
            message: this.state.message
        })
        this.props.history.push('/');
    }

    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/login' />
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h4 className="black-text text-darken-4">Make a Roar!</h4>
                    <label htmlFor="title">Roar Title</label>
                    <div className="input field">
                        <input placeholder="title"
                            id="title"
                            type="text"
                            className="validate"
                            onChange={this.handleChange}
                        />
                    </div>
                    <label htmlFor="newpost">Make yourself Heard</label>
                    <div className="input field">
                        <textarea placeholder="Roar"
                            id="message"
                            type="textarea"
                            className="validate"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <button className="btn waves-effect waves-light" type="submit" name="action">
                            Make a roar!
                        </button>
                    </div>
                </form >
            </div >
        );
    }
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}


// pitää AINA palauttaa objekti.
// reduxStatessa on meidän todos.
// reduxState muutetaan propsiksi Reactissa.
const mapDispatchToProps = dispatch => {
    return {
        newPost: (post) => dispatch(newPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
// 1 miten actionit dispatchataan.
// 2 payload on post: post - sitä käytetään luomaan uusi state.
// 3 dispatch funktiot menevät komponentteihin propseina, tässä mallina ne menevät post propsilla.


// jos MapStatetoPropsia ei ole, pitää laittaa null.
// mapDispatchtoprops pitää aina olla tokana, koska state tulee aina ennen propsia.
// connect, state, props. Tässä järjestyksessä.
