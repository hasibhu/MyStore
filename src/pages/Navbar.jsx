// import React, { useEffect, useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs'
// import { FaBarsStaggered } from 'react-icons/fa6';
// import NavLinks from '../components/NavLinks';



// const themes = {
//     winter: 'winter',
//     dracula: 'dracula'
// }
// const Navbar = () => {
//     const [theme, setTheme] = useState(themes.winter);

//     const handleTheme = () => {
//         const { winter, dracula } = themes;
//         const newTheme = theme === winter ? dracula : winter;
//         setTheme(newTheme)
//     }
    
//     useEffect(() => {
//         document.documentElement.setAttribute('data-theme', theme);
//         localStorage.setItem('theme', theme)
        
//     }, [theme])
//     return (
//         <nav className='bg-base-200'>

//             <div className='navbar align-element'>
//                 <div className='navbar-start'>
//                     <NavLink to={'/'} className='hidden lg:flex btn btn-primary text-center items-center text-3xl'>Comfy</NavLink>
//                 </div>

//                 {/* dropdown menu  */}
//                 <div className='dropdown'>
//                     <label tabIndex={0} className='btn btn-ghost lg:hidden'>
//                         <FaBarsStaggered className='h-6 w-6 '></FaBarsStaggered>
//                     </label>
//                     <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[-1] p-2 shadow-lg bg-base-200'>
//                         <NavLinks/>
//                     </ul>
//                 </div>



//                 <div className='navbar-center hidden lg:flex'>

//                     <ul className='menu menu-horizontal font-bold'>   <NavLinks/> </ul>
                    
//                 </div>

                

//                 <div className='navbar-end'>
//                     {/* THEME SETUP */}
//                     <label className='swap swap-rotate'>
//                             {/*   */}
//                             <input type='checkbox' onChange={handleTheme} />
                            
//                         {/* moon icon*/}
//                         <BsMoonFill className='swap-on h-4 w-4' />


//                         {/* sun icon*/}
//                             <BsSunFill className='swap-off h-4 w-4' />
                            
//                     </label>

                    


//                     {/* CART LINK */}
//                     <NavLink to='/cart' className='btn btn-ghost btn-circle btn-md ml-4'>
//                         <div className='indicator'>
//                             <BsCart3 className='h-6 w-6' />
//                             <span className='badge badge-sm badge-primary indicator-item'>
//                                 {/* {numItemsInCart} */}
//                                 <h2>2</h2>
//                             </span>
//                         </div>
//                     </NavLink>
//         </div>
//             </div>
            
          
//         </nav>
//     );
// };

// export default Navbar;

import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import NavLinks from '../components/NavLinks';

const themes = {
    winter: 'winter',
    dracula: 'dracula',
};

const Navbar = () => {
    // Load theme from localStorage or set default
    const [theme, setTheme] = useState(localStorage.getItem('theme') || themes.winter);

    const handleTheme = () => {
        const newTheme = theme === themes.winter ? themes.dracula : themes.winter;
        setTheme(newTheme);
    };

    useEffect(() => {
        // Apply the selected theme
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <nav className='bg-base-200'>
            <div className='navbar align-element'>
                <div className='navbar-start'>
                    <NavLink to={'/'} className='hidden lg:flex btn btn-primary text-center items-center text-3xl'>
                        Comfy
                    </NavLink>
                </div>

                {/* Dropdown menu */}
                <div className='dropdown'>
                    <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                        <FaBarsStaggered className='h-6 w-6' />
                    </label>
                    <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[-1] p-2 shadow-lg bg-base-200'>
                        <NavLinks />
                    </ul>
                </div>

                <div className='navbar-center hidden lg:flex'>
                    <ul className='menu menu-horizontal font-bold'>
                        <NavLinks />
                    </ul>
                </div>

                <div className='navbar-end'>
                    {/* Theme Setup */}
                    <label className='swap swap-rotate'>
                        {/* Theme toggle switch */}
                        <input
                            type='checkbox'
                            onChange={handleTheme}
                            checked={theme === themes.dracula}
                        />

                        {/* Moon icon (Dracula theme) */}
                        <BsMoonFill className='swap-on h-4 w-4' />

                        {/* Sun icon (Winter theme) */}
                        <BsSunFill className='swap-off h-4 w-4' />
                    </label>

                    {/* Cart link */}
                    <NavLink to='/cart' className='btn btn-ghost btn-circle btn-md ml-4'>
                        <div className='indicator'>
                            <BsCart3 className='h-6 w-6' />
                            <span className='badge badge-sm badge-primary indicator-item'>
                                <h2>2</h2>
                            </span>
                        </div>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
