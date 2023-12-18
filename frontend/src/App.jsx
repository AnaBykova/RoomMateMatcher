import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import TopNavigation from './components/TopNavigationBar'
import LoginButton from './components/LoginButton'
import Filter from './components/Filter'
import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile'
import ListingItem from './components/ListingItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        
        <TopNavigation />
        <LoginButton />
        <LogoutButton />
        <Filter />
        <Profile />
        <ListingItem />
      </main>
      
      <div>
        
      </div>
      <h1>
        
      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
