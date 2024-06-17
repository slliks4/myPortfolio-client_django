// Icon Imports
import { GithubIcon, LinkedinIcon, TwitterIcon, WhatsappIcon } from '../imports/Icons';

// Default Function
export default function socialLinks() {
    const links = [
        { path:"https://github.com/slliks4", icon:<GithubIcon /> },
        { path:"https://www.linkedin.com/in/skills-nwokolo-anthony/", icon:<LinkedinIcon /> },
        { path:"https://wa.me/17093278169", icon:<WhatsappIcon /> },
        { path:"https://twitter.com/SkillsAnthony", icon:<TwitterIcon /> }
    ];
    return links;
}
