import { Outlet } from 'react-router';

import './app.css';

export default function App() {
  return (
    <>
      <header></header>
      <Outlet />
      <footer></footer>
    </>
  );
}
