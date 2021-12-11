import Todo from "./Components/Todo";
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
      <Switch>
        <Route path='/' exact={true}>
          <Todo  />
        </Route>

      </Switch>
  );
}

export default App;
