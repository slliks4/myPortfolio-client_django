// React Router Dom Import
import { NavLink } from "react-router-dom";

// Default Function
export default function ErrorPage({ error="Broken pipe" }) {
  return (
    <main className="grid h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-red-600">oops !!!</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">{error}</h1>
        <p className="mt-6 text-base leading-7">{error}</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <NavLink
            to={'/'}
            className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          >
            Go back home
          </NavLink>
          <NavLink to={'contact'} className="text-sm font-semibold">
            Contact support <span aria-hidden="true">&rarr;</span>
          </NavLink>
        </div>
      </div>
    </main>
  )
}
