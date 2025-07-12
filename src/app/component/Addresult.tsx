'use client';

import React, { useState } from 'react';

const Viewmodel = ({ isOpen, onClose, tasks }: any) => {
  if (!isOpen) return null;

  const [semester, setSemester] = useState(tasks?.semester || '');
  const [results, setResults] = useState([{ course_name: '', marks: '' }]);

  const handleChange = (index: number, field: string, value: string) => {
    const updatedResults = [...results];
    updatedResults[index][field] = value;
    setResults(updatedResults);
  };

  const addCourse = () => {
    setResults([...results, { course_name: '', marks: '' }]);
  };

  const removeCourse = (index: number) => {
    const updatedResults = results.filter((_, i) => i !== index);
    setResults(updatedResults);
  };

  const handleSubmit = async () => {
    const allFieldsFilled = results.every(
      (r) => r.course_name.trim() !== '' && r.marks.trim() !== '' && !isNaN(Number(r.marks))
    );

    if (!allFieldsFilled || !semester.trim()) {
      alert('Please fill all fields correctly.');
      return;
    }

    const payload = {
      student_code: tasks.student_code,
      full_name: tasks.full_name,
      semester,
      results: results.map(r => ({
        course_name: r.course_name.trim(),
        marks: Number(r.marks)
      })),
    };

    try {
      const res = await fetch('/api/add-exam-result', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(`Failed to save: ${data.error}`);
        return;
      }

      alert('Results saved successfully!');
      onClose();
    } catch (error) {
      console.error('Error saving results:', error);
      alert('An error occurred while saving results.');
    }
  };

  return (
    <div className="fixed inset-0 bg-opacity-40 flex justify-center items-center z-50 overflow-y-auto">
      <div className="bg-[#f0f4f8] w-[600px] max-w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-red-600"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center text-[#3d608c]">Add Exam Results</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Student Name</label>
          <input
            type="text"
            value={tasks?.full_name}
            readOnly
            className="mt-1 w-full border border-gray-300 px-3 py-2 rounded-lg text-black"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Semester</label>
          <input
            type="text"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            className="mt-1 w-full border border-gray-300 px-3 py-2 rounded-lg text-black"
          />
        </div>

        {results.map((res, index) => (
          <div key={index} className="mb-4 border-t pt-4">
            <h4 className="font-semibold text-[#3d608c] mb-2">Course {index + 1}</h4>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">Course Name</label>
              <input
                type="text"
                value={res.course_name}
                onChange={(e) => handleChange(index, 'course_name', e.target.value)}
                placeholder="e.g. Data Structures"
                className="mt-1 w-full border border-gray-300 px-3 py-2 rounded-lg text-black"
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Marks</label>
                <input
                  type="number"
                  value={res.marks}
                  onChange={(e) => handleChange(index, 'marks', e.target.value)}
                  placeholder="e.g. 85"
                  className="mt-1 w-full border border-gray-300 px-3 py-2 rounded-lg text-black"
                />
              </div>
              {results.length > 1 && (
                <button
                  onClick={() => removeCourse(index)}
                  className="mt-6 text-red-600 hover:text-red-800 font-bold text-lg"
                >
                  ×
                </button>
              )}
            </div>
          </div>
        ))}

        <div className="flex justify-between mb-6">
          <button
            onClick={addCourse}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl font-semibold transition"
          >
            Add Course
          </button>
          <button
            onClick={handleSubmit}
            className="bg-[#3d608c] hover:bg-[#4f78a8] text-white px-6 py-2 rounded-xl font-semibold transition"
          >
            Save Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default Viewmodel;
