import { Suspense } from 'react';
import Image from 'next/image';

import Container from '../components/Container';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                Diego Vergara Petricio
              </h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                Full-Stack Developer, Gamer and AI/Machine learning enthusiast
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-16 pr-5">
              As a backend developer with a passion for AI, I'm always looking for new ways to push the boundaries of what's possible. I love creating secure and efficient systems that power amazing user experiences. When I'm not coding, you can find me playing video games or jamming out to music. I'm always looking for new challenges and ways to improve my skills, and I believe that my combination of technical ability and creative passion make me a valuable asset in this field. Whether it's building new AI-powered apps or just tinkering around, I'm always eager to learn and grow as a developer.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Image
                alt="Diego Antonio Vergara Petricio"
                height={176}
                width={176}
                src="/avatar.jpg"
                sizes="30vw"
                priority
                className="rounded-full filter grayscale"
              />
            </div>
          </div>

        </div>
      </Container>
    </Suspense>
  );
}
