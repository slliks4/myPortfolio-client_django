// React Router Dom Imports
import { Link } from "react-router-dom";

// Utils Import
import socialLinks from '../utils/socialLinks';

// Default Function
export default function BuildSocialLinks() {
  const links = socialLinks();
  return (
    <>
        { links?.map((link, index)=>(
            <li key={index}>
                <Link to={link.path} target="blank" className="text-3xl text-green-200 opacity-80">
                    { link.icon }
                </Link>
            </li>
        ))}    
    </>
  )
}
