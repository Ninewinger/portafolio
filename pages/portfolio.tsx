import Container from 'components/Container';

export default function portafolio() {
    return (
        <Container 
            title="Portafolio – Diego Vergara Petricio"
            description="A collection of my work."
        >
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                    Portafolio
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    A collection of my work.
                </p>
            </div>
        </Container>
    )
}
