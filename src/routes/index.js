import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from './Dashboard'
import User from './User'
import Preference from './Preference'

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/users' element={<User />}/>
        <Route path='/preference' element={<Preference />}/>
        <Route path='*' element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Main
