// React Import
import { useState } from 'react'

// Default Function
export default function BuildCategories({ categories, setParams, params }) {
    const [active, setActive] = useState(null);
    const handleClick = ({ category }) => {
        setParams({ ...params, category:category });
        setActive(category);
    };

    return (
        <div className="flex flex-wrap">
            <button 
                onClick={()=> handleClick({ category:null })}
                className={`capitalize cursor-pointer w-fit h-fit p-2 rounded-md mr-2 mb-2 text-sm border border-primary ${active === null ? 'bg-secondary' :''}`}
            >All</button>
            { categories.map(category=>(
                <button 
                    key={category.id} 
                    onClick={()=> handleClick({ category:category.name })}
                    className={`capitalize cursor-pointer w-fit h-fit p-2 rounded-md border border-primary mr-2 mb-2 text-sm ${active === category.name ? 'bg-secondary' :''}`}
                >{ category.name }</button>
            ))}
        </div>
    )
}
