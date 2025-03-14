import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import './Globol.css';
import { router } from './routes';

export function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
      />
    </>
  );
}