import Todo from "./Components/Todo";
import {Switch, Route} from 'react-router-dom';


function App() {
  return (
      <Switch>
        <Route path='/' exact={true}>
        <h1>My Todos</h1>
          <Todo text='Learn React' />
          <Todo  text='Explore Firebase' />
          <Todo  text='Master React'/>
      
  
        
        </Route>

      </Switch>
  );
}

export default App;
