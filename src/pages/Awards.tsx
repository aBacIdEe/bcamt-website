import { FC } from 'react';
import AwardsSlider from '../components/AwardsSlider';
// If you've already made a reusable Slider component, you can import it here.
// Otherwise, we'll inline a simple slider example.

const Awards: FC = () => {
  return (
    <div className="min-h-screen">
      {/* Top Slider */}
      <AwardsSlider />

      <div className="container mx-auto px-4 py-6">
        <h3 className="flex items-center text-2xl font-bold mb-4">
          Historical Results and Awards
        </h3>

        {/* IMO Medalists */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded shadow">
            <h2 className="text-6xl text-lime-600 text-center font-bold mb-2">4</h2>
            <h5 className="text-center text-lg font-semibold mb-2">IMO Medalists</h5>
            <p>
              Hyunsoo Kim was a member of the{' '}
              <a
                href="https://www.imo-official.org/team_r.aspx?code=USA&year=2005"
                className="underline text-blue-600"
              >
                2005 US Team
              </a>
              , and won a <span className="text-gray-600">Silver Medal</span>. Ryan Alweiss won a{' '}
              <span className="text-yellow-500">Gold Medal</span> as part of the{' '}
              <a
                href="https://www.imo-official.org/team_r.aspx?code=USA&year=2015"
                className="underline text-blue-600"
              >
                2015 US Team
              </a>
              , which won the competition for the first time in over two decades. Sebastian Jeon was a member of the{' '}
              <a
                href="https://www.imo-official.org/team_r.aspx?code=CAN&year=2019"
                className="underline text-blue-600"
              >
                2019 Canada IMO Team
              </a>{' '}
              and won a <span className="text-orange-800">Bronze Medal</span>. Marvin Mao was a member of the{' '}
              <a
                href="https://www.imo-official.org/team_r.aspx?code=CAN&year=2023"
                className="underline text-blue-600"
              >
                2023 Canada IMO Team
              </a>{' '}
              and won a <span className="text-gray-600">Silver Medal</span>.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded shadow">
            <h2 className="text-6xl text-lime-600 text-center font-bold mb-2">10</h2>
            <h5 className="text-center text-lg font-semibold mb-2">
              Perfect Scores on AMC 10/12/AHSME
            </h5>
            <p>
              Club 150, for perfect scores on the AHSME/AMC-12: Abhiram Vijay (1998) and Jonathan
              Pinyan (2003-B); Junior Club 150, for perfect scores on the AMC-10: Hyunsoo Kim
              (2002-A), Harry Altman (2003-B), Benjamin Yang (2005-B), Andrew Cai (2009-A), Alex Zhu
              (2009-A), Michael Tan (2009-B), Daniel Kim (2015-A), Sebastian Jeon (2017-B).
            </p>
          </div>
        </div>

        {/* AMC / AIME / USAMO */}
        <h5 className="text-xl font-bold mb-2">American Mathematics Competitions (AMC/AHSME, AIME, USAMO)</h5>
        <p className="mb-4">
          The BCA Math Team has won the Charles T. Salkind Memorial Silver Cup as AMC National
          Champions three times, in 1997, 1998, and 2005. The team has also won three Bronze Cups as
          regional champions (1999, 2004, 2009). Each year, the Team has dozens of qualifiers for
          the American Invitational Mathematics Exam...
        </p>
        <p className="mb-4">
          <em>Congratulations</em> to Sebastian Jeon on his terrific performance on the 2018 MAA
          series. Sebastian had a perfect score on the first round competition, the AMC 10B...
        </p>

        {/* Second slider (three images) example */}
        <div className="my-4">
          {/* If you want a second slider, you can create another instance or just display images. 
              We'll just show how to place images. */}
          <p className="text-center">
            <em>Above: 2019 10th World Mathematics Team Championships in Seoul, South Korea</em>
          </p>
        </div>

        {/* ARML */}
        <h5 className="text-xl font-bold mb-2">American Regions Math League (ARML)</h5>
        <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
          <div className="md:w-1/3 p-2">
            <img
              src="/images/Math_national_champ_2016.jpg"
              alt="2016 ARML Individual Champion"
              className="w-full object-cover mb-4 md:mb-0"
            />
          </div>
          <div className="md:w-2/3 p-2">
            <p>
              Each year, the final competition – and the biggest team event – on our calendar is
              ARML. The BCA Math Team has placed in the top ten on five occasions...
            </p>
          </div>
        </div>

        {/* Harvard/MIT, Princeton (PUMaC), etc. */}
        <h5 className="text-xl font-bold mb-2">Harvard/MIT Math Tournament (HMMT)</h5>
        <p className="mb-4">
          One of the oldest college-run competitions... BCA finished second place in 2001, and took
          third place in 2010 and each year from 2002-05.
        </p>

        <h5 className="text-xl font-bold mb-2">
          Princeton: The Princeton Undergraduate Mathematics Competition (PUMaC)
        </h5>
        <p className="mb-4">
          This is held each fall, and is the closest destination among our trips. In 2014, we had
          our best finish ever at second place...
        </p>

        <h5 className="text-xl font-bold mb-2">
          Carnegie Mellon Informatics and Mathematics Competition (CMIMC)
        </h5>
        <p className="mb-4">
          At CMIMC 2023, BCA1 finished 4th on the Theoretical Computer Science (TCS) round and 7th
          overall.
        </p>

        {/* WMTC */}
        <h5 className="text-xl font-bold mb-2">World Mathematics Team Championship (WMTC)</h5>
        <p className="mb-4">
          The math team has also competed at international events, including Beijing in 2013, Seoul
          in 2016, Bulgaria in 2018, Seoul in 2019, Seoul in 2023, and recently, Qatar!
        </p>

        {/* Embedded video: Google Drive or YouTube */}
        <div className="flex flex-row gap-4">
          <div className="flex-1 text-center">
            <div className="w-full aspect-video relative">
              <iframe
                title="WMTC-2023-video"
                className="absolute top-0 left-0 w-full h-full"
                src="https://drive.google.com/file/d/1R1QDlS-mmeu416Bfomtr2L1V4cJTodd9/preview"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p>
              BCA Math Team at the 2023 WMTC. Thanks to Joy Ren for editing the video!<br />
              Song: Gradation by 10cm
            </p>
          </div>

          <div className="flex-1 text-center">
            <div className="w-full aspect-video relative">
              <iframe
                title="WMTC-2019-video"
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/P_52KoVpEkk"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p>
              BCA Math Team at the 2019 WMTC. Special thanks to Vivian Tan for recording and editing
              this video.
            </p>
          </div>

          <div className="flex-1 text-center">
            <div className="w-full aspect-video relative">
              <iframe
                title="WMTC-2013-video"
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/vSVIq3SfkdY"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p>BCA Math Team at the 2013 WMTC in Beijing.</p>
          </div>
        </div>

        <h5 className="text-xl font-bold mb-2">Lehigh</h5>
        <p className="mb-4">
          In the two years we attended the Lehigh University High School Math Tournament, BCA won
          the award for top overall school, and has had a student in the top three individuals each
          time.
        </p>

        <h5 className="text-xl font-bold mb-2">Other</h5>
        <p className="mb-4">
          Other trips the Math Team has taken include Johns Hopkins, Stanford, and Berkeley.
        </p>
      </div>
    </div>
  );
};

export default Awards;
