import {Route, Switch} from 'react-router-dom';
import './App.css';
import NavBar from './components/Navigation';
import HomePage from './pages/home/Home';
import Posts from './pages/posts/App';
import ContactsList from './pages/contacts/Contacts';
import Photos from './pages/photos/Photos'

function App() {
  return (
    <div className="App">
      <header className="header flex">
        <NavBar/>
      </header>
      <main className='main-block'>
        <Switch>
          <Route path='/hw21-react-router/' exact>
          <HomePage/>
          </Route>
          <Route path='/hw21-react-router/posts'>
          <Posts/>
          </Route>
          <Route path='/hw21-react-router/contacts' >
          <ContactsList/>
          </Route>
          <Route path='/hw21-react-router/photos' >
          <Photos/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
