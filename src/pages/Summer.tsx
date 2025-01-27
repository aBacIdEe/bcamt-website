// src/pages/SummerLectures.tsx
import React, { FC } from 'react';

const SummerLectures: FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h3 className="flex items-center text-2xl font-bold mb-4">
        <span className="material-icons mr-2" style={{ fontSize: '1.2em' }}>
          brightness_low
        </span>
        Summer Lectures 2024
      </h3>
      <blockquote className="border-l-4 border-blue-400 pl-4 my-4">
        The 2024 Summer Lectures have already concluded. Thanks to everyone who attended!
      </blockquote>
      <p className="mb-4">
        Although the BCA Math Team is typically geared towards high school students...
      </p>
      <p className="mb-4">
        Each lecture series will meet four times for 90 min via Zoom...
      </p>
      <p className="mb-4">
        Here is{' '}
        <a
          href="/summer/2024-information.pdf"
          className="underline text-blue-600"
          target="_blank"
          rel="noreferrer"
        >
          a PDF containing more information
        </a>{' '}
        about the summer lectures!
      </p>
      <p className="mb-4">
        If you have any questions or would like to join a lecture series...
      </p>

      <h4 className="text-xl font-bold mt-8 mb-2">2024 Archive</h4>
      <iframe
        title="2024-summer-archive"
        src="https://drive.google.com/embeddedfolderview?id=1WCzc-lobvDTA57IxK92v03vbZH4j6KXf#list"
        style={{ width: '90%', height: '150px', border: 0 }}
      />

      {/* Example: Algebra */}
      <h4 className="text-xl font-bold mt-8 mb-2">Algebra - Andrea Chen, Sundays @ 3 pm</h4>
      <p className="mb-1">
        <strong>CODE:</strong> gswz2hj
      </p>
      <p className="mb-4">
        In this course, we will discuss various topics in algebra and develop strategies...
      </p>
      <p className="mb-4">
        <strong>Dates:</strong> August 4, 11, 18, 25
      </p>

      {/* Example: Combinatorics */}
      <h4 className="text-xl font-bold mt-8 mb-2">Combinatorics - Jeremy Lee, Thursdays @ 3 pm</h4>
      <p className="mb-1">
        <strong>CODE:</strong> zxlhn4c
      </p>
      <p className="mb-4">
        In this course, we will go over various fundamental topics in combinatorics...
      </p>
      <p className="mb-4">
        <strong>Dates:</strong> August 8, 15, 22, 29
      </p>

      {/* Repeat for Geometry, Number Theory, etc. */}
    </div>
  );
};

export default SummerLectures;
