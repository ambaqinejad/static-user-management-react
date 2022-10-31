import './App.css';
import users from './Data/Users';
import UsersList from './Components/UsersList';

function App() {

  return (
    <div>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
