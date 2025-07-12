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
import UserModal from '../Model';
import { json } from 'stream/consumers';
import Viewmodel from '../Viewmodel';
import { useRouter } from 'next/navigation'; 
import Dashboard from '../dash';

function SideBar() {

const router=useRouter()
  return (
    <>
      <div className="flex bg-[#f5f7fa] min-h-screen   ">
        <div className="bg-[rgb(249,249,249)] w-[300px] p-4 relative border-r-1 border-[#3C80FF]">
          <h4 className="text-black font-bold">Jamhuuriya University System</h4>
          <div className="mt-7 items-start flex flex-col gap-4">
            <div className="flex items-center gap-3 bg-[#3C80FF] p-5 rounded-lg cursor-pointer w-[250px]  ">
              <FontAwesomeIcon icon={faHouse} color="#" size="1x" />
              <h2 className="text-white font-medium ">Dashboard</h2>
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
              <h2 className="text-[#3C80FF] font-medium">Exams</h2>
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
            
              <div className="relative bg-[#F9F9F9] w-[70%] h-[150px] rounded-lg   gap-4 overflow-hidden p-6 border border-[#3C80FF] flex flex-row items-center justify-center">
     <FontAwesomeIcon icon={faBuildingColumns} color="#3C80FF" size="5x" />
     <div className='flex-col flex items-center  text-center justify-center'>
        <p className="text-3xl font-bold text-blue-800 mt-6 relative z-10 text-center">16</p>
     <p className="text-sm text-gray-600 relative z-10 text-center tracking-wider">Faculties</p>
  
     </div>
           


    </div>
    {/* two */}
    
              <div className="relative bg-[#F9F9F9] w-[70%] h-[150px] rounded-lg   gap-4 overflow-hidden p-6 border border-[#3C80FF] flex flex-row items-center justify-center">
    <FontAwesomeIcon icon={faUsers} color="#3C80FF" size="4x" />

     <div className='flex-col flex items-center  text-center '>
        <p className="text-3xl font-bold text-blue-800 mt-6 relative z-10 text-center ">400+</p>
     <p className="text-sm text-gray-600 relative z-10 text-center tracking-wider">Students</p>
  
     </div>
           


    </div>
              <div className="relative bg-[#F9F9F9] w-[70%] h-[150px] rounded-lg   gap-4 overflow-hidden p-6 border border-[#3C80FF] flex flex-row items-center justify-center">
     <FontAwesomeIcon icon={faBookOpenReader} color="#3C80FF" size="4x" />
     <div className='flex-col flex items-center  text-center'>
        <p className="text-3xl font-bold text-blue-800 mt-6 relative z-10 text-center">30+</p>
     <p className="text-sm text-gray-600 relative z-10 text-center tracking-wider">Clasess</p>
  
     </div>
           


    </div>
              <div className="relative bg-[#F9F9F9] w-[70%] h-[150px] rounded-lg   gap-4 overflow-hidden p-6 border border-[#3C80FF] flex flex-row items-center justify-center">
    <FontAwesomeIcon icon={faLayerGroup} color="#3C80FF" size="4x" />
     <div className='flex-col flex items-center  text-center'>
        <p className="text-3xl font-bold text-blue-800 mt-6 relative z-10 text-center">15</p>
     <p className="text-sm text-gray-600 relative z-10 text-center tracking-wider">Departments</p>
  
     </div>
           


    </div>
              <div className="relative bg-[#F9F9F9] w-[70%] h-[150px] rounded-lg   gap-4 overflow-hidden p-6 border border-[#3C80FF] flex flex-row items-center justify-center">
     <FontAwesomeIcon icon={faChalkboardTeacher} color="#3C80FF" size="4x" />
     <div className='flex-col flex items-center  text-center'>
        <p className="text-3xl font-bold text-blue-800 mt-6 relative z-10 text-center">20+</p>
     <p className="text-sm text-gray-600 relative z-10 text-center tracking-wider">Lectures</p>
  
     </div>
           


    </div>
              <div className="relative bg-[#F9F9F9] w-[70%] h-[150px] rounded-lg   gap-4 overflow-hidden p-6 border border-[#3C80FF] flex flex-row items-center justify-center">
     <FontAwesomeIcon icon={faLocation} color="#3C80FF" size="4x" />
     <div className='flex-col flex items-center  text-center'>
        <p className="text-3xl font-bold text-blue-800 mt-6 relative z-10 text-center">4</p>
     <p className="text-sm text-gray-600 relative z-10 text-center tracking-wider">Centers</p>
  
     </div>
           


    </div>
         
          </div>
  <Dashboard/>
           </div>
      
      </div>
 
    </>
  );
}



export default SideBar;  