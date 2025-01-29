// src/pages/Home.tsx
import { FC } from "react";
import HomeSlider from "../components/HomeSlider";
import Announcements from "../components/Announcements";

const Home: FC = () => {
  return (
    <>
      <HomeSlider />

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
            For students who have attended intermediate room lectures, please
            submit your work here:
            <a
              href="https://forms.gle/oXeJHpMQBCCW1ZiH9"
              className="underline text-blue-600 ml-1"
              target="_blank"
              rel="noreferrer"
            >
              https://forms.gle/oXeJHpMQBCCW1ZiH9
            </a>
            .
          </p>
          {/* Continue replicating your existing text/content */}
        </div>

        <h4 className="text-xl font-bold my-4">
          Registration
        </h4>
        <p>
          To register, use the proper link below. The "Grades 8 and below" form
          is for students in grade 8 and below, whether they are planning to
          attend the morning program, afternoon program, or both.
        </p>
        <h6>
          <b>
            Please review{" "}
            <a 
              href="files24-25/Math Team Policies 2024-25.pdf"
              className="underline text-blue-600"
            >
              our Math Team policies
            </a>{" "}
            before registering.
          </b>
        </h6>
        <p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe7rPuN3tiWFlEuE2_G9EnQQwsoah1rrQXItUfouxwnhGb9PQ/viewform"
            className="underline text-blue-600"
          >
            Form for grades 9-12
          </a>
          <br />
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfHdolHc1IpBNi_w7hGbgm7ieUqab31sEnd4OApa4TUqaPfSQ/viewform"
            className="underline text-blue-600"
          >
            Form for grades 8 and below
          </a>
        </p>
      </div>
    </>
  );
};

export default Home;
