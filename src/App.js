import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Projects from './components/projects/projects';
import CreateProject from './components/projects/CreateProject';
import EditProject from './components/projects/editProject';

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header/>

        <Switch>
          <Route exact path='/' component={About}/>
          <Route exact path='/sobre-mi' component={About}/>
          <Route exact path='/contacto' component={Contact}/>
          <Route exact path='/proyectos' component={Projects}/>
          <Route exact path='/crear-proyecto' component={CreateProject}/>
          <Route exact path='/proyecto/editar/:id' component={EditProject}/>
        </Switch>

        <Footer/>
      </Provider>
    </Router>
  )
}

export default App;