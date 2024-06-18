// Library Imports
import { ToastContainer } from "./imports/Library";

// React router dom imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout Imports
import AppLayout from "./layouts/app/AppLayout";
import ProjectLayout from "./layouts/__project/ProjectLayout";

// Hook Imports
import useValidateServer from "./hooks/useValidateServer";

// Context Import
import { AppContextProvider } from "./context/AppContext";

// Component Imports
import AppLoading from './components/update/AppLoading';

// Page Imports
import ErrorPage from './pages/error/ErrorPage';
import HomePage from './pages/__home/HomePage';
import NotFoundPage from './pages/error/NotFoundPage';
import ServerErrorPage from './pages/error/ServerErrorPage';
import ProjectPortfolioPage from './pages/__project/ProjectPortfolioPage';
import ProjectLabPage from './pages/__project/ProjectLabPage';


// Default Function
function App() {
  // Validate Server
  const { error, isLoading } = useValidateServer();
  
  // Routes
  const routes = createBrowserRouter([
    {
      path:"/",
      errorElement: <ErrorPage />,
      element: <AppLayout />,
      children:[
        { index:true, element: <HomePage /> },
        { path:'about', element:<h1>about page</h1> },
        {
          path: 'project',
          element: <ProjectLayout />,
          children:[
            { index:true, element: <ProjectPortfolioPage /> },
            { path:'lab', element: <ProjectLabPage /> }
          ]
        }
      ]
    },
    { path:"*", element: <NotFoundPage /> }
  ]);

  if (isLoading){ return <AppLoading /> }
  if (error){ return <ServerErrorPage error={"Could not establish connection with server"} /> }
  
  return (
    <AppContextProvider>    
      <RouterProvider router={routes} />
      <ToastContainer />
    </AppContextProvider>
  );
}

export default App;
