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
                <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-2">
                    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
                        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                            Bachelor's Degree in Computer Science
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">
                            Universidad Nacional de Córdoba
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
                        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                            Bachelor's Degree in Computer Science
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">
                            Universidad Nacional de Córdoba
                        </p>
                    </div>
                </div>
            </article>
        </Container>
    )
}

