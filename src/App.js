import Login from './Assesment/components/Login';
import {selectUser} from './Assesment/Features/userSlice';
import Index from './Assesment/Index';
import { useSelector } from 'react-redux';
function App() {
  const user=useSelector(selectUser);
  return (
    
    <div>
      
    {user ? <Index/>: <Login/>}
    
    
    </div>
    
  );
}

export default App;  


