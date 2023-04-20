import Image from "next/image";

export default function PortafolioCard({title, description, image, tecnologies, link}) {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            {title}
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
            {description}
        </p>
        <p className="mt-2 text-gray-600 dark:text-gray-400 font-bold">
            Tecnologies:{tecnologies}
        </p>
      </div>
      <Image
        className="h-56 w-full object-contain"
        src={image}
        width={400}
        height={400}
        alt="avatar"
      />
      <div className="flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-700">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Read more
        </a>
        <div className="flex items-center">
          <Image
            className="h-8 w-8 rounded-full object-cover"
            width={400}
            height={400}
            quality={100}
            src="/avatar.jpg"
            alt="avatar"
          />
          <h4 className="ml-2 text-gray-700 dark:text-gray-200 font-semibold">
            Diego Vergara
          </h4>
        </div>
      </div>
    </div>
  );
}