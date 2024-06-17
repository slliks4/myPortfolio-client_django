// Icon Imports
import { MenuIcon } from '../imports/Icons';

// Default Funtion
export default function MenuBtn({ setShowSideMenu, showSideMenu }) {
    const handleClick = () => {
        setShowSideMenu(true)
    }

    return (
        <>
            { !showSideMenu && (
                <button
                    className='text-primary font-extrabold'
                    onClick={()=>handleClick()}
                >
                    <MenuIcon />
                </button>
            )}        
        </>
    )
}
