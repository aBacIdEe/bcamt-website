// src/components/Footer.tsx
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-black text-white mt-8 pt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <a
              href="https://www.bergen.org/bergencountyacademies"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="bca_logo.png"
                alt="BCA Logo"
                className="h-32"
              />
            </a>
          </div>

          {/* Middle Column */}
          <div className="md:w-1/4 mb-8 md:mb-0 px-2">
            <h5 className="text-yellow-400 font-bold mb-2">Connect</h5>
            <ul className="underline space-y-1">
              <li>
                <a
                  className="text-white"
                  href="https://www.bergen.org/bergencountyacademies"
                  target="_blank"
                  rel="noreferrer"
                >
                  Bergen County Academies
                </a>
              </li>
              <li>
                <a
                  className="text-white"
                  href="https://holbrook.bcamathteam.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  JHMMC Official Site
                </a>
              </li>
              <li>
                <a
                  className="text-white"
                  href="https://www.facebook.com/Joe-Holbrook-Memorial-Math-Competition-470281533772274/"
                  target="_blank"
                  rel="noreferrer"
                >
                  JHMMC Facebook page
                </a>
              </li>
            </ul>
            <a
              className="text-white underline"
              href="https://www.instagram.com/bca_mt/"
              target="_blank"
              rel="noreferrer"
            >
              <p>Follow us on Instagram!</p>
              <img
                src="/images/instagram_logo.png"
                alt="Instagram"
                className="w-10 h-10 invert"
              />
            </a>
          </div>

          {/* Right Column */}
          <div className="md:w-1/4 px-2">
            <h5 className="text-yellow-400 font-bold mb-2">Contact</h5>
            <p className="mb-1">Coaches:</p>
            <ul className="space-y-1 underline">
              <li>
                <a
                  className="text-white"
                  href="mailto:micabra@bergen.org"
                >
                  Dr. Michael Abramson
                </a>
              </li>
              <li>
                <a
                  className="text-white"
                  href="mailto:jonpin@bergen.org"
                >
                  Mr. Jon Pinyan
                </a>
              </li>
              <p className="mt-2">For website-related inquiries:</p>
              <li>
                <a
                  className="text-white"
                  href="mailto:micmid26@bergen.org"
                >
                  Michael Middlezong
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-2 mt-4">
        <div className="container mx-auto px-4 text-center">
          &copy; 2024 • Bergen County Academies
        </div>
      </div>
    </footer>
  );
};

export default Footer;
