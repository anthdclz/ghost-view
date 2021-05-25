import React from 'react';
import Header from './components/header/header.component';
import HomePage from './pages/home-page/home-page.component';
import GalleryPage from './pages/gallery-page/gallery-page.component';
import ItemPage from './pages/item-page/item-page.component';

import { Route, Switch } from 'react-router-dom';

import { GlobalStyle } from './global.styles';

const BrowsePage = () => (
  <div>Browse</div>
);

const TreyPage = () => (
  <div>Trey</div>
);

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/gallery' component={GalleryPage} />
          <Route path='/gallery/' component={ItemPage} />
          <Route path='/browse' component={BrowsePage} />
          <Route path='/trey' component={TreyPage} />
        </Switch>
      </div>
    );
  }
};

export default App;
