import React, { useState } from 'react';

const Viewmodel = ({ isOpen, onClose, tasks }: any) => {
  if (!isOpen) return null;
 const [edit,setEdit]=useState(true);
 const [updated,setUpdated]=useState(tasks)
 const [changed,setchanged]=useState(tasks);
 console.log(edit)
 const savechange=()=>{
const result = {
  [tasks.full_name]: updated.full_name,
  [tasks.student_code]: updated.student_code,
  [tasks.faculty_name]: updated.faculty_name,
  [tasks.department_name]: updated.department_name,
  [tasks.phone_number]: updated.phone_number,
  [tasks.class_name]: updated.class_name,
  [tasks.semester]: updated.semester,
  [tasks.username]: updated.username,
  [tasks.gender]: updated.gender,
  [tasks.mother_name]: updated.mother_name,
  [tasks.place_of_birth]: updated.place_of_birth,
  [tasks.campus_name]: updated.campus_name,
  [tasks.study_mode]: updated.study_mode,
  [tasks.entry_year]: updated.entry_year,
  [tasks.graduation_year]: updated.graduation_year,
};
 
 setchanged(result)

 }
  return (
    <div className="fixed inset-0 bg-opacity-40 flex justify-center items-center z-50 overflow-y-auto">
      <div className="bg-[#f0f4f8] w-[800px] max-w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-red-600"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center text-[#3d608c]">Student Details</h2>
        {/* <h4 className='text-black' onClick={()=>setEdit(!edit)}>Edit</h4> */}
      {/* {edit ? 
      <> */}
       <div className="grid grid-cols-2 gap-4 mb-6">
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1 text-gray-700">Full Name</label>
    <input type="text" className="border border-gray-300 rounded-lg px-3 py-2 text-black" value={tasks?.full_name}  readOnly />
  </div>
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1 text-gray-700">Username</label>
    <input type="text" className="border border-gray-300 rounded-lg px-3 py-2 text-black" value={tasks?.username} readOnly />
  </div>
 
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1 text-gray-700">Phone Number</label>
    <input type="text" className="border border-gray-300 rounded-lg px-3 py-2 text-black" value={tasks?.phone_number} readOnly />
  </div>
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1 text-gray-700">Gender</label>
    <input type="text" className="border border-gray-300 rounded-lg px-3 py-2 text-black" value={tasks?.gender} readOnly />
  </div>
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1 text-gray-700">Mother's Name</label>
    <input type="text" className="border border-gray-300 rounded-lg px-3 py-2 text-black" value={tasks?.mother_name} readOnly />
  </div>
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1 text-gray-700">Faculty</label>
    <input type="text" className="border border-gray-300 rounded-lg px-3 py-2 text-black" value={tasks?.faculty_name} readOnly />
  </div>
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1 text-gray-700">Department</label>
    <input type="text" className="border border-gray-300 rounded-lg px-3 py-2 text-black" value={tasks?.department_name} readOnly />
  </div>
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1 text-gray-700">Place of Birth</label>
    <input type="text" className="border border-gray-300 rounded-lg px-3 py-2 text-black" value={tasks?.place_of_birth} readOnly />
  </div>
</div>

<h3 className="text-lg font-semibold mb-4 border-t pt-4 text-[#3d608c]">Academic Information</h3>
<div className="grid grid-cols-2 gap-4">
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1 text-gray-700">Campus</label>
    <input type="text" className="border border-gray-300 rounded-lg px-3 py-2 text-black" value={tasks?.campus_name} readOnly />
  </div>
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1 text-gray-700">Mode</label>
    <input type="text" className="border border-gray-300 rounded-lg px-3 py-2 text-black" value={tasks?.study_mode} readOnly />
  </div>
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1 text-gray-700">Entry Year</label>
    <input type="text" className="border border-gray-300 rounded-lg px-3 py-2 text-black" value={tasks?.entry_year} readOnly />
  </div>
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1 text-gray-700">Graduation Year</label>
    <input type="text" className="border border-gray-300 rounded-lg px-3 py-2 text-black" value={tasks?.graduation_year} readOnly />
  </div>
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1 text-gray-700">Student Code</label>
    <input type="text" className="border border-gray-300 rounded-lg px-3 py-2 text-black" value={tasks?.student_code} readOnly />
  </div>
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1 text-gray-700">Class</label>
    <input type="text" className="border border-gray-300 rounded-lg px-3 py-2 text-black" value={tasks?.class_name} readOnly />
  </div>
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1 text-gray-700 ">Semester</label>
    <input type="text" className="border border-gray-300 rounded-lg px-3 py-2 text-black" value={tasks?.semester} readOnly />
  </div>
</div> 
      {/* </> */}
      {/* :<>
  <div className="grid grid-cols-2 gap-4 mb-6">
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1 text-gray-700">Full Name</label>
<input
  type="text"
  className="border border-gray-300 rounded-lg px-3 py-2 text-black"
  value={updated?.full_name}
  onChange={(e) => setUpdated({ ...updated, full_name: e.target.value })}
/>
    </div>
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1 text-gray-700">Username</label>
      <input type="text" className="border border-gray-300 rounded-lg px-3 py-2 text-black" value={tasks?.username} />
    </div>

    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1 text-gray-700">Phone Number</label>
      <input type="text" className="border border-gray-300 rounded-lg px-3 py-2 text-black" value={tasks?.phone_number} />
    </div>
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1 text-gray-700">Gender</label>
      <input type="text" className="border border-gray-300 rounded-lg px-3 py-2 text-black" value={tasks?.gender} />
    </div>
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1 text-gray-700">Mother's Name</label>
      <input type="text" className="border border-gray-300 rounded-lg px-3 py-2 text-black" value={tasks?.mother_name} />
    </div>
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1 text-gray-700">Faculty</label>
      <input type="text" className="border border-gray-300 rounded-lg px-3 py-2 text-black" value={tasks?.faculty_name} />
    </div>
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1 text-gray-700">Department</label>
      <input type="text" className="border border-gray-300 rounded-lg px-3 py-2 text-black" value={tasks?.department_name} />
    </div>
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1 text-gray-700">Place of Birth</label>
      <input type="text" className="border border-gray-300 rounded-lg px-3 py-2 text-black" value={tasks?.place_of_birth} />
    </div>
  </div>

  <h3 className="text-lg font-semibold mb-4 border-t pt-4 text-[#3d608c]">Academic Information</h3>
  <div className="grid grid-cols-2 gap-4">
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1 text-gray-700">Campus</label>
      <input type="text" className="border border-gray-300 rounded-lg px-3 py-2 text-black" value={tasks?.campus_name} />
    </div>
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1 text-gray-700">Mode</label>
      <input type="text" className="border border-gray-300 rounded-lg px-3 py-2 text-black" value={tasks?.study_mode} />
    </div>
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1 text-gray-700">Entry Year</label>
      <input type="text" className="border border-gray-300 rounded-lg px-3 py-2 text-black" value={tasks?.entry_year} />
    </div>
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1 text-gray-700">Graduation Year</label>
      <input type="text" className="border border-gray-300 rounded-lg px-3 py-2 text-black" value={tasks?.graduation_year} />
    </div>
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1 text-gray-700">Student Code</label>
      <input type="text" className="border border-gray-300 rounded-lg px-3 py-2 text-black" value={tasks?.student_code} />
    </div>
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1 text-gray-700">Class</label>
      <input type="text" className="border border-gray-300 rounded-lg px-3 py-2 text-black" value={tasks?.class_name} />
    </div>
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1 text-gray-700">Semester</label>
      <input type="text" className="border border-gray-300 rounded-lg px-3 py-2 text-black" value={tasks?.semester} />
    </div>
  </div>
</> */}

      
  
    


        {/* <div className="mt-6 flex justify-center">
          <button className="bg-[#3d608c] hover:bg-[#4f78a8] text-white px-6 py-2 rounded-xl font-semibold transition cursor-pointer"
          onClick={savechange}
          >
            Save Changes
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Viewmodel;
