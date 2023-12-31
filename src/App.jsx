

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './Main/Main'
import Home from './Components/Home/Home'

function App() {

  const router = createBrowserRouter([
    {
      path : '/',
      element : <Main></Main>,
      children : [
        {
          path : "/",
          element : <Home></Home>
        }
      ]
    }
  ])


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
