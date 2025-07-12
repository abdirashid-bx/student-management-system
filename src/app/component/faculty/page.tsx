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
 
import { useRouter } from 'next/navigation'; 

function page() {
 
 const faculties = [
  {
    title: "Economic & Management",
    count: 2,
    students: "500+"
  },
  {
    title: "Medicine & Health Sciences",
    count: 3,
    students: "500+"
  },
  {
    title: "Faculty of Education",
    count: 4,
    students: "500+"
  },
  {
    title: "Veterinary & Agriculture",
    count: 5,
    students: "500+"
  },
  {
    title: "Computer & IT",
    count: 3,
    students: "500+"
  },
  {
    title: "Faculty of Engineering",
    count: 6,
    students: "500+"
  }
];
  
const router=useRouter()
  return (
    <>
      <div className="flex bg-[#f5f7fa] min-h-screen">
       <div className="bg-[rgb(249,249,249)] w-[300px] p-4 relative border-r-1 border-[#3C80FF]">
               <h4 className="text-black font-bold">Jamhuuriya University System</h4>
               <div className="mt-7 items-start flex flex-col gap-4">
                  <div   
               onClick={() => router.push('/component/Sidebar')}  
              className="flex items-center gap-3 p-5 rounded-lg cursor-pointer w-[250px]">
                <FontAwesomeIcon icon={faHouse} color="#3C80FF" size="1x" />
                <h2 className="text-[#3C80FF] font-medium ">Dashboard</h2>
              </div>
     
                
                  <div className="flex items-center gap-3 bg-[#3C80FF] p-5 rounded-lg cursor-pointer w-[250px]  ">
                     <FontAwesomeIcon icon={faBuildingColumns} color="white" size="1x" />
                     <h2 className="text-white font-medium  ">Facultys</h2>
                   </div>
                
     
                     <div 
                    onClick={() => router.push('/component/students')}  
                     className="flex items-center gap-3  p-5 rounded-lg cursor-pointer w-[250px]">
                      
                        <FontAwesomeIcon icon={faUsers} color="#3C80FF" size="1x"/>
                          <h2 className="text-[#3C80FF] font-medium">Students</h2>
                        </div>
     
                 <div 
 onClick={() => router.push('/component/AllClasses')}  
                 className="flex items-center gap-3  p-5 rounded-lg cursor-pointer w-[250px]">
                   <FontAwesomeIcon icon={faChalkboardTeacher} color="#3C80FF" size="1x" />
                   <h2 className="text-[#3C80FF] font-medium">Classes</h2>
                 </div>
               </div>
     
               <div className="absolute bottom-8">
                 <div className="flex items-center gap-3  p-5 rounded-lg cursor-pointer w-[250px]">
                   <FontAwesomeIcon icon={faRightFromBracket} color="#3C80FF" size="1x" />
                   <h2 className="text-[#3C80FF] font-medium">Log out</h2>
                 </div>
               </div>
             </div>

        {/* Main content */}
        <div className="flex-1 p-6">
          

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-5">
        {/* one     */}
        {faculties.map((t,index)=>(
  <div key={index} className="w-[85%] h-[180px] bg-[#F9F9F9] border border-[#3C80FF] rounded-md p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition duration-300 justify-center">
 
  <FontAwesomeIcon icon={faBuildingColumns} className="text-[#3C80FF]" size="5x" />

 
  <div className="flex flex-col">
    <p className="text-xl font-semibold text-[#3C80FF]">{t.title}</p>

    <div className="flex items-center gap-6 mt-3">
      <div className="flex items-center gap-1  text-gray-600 justify-center">
        <FontAwesomeIcon icon={faBuildingColumns} size='1x'/>
        <span className="text-sm font-medium mt-1">{t.count}</span>
      </div>
      <div className="flex items-center gap-1 text-gray-600 justify-center">
        <FontAwesomeIcon icon={faUsers} />
        <span className="text-sm font-medium">{t.students}</span>
      </div>
    </div>
  </div>
</div>
        ))}
    
       </div>

        
        </div>
      </div>

   
    </>
  );
}



export default page;  