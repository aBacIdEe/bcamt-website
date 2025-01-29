// src/pages/Home.tsx
import { FC } from 'react';
import Slider from '../components/Slider';
import Announcements from '../components/Announcements';

const Home: FC = () => {
  return (
    <>
      <Slider />

      <div className="container mx-auto px-4 py-6">
        {/* silly announcements */}
        <Announcements
          sheetId={import.meta.env.VITE_GOOGLE_SHEET_ID}
          apiKey={import.meta.env.VITE_GOOGLE_API_KEY}
        />

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
