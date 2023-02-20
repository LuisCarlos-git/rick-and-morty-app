import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Dashboard } from '@/screens'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
])

export const AppRoutes = () => <RouterProvider router={router} />
