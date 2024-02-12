import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './routes/Root.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import Dashboard from './routes/Dashboard.jsx'
import DashboardHome from './components/route_components/dashboard/DashboardHome.jsx'
import CreateExam from './routes/CreateExam.jsx'
import ViewAttendance from './routes/ViewAttendance.jsx'
import Exam from './routes/Exam.jsx'
import FloorsDisplay from './components/route_components/exam/FloorsDisplay.jsx'
import RoomNumberSlice from './app/features/roomNumberSlice.js'
import RoomsDisplay from './routes/RoomsDisplay.jsx'
import SeatsDisplay from './routes/SeatsDisplay.jsx'
import Workspace from './routes/Workspace.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App />, children: [{ path: '', element: <Root /> }] },
  { 
    path: '/dashboard', 
    element: <Dashboard />, 
    children: [
      {
        path: '',
        element: <DashboardHome />,
        children: [
          
        ]
      },
      {
        path: 'create-exam',
        element: <CreateExam />
      },
      {
        path: 'view-attendance',
        element: <ViewAttendance />
      },
      {
        path: ':examId',
        element: <Exam />,
        children: [
          {
            path: '',
            element: <FloorsDisplay />,
          },
          {
            path: ':floor-floorNumber',
            element: <RoomsDisplay />,
          },
          {
            path: '/dashboard/:examId/:floor-floorNumber/:room-roomNumber',
            element: <SeatsDisplay />,
          },
          
        ]
      },
      {
        path: 'workspace',
        element: <Workspace />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
