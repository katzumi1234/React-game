import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Layout from './Pages/Layout';
import NotFound from './Pages/NotFound';
import Rules from './Pages/Rules';
import Game from './Pages/Game';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout>
      <Homepage />
    </Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: '/rules',
    element: <Layout>
      <Rules />
    </Layout>
  },
  {
    path: '/game',
    element: <Layout>
      <Game />
    </Layout>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
