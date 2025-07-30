import { Outlet } from 'react-router';

import './app.css';

export function App() {
  return (
    <>
      <header></header>
      <Outlet />
      <footer></footer>
    </>
  );
}
