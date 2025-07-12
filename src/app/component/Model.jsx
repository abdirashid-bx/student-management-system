import React, { useState } from 'react';

const UserModal = ({ isOpen, onClose, handle , }) => {
  if (!isOpen) return null;

  const [full, setFullname] = useState('abdira');
  const [samester, setSamester] = useState('5');
  const [username, setUsername] = useState('abdirashid');
  const [email, setEmail] = useState('cabdi@gmail.com');
  const [phone, setPhone] = useState('613733018');
  const [gender, setGender] = useState('male');
  const [motherName, setMotherName] = useState('khadijo');
  const [placeOfBirth, setPlaceOfBirth] = useState('muqdisho');
  const [campus, setCampus] = useState('two');
  const [mode, setMode] = useState('full time');
  const [entryTime1, setEntryTime1] = useState('feb4');
  const [graduationYear, setGraduationYear] = useState('2020');
  const [newId, setNewId] = useState('');
  const [faculty, setfaclty] = useState('computer science');
  const [dep, setdept] = useState('computer application');
  const [class1, setclass] = useState('ca234');

  const handleadd = () => {
    if ( full.trim() &&
    newId.trim() &&
    faculty.trim() &&
    dep.trim() &&
    phone.trim() &&
    class1.trim() &&
    samester.trim() &&
    username.trim() &&
    gender.trim() &&
    motherName.trim() &&
    placeOfBirth.trim() &&
    campus.trim() &&
    mode.trim() &&
    entryTime1.trim() &&
    graduationYear.trim() &&
    email.trim()
    ) {

      handle(
        full,
        newId,
        faculty,
        dep,
        phone,
          class1,
          samester,
        username,
        gender,
        motherName,
        placeOfBirth,
        campus,
        mode,
        entryTime1,
        graduationYear,
        email
      );
     onClose()
      
    }
 
  };

  return (
    <div className="fixed inset-0 bg-opacity-40 flex justify-center items-center z-50 overflow-y-auto">
      <div className="bg-[#f0f4f8] w-[800px] max-w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-red-600"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center text-[#3d608c]">Add New User</h2>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <Input label="Full Name" value={full} setValue={setFullname} />
          <Input label="Username" value={username} setValue={setUsername} />
          <Input label="Email Address" type="email" value={email} setValue={setEmail} />
          <Input label="Phone Number" value={phone} setValue={setPhone} />
          <Input label="Gender" value={gender} setValue={setGender} />
          <Input label="Mother's Name" value={motherName} setValue={setMotherName} />
          <Input label="Faculty" value={faculty} setValue={setfaclty} />
          <Input label="Department" value={dep} setValue={setdept} />
          <Input label="Place of Birth" value={placeOfBirth} setValue={setPlaceOfBirth} />
        </div>

        <h3 className="text-lg font-semibold mb-4 border-t pt-4 text-[#3d608c]">Academic Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <Input label="Campus" value={campus} setValue={setCampus} />
          <Input label="Mode" value={mode} setValue={setMode} />
          <Input label="Entry Time 1" value={entryTime1} setValue={setEntryTime1} />
          <Input label="Graduation Year" value={graduationYear} setValue={setGraduationYear} />
          <Input label="New ID" value={newId} setValue={setNewId} />
          <Input label="Class" value={class1} setValue={setclass} />
          <Input label="Samester" value={samester} setValue={setSamester} />
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={handleadd}
            className="bg-[#3d608c] hover:bg-[#4f78a8] text-white px-6 py-2 rounded-xl font-semibold transition cursor-pointer"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

// Reusable Input component
const Input = ({ label, type = 'text', value, setValue }) => (
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1 text-gray-700">{label}</label>
    <input
      type={type}
      placeholder={`Enter ${label}`}
      className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white text-gray-900"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  </div>
);

export default UserModal;
