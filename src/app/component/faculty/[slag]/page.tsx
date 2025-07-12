'use client';
import { useParams } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns, faUsers } from '@fortawesome/free-solid-svg-icons';

const classes = [
  { title: "CA231", hall: "Hall 1", students: 60, faculty: "computer" },
  { title: "CA232", hall: "Hall 2", students: 62, faculty: "computer" },
  { title: "CA233", hall: "Hall 3", students: 64, faculty: "computer" },
  { title: "CA234", hall: "Hall 4", students: 66, faculty: "economic" },
  { title: "CA235", hall: "Hall 5", students: 68, faculty: "economic" },
  { title: "CA236", hall: "Hall 6", students: 70, faculty: "medicine" },
  { title: "CA237", hall: "Hall 7", students: 72, faculty: "medicine" },
  { title: "CA238", hall: "Hall 8", students: 74, faculty: "medicine" },
  { title: "CA239", hall: "Hall 9", students: 76, faculty: "education" },
  { title: "CA240", hall: "Hall 10", students: 78, faculty: "veterinary" },
  { title: "CA241", hall: "Hall 11", students: 80, faculty: "engineering" },
  { title: "CA242", hall: "Hall 12", students: 82, faculty: "engineering" }
];

export default function ClassPage() {
  const { slug } = useParams();
  const filtered = classes.filter(cls => cls.faculty === slug);

  return (
    <div className="m-5">
      <h2 className="text-2xl font-bold text-[#3C80FF] mb-6 capitalize">
        Classes for {slug}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((cls, index) => (
          <div
            key={index}
            className="w-[200px] h-[120px] bg-[#F9F9F9] border border-[#3C80FF] rounded-md p-4 flex flex-col justify-center shadow-sm hover:shadow-md transition duration-300"
          >
            <p className="text-xl font-semibold text-[#3C80FF] text-center">{cls.title}</p>
            <div className="flex items-center justify-center gap-6 mt-4 text-gray-600">
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faBuildingColumns} />
                <span className="text-sm font-medium">{cls.hall}</span>
              </div>
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faUsers} />
                <span className="text-sm font-medium">{cls.students}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
