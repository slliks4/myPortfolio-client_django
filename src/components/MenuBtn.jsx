// Icon Imports
import { MenuIcon } from '../imports/Icons';

// Context Import
import useAppContext from '../hooks/useAppContext';

// Default Funtion
export default function MenuBtn() {
    const { dispatch } = useAppContext();
    
    const handleClick = () => {
        dispatch({ type: 'SET_SHOW_SIDE_MENU', payload: true });
    }

    return (
        <>
            <button
                className='text-primary font-extrabold'
                onClick={()=>handleClick()}
            >
                <MenuIcon />
            </button> 
        </>
    )
}
