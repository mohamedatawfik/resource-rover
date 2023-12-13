// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/topics" element={<ChooseTopicPage />} />
        <Route path="/topics/new" element={<NewTopicForm />} />
        <Route path="/resources" element={<ChooseResourcePage />} />
        <Route path="/resources/new" element={<NewResourceForm />} />
        <Route path="/resource/:id" element={<ResourcePage />} />
      </Routes>
    </Router>
  );
}

export default App;


