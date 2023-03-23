import Container from 'components/Container';

export default function studies() {
    return (
        <Container 
            title="Studies – Diego Antonio Vergara Petricio"
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
            </article>
        </Container>
    )
}

