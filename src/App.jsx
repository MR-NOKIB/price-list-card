import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Navbar from './components/Navbar/Navbar'
import PhoneBar from './components/PhoneBar/PhoneBar'
import PriceList from './components/PriceList/PriceList'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
      <PhoneBar></PhoneBar>
    </>
  )
}

export default App
