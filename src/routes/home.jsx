import React, { StrictMode } from "react";
import { Outlet, Link } from "react-router-dom";

import picture1 from "../assets/images/Math_winner_2016.jpg";
import { CarouselDefault } from "../components/Carousel.jsx";
import { Typography } from "@material-tailwind/react";
import { AnnouncementCard } from "../components/AnnouncementCard.jsx";

export default function Home() {
  return (
    <StrictMode>
      <body>
        <main>
          <CarouselDefault />

          <div className="mt-3 mx-auto w-full max-w-7xl grid grid-cols-1 gap-4">
            <div>
              <Typography className="text-3xl">Announcements</Typography>
            </div>
            <div>
              <AnnouncementCard
                text="The 13th annual JHMMC (for students in 8th grade or below) will
              take place Sunday, October 20th, 2024."
                link="https://register.capturepoint.com/reg/cat_program_list_detail.cfm?season_id=23385&program_id=2377159"
                linkText="Register here"
              />
            </div>
            <div>
              <Typography className="text-3xl">
                Welcome to the BCA Math Team, one of the oldest and largest
                groups at the Academies.
              </Typography>
            </div>
            <div>
              <Typography className="text-base">
                We participate in a variety of national math competitions over
                the course of the year. Many of them take place at BCA, but we
                also travel to multiple competitions each year. Past locations
                we have traveled to include Princeton, Harvard, MIT, Penn State,
                Carnegie Mellon, Seton Hall, Stanford, and even Beijing and
                Seoul!
              </Typography>
            </div>
            <div>
              <Typography>
                <b>For students:</b> past resources (lecture notes, problem
                sets, and contests) can be found on our
                <Link to="/Resources">Resources</Link> page.
              </Typography>
            </div>
            <div>
              <Typography className="text-3xl">Problem set submission</Typography>
            </div>
            <div>
              <Typography>
                For students who have attended intermediate room lectures,
                please submit your work here:
                <a href="https://forms.gle/oXeJHpMQBCCW1ZiH9">
                  https://forms.gle/oXeJHpMQBCCW1ZiH9
                </a>
                . The problem set is typically due right before the following
                Math Team meeting. Please note that problem set submissions may
                be considered when determining future eligibility for
                intermediate room participation.
              </Typography>
            </div>
            <div>
              <Typography>
                If you missed a lecture, we suggest still reviewing the
                <Link to="/resources.jsx">lecture notes</Link> and attempting
                the problem set. Future lectures may build on the material
                covered earlier, so it's important to stay caught up!
              </Typography>
            </div>
            <div>
              <Typography className="text-3xl">
                Registration
              </Typography>
              </div>
              <div>
              <Typography>
                All high schoolers at all skill levels are welcome to join. We
                meet on Saturdays from 1:00 p.m. to 4:00 p.m. To register, use
                the proper link below.
              </Typography>
            </div>
            <div>
              <Typography>
                <b>Grades 9-12:</b>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe7rPuN3tiWFlEuE2_G9EnQQwsoah1rrQXItUfouxwnhGb9PQ/viewform">
                  https://docs.google.com/forms/d/e/1FAIpQLSe7rPuN3tiWFlEuE2_G9EnQQwsoah1rrQXItUfouxwnhGb9PQ/viewform
                </a>
                .<br />
                <b>Grades 8 and below:</b>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfHdolHc1IpBNi_w7hGbgm7ieUqab31sEnd4OApa4TUqaPfSQ/viewform">
                  https://docs.google.com/forms/d/e/1FAIpQLSfHdolHc1IpBNi_w7hGbgm7ieUqab31sEnd4OApa4TUqaPfSQ/viewform
                </a>
                .
              </Typography>
            </div>
            <div>
              <Typography>
                Please review{" "}
                <a href="files23-24/2023 Math Team Policies.pdf">
                  our Math Team policies
                </a>{" "}
                before registering.
              </Typography>
            </div>
          </div>
        </main>
      </body>
    </StrictMode>
  );
}
