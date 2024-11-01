import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'
import Profile from './pages/Profile'
import UserProfile from './pages/UserProfile'
import ProfileInfo from './pages/ProfileInfo'
import Orders from './pages/Orders'
import Settings from './pages/Settings'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<ProductList />} />
          <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/profile' element = {<Profile />}>
          <Route path='user' element= {<UserProfile />} />
          <Route path='info' element= {<ProfileInfo />} />
          <Route path='order' element= {<Orders />}/>
          <Route path='settings' element= {<Settings />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App