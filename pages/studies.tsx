import Container from 'components/Container';

export default function studies() {
  return (
    <Container
      title="Studies – Diego Antonio Vergara Petricio"
      description="Here's my studies and certifications"
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Studies
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Here's my studies and certifications
        </p>
        <div className="grid grid-cols-1 gap-4 my-2 mt-4">
          <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800">
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="/prev.jpg"
            ></img>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Bachelor's Degree in safety engineering and industrial hygiene
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Universidad Tecnologica de Chile (Inacap - 2013)
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-600">
                The Occupational Health and Safety Engineer is a professional
                trained to direct and manage occupational health and safety
                programs, manage environmental risks, and carry out educational
                actions in the field of occupational accident prevention and
                occupational diseases.
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800">
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="/full_stack_banner.avif"
            ></img>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Full-stack developer
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-600">
                4Geeks Academy (2021)
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                4Geeks Academy is a coding bootcamp that teaches you how to
                become a full-stack developer in 15 weeks. We teach you how to
                build websites and web applications using HTML, CSS, Javascript,
                React, Python, and Flask.
              </p>
            </div>
          </div>
        </div>
      </article>
    </Container>
  );
}
