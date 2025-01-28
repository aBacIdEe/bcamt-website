// src/pages/Resources.tsx
import { FC } from 'react';
import { Link } from 'react-router-dom';

const Resources: FC = () => {
  return (
    <div className="min-h-screen container mx-auto px-4 py-6">
      <h3 className="text-2xl font-bold mb-4">Resources</h3>
      <p className="mb-4">
        On weekend meetings, members take mock or official math contests, attend lectures...
        We encourage members to review past contest problems...
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: Contest Preparation */}
        <div className="border rounded shadow-md">
          <img
            src="/images/maa_amc.png"
            alt="AMC Contest"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h4 className="text-lg font-bold mb-2">Contest Preparation</h4>
            <p className="mb-2">
              This page will provide links to outside resources for AMC/AIME/USA(J)MO prep...
            </p>
            <Link to="/resources" className="text-blue-600 underline">
              Visit
            </Link>
          </div>
        </div>

        {/* Card 2: Archive */}
        <div className="border rounded shadow-md">
          <img
            src="/images/pile_of_math_papers.jpg"
            alt="Archive"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h4 className="text-lg font-bold mb-2">Archive</h4>
            <p className="mb-2">
              This page contains links to .pdf files of lecture notes (with problem sets)...
            </p>
            <Link to="/archive" className="text-blue-600 underline">
              Visit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
