import React from 'react';
import Header from './components/header/header.component';
import HomePage from './pages/home-page/home-page.component';
import GalleryPage from './pages/gallery-page/gallery-page.component';
import FavoritesPage from './pages/favorites-page/favorites-page.component';
import BrowsePage from './pages/browse-page/browse-page.component';
import ItemPage from './pages/item-page/item-page.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';

import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { GlobalStyle } from './global.styles';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const memberRef = await createUserProfileDocument(userAuth);

        memberRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <GlobalStyle />
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/gallery' element={<GalleryPage />} />
          <Route exact path='/favorites' element={<FavoritesPage />} />
          <Route path='/gallery/summary' element={<ItemPage />} />
          <Route path='/gallery/details' element={<ItemPage />} />
          <Route path='/browse' element={<BrowsePage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
          <Route
            exact
            path='/sign-in' 
            // render={
            //   ()=> this.props.currentUser ? (<Navigate to='/' />) : <SignInSignUpPage />
            // }
            element={<SignInSignUpPage />}
          />
        </Routes>
      </div>
    );
  }
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
