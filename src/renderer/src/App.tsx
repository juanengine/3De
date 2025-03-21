import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddCustomer from './pages/AddCustomer';
import CreateOrder from './pages/CreateOrder';

function App(): JSX.Element {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/add-customer' element={<AddCustomer/>}/>
        <Route path='/create-order' element={<CreateOrder/>}/>
      </Routes>
    </Router>
  )
}

export default App
