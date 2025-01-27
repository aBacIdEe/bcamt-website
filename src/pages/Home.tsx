// src/pages/Home.tsx
import React, { FC } from 'react';
import Slider from '../components/Slider';

const Home: FC = () => {
  return (
    <>
      <Slider />

      <div className="container mx-auto px-4 py-6">
        <blockquote className="border-l-4 border-blue-400 pl-4 my-4">
          There will be no math team meeting on Saturday, January 18...
        </blockquote>
        <blockquote className="border-l-4 border-blue-400 pl-4 my-4">
          We have put together an 
          <a
            href="https://docs.google.com/document/d/1Ym2HbfcXsf9_Soyq2wlcfK7wh7bNLEXAlVRVsbIZ_DM/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-600 mx-1"
          >
            info sheet
          </a>
          on a number of <strong>summer programs</strong>...
        </blockquote>

        <h4 className="text-xl font-bold my-4">
          Welcome to the BCA Math Team, one of the oldest and largest groups...
        </h4>
        <p className="mb-4">
          We participate in a variety of national math competitions...
        </p>

        <div className="bg-blue-50 p-4 mb-6">
          <h5 className="text-lg font-semibold mb-2">Problem set submission</h5>
          <p className="mb-2">
            For students who have attended intermediate room lectures, please submit your work here:
            <a
              href="https://forms.gle/oXeJHpMQBCCW1ZiH9"
              className="underline text-blue-600 ml-1"
              target="_blank"
              rel="noreferrer"
            >
              https://forms.gle/oXeJHpMQBCCW1ZiH9
            </a>.
          </p>
          {/* Continue replicating your existing text/content */}
        </div>

        <h4 className="text-xl font-bold mb-4">Registration</h4>
        <p className="mb-4">
          To register, use the proper link below...
        </p>
        {/* etc. */}
      </div>
    </>
  );
};

export default Home;
