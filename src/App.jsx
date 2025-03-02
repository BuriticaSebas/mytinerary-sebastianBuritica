import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MainLayout from "./Layouts/MainLayout"
import Home from "./pages/Home"
import Cities from "./pages/Cities"
import Login from "./pages/Login"

const router = createBrowserRouter([
  { path: '/',
    element: <MainLayout/> ,
    children: [
      {path: "/" , element: <Home/>},
      {path: "/cities", element: <Cities/>},
      {path: "/login", element: <Login/>}
    ]
  }
])


function App() {
  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
