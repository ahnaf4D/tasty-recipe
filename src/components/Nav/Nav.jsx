import { FaCircleUser } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
export default function Nav() {
  return (
    <div>
      <div className='navbar bg-base-100'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className='p-2'>
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className='btn btn-ghost text-xl'>TastyRecipe</a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className='navbar-end'>
          <label className='input input-bordered flex items-center gap-2'>
            <input type='text' className='w-40' placeholder='Search' />
            <span className=''>
              <FaSearch />
            </span>
          </label>
          <>&nbsp;</>
          <>&nbsp;</>
          <a className=''>
            <FaCircleUser className='text-3xl' />
          </a>
        </div>
      </div>
    </div>
  );
}
