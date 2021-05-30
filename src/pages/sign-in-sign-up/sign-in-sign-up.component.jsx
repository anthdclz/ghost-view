import React from 'react';
import SignInComponent from '../../components/sign-in/sign-in.component';
import SignUpComponent from '../../components/sign-up/sign-up.component';

import './sign-in-sign-up.styles.scss';


const SignInSignUpPage = () => (
    <div className='sign-in-sign-up page'>
        <SignInComponent />
        <SignUpComponent />
    </div>
);

export default SignInSignUpPage;