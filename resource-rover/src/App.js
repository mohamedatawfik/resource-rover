import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import UserProfilePage from './components/UserProfilePage';
import ChooseTopicPage from './pages/ChooseTopicPage';
import NewTopicForm from './components/NewTopicForm';
import ChooseResourcePage from './pages/ChooseResourcePage';
import NewResourceForm from './components/NewResourceForm';
import ResourcePage from './pages/ResourcePage';

function App() {
  return (
    <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/register" component={RegistrationForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/profile" component={UserProfilePage} />
        <Route path="/topics" exact component={ChooseTopicPage} />
        <Route path="/topics/new" component={NewTopicForm} />
        <Route path="/resources" exact component={ChooseResourcePage} />
        <Route path="/resources/new" component={NewResourceForm} />
        <Route path="/resource/:id" component={ResourcePage} />
    </Router>
  );
}

export default App;

