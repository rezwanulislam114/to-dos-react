import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import TodoDetail from './components/TodoDetail/TodoDetail';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/todos">
            <Todos></Todos>
          </Route>
          <Route path="/todo-detail/:todoId">
            <TodoDetail></TodoDetail>
          </Route>
          <Route path="">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
