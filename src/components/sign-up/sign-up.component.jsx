import React from 'react';
import FormInputComponent from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUpComponent extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    };

    handleSubmit = async e => {
        e.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword){
            alert("Make sure passwords match.");
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            // Clear the form:
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        }catch(e){
            console.log('Error', e);
            alert(e.message); // Auth error messages!!
        }
    };

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({[name]: value});
    };

    render() {
        const {displayName, email, password, confirmPassword } = this.state;
        return(
            <div className='sign-up'>
                <h2>Create an account</h2>
                <span className='title'>Sign up for a new account - Currently Disabled</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInputComponent
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInputComponent
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInputComponent
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInputComponent
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                    </form>
            </div>
        );
    };
}

export default SignUpComponent;