import Link from 'next/link';
import Image from 'next/image';

import Container from 'components/Container';
import avatar from 'public/avatar.jpg';
import avatarBW from 'public/avatar-bw.jpg';

export default function About() {
  return (
    <Container title="About – Diego Vergara Petricio">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              Twitter: <a href="https://twitter.com/MrEvilside">@MrEvilside</a>
            </li>
            <li>
              GitHub: <a href="https://github.com/Ninewinger">@Ninewinger</a>
            </li>
            <li>
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/diego-vergara-petricio/">
              linkedin.com/in/diego-vergara-petricio/
              </a>
            </li>
          </ul>
          <h2>Bio</h2>
          <h3>I am like</h3>
          <p>
          I am an enthusiastic and curious individual with a passion for learning. I love to explore new ideas and challenge myself to think outside the box. My interests are diverse, ranging from science fiction books by authors such as Isaac Asimov, to economics and philosophy, including works by Richard Dawkins, Ayn Rand, and Aristotle. I am a critical thinker who enjoys delving into complex topics and finding new ways of understanding the world around me.

In my free time, I enjoy indulging in my love for film, with a particular interest in the works of Quentin Tarantino, Tim Burton, and Jim Jarmusch. I am also an avid fan of music, particularly from the 70s and 80s, as well as rock, metal, and j-rock. Video games are another passion of mine, particularly RPGs and competitive games like Planetside 2. I have also dedicated much of my life to MMORPGs and resource management games.

Overall, I am a person who is always eager to explore new areas of knowledge and experience new things. Whether it's through books, film, music, or games, I am driven by a constant thirst for learning and discovery.
          </p>
          <h3>Education</h3>
          <p>
          I hold a Bachelor's degree in Engineering in Risk Prevention, Quality, and Environment, My passion for technology led me to pursue additional courses in game development and Python programming. Additionally, I have completed a full-stack developer bootcamp, solidifying my knowledge and abilities in the field of web development. With a strong educational background and practical experience, I am confident in my ability to excel in the world of technology and make valuable contributions to any project.
          </p>
          <h2>Headshots</h2>
          <div className="flex space-x-8">
            <a href="/avatar.jpg">
              <Image
                alt="Diego Antonio Vergara Petricio"
                width={400}
                quality={100}
                src={avatar}
                className="rounded-md"
              />
            </a>
            <a href="/avatar-bw.jpg">
              <Image
                alt="Diego Antonio Vergara Petricio"
                width={400}
                quality={100}
                src={avatarBW}
                className="rounded-md"
              />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
