import Container from 'components/Container';

export default function portafolio() {
    return (
        <Container 
            title="Portafolio – Diego Vergara Petricio"
            description="A collection of my work."
        >
            <div className="flex flex-col justify-center items-start mx-auto mb-16">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                    Portafolio
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    A collection of my work.
                </p>
                <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 pb-12">
                    Full-Stack Projects, web apps and more
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                    <div className="bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                                Reproductor de música con fetch
                            </h2>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                Este proyecto es un reproductor de música que utiliza una API de musica 8bits para obtener los datos de los artistas y canciones.                                                               
                            </p>
                            <p className="mt-2 text-gray-600 dark:text-gray-400 font-bold">
                                Tecnologías: HTML, CSS, JavaScript, React, fetch. 
                            </p>
                        </div>
                        <img className="h-56 w-full object-cover" src="https://raw.githubusercontent.com/Ninewinger/music_player_with_fetch/master/public/musicplayerreadme.jpg" alt="avatar" />
                        <div className="flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-700">
                            <a href="https://github.com/Ninewinger/music_player_with_fetch" target='_blank' className="text-blue-500 hover:underline">Read more</a>
                            <div className="flex items-center">
                                <img className="h-8 w-8 rounded-full object-cover" src="/avatar.jpg" alt="avatar" />
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
                        <img className="h-56 w-full object-cover" src="https://assets.bitdegree.org/online-learning-platforms/storage/media/2018/11/What-Is-A-Full-Stack-Developer-and-Everything-You-Need-to-Know-to-Start.jpg" alt="avatar" />
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700">
                            <a href="#" className="text-blue-500 hover:underline">Read more</a>
                            <div className="flex items-center">
                                <img className="h-8 w-8 rounded-full object-cover" src="/avatar.jpg" alt="avatar" />
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
                        <img className="h-56 w-full object-cover" src="https://assets.bitdegree.org/online-learning-platforms/storage/media/2018/11/What-Is-A-Full-Stack-Developer-and-Everything-You-Need-to-Know-to-Start.jpg" alt="avatar" />
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700">
                            <a href="#" className="text-blue-500 hover:underline">Read more</a>
                            <div className="flex items-center">
                                <img className="h-8 w-8 rounded-full object-cover" src="/avatar.jpg" alt="avatar" />
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
                        <img className="h-56 w-full object-cover" src="https://assets.bitdegree.org/online-learning-platforms/storage/media/2018/11/What-Is-A-Full-Stack-Developer-and-Everything-You-Need-to-Know-to-Start.jpg" alt="avatar" />
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700">
                            <a href="#" className="text-blue-500 hover:underline">Read more</a>
                            <div className="flex items-center">
                                <img className="h-8 w-8 rounded-full object-cover" src="/avatar.jpg" alt="avatar" />
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
                        <img className="h-56 w-full object-cover" src="https://assets.bitdegree.org/online-learning-platforms/storage/media/2018/11/What-Is-A-Full-Stack-Developer-and-Everything-You-Need-to-Know-to-Start.jpg" alt="avatar" />
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700">
                            <a href="#" className="text-blue-500 hover:underline">Read more</a>
                            <div className="flex items-center">
                                <img className="h-8 w-8 rounded-full object-cover" src="/avatar.jpg" alt="avatar" />
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
                        <img className="h-56 w-full object-cover" src="https://assets.bitdegree.org/online-learning-platforms/storage/media/2018/11/What-Is-A-Full-Stack-Developer-and-Everything-You-Need-to-Know-to-Start.jpg" alt="avatar" />
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700">
                            <a href="#" className="text-blue-500 hover:underline">Read more</a>
                            <div className="flex items-center">
                                <img className="h-8 w-8 rounded-full object-cover" src="/avatar.jpg" alt="avatar" />
                                <h4 className="ml-2 text-gray-700 dark:text-gray-200 font-semibold">Diego Vergara</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 pb-12">
                    Machine-Learning projects, data science, and more.
                </h3>
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
                        <img className="h-56 w-full object-cover" src="https://assets.bitdegree.org/online-learning-platforms/storage/media/2018/11/What-Is-A-Full-Stack-Developer-and-Everything-You-Need-to-Know-to-Start.jpg" alt="avatar" />
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700">
                            <a href="#" className="text-blue-500 hover:underline">Read more</a>
                            <div className="flex items-center">
                                <img className="h-8 w-8 rounded-full object-cover" src="/avatar.jpg" alt="avatar" />
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
                        <img className="h-56 w-full object-cover" src="https://assets.bitdegree.org/online-learning-platforms/storage/media/2018/11/What-Is-A-Full-Stack-Developer-and-Everything-You-Need-to-Know-to-Start.jpg" alt="avatar" />
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700">
                            <a href="#" className="text-blue-500 hover:underline">Read more</a>
                            <div className="flex items-center">
                                <img className="h-8 w-8 rounded-full object-cover" src="/avatar.jpg" alt="avatar" />
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
                        <img className="h-56 w-full object-cover" src="https://assets.bitdegree.org/online-learning-platforms/storage/media/2018/11/What-Is-A-Full-Stack-Developer-and-Everything-You-Need-to-Know-to-Start.jpg" alt="avatar" />
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700">
                            <a href="#" className="text-blue-500 hover:underline">Read more</a>
                            <div className="flex items-center">
                                <img className="h-8 w-8 rounded-full object-cover" src="/avatar.jpg" alt="avatar" />
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
                        <img className="h-56 w-full object-cover" src="https://assets.bitdegree.org/online-learning-platforms/storage/media/2018/11/What-Is-A-Full-Stack-Developer-and-Everything-You-Need-to-Know-to-Start.jpg" alt="avatar" />
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700">
                            <a href="#" className="text-blue-500 hover:underline">Read more</a>
                            <div className="flex items-center">
                                <img className="h-8 w-8 rounded-full object-cover" src="/avatar.jpg" alt="avatar" />
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
                        <img className="h-56 w-full object-cover" src="https://assets.bitdegree.org/online-learning-platforms/storage/media/2018/11/What-Is-A-Full-Stack-Developer-and-Everything-You-Need-to-Know-to-Start.jpg" alt="avatar" />
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700">
                            <a href="#" className="text-blue-500 hover:underline">Read more</a>
                            <div className="flex items-center">
                                <img className="h-8 w-8 rounded-full object-cover" src="/avatar.jpg" alt="avatar" />
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
                        <img className="h-56 w-full object-cover" src="https://assets.bitdegree.org/online-learning-platforms/storage/media/2018/11/What-Is-A-Full-Stack-Developer-and-Everything-You-Need-to-Know-to-Start.jpg" alt="avatar" />
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700">
                            <a href="#" className="text-blue-500 hover:underline">Read more</a>
                            <div className="flex items-center">
                                <img className="h-8 w-8 rounded-full object-cover" src="/avatar.jpg" alt="avatar" />
                                <h4 className="ml-2 text-gray-700 dark:text-gray-200 font-semibold">Diego Vergara</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
