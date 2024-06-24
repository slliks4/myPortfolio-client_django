// Library Imports
import { ToastContainer } from "./imports/Library";

// React router dom imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout Imports
import AppLayout from "./layouts/app/AppLayout";
import ProjectLayout from "./layouts/__project/ProjectLayout";
import AboutLayout from './layouts/__about/AboutLayout';

// Hook Imports
import useValidateServer from "./hooks/useValidateServer";

// Context Import
import { AppContextProvider } from "./context/AppContext";

// Component Imports
import AppLoading from './components/app/update/AppLoading';
import AppError from "./components/app/error/AppError";
import ServerError from "./components/error/ServerError";

// Page Imports
import HomePage from './pages/__home/HomePage';
import NotFoundPage from './pages/error/NotFoundPage';
import ProjectPortfolioPage from './pages/__project/ProjectPortfolioPage';
import ProjectLabPage from './pages/__project/ProjectLabPage';
import AboutDefaultPage from './pages/__about/AboutDefaultPage';
import CredentialPage from './pages/__about/CredentialPage';
import ContactPage from './pages/__contact/ContactPage';
import ProjectDetailPage from "./pages/__project/ProjectDetailPage";

// Default Function
function App() {
  // Validate Server
  const { error, isLoading } = useValidateServer();
  
  // Routes
  const routes = createBrowserRouter([
    {
      path:"/",
      errorElement: <AppError />,
      element: <AppLayout />,
      children:[
        { index:true, element: <HomePage /> },
        {
          path:'about',
          element: <AboutLayout />,
          children:[
            { index:true, element: <AboutDefaultPage /> },
            { path:'profile', element: <AboutDefaultPage /> },
            { path:'credentials', element: <CredentialPage /> }
          ]
        },
        {
          path: 'project',
          element: <ProjectLayout />,
          children:[
            { index:true, element: <ProjectPortfolioPage /> },
            { path:'portfolio', element: <ProjectPortfolioPage /> },
            { path:'lab', element: <ProjectLabPage /> }
          ]
        },
        { path: 'contact', element: <ContactPage /> }
      ]
    },
    { path: "/project/:id", element: <ProjectDetailPage /> },
    { path:"*", element: <NotFoundPage /> }
  ]);

  if (isLoading){ return <AppLoading /> }
  if (error){ return <ServerError /> }
  
  return (
    <AppContextProvider>    
      <RouterProvider router={routes} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        className={"custom-toast"}
      />
    </AppContextProvider>
  );
}

export default App;
