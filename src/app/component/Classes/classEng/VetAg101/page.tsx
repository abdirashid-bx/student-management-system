'use client';
 
import React, { useEffect, useRef, useState, } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faPeopleGroup,
  faCutlery,
  faBuildingColumns,
  faChalkboardTeacher,
  faRightFromBracket,
  faPersonShelter,
  faPeoplePulling,
  faUsers,
  faBookOpen,
  faBookAtlas,
  faBookBookmark,
  faBookJournalWhills,
  faChampagneGlasses,
  faPlaceOfWorship,
  faBookOpenReader,
  faSitemap,
  faLandmark,
  faLandMineOn,
  faLandmarkDome,
  faLaptopCode,
  faLandmarkAlt,
  faLariSign,
  faLayerGroup,
  faNetworkWired,
  faCircle,
  faCircleNodes,
  faLocationArrow,
  faLocation
} from '@fortawesome/free-solid-svg-icons';
 
import UserModal from '@/app/component/Model';
import { json } from 'stream/consumers';
import Viewmodel from '@/app/component/Viewmodel';
import { useRouter } from 'next/navigation'; 
import SidebarLayout from '@/app/component/SidebarLayout';
import Addresult from '@/app/component/Addresult';
function page () {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [tasks, settask] = useState<any[]>([]);
  const [total, settotal] = useState(0);
  const [select,setselected]=useState<any | null>(null);
  const ref = useRef(0);
const [selectedUser, setSelectedUser] = useState<any | null>(null);
const handleadd = async (
 
  full_name: any,
  student_code: any,
  faculty_name:any,
  department_name: any,
  phone_number: any,
   class_name: any,
  semester: any,
  username: any,
  gender: any,
  mother_name: any,
  place_of_birth: any,
  campus_name: any,
  study_mode: any,
  entry_year: any,
  graduation_year: any,
  
  
) =>  {
    try {
     const res = await fetch('/api/create-user', {  // remove '/route'
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
full_name,
student_code,
faculty_name,
department_name,
phone_number,
class_name,
semester,
username,
gender,
mother_name,
place_of_birth,
campus_name,
study_mode,
entry_year,
graduation_year
}),
});

      const result = await res.json();

      if (!res.ok) {
        console.log('API Error:', result.error);
        return;
      }

      // Optional: update local state for UI purposes
      const task = {
     full_name,
student_code,
faculty_name,
department_name,
phone_number,
class_name,
semester,
username,
gender,
mother_name,
place_of_birth,
campus_name,
study_mode,
entry_year,
graduation_year
      };
      settask([task, ...tasks]);
      settotal(total + 1);
      local([task, ...tasks]);

      console.log('User and profile created successfully');
    } catch (err: any) {
      console.log('Unexpected error:', err.message);
    }
  };
const handledelete = (id: any) => {
  const confirmed = window.confirm("Are you sure you want to delete this student?");
  if (!confirmed) return;

  const updatedTasks = tasks.filter((t) => t.student_code !== id);
   local(updatedTasks);           
  settask(updatedTasks);        
  settotal(updatedTasks.length);
};
const local=(task:any)=>{
   localStorage.setItem('task',JSON.stringify(task))
 
}
useEffect(()=>{
   const local2=()=>{
  const userdata=JSON.parse(localStorage.getItem('task') || '[]')
  settask(userdata)
  settotal(userdata.length)
   }
   local2()
},[])
const handleview=( tas: any) =>{
const selected = {
  full_name: tas.full_name,
  student_code: tas.student_code,
  faculty_name: tas.faculty_name,
  department_name: tas.department_name,
  phone_number: tas.phone_number,
  class_name: tas.class_name,
  semester: tas.semester,
  username: tas.username,
  gender: tas.gender,
  mother_name: tas.mother_name,
  place_of_birth: tas.place_of_birth,
  campus_name: tas.campus_name,
  study_mode: tas.study_mode,
  entry_year: tas.entry_year,
  graduation_year: tas.graduation_year
};
setselected(selected)

}
const router=useRouter()
  return (
    <>
       
     

        {/* Main content */}
  
          
<SidebarLayout>
    <div className='flex justify-center items-center m-auto'>
    <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-4 max-w-xl mx-4 mt-3 shadow  ">
<strong>Notice:</strong> This page contains the student records for class <span className="font-semibold">VetAg101</span>.


</div>
 
 </div>

    <div className="absolute right-0 mt-5 mr-3">
            <div onClick={() => setShowModal(true)} className="hover:bg-[#4f78a8] bg-[#3d608c] p-2 w-[150px] rounded-sm items-center mr-3 flex justify-center cursor-pointer">
              <span className="text-white text-center">+ New Student</span>
            </div>
          </div>

          <table className="min-w-full mt-24 border border-gray-300 rounded-md shadow-sm">
            <thead className="bg-[#eaeef4] sticky top-0 z-10 le">
              <tr className="text-left text-gray-700 text-sm">
                <th className="px-4 py-3">Full Name</th>
                <th className="px-4 py-3">Student ID</th>
                <th className="px-4 py-3">Faculty</th>
                <th className="px-4 py-3">Department</th>
                <th className="px-4 py-3">Phone Number</th>
                <th className="px-4 py-3">Class</th>
                <th className="px-4 py-3 ">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-300">
             {tasks.filter(t => t.class_name === 'VetAg101').map((t, index) => (
                <tr key={index} className="hover:bg-gray-50 transition duration-200 text-sm">
                  <td className="px-4 py-3 text-black">{t.full_name}</td>
                  <td className="px-4 py-3 text-black">{t.student_code}</td>
                  <td className="px-4 py-3 text-black">{t.faculty_name}</td>
                  <td className="px-4 py-3 text-black">{t.department_name}</td>
                  <td className="px-4 py-3 text-black">{t. phone_number}</td>
                  <td className="px-4 py-3 text-black">{t.class_name}</td>
                  <td className="px-4 py-3 ">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition cursor-pointer" 
                      onClick={() => {
   handleview(t)         
    setShowModal1(true);        
  }}
>
                      Add result</button>
                    <button className="ml-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition cursor-pointer" 
                    onClick={()=>{
                      return (
                      
                        handledelete(t.student_code) 
                      ) 

                    } 
                  }>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
</SidebarLayout>
        

       
    
   

      <UserModal isOpen={showModal} onClose={() => setShowModal(false)} handle={handleadd}  />
      <Addresult tasks={select} isOpen={showModal1} onClose={() => setShowModal1(false)}/>
    </>
  );
}



export default page;  