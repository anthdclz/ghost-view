import React from 'react';
import FormInputComponent from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignInComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        }catch(e){
            console.log(e);
        }
    }

    handleChange = e => {
        const {value, name } = e.target;

        this.setState({ [name]: value});
    }
    render(){
        return(
            <div className='sign-in'>
                <h2>Sign in with Email</h2>
                <span className='title'>Or sign in with Google</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInputComponent name='email' type='email' label='Email' value={this.state.email} handleChange={this.handleChange} required />
                    <FormInputComponent name='password' type='password' label='Password' value={this.state.password} handleChange={this.handleChange} required />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In with Email</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
};

export default SignInComponent;