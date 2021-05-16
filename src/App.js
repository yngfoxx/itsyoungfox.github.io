import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import PageScreen from './screens/PageScreen';

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Route path="/" component={HomeScreen} exact></Route>
        <Route path="/page/:id" component={PageScreen}></Route>
      </main>
    </BrowserRouter>
  );
};

export default App;
