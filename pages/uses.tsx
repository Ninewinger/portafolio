import Container from 'components/Container';
import Image from 'next/image';

export default function Uses() {
  return (
    <Container
      title="Uses – Diego Antonio Vergara Petricio"
      description="Here's what tech I'm currently using for coding, gaming, and learning."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          My Gear
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          Here's what tech I'm currently using for coding, gaming, and learning.
          Most of these have been accumulated over the past few years.
        </p>
        <Image
          className="rounded-lg"
          alt={`My computer desk`}
          src={`/static/images/setup.png`}
          width={2164 / 2}
          height={1546 / 2}
          priority
        />
        <div className="prose dark:prose-dark w-full">
          <h3 id="computer-office">Computer / Office</h3>
          <ul>
            <li>Intel i5-8600K 3.6GHz 6-Core Processor</li>
            <li>Asrock killer SLI/ac Z370 motherboard</li>
            <li>32GB DDR4 3000MHz RAM</li>
            <li>Gigabyte GeForce GTX 1080 ti 11GB</li>
            <li>1TB kingston SSD + 1TB HDD + 256GB SSD</li>
          </ul>
          <h3 id="coding">Coding</h3>
          <ul>
            <li>
              Editor: VSCode
            </li>
            <li>Theme: One Dark Pro</li>
            <li>1 year Copilot</li>
          </ul>
          <h3 id="audio-video">Audio / Video</h3>
          <ul>
            <li>Logitech streamcam</li>
            <li>Focusrite Scarlett solo 2nd gen</li>
            <li>Audio Technica ATH-M50x</li>
            <li>Binaural Microphone</li>
          </ul>
          <h3 id="music">Music</h3>
          <ul>
            <li>Ibanez electro-acoustic guitar</li>
            <li>LTD electric guitar</li>
            <li>Yamaha Ukelele</li>
          </ul>
          <h3 id="other-tech">Other Tech</h3>
          <ul>
            <li>Oculus quest 2</li>
            <li>Xiaomi Mi Band 3</li>
            <li>Logitech G27 Racing Wheel</li>
          </ul>
        </div>
      </article>
    </Container>
  );
}
