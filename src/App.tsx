import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import * as pages from './pages';

const DEV_NAVIGATION = (
  /* Временная панель навигации для проверки работы роутера. Удалить потом */
  <nav>
    <ul>
      <li>
        <Link to="/">Главная</Link>
      </li>
      <li>
        <Link to="/auth">Авторизация</Link>
      </li>
      <li>
        <Link to="/reg">Регистрация</Link>
      </li>
      <li>
        <Link to="/forget">Смена пароля</Link>
      </li>
      <li>
        <Link to="/students">Реестр студентов</Link>
      </li>
      <li>
        <Link to="/departments">Реестр кафедр</Link>
      </li>
      <li>
        <Link to="/student-card">Карточка студента</Link>
      </li>
      <li>
        <Link to="/department-card">Карточка кафедры</Link>
      </li>
    </ul>
  </nav>
); 

function App() {
    return (
        <Router>
            <>
                {DEV_NAVIGATION}

                {/* <Switch> пробегает по дочерним элементам <Route> и рендерит
                    первый с path совпадающим с текущим url. */}
                <Switch>
                    <Route path="/auth">
                        <pages.Authorization/>
                    </Route>
                    <Route path="/reg">
                        <pages.Registration/>
                    </Route>
                    <Route path="/forget">
                        <pages.ForgetPassword/>
                    </Route>
                    <Route path="/students">
                        <pages.StudentRegistry/>
                    </Route>
                    <Route path="/departments">
                        <pages.DepartmentRegistry/>
                    </Route>
                    <Route path="/student-card">
                        <pages.StudentCard/>
                    </Route>
                    <Route path="/department-card">
                        <pages.DepartmentCard/>
                    </Route>
                    <Route path="/">
                        <pages.Main/>
                    </Route>
                </Switch>
            </>
        </Router>
    );
}

export default App;
