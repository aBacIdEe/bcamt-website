import React, { StrictMode } from "react";

export default function About() {
  return (
    <StrictMode>
      <body>
        <main>
          <div className="mt-3 mx-auto w-full max-w-7xl grid grid-cols-1 gap-4">
            <div>
              <Typography>BCA Math Team</Typography>
            </div>
            <div>
              <Typography>
                The Bergen County Academies Math Team is one of the strongest
                math teams in the nation (check Past Results in the Awards
                page). The team participates in many math competitions during
                the year, both locally and across the globe.The Math Team is
                open to all middle and high school students, regardless of
                mathematical ability. For students in high school (and some
                advanced middle schoolers), the Saturday Math Team meets at BCA
                every Saturday for three hours (1-4 PM). These meetings will
                consist of a combination of lectures, actual competitions and
                practice competitions. Materials from previous lectures can be
                found at the archive page. We are also responsible for
                organizing and running the Joe Holbrook Memorial Math
                Competition, the largest middle school math competition in
                Bergen County. For more information, please visit its official
                website at https://holbrook.bcamathteam.org.
              </Typography>
            </div>
            <div>
              <Typography>Math Team Leadership (2024-25)</Typography>
            </div>
          </div>
        </main>
      </body>
    </StrictMode>
  );
}
