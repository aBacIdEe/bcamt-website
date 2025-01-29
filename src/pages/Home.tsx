// src/pages/Home.tsx
import { FC } from "react";
import HomeSlider from "../components/HomeSlider";
import Announcements from "../components/Announcements";

const Home: FC = () => {
  return (
    <>
      <HomeSlider />

      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* silly announcements */}
        <Announcements
          sheetId={import.meta.env.VITE_GOOGLE_SHEET_ID}
          apiKey={import.meta.env.VITE_GOOGLE_API_KEY}
        />

        <h4 className="text-xl font-bold my-4">
          Welcome to the BCA Math Team, one of the oldest and largest groups at
          the Academies.
        </h4>
        <p className="mb-4">
          We participate in a variety of national math competitions over the
          course of the year. Many of them take place at BCA, but we also travel
          to multiple competitions each year. Past locations we have traveled to
          include Princeton, Harvard, MIT, Penn State, Carnegie Mellon, Seton
          Hall, Stanford, and even Beijing and Seoul!
        </p>

        <section className="py-8 px-4">
          {/* Wrapper to limit width */}
          <div className="max-w-2xl mx-auto space-y-10">
            {/* Problem Set Submission card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Problem Set Submission
              </h3>
              <p className="text-gray-700 mb-4">
                If you have attended the intermediate room lectures, please
                submit your work using the link below:
              </p>
              <a
                href="https://forms.gle/oXeJHpMQBCCW1ZiH9"
                target="_blank"
                rel="noreferrer"
                className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
              >
                Submit Your Work
              </a>
            </div>

            {/* Registration card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Registration
              </h2>
              <p className="text-gray-700 mb-4">
                To register, use the appropriate link below. The{" "}
                <em>"Grades 8 and below"</em> form applies to students in grade
                8 and below, regardless of whether they plan to attend the
                morning program, the afternoon program, or both.
              </p>

              <div className="border-l-4 border-blue-500 bg-blue-50 p-4 mb-6">
                <h3 className="font-semibold text-blue-700">
                  Please review{" "}
                  <a
                    href="files24-25/Math Team Policies 2024-25.pdf"
                    className="underline"
                  >
                    our Math Team policies
                  </a>{" "}
                  before registering.
                </h3>
              </div>

              <div className="space-y-4">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe7rPuN3tiWFlEuE2_G9EnQQwsoah1rrQXItUfouxwnhGb9PQ/viewform"
                  className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                >
                  Form for Grades 9-12
                </a>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfHdolHc1IpBNi_w7hGbgm7ieUqab31sEnd4OApa4TUqaPfSQ/viewform"
                  className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                >
                  Form for Grades 8 and Below
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
