import { CssBaseline } from '@mui/material'
import router from '@routes'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <>
    <CssBaseline />
    <RouterProvider router={router} />
    </>
  )
}

export default App
