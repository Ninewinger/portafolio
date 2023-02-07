import Link from 'next/link';

import NowPlaying from 'components/NowPlaying';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/MrEvilside">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/Ninewinger">GitHub</ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/diego-vergara-petricio/">LinkedIn</ExternalLink>
        </div>
        <div className="flex flex-col space-y-4 ">
          <p className="tracking-tight text-black dark:text-white">
          Email: d.v.petricio@live.com 
          </p>  
          <p className="tracking-tight text-black dark:text-white">       
          Phone: +569 6477 1419
          </p>  
          <p className="tracking-tight text-black dark:text-white">
          From Antofagasta, Chile
          </p>
          <p className="tracking-tight text-black dark:text-white">
          ¡¡Open to relocate!!
          </p>
        </div>
      </div>
    </footer>
  );
}
