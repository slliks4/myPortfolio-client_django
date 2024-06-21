// React Router Dom Import
import { NavLink, useNavigate } from "react-router-dom";

// Default Function
export default function AppError({ errMessage="" }) {
  const navigate = useNavigate();

  return (
    <main className="h-lvh w-screen fixed top-0 left-0 z-50 bg-gray-950 grid place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-red-600">OOPS ! ! !</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Broken Pipes</h1>
        <p className="mt-6 text-base leading-7">{errMessage}</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            onClick={()=>{
              navigate(-1);
            }}
          >
            Return Back <span aria-hidden="true">&rarr;</span>
          </button>
          <NavLink
            to={'/'}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </NavLink>
        </div>
      </div>
    </main>
  )
}
