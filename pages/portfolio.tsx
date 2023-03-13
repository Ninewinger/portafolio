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
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Full-stack projects, web apps, and more.
                </p>
                // card collage style portafolio
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                                Project 1
                            </h2>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700">
                            <a href="#" className="text-blue-500 hover:underline">Read more</a>
                            <div className="flex items-center">
                                <img className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1606784889481-6b0b4b0b5f1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="avatar" />
                                <h4 className="ml-2 text-gray-700 dark:text-gray-200 font-semibold">Diego Vergara</h4>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                                Project 2
                            </h2>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700">
                            <a href="#" className="text-blue-500 hover:underline">Read more</a>
                            <div className="flex items-center">
                                <img className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1606784889481-6b0b4b0b5f1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="avatar" />
                                <h4 className="ml-2 text-gray-700 dark:text-gray-200 font-semibold">Diego Vergara</h4>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                                Project 3
                            </h2>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700">
                            <a href="#" className="text-blue-500 hover:underline">Read more</a>
                            <div className="flex items-center">
                                <img className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1606784889481-6b0b4b0b5f1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="avatar" />
                                <h4 className="ml-2 text-gray-700 dark:text-gray-200 font-semibold">Diego Vergara</h4>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                                Project 4
                            </h2>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700">
                            <a href="#" className="text-blue-500 hover:underline">Read more</a>
                            <div className="flex items-center">
                                <img className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1606784889481-6b0b4b0b5f1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="avatar" />
                                <h4 className="ml-2 text-gray-700 dark:text-gray-200 font-semibold">Diego Vergara</h4>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                                Project 5
                            </h2>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700">
                            <a href="#" className="text-blue-500 hover:underline">Read more</a>
                            <div className="flex items-center">
                                <img className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1606784889481-6b0b4b0b5f1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="avatar" />
                                <h4 className="ml-2 text-gray-700 dark:text-gray-200 font-semibold">Diego Vergara</h4>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                                Project 6
                            </h2>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700">
                            <a href="#" className="text-blue-500 hover:underline">Read more</a>
                            <div className="flex items-center">
                                <img className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1606784889481-6b0b4b0b5f1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="avatar" />
                                <h4 className="ml-2 text-gray-700 dark:text-gray-200 font-semibold">Diego Vergara</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Machine-Learning projects, data science, and more.
                </p>
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700">
                        <a href="#" className="text-blue-500 hover:underline">Read more</a>
                        <div className="flex items-center">
                            <img className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1606784889481-6b0b4b0b5f1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="avatar" />
                                <h4 className="ml-2 text-gray-700 dark:text-gray-200 font-semibold">Diego Vergara</h4>
                        </div>
                    </div>
            </div>
        </Container>
    )
}
