import { FC } from 'react';

const About: FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Page Title */}
      <h3 className="flex items-center text-2xl font-bold mb-4">
        BCA Math Team
      </h3>

      {/* Intro Paragraphs */}
      <p className="mb-4">
        The Bergen County Academies Math Team is one of the strongest math teams in the nation
        (check Past Results in the{' '}
        <a href="/awards" className="underline text-blue-600">
          Awards
        </a>{' '}
        page). The team participates in many math competitions during the year, both locally and
        across the globe.
      </p>
      <p className="mb-4">
        The Math Team is open to all high school students, regardless of mathematical ability. The
        primary program of the BCA Math Team is intended for a high school audience, and runs most
        Saturdays from 1:00-4:00pm. Admission to this program for any student not yet in grade 9 is
        by invitation only, and such invitations will be extended only by a math team coach. Most
        weeks, there will be a paired set of lectures (introductory and intermediate), and a contest
        or practice contest. Some weeks will be devoted in their entirety to contests, and in some
        cases may extend past the regular hours. Materials from previous lectures can be found at{' '}
        <a href="/archive" className="underline text-blue-600">
          the archive page
        </a>
        .
      </p>
      <p className="mb-4">
        The middle school program of the BCA Math Team will run two Saturdays a month from 10:30am –
        12:30pm. Students in grades 6 and below are encouraged to talk with Mr. Plotnick to determine
        if this program is appropriate for them before completing registration. Most sessions, there
        will be instruction, followed by contests or practice contests.
      </p>
      <p className="mb-4">
        We are also responsible for organizing and running the{' '}
        <strong>Joe Holbrook Memorial Math Competition</strong>,{' '}
        <em>the largest middle school math competition in Bergen County</em>. For more information,
        please visit its official website at{' '}
        <a
          href="https://holbrook.bcamathteam.org"
          target="_blank"
          rel="noreferrer"
          className="underline text-blue-600"
        >
          https://holbrook.bcamathteam.org
        </a>
        .
      </p>

      <div className="my-8">
        <h4 className="flex items-center text-xl font-bold mb-4">
          Math Team Leadership (2024-25)
        </h4>

        {/* Captains */}
        <div className="bg-gray-100 p-4 rounded mb-6">
          <h5 className="text-lg font-semibold mb-4">Captains</h5>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <tbody>
                <tr className="border-b">
                  <td className="p-2 align-top w-1/3">
                    <b>Andrea Chen</b>
                    <br />
                    <a href="mailto:andche25@bergen.org" className="underline text-blue-600">
                      andche25@bergen.org
                    </a>
                    <br />
                    <img
                      src="/leadership_24-25/Andrea.jpg"
                      alt="Andrea"
                      width="150"
                      className="mt-2"
                    />
                  </td>
                  <td className="p-2 align-top">
                    Hello! I'm Andrea, a senior in AAST, and I've been in Math Team since middle
                    school. It's always fun meeting people and solving cool problems together at math
                    team. Besides math, I enjoy playing the oboe, learning computer science, and
                    listening to music. I'm excited to meet you all!
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 align-top w-1/3">
                    <b>Anthony Kim</b>
                    <br />
                    <a href="mailto:antkim25@bergen.org" className="underline text-blue-600">
                      antkim25@bergen.org
                    </a>
                    <br />
                    <img
                      src="/leadership_24-25/Anthony.jpeg"
                      alt="Anthony"
                      width="150"
                      className="mt-2"
                    />
                  </td>
                  <td className="p-2 align-top">
                    Hihi! I'm Anthony, and you can call me Tony. I'm a senior in ATCS and I've been
                    to Math Team first in middle school. My favorite subjects in math are number
                    theory and algebra. I enjoy math, computer science, and I like playing guitar and
                    video games like Celeste! Excited to meet all of you and hope you enjoy!
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 align-top w-1/3">
                    <b>Daniel Gilman</b>
                    <br />
                    <a href="mailto:dangil25@bergen.org" className="underline text-blue-600">
                      dangil25@bergen.org
                    </a>
                    <br />
                    <img
                      src="/leadership_24-25/Daniel.jpg"
                      alt="Daniel"
                      width="150"
                      className="mt-2"
                    />
                  </td>
                  <td className="p-2 align-top">
                    Hello, I'm Daniel! I am a senior in AAST, and I have been doing competitive math
                    since elementary school. I first joined BCA Math Team in 8th grade, and love
                    working on problems and learning new topics with others. Apart from Math Team, I
                    also enjoy robotics, coding, and badminton. I'm looking forward to meeting
                    everyone at Math Team this year!
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 align-top w-1/3">
                    <b>Jeremy Lee</b>
                    <br />
                    <a href="mailto:jerlee25@bergen.org" className="underline text-blue-600">
                      jerlee25@bergen.org
                    </a>
                    <br />
                    <img
                      src="/leadership_24-25/Jeremy.jpg"
                      alt="Jeremy"
                      width="150"
                      className="mt-2"
                    />
                  </td>
                  <td className="p-2 align-top">
                    Hi! My name is Jeremy and I'm a senior in ATCS. I've been a part of BCA Math Team
                    since I was a freshman and have enjoyed both learning about and solving clever
                    math problems as well as getting to know a bunch of amazing people! Though I've
                    always liked math, Math Team has helped me explore an entirely new side of math
                    that I hadn't known about before. See you soon!
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Leadership */}
        <div className="bg-gray-100 p-4 rounded mb-6">
          <h5 className="text-lg font-semibold mb-4">Leadership</h5>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <tbody>
                <tr className="border-b">
                  <td className="p-2 align-top w-1/3">
                    <b>Maxwell Gong</b>
                    <br />
                    <a href="mailto:maxgong25@bergen.org" className="underline text-blue-600">
                      maxgong25@bergen.org
                    </a>
                    <br />
                    <img
                      src="/leadership_24-25/Maxwell.png"
                      alt="Maxwell"
                      width="150"
                      className="mt-2"
                    />
                  </td>
                  <td className="p-2 align-top">
                    Hi! I'm a senior in ATCS and I've been with BCA Math Team since freshman year.
                    Out of all the math subjects, I like geometry the most. Besides math, I like
                    software development and word puzzles! Math Team is an inclusive place with lots
                    of chances to meet new friends and work with them. I look forward to meeting you
                    here!
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 align-top w-1/3">
                    <b>Alexander Choi</b>
                    <br />
                    <a href="mailto:alecho26@bergen.org" className="underline text-blue-600">
                      alecho26@bergen.org
                    </a>
                    <br />
                    <img
                      src="/leadership_24-25/Alex.png"
                      alt="Alex"
                      width="150"
                      className="mt-2"
                    />
                  </td>
                  <td className="p-2 align-top">
                    Hey! I'm Alex, a junior in AAST. I first joined Math Team in freshman year - and
                    I've grown to love solving difficult math problems with others. Some other things
                    I enjoy are playing tennis and listening to music. I look forward to meeting
                    everyone at math team this year!
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 align-top w-1/3">
                    <b>Arnav Adepu</b>
                    <br />
                    <a href="mailto:arnade26@bergen.org" className="underline text-blue-600">
                      arnade26@bergen.org
                    </a>
                    <br />
                    <img
                      src="/leadership_24-25/Arnav.jpeg"
                      alt="Arnav"
                      width="150"
                      className="mt-2"
                    />
                  </td>
                  <td className="p-2 align-top">
                    Hello! I'm Arnav, a junior in AMST and attended the BCA Math Team for a few years
                    now. I enjoy working on problems with others and spending countless hours on
                    them. Personally, some of my favourite topics in math are algebra and olympiad
                    number theory. Outside of math, I like to travel and hang out with friends. I
                    look forward to seeing everyone this year!
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 align-top w-1/3">
                    <b>Mythreya Dharani</b>
                    <br />
                    <a href="mailto:mytdha26@bergen.org" className="underline text-blue-600">
                      mytdha26@bergen.org
                    </a>
                    <br />
                    <img
                      src="/leadership_24-25/Mythreya.png"
                      alt="Mythreya"
                      width="150"
                      className="mt-2"
                    />
                  </td>
                  <td className="p-2 align-top">
                    Hello! I'm Mythreya, a junior in AMST, and I've been attending BCA Math Team
                    since freshman year. Along the way, I have enjoyed working with others on
                    exploring various topics, especially combinatorics. Outside of math team, I enjoy
                    competitive programming and volleyball. Looking forward to meeting everyone!
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 align-top w-1/3">
                    <b>Gabriele Herr</b>
                    <br />
                    <a href="mailto:gabher26@bergen.org" className="underline text-blue-600">
                      gabher26@bergen.org
                    </a>
                    <br />
                    <img
                      src="/leadership_24-25/Gabriele.jpeg"
                      alt="Gabriele"
                      width="150"
                      className="mt-2"
                    />
                  </td>
                  <td className="p-2 align-top">
                    Hi! My name is Gabriele, a junior in AAST. I first joined math team in freshman
                    year and I started to love the beauty of clever observations in competition math.
                    My favorite math competition related activity is group solving IMO problems!
                    Outside of math, I enjoy physics, coding competitions, violin, and volleyball.
                    I'm excited to see everyone learn cool math this year!
                  </td>
                </tr>
                <tr>
                  <td className="p-2 align-top w-1/3">
                    <b>Michael Middlezong</b>
                    <br />
                    <a href="mailto:micmid26@bergen.org" className="underline text-blue-600">
                      micmid26@bergen.org
                    </a>
                    <br />
                    <img
                      src="/leadership_24-25/Michael.jpg"
                      alt="Michael"
                      width="150"
                      className="mt-2"
                    />
                  </td>
                  <td className="p-2 align-top">
                    Hi! I'm Michael, a junior in AAST. I first joined Math Team in freshman year, and
                    over the years, it has been really fun to do math with other people. I love
                    exploring different topics in math, and some of my favorites are olympiad
                    geometry (not computational) and combinatorics! Besides math, I love a variety of
                    music and also play the piano myself. I hope to spread my passion for learning
                    math at Math Team this year!
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Coaches */}
        <div className="bg-gray-100 p-4 rounded">
          <h5 className="text-lg font-semibold mb-4">Coaches</h5>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <tbody>
                <tr className="border-b">
                  <td className="p-2 align-top font-semibold w-1/3">
                    Michael Abramson (
                    <a
                      href="mailto:micabra@bergen.org"
                      className="underline text-blue-600"
                    >
                      micabra@bergen.org
                    </a>
                    )
                  </td>
                  <td className="p-2 align-top">
                    Dr. Abramson has been working with the Math Team since 2005. As a student of
                    contest writer Steven Conrad, he was a top-ten finisher on the USAMO, finished
                    second at ARML, and attended the prestigious Math Olympiad Program (MOP) twice as
                    a student and twice as a counselor.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 align-top font-semibold w-1/3">
                    Jonathan Pinyan (
                    <a
                      href="mailto:jonpin@bergen.org"
                      className="underline text-blue-600"
                    >
                      jonpin@bergen.org
                    </a>
                    )
                  </td>
                  <td className="p-2 align-top">
                    Mr. Pinyan is a 2003 alumnus of the Bergen County Academies, and has taught at
                    the school since 2013. As a member of the BCA Math Team, Mr. Pinyan competed at
                    ARML seven times, took the USAMO five times, and earned a perfect score on the
                    AMC-12 in 2003. After receiving a bachelor's degree from Washington University
                    and a teaching certification from Ramapo, Mr. Pinyan returned to BCA, where he
                    has been teaching and coaching Math Team since 2013.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 align-top font-semibold w-1/3">Ian Askins</td>
                  <td className="p-2 align-top">
                    Mr. Askins is a 2009 alumnus of the Bergen County Academies. He has taught at the
                    summer math camp and worked with the Math Team since 2014.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 align-top font-semibold w-1/3">Dan Plotnick</td>
                  <td className="p-2 align-top">
                    Mr. Plotnick is a former student of Mr. Holbrook at Freeport High School on Long
                    Island. Dan competed in the early years of ARML and NYSML, attended MOP twice as
                    well as the Hampshire College summer program, and studied mathematics at Harvard
                    College.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 align-top font-semibold w-1/3">Joan Vieni</td>
                  <td className="p-2 align-top">
                    Mrs. Vieni has been a Math Team coach for over a decade and has been teaching in
                    the district since 1999. Mrs. Vieni is very excited to see you all and share her
                    love for math!
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 align-top font-semibold w-1/3">Keith Kaplan</td>
                  <td className="p-2 align-top">
                    Mr. Kaplan has been a coach of the Math Team since 2015 and has been teaching in
                    the district since 2012.
                  </td>
                </tr>
                <tr>
                  <td className="p-2 align-top font-semibold w-1/3">Joe Holbrook</td>
                  <td className="p-2 align-top">
                    Joe Holbrook was the original coach of the AAST Math Team, and led it from the
                    school's founding in 1992 until his 2010 death. He remains an inspiration to us
                    all, and we strive to live up to his idea that Math Team is not just for the
                    best, but that all students have something to gain from competition math, and
                    all students are welcome at all Math Team events, whenever possible.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Extra spacing at bottom */}
      <div className="my-16" />
    </div>
  );
};

export default About;
