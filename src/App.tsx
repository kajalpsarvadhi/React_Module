// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage'
import StorePage from './pages/StorePage'
import ProfilePage from './pages/ProfilePage'
import HooksPage from './pages/HooksPage'
import ListRender from './pages/ListRender'
import Footer from './pages/Footer'





import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom'
import RecipeFinder from './pages/RecipeFinder'



function App() {
  // const [count, setCount] = useState(0)

  /*return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )*/
 
 
 
 return(
  <BrowserRouter>
  <div style={{ maxWidth: '600px', margin: 'auto' }}>

    <nav style={{marginBottom:"20px"}}>
      <Link to="/">Home || </Link>
      <Link to="/store">Store || </Link>
      <Link to="/profile">Profile || </Link>
      <Link to="/hooks">Hooks || </Link>
      <Link to="/renderingList">Rendering List || </Link>
      <Link to="/recipes">Recipe - Project </Link>
    </nav>

    <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/hooks" element={<HooksPage />} />
          <Route path="/renderingList" element={<ListRender/>} />
          <Route path="/recipes" element={<RecipeFinder/>} />
    </Routes>
    <Footer/>

  </div>
  </BrowserRouter>
 ) 

}

export default App
