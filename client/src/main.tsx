import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import './index.css';
import HomePage from './pages/HomePage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import PlansPage from './pages/PlansPage.tsx';
import BrowsePage from './pages/BrowsePage.tsx';
import WatchPage from './pages/WatchPage.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/plans' element={<PlansPage />} />
      <Route path='/browse' element={<BrowsePage />} />
      <Route path='/browse/watch/:id' element={<WatchPage />} />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
