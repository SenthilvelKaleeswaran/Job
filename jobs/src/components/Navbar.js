import React from 'react'
import { FaSearch } from 'react-icons/fa'
import Profile from '../assets/profile.png'
import Notification from '../assets/Notification.png'
import { useTranslation } from 'react-i18next';

function Navbar({globalSearch,setGlobalSearch,handleLanguageChange}) {

  const { t } = useTranslation();

  return (
    <div className='flex justify-around items-center bg-gray-700 h-14 py-8'>
        <p className='text-white'>{t('navbar.JOBS')}</p>
        <div className='flex justify-around items-center rounded-full drop-shadow-2xl p-1 w-1/5 bg-slate-800'>
            <input   
                className="text-white  bg-transparent bg-opacity-100 border-none outline-none"  
                type='text' 
                placeholder={t('navbar.SEARCH_HERE')} 
                onChange={(event)=>(setGlobalSearch(event.target.value))}
                value={globalSearch}
            />
            <FaSearch className='text-gray-400'/>
        </div>
        <div className='flex justify-between items-center'>

          <img src={Profile} className=' mt-6 h-24'  alt='profile'/>
          <img src={Notification} alt='profile' className='bg-gray-800 rounded-full drop-shadow-2xl p-1 h-8'/>
          
        </div>
          <select   
              className='appearance-none rounded-full p-2 px-5 drop-shadow-2xl text-xs outline-none bg-gray-800 text-white' 
              onChange={(event)=>handleLanguageChange(event)}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
    </div>
  )
}

export default Navbar