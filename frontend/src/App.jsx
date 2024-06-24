import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import GetUsers from './GetUsers/GetUsers'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<GetUsers />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
