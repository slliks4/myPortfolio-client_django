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

// Default Function
export default function ProjectPortfolioPage() {
  const { categories } = useOutletContext();
  const [ params, setParams ] = useState({ isLab:'false', limit:6 });
  const query_key = 'projectPortfolio';

  return (
    <>
      <BoxThemeProvider 
        className={'mt-4'}
        children={
          <> 
            <h1 className="text-lg text-white">Work Portfolio</h1>
            <p className="mb-6 mt-3 text-md">
              Explore our Work Portfolio, showcasing a collection of projects that highlight our proficiency in cutting-edge technologies. From visually stunning websites designed with HTML5, CSS, and Tailwind, to powerful web applications built with React.js and jQuery, and efficient backend systems developed using Python, Django, and FastAPI, each project reflects our commitment to quality and innovation.
            </p>
            <BuildCategories categories={categories} setParams={setParams} params={params} />
            <Project query_key={query_key} params={params} />
          </>
        }
      />
      <Contact />
    </>
  )
}
