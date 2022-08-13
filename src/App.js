import React from 'react';
import { useRoutes, Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'
import './App.css'
import routesTable from './routes'
const App = () => {

  return (
    <div className="App">
      <aside className='side-bar'>
        <NavLink className={({isActive}) => isActive ? "active":""} to="/error">Error</NavLink>
        <NavLink className={({isActive}) => isActive ? "active":""} to="/http-request">HTTP Request</NavLink>
      </aside>
      <main className="main">
        {useRoutes(routesTable)}
      </main>
    </div>
  )
};

export default App;
