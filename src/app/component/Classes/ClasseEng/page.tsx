'use client';
import React from 'react'
import SidebarLayout from '../../SidebarLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  
  faBuildingColumns,
 
  faUsers,
 
} from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation'; 
export default function page() {
    
const classes = [
  { title: "ENG101", hall: "Hall A", students: 55,Link:'./classEng/ENG101' },

];
const router=useRouter();
  return (
    <SidebarLayout>
  <div className="flex-1 p-6">
          

           <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 m-5">
         {/* one     */}
   {classes.map((t, index) => (
   <div
     onClick={()=> router.push(t.Link)}
     key={index}
     className="w-[100%] h-[180px] bg-[#F9F9F9] border border-[#3C80FF] cursor-pointer rounded-md p-4 flex flex-col justify-center shadow-sm hover:shadow-md transition duration-300"
   >
     <p className="text-xl font-semibold text-[#3C80FF] text-center">
       {t.title}
     </p>

     <div className="flex items-center justify-center gap-6 mt-4 text-gray-600">
       <div className="flex items-center gap-1">
         <FontAwesomeIcon icon={faBuildingColumns} />
         <span className="text-sm font-medium">{t.hall}</span>
       </div>
       <div className="flex items-center gap-1">
         <FontAwesomeIcon icon={faUsers} />
         <span className="text-sm font-medium">{t.students}</span>
       </div>
     </div>
   </div>
 ))}
    
        </div>
         </div>
    </SidebarLayout>
  )
}
