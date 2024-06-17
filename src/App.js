// Library Imports
import { ToastContainer } from "./imports/Library";

// React Imports
import { lazy } from "react";

// React router dom imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout Imports
import AppLayout from "./layouts/app/AppLayout";

// Hook Imports
import useValidateServer from "./hooks/useValidateServer";

// Component Imports
const AppLoading = lazy(()=>import("./components/update/AppLoading"));

// Page Imports
const ServerErrorPage = lazy(()=>import("./pages/error/ServerErrorPage"));
const NotFoundPage = lazy(()=>import("./pages/error/NotFoundPage"));
const ErrorPage = lazy(()=>import("./pages/error/ErrorPage"));
const HomePage = lazy(()=>import("./pages/__home/HomePage"));


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
        { path:'about', element:<h1>about page</h1> }
      ]
    },
    { path:"*", element: <NotFoundPage /> }
  ]);

  if (isLoading){ return <AppLoading /> }
  if (error){ return <ServerErrorPage error={"Could not establish connection with server"} /> }
  
  return (
    <>    
      <RouterProvider router={routes} />
      <ToastContainer />
    </>
  );
}

export default App;
