// src/pages/Archive.tsx
import { FC } from "react";

const Archive: FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col max-w-lg lg:max-w-3xl p-8">
        <h3 className="flex items-center text-2xl font-bold mb-4">Archive</h3>
        <p className="mb-4">
          This archive contains materials from past Math Team meetings.
        </p>
        <blockquote className="border-l-4 border-blue-400 pl-4 my-4">
          Please wait for the Google Drive folders to load.
        </blockquote>

        {/* Example: 2024-25 (current season) */}
        <div className="my-6">
          <h3 className="text-xl font-semibold mb-2">
            2024-25 (current season)
          </h3>
          <iframe
            title="2024-25"
            src="https://drive.google.com/embeddedfolderview?id=1KtOf9X0HbgndtO6_JRAaPW13vhLVAE-u#list"
            className="w-[90%] h=150px border-0"
          />
        </div>

        {/* 2023-24 */}
        <div className="my-6">
          <h3 className="text-xl font-semibold mb-2">2023-24</h3>
          <iframe
            title="2023-24"
            src="https://drive.google.com/embeddedfolderview?id=1WUMPiSiIewEE-RVD4REF5efEfYPnQ-oe#list"
            className="w-[90%] h=150px border-0"
          />
        </div>

        {/* 2022-23 */}
        <div className="my-6">
          <h3 className="text-xl font-semibold mb-2">2022-23</h3>
          <iframe
            title="2022-23"
            src="https://drive.google.com/embeddedfolderview?id=1MQzyt1-eq8sDg-sVUeQUOHrsKW76FfcV#list"
            className="w-[90%] h=150px border-0"
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
                className="w-[90%] h=150px border-0"
              />

              <h5 className="font-semibold mt-4">Combinatorics</h5>
              <iframe
                title="2021-intro-combinatorics"
                src="https://drive.google.com/embeddedfolderview?id=1VSyTUAObvgj1X0fpgojuZwxTtHgdZ0rJ#list"
                className="w-[90%] h=150px border-0"
              />

              <h5 className="font-semibold mt-4">Geometry</h5>
              <iframe
                title="2021-intro-geometry"
                src="https://drive.google.com/embeddedfolderview?id=1Kp-dhLjU8ysbuLPEu2b-4zGiA4XXnB4v#list"
                className="w-[90%] h=150px border-0"
              />

              <h5 className="font-semibold mt-4">Number Theory</h5>
              <iframe
                title="2021-intro-nt"
                src="https://drive.google.com/embeddedfolderview?id=1y111yodSDiGJCxHpknhLRml1DF73sjgO#list"
                className="w-[90%] h=150px border-0"
              />
            </div>

            {/* Intermediate Track */}
            <div>
              <h4 className="text-lg font-bold mb-2">Intermediate Track</h4>
              <h5 className="font-semibold">Algebra</h5>
              <iframe
                title="2021-inter-algebra"
                src="https://drive.google.com/embeddedfolderview?id=1TnX3uE3qPsHcDtxClcFJcQFqZGe9DumM#list"
                className="w-[90%] h=150px border-0"
              />

              <h5 className="font-semibold mt-4">Combinatorics</h5>
              <iframe
                title="2021-inter-combinatorics"
                src="https://drive.google.com/embeddedfolderview?id=1tbxAkMpQOcbKP_J_lq6i_x7Qs5mFHTcd#list"
                className="w-[90%] h=150px border-0"
              />

              <h5 className="font-semibold mt-4">Geometry</h5>
              <iframe
                title="2021-inter-geometry"
                src="https://drive.google.com/embeddedfolderview?id=1CxdcAVUcT2TfmfhC56B1dm5qb1DMN5m_#list"
                className="w-[90%] h=150px border-0"
              />

              <h5 className="font-semibold mt-4">Number Theory</h5>
              <iframe
                title="2021-inter-nt"
                src="https://drive.google.com/embeddedfolderview?id=1hbU_GvlmscPp2p-hEEkAwt-ridIWtwCp#list"
                className="w-[90%] h=150px border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archive;
