import { FC } from "react";

const Resources: FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Main grid: left sidebar (TOC) + right content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* ======================
            LEFT SIDEBAR (TABLE OF CONTENTS)
        ======================= */}
        <aside className="hidden md:block md:col-span-1 border-r pr-4">
          <h3 className="text-2xl font-bold mb-2">Contributing to Math Team</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <a href="#research" className="text-blue-600 underline">
                Lecture Guide
              </a>
            </li>
          </ul>
          <h3 className="text-2xl font-bold mb-2">Contests</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <a href="#resources-header" className="text-blue-600 underline">
                Contests
              </a>
            </li>
            <li>
              <a href="#about-header" className="ml-4 text-blue-600 underline">
                AMC
              </a>
            </li>
            <li>
              <a href="#format-header" className="ml-4 text-blue-600 underline">
                AIME
              </a>
            </li>
          </ul>
          <h3 className="text-2xl font-bold mb-2">Higher Math</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <a href="#research" className="text-blue-600 underline">
                Topics
              </a>
            </li>
            <li>
              <a href="#math-programs" className="text-blue-600 underline">
                Math Programs
              </a>
            </li>
          </ul>
        </aside>

        {/* ======================
            RIGHT CONTENT
        ======================= */}
        <div className="md:col-span-3">
          <h3 className="text-2xl font-bold mb-2">Contributing to Math Team</h3>
          {/* ---------- Lecture Guide ---------- */}
          <section id="lecture" className="mb-8">
            <h4 className="text-xl font-bold flex items-center mb-2">
              Lecture Guide
            </h4>
            <p className="text-gray-700 mb-2">Updated February 4, 2024</p>
            <p className="mb-4">
              For interested students, BCAMT leadership has created a guide to
              giving a lecture. Please see Mr. Pinyan's email to sign up to
              lecture.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <a
                  href="https://drive.google.com/file/d/1rFOHwskMw0bZ7ESw7sQcIn3egxJENiks/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-blue-600"
                >
                  BCA Math Team Making a Lecture Guide
                </a>
              </li>
            </ul>
          </section>

          <h3 className="text-2xl font-bold mb-2">Contest Prep</h3>
          {/* ---------- Contests ---------- */}
          <section id="resources-header" className="mb-8">
            <h4 className="text-xl font-bold flex items-center mb-2">
              Contests
            </h4>
            <p className="text-gray-700 mb-2">Updated January 31, 2025</p>
            <p className="mb-4">
              The following resources are recommended for{" "}
              <a href="#amc-header" className="underline text-blue-600">
                AMC
              </a>{" "}
              preparation:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>
                Mr. Plotnick’s links for AMC 10 and 12:
                <ul className="list-disc list-inside ml-6 space-y-1">
                  <li>
                    <a
                      href="https://www.isinj.com/mt-amc10/"
                      className="underline text-blue-600"
                      target="_blank"
                      rel="noreferrer"
                    >
                      AMC 10
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.isinj.com/mt-amc12/"
                      className="underline text-blue-600"
                      target="_blank"
                      rel="noreferrer"
                    >
                      AMC 12
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="https://artofproblemsolving.com/wiki/index.php/AMC_Problems_and_Solutions"
                  className="underline text-blue-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  Past AMC problems
                </a>
              </li>
              <li>
                <a
                  href="https://artofproblemsolving.com/wiki/index.php/Mock_AMC"
                  className="underline text-blue-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  List of many AoPS Mock AMCs
                </a>
              </li>
              <li>
                <a href="/archive" className="underline text-blue-600">
                  BCA Math Team Archive
                </a>
              </li>
              <li>
                <a
                  href="https://artofproblemsolving.com/alcumus"
                  className="underline text-blue-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  AoPS Alcumus
                </a>{" "}
                (change the topic/difficulty!)
              </li>
              <li>
                <a
                  href="https://artofproblemsolving.com/ftw"
                  className="underline text-blue-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  AoPS FTW!
                </a>
              </li>
              <li>Mr. Plotnick's Math Team CD (ask for a copy)</li>
            </ul>

            <p className="mb-4">
              The AIME is the next round of the MAA series after the AMC. Doing
              well on the AMC qualifies you for the AIME. The following
              resources are recommended for{" "}
              <a href="#aime-header" className="underline text-blue-600">
                AIME
              </a>{" "}
              preparation:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                <a
                  href="https://www.isinj.com/mt-aime/"
                  className="underline text-blue-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mr. Plotnick's link for AIME
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1v7tj-0FNNhWi7qnoRE0eNYVvQtBfGYbo/view?usp=sharing"
                  className="underline text-blue-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  BOGTRO's AIME syllabus
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1xQZ9FMjCSUZmYNuiIPmGbycZw67fsvGf/view?usp=sharing"
                  className="underline text-blue-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  "Preolympiad Math" handout
                </a>
              </li>
              <li>
                <a
                  href="https://artofproblemsolving.com/wiki/index.php/AIME_Problems_and_Solutions"
                  className="underline text-blue-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  Past AIME problems
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/119pHOoq_4TcGzfV3WgMzhwPwsCDALphc/view?usp=sharing"
                  className="underline text-blue-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  AIME test-taking strategies
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/drive/folders/1gTNFJkAgGY9bP4XL1Y3Y-pcbiDXx8V3x?usp=sharing"
                  className="underline text-blue-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  djmathman’s compilation of AIME-like problems
                </a>
              </li>
            </ul>
          </section>

          <h3 className="text-2xl font-bold mb-2">Higher Math</h3>
          {/* ---------- Math Summer Programs ---------- */}
          <section id="math-programs" className="mb-8">
            <h4 className="text-xl font-bold flex items-center mb-2">
              Math Summer Programs
            </h4>
            <p className="text-gray-700 mb-2">Updated January 16, 2025</p>
            <p className="mb-4">
              For interested students, BCAMT leadership has created a guide to
              math summer enrichment programs.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <a
                  href="https://docs.google.com/document/d/1Ym2HbfcXsf9_Soyq2wlcfK7wh7bNLEXAlVRVsbIZ_DM/edit?usp=sharing"
                  className="underline text-blue-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  Math Summer Programs 2025 Brief
                </a>
              </li>
            </ul>
            <p className="mb-4">
              Part of this information was also covered briefly during Session 1
              of the 2023 Research Information Session. The presentation
              includes information about year-round programs and those specific
              to research. For more general information, please see the{" "}
              <a href="#research" className="underline text-blue-600">
                Research
              </a>{" "}
              section below.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <a
                  href="https://youtu.be/5QfhhXytIRM?si=8hYhnAsrgZWGfxMD&t=944"
                  className="underline text-blue-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  Presentation on Math Programs (15:44 - 23:09)
                </a>
              </li>
            </ul>
          </section>

          {/* ======================
              RESEARCH CONTENT
          ======================= */}
          <section id="research" className="mt-12">
            <h3 className="text-2xl font-bold flex items-center mb-4">
              Research
            </h3>
            <p className="mb-4">
              Although the BCA Math Team is typically geared towards math
              competitions, we have begun a new initiative on math research.
              Below are opportunities and info about math research programs and
              competitions.
            </p>

            {/* Example: 2023 Research Information Session */}
            <div className="border-l-4 border-blue-400 pl-4 my-6">
              <h4 className="text-lg font-semibold mb-2">
                2023 Research Information Session
              </h4>
              <p className="mb-4">
                The BCA Math Team ran its first student-led informational
                session on Math Research for Highschoolers on August 25th, 2023.
                The event had 6 sessions covering math research basics, REU
                experiences, becoming a first author, etc. A playlist of all
                recordings can be found{" "}
                <a
                  href="https://youtube.com/playlist?list=PL55wV471ewADGeTGKnP7xKYihztSbFYi7&si=l26DT8LMtwQqyKJL"
                  className="underline text-blue-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                . Images can be found below.
              </p>
            </div>

            {/* You can copy your session-by-session details, notes, videos, etc. 
                For brevity, here’s an example for Session 1. */}

            <div className="mb-8">
              <h5 className="text-lg font-bold mb-2">Session 1 - Summary</h5>
              <p className="mb-4">
                Krish Ramkumar discussed "What is Math Research?", ways to
                approach it, references to MIT-PRIMES, RSI, PROMYS, etc.
              </p>
              <h5 className="text-lg font-bold mb-2">Session 1 - Notes</h5>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>
                  "Inquiry to gain knowledge" / scientific method vs. math
                  approach
                </li>
                <li>
                  Ideas independent of reality, new results, logical deduction
                </li>
              </ul>
              <h5 className="text-lg font-bold mb-2">Session 1 - Video</h5>
              <div className="flex justify-center mb-6">
                <div className="w-full md:w-1/2 h-0 relative pb-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/5QfhhXytIRM?si=awk7ORC_KLWhNVjv"
                    title="Session 1 Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* And so on for Sessions 2-6, or any other details from the original page. */}

            {/* Photos */}
            <div className="my-6">
              <h4 className="text-xl font-bold mb-4">Photos</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <img
                  src="/images/research/krish1.JPG"
                  alt="Krish"
                  className="w-full h-auto object-cover"
                />
                <img
                  src="/images/research/justin1.JPG"
                  alt="Justin 1"
                  className="w-full h-auto object-cover"
                />
                <img
                  src="/images/research/justin2.JPG"
                  alt="Justin 2"
                  className="w-full h-auto object-cover"
                />
                <img
                  src="/images/research/listening.JPG"
                  alt="Students listening"
                  className="w-full h-auto object-cover"
                />
                <img
                  src="/images/research/rushabh.JPG"
                  alt="Rushabh's Presentation"
                  className="w-full h-auto object-cover"
                />
                <img
                  src="/images/research/studious.JPG"
                  alt="Students working"
                  className="w-full h-auto object-cover"
                />
                <img
                  src="/images/research/danny.JPG"
                  alt="Danny"
                  className="w-full h-auto object-cover"
                />
                <img
                  src="/images/research/shining.JPG"
                  alt="Shining"
                  className="w-full h-auto object-cover"
                />
                <img
                  src="/images/research/studious2.JPG"
                  alt="Students working (again)"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resources;
