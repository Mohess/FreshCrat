import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Products from './Components/Products/Products';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import Categories from './Components/Categories/Categories';
import Brands from './Components/Brands/Brands';


export default function App() {


  const myRouter= createBrowserRouter([
    { path:'/' , element:  <Layout /> , children:[

      { path:'home' , element:  <Home />},
      { path:'login' , element:  <Login />},
      { path:'register' , element:  <Register />},
      { path:'products' , element:  <Products />},
      { path:'categories' , element:  <Categories />},
      { path:'brands' , element:  <Brands />},
      { index:true , element:  <Products />},
      { path:'*' , element:  <NotFound />},
    ] }
    
  ])

  return <>
  
  <RouterProvider  router={ myRouter } />

  </>

}


