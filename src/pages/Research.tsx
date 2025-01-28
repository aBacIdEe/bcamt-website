// src/pages/Research.tsx
import { FC } from 'react';

const Research: FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h3 className="flex items-center text-2xl font-bold mb-4">
        <span className="material-icons mr-2" style={{ fontSize: '1.2em' }}>
          biotech
        </span>
        Research
      </h3>
      <p className="mb-4">
        Although the BCA Math Team has been typically geared towards math competitions, 
        we have begun a new initiative to inform team members about mathematics research...
      </p>

      <ul className="border rounded my-4">
        <li className="p-4 border-b">
          <h4 className="text-xl font-bold mb-2">2023 Research Information Session</h4>
          <p>
            The BCA Math Team ran its first student-led informational session on Math Research...
            (explain details about session 1, session 2, etc.)
          </p>
          <p>
            A playlist containing all of the recordings can be found{' '}
            <a
              href="https://youtube.com/playlist?list=PL55wV471ewADGeTGKnP7xKYihztSbFYi7&si=l26DT8LMtwQqyKJL"
              target="_blank"
              rel="noreferrer"
              className="underline text-blue-600"
            >
              here
            </a>
            .
          </p>
          <p className="mt-2">
            Images of the event can be found in the 'photos' tab (below).
          </p>

          {/* Example tab-like layout: in React, you might manage these with state or separate routes. 
             For now, let's just show the resources block inline. */}
          <div className="my-4">
            <h5 className="text-lg font-bold">Session 1</h5>
            <div className="mb-2">
              <strong>Summary:</strong> (Summaries from your notes go here)
            </div>
            <div className="mb-2">
              <strong>Notes:</strong> (Detailed bullet points, etc.)
            </div>
            <div className="mb-2">
              <strong>Video:</strong>
              <div className="flex justify-center my-2">
                <div className="w-full md:w-1/2 h-0 relative pb-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/5QfhhXytIRM?si=awk7ORC_KLWhNVjv"
                    title="Session 1 Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>

          {/* You can repeat blocks for Session 2, 3, 4, etc. */}
        </li>
      </ul>

      {/* Example Photos section */}
      <div className="mt-8">
        <h4 className="text-xl font-bold mb-4">Photos</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Example photo */}
          <img
            className="w-full h-auto object-cover"
            src="/images/research/krish1.JPG"
            alt="Krish presenting"
          />
          <img
            className="w-full h-auto object-cover"
            src="/images/research/justin1.JPG"
            alt="Justin 1"
          />
          {/* etc... */}
        </div>
      </div>
    </div>
  );
};

export default Research;
