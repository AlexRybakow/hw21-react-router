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
      <main>
        <Switch>
          <Route path='/' exact>
          <HomePage/>
          </Route>
          <Route path='/posts'>
          <Posts/>
          </Route>
          <Route path='/contacts' >
          <ContactsList/>
          </Route>
          <Route path='/photos' >
          <Photos/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
