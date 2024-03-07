import NavBar from '../ui/NavBar/index.jsx'
import { Outlet } from 'react-router-dom';


export default function Root() {

  return (
    <>
      <NavBar/>
      <Outlet/>
    </>
  );
}
