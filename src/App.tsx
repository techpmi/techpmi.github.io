import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>

        {/* Временная панель навигации для проверки работы роутера.
            Когда будем делать настоящие страницы, можно удалить. */}

        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/students">Students</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        {/* <Switch> пробегает по дочерним элементам <Route> и рендерит
            первый с path совпадающим с текущим url. */}
        <Switch>
          <Route path="/login">
            <h1>Login</h1>
          </Route>
          <Route path="/students">
            <h1>Students</h1>
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
