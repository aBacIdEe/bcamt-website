// src/pages/About.tsx
import React, { FC } from 'react';

const About: FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h3 className="flex items-center text-2xl font-bold mb-4">
        <span className="material-icons mr-2" style={{ fontSize: '1.5rem' }}>
          info
        </span>
        BCA Math Team
      </h3>
      <p className="mb-4">
        The Bergen County Academies Math Team is one of the strongest...
      </p>

      {/* Additional paragraphs describing the middle school program, 
          Joe Holbrook Memorial Math Competition, etc. */}
      
      <h4 className="text-xl font-bold my-4 flex items-center">
        <span className="material-icons mr-2" style={{ fontSize: '1.2rem' }}>
          group
        </span>
        Math Team Leadership (2024-25)
      </h4>

      {/* Example: Captains, Leadership, Coaches.
       *  You can replicate your HTML in a table or use Tailwind grid/flex.
       *  Or break these out into their own subcomponents if you prefer.
       */}
      <div className="bg-gray-100 p-4 rounded mb-6">
        <h5 className="font-semibold text-lg mb-2">Captains</h5>
        {/* Render each captain with name, email, photo, etc. */}
      </div>

      <div className="bg-gray-100 p-4 rounded mb-6">
        <h5 className="font-semibold text-lg mb-2">Leadership</h5>
        {/* Leadership details */}
      </div>

      <div className="bg-gray-100 p-4 rounded mb-6">
        <h5 className="font-semibold text-lg mb-2">Coaches</h5>
        {/* Coaches details */}
      </div>

      {/* etc. */}
    </div>
  );
};

export default About;
