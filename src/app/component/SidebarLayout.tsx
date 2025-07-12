'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse, faUsers, faChalkboardTeacher, faRightFromBracket
} from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="flex bg-[#f5f7fa] min-h-screen">
      {/* Sidebar */}
      <div className="bg-[rgb(249,249,249)] w-[300px] p-4 relative border-r-1 border-[#3C80FF]">
        <h4 className="text-black font-bold">Jamhuuriya University System</h4>
        <div className="mt-7 items-start flex flex-col gap-4">
          <div onClick={() => router.push('/component/Sidebar')} className="flex items-center gap-3 p-5 rounded-lg cursor-pointer w-[250px]">
            <FontAwesomeIcon icon={faHouse} color="#3C80FF" size="1x" />
            <h2 className="text-[#3C80FF] font-medium">Dashboard</h2>
          </div>

          <div onClick={() => router.push('/component/students')} className="flex items-center gap-3 p-5 rounded-lg cursor-pointer w-[250px]">
            <FontAwesomeIcon icon={faUsers} color="#3C80FF" size="1x" />
            <h2 className="text-[#3C80FF] font-medium">Students</h2>
          </div>

          <div className="flex items-center gap-3 bg-[#3C80FF] p-5 rounded-lg cursor-pointer w-[250px]">
            <FontAwesomeIcon icon={faChalkboardTeacher} color="white" size="1x" />
            <h2 className="text-white font-medium">Exams</h2>
          </div>
        </div>

        <div className="absolute bottom-8">
          <div className="flex items-center gap-3 p-5 rounded-lg cursor-pointer w-[250px]">
            <FontAwesomeIcon icon={faRightFromBracket} color="#3C80FF" size="1x" />
            <h2 className="text-[#3C80FF] font-medium">Log out</h2>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
}
