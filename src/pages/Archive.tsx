// src/pages/Archive.tsx
import { FC } from 'react';

const Archive: FC = () => {
  return (
    <div className="min-h-screen">
      {/* Parallax-style banner (Tailwind approximation) */}
      <div
        className="h-60 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("/images/mt_members_papers.JPG")',
          backgroundAttachment: 'fixed', // gives a parallax feel on some browsers
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-3xl font-semibold">Archive</h2>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <h3 className="text-2xl font-bold flex items-center mb-4">
          <span className="material-icons mr-2" style={{ fontSize: '1.2em' }}>
            archive
          </span>
          Archive
        </h3>
        <p className="mb-4">
          This archive contains materials from past Math Team meetings.
        </p>
        <blockquote className="border-l-4 border-blue-400 pl-4 my-4">
          Please wait for the Google Drive folders to load.
        </blockquote>

        {/* Example: 2024-25 (current season) */}
        <div className="my-6">
          <h3 className="text-xl font-semibold mb-2">2024-25 (current season)</h3>
          <iframe
            title="2024-25"
            src="https://drive.google.com/embeddedfolderview?id=1KtOf9X0HbgndtO6_JRAaPW13vhLVAE-u#list"
            style={{ width: '90%', height: '150px', border: 0 }}
          />
        </div>

        {/* 2023-24 */}
        <div className="my-6">
          <h3 className="text-xl font-semibold mb-2">2023-24</h3>
          <iframe
            title="2023-24"
            src="https://drive.google.com/embeddedfolderview?id=1WUMPiSiIewEE-RVD4REF5efEfYPnQ-oe#list"
            style={{ width: '90%', height: '150px', border: 0 }}
          />
        </div>

        {/* 2022-23 */}
        <div className="my-6">
          <h3 className="text-xl font-semibold mb-2">2022-23</h3>
          <iframe
            title="2022-23"
            src="https://drive.google.com/embeddedfolderview?id=1MQzyt1-eq8sDg-sVUeQUOHrsKW76FfcV#list"
            style={{ width: '90%', height: '150px', border: 0 }}
          />
        </div>

        {/* 2021-22 (split for Intro vs Intermediate) */}
        <div className="my-6">
          <h3 className="text-xl font-semibold mb-2">2021-22</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Introductory Track */}
            <div>
              <h4 className="text-lg font-bold mb-2">Introductory Track</h4>
              <h5 className="font-semibold">Algebra</h5>
              <iframe
                title="2021-intro-algebra"
                src="https://drive.google.com/embeddedfolderview?id=1QnYgUJYi_xwYYCNhrKIGO851eOF2SXfK#list"
                style={{ width: '90%', height: '150px', border: 0 }}
              />

              <h5 className="font-semibold mt-4">Combinatorics</h5>
              <iframe
                title="2021-intro-combinatorics"
                src="https://drive.google.com/embeddedfolderview?id=1VSyTUAObvgj1X0fpgojuZwxTtHgdZ0rJ#list"
                style={{ width: '90%', height: '150px', border: 0 }}
              />

              <h5 className="font-semibold mt-4">Geometry</h5>
              <iframe
                title="2021-intro-geometry"
                src="https://drive.google.com/embeddedfolderview?id=1Kp-dhLjU8ysbuLPEu2b-4zGiA4XXnB4v#list"
                style={{ width: '90%', height: '150px', border: 0 }}
              />

              <h5 className="font-semibold mt-4">Number Theory</h5>
              <iframe
                title="2021-intro-nt"
                src="https://drive.google.com/embeddedfolderview?id=1y111yodSDiGJCxHpknhLRml1DF73sjgO#list"
                style={{ width: '90%', height: '150px', border: 0 }}
              />
            </div>

            {/* Intermediate Track */}
            <div>
              <h4 className="text-lg font-bold mb-2">Intermediate Track</h4>
              <h5 className="font-semibold">Algebra</h5>
              <iframe
                title="2021-inter-algebra"
                src="https://drive.google.com/embeddedfolderview?id=1TnX3uE3qPsHcDtxClcFJcQFqZGe9DumM#list"
                style={{ width: '90%', height: '150px', border: 0 }}
              />

              <h5 className="font-semibold mt-4">Combinatorics</h5>
              <iframe
                title="2021-inter-combinatorics"
                src="https://drive.google.com/embeddedfolderview?id=1tbxAkMpQOcbKP_J_lq6i_x7Qs5mFHTcd#list"
                style={{ width: '90%', height: '150px', border: 0 }}
              />

              <h5 className="font-semibold mt-4">Geometry</h5>
              <iframe
                title="2021-inter-geometry"
                src="https://drive.google.com/embeddedfolderview?id=1CxdcAVUcT2TfmfhC56B1dm5qb1DMN5m_#list"
                style={{ width: '90%', height: '150px', border: 0 }}
              />

              <h5 className="font-semibold mt-4">Number Theory</h5>
              <iframe
                title="2021-inter-nt"
                src="https://drive.google.com/embeddedfolderview?id=1hbU_GvlmscPp2p-hEEkAwt-ridIWtwCp#list"
                style={{ width: '90%', height: '150px', border: 0 }}
              />
            </div>
          </div>
        </div>

        {/* 2020-21, 2019-20, etc. You can replicate more as needed. */}
        <div className="my-6">
          <h3 className="text-xl font-semibold mb-2">2020-21</h3>
          {/* ... etc. */}
        </div>

        <div className="my-6">
          <h3 className="text-xl font-semibold mb-2">2019-20</h3>
          {/* ... etc. */}
          <p>
            In addition to our handouts, the math team is also responsible for writing problems to the
            <strong> Joe Holbrook Memorial Math Competition</strong> (JHMMC). For more information...
          </p>
        </div>

        {/* etc... */}
      </div>
    </div>
  );
};

export default Archive;
