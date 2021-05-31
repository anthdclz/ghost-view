import React from 'react';
import Header from './components/header/header.component';
import HomePage from './pages/home-page/home-page.component';
import GalleryPage from './pages/gallery-page/gallery-page.component';
import ItemPage from './pages/item-page/item-page.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';

import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { GlobalStyle } from './global.styles';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

const BrowsePage = () => (
  <div>Browse</div>
);

const TreyPage = () => (
  <div>Trey</div>
);

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
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/gallery' component={GalleryPage} />
          <Route path='/gallery/summary' component={ItemPage} />
          <Route path='/gallery/details' component={ItemPage} />
          <Route path='/browse' component={BrowsePage} />
          <Route path='/trey' component={TreyPage} />
          <Route path='/sign-in' component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
