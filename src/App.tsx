import {
  BrowserRouter as Router,
  Switch,

} from "react-router-dom";
import GlobalStyle from './globalStyle'
import { Navbar } from './components'

function App() {
  return (
    <Router>
       <Switch>
      <Navbar />
      <GlobalStyle/>
     

      </Switch>
    </Router>

  );
}

export default App;
