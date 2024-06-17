// React Router dom Import
import { NavLink } from 'react-router-dom';

// Icons Import
import { ExternalLinkIcon } from "../imports/Icons";

export default function LinkBtn({path}) {
    return (
        <NavLink to={path} className={'absolute right-0 bottom-0 m-4 text-2xl text-secondary'} >
            <ExternalLinkIcon />
        </NavLink>
    )
}
