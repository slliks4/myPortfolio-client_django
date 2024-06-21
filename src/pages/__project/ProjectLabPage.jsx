// React Import
import { useState } from "react";

// React Router Dom Import
import { useOutletContext } from "react-router-dom"

// Components Import
import Project from "../../components/__project/Project";
import BuildCategories from '../../components/BuildCategories';
import Contact from '../../components/Contact';

// Providers Import
import BoxThemeProvider from '../../providers/BoxThemeProvider';

// Default function
export default function ProjectLabPage() {
  const { categories } = useOutletContext();
  const [ params, setParams ] = useState({ isLab:'true', limit:6 });
  const query_key = 'projectLab';

  return (
    <>
      <BoxThemeProvider children={
        <> 
          <h1 className="text-2xl text-white">Code Lab</h1>
          <p className="mb-6 mt-3 text-md">
            Welcome to Code Laboratory, a dynamic space where innovation meets technology. Specializing in a diverse range of programming languages and frameworks, we transform ideas into digital realities. 
          </p>
          <BuildCategories categories={categories} setParams={setParams} params={params} />
          <Project query_key={query_key} params={params} />
        </>
      }/>
      <Contact />
    </>
  )
}
