import Container from 'components/Container';
import PortafolioCard from 'components/PortafolioCard';

export default function portafolio() {
    let props = {
        firstProject: {
            title: "Music player with fetch",
            description: "This project is a music player that uses an 8bit music API to obtain the data of the artists and songs.",
            tecnologies: "HTML, CSS, JavaScript, React, fetch.",
            image: "https://raw.githubusercontent.com/Ninewinger/music_player_with_fetch/master/public/musicplayerreadme.jpg",
            link: "https://github.com/Ninewinger/music_player_with_fetch"
        },
        secondProject: {
            title: "Calculator",
            description: "This project is a calculator that uses Tkinter to create the GUI. and a calculator made only on oop.",
            tecnologies: "Python, Tkinter, OOP.",
            image: "https://raw.githubusercontent.com/Ninewinger/calculadora/master/calc.bmp",
            link: "https://github.com/Ninewinger/calculadora"
        },
        thirdProject: {
            title: "BATTLESHIP",
            description: "This project is a battleship game made in vanilla js, it has a simple UI and a simple AI.",
            tecnologies: "HTML, CSS, JavaScript.",
            image: "https://raw.githubusercontent.com/Ninewinger/Battleship-In-Vanilla.js/main/readmeimg.jpg",
            link: "https://github.com/Ninewinger/Battleship-In-Vanilla.js"
        },
        fourthProject: {
            title: "Random Card Generator",
            description: "This project is a random card generator with the select algorithm.",
            tecnologies: "HTML, CSS, JavaScript.",
            image: "https://raw.githubusercontent.com/Ninewinger/Sorting_Cards_using_the_selection_algorithm/master/asd.jpg",
            link: "https://github.com/Ninewinger/Sorting_Cards_using_the_selection_algorithm/tree/master"
        }
    }
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
                                Music player with fetch
                            </h2>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                This project is a music player that uses an 8bit music API to obtain the data of the artists and songs.                                                               
                            </p>
                            <p className="mt-2 text-gray-600 dark:text-gray-400 font-bold">
                                Tecnologies: HTML, CSS, JavaScript, React, fetch. 
                            </p>
                        </div>
                        <img className="h-56 w-full object-contain" src="https://raw.githubusercontent.com/Ninewinger/music_player_with_fetch/master/public/musicplayerreadme.jpg" alt="avatar" />
                        <div className="flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-700">
                            <a href="https://github.com/Ninewinger/music_player_with_fetch" target='_blank' className="text-blue-500 hover:underline">Read more</a>
                            <div className="flex items-center">
                                <img className="h-8 w-8 rounded-full object-cover" src="/avatar.jpg" alt="avatar" />
                                <h4 className="ml-2 text-gray-700 dark:text-gray-200 font-semibold">Diego Vergara</h4>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                                Calculadora
                            </h2>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                This project is a calculator that uses Tkinter to create the GUI. and a calculator made only on oop.
                            </p>
                            <p className="mt-2 text-gray-600 dark:text-gray-400 font-bold">
                                Tecnologies: Python, Tkinter.
                            </p>
                        </div>
                        <img className="h-56 w-full object-contain" src="https://raw.githubusercontent.com/Ninewinger/calculadora/master/calc.bmp" alt="avatar" />
                        <div className="flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-700">
                            <a href="https://github.com/Ninewinger/calculadora" className="text-blue-500 hover:underline">Read more</a>
                            <div className="flex items-center">
                                <img className="h-8 w-8 rounded-full object-cover" src="/avatar.jpg" alt="avatar" />
                                <h4 className="ml-2 text-gray-700 dark:text-gray-200 font-semibold">Diego Vergara</h4>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                                BATTLESHIP
                            </h2>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                This project is a battleship game made in vanilla js, it has a simple UI and a simple AI.
                            </p>
                            <p className="mt-2 text-gray-600 dark:text-gray-400 font-bold">
                                Tecnologies: HTML, CSS, JavaScript.
                            </p>
                        </div>
                        <img className="h-56 w-full object-contain" src="https://raw.githubusercontent.com/Ninewinger/Battleship-In-Vanilla.js/main/readmeimg.jpg" alt="avatar" />
                        <div className="flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-700">
                            <a href="https://github.com/Ninewinger/Battleship-In-Vanilla.js" className="text-blue-500 hover:underline">Read more</a>
                            <div className="flex items-center">
                                <img className="h-8 w-8 rounded-full object-cover" src="/avatar.jpg" alt="avatar" />
                                <h4 className="ml-2 text-gray-700 dark:text-gray-200 font-semibold">Diego Vergara</h4>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                                Random Card Generator
                            </h2>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                This project is a random card generator with the select algorithm.
                            </p>
                            <p className="mt-2 text-gray-600 dark:text-gray-400 font-bold">
                                Tecnologies: HTML, CSS, JavaScript.
                            </p>
                        </div>
                        <img className="h-56 w-full object-contain" src="https://raw.githubusercontent.com/Ninewinger/Sorting_Cards_using_the_selection_algorithm/master/asd.jpg" alt="avatar" />
                        <div className="flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-700">
                            <a href="https://github.com/Ninewinger/Sorting_Cards_using_the_selection_algorithm/tree/master" className="text-blue-500 hover:underline">Read more</a>
                            <div className="flex items-center">
                                <img className="h-8 w-8 rounded-full object-cover" src="/avatar.jpg" alt="avatar" />
                                <h4 className="ml-2 text-gray-700 dark:text-gray-200 font-semibold">Diego Vergara</h4>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                                Tic Tac Toe React.js
                            </h2>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                This project is a tic tac toe game made in react.js.
                            </p>
                            <p className="mt-2 text-gray-600 dark:text-gray-400 font-bold">
                                Tecnologies: React.js, JavaScript, HTML, CSS, Bootstrap.
                            </p>
                        </div>
                        <img className="h-56 w-full object-contain" src="https://raw.githubusercontent.com/Ninewinger/TicTacToe_in_React.js/main/photo.jpg" alt="avatar" />
                        <div className="flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-700">
                            <a href="https://github.com/Ninewinger/TicTacToe_in_React.js" className="text-blue-500 hover:underline">Read more</a>
                            <div className="flex items-center">
                                <img className="h-8 w-8 rounded-full object-cover" src="/avatar.jpg" alt="avatar" />
                                <h4 className="ml-2 text-gray-700 dark:text-gray-200 font-semibold">Diego Vergara</h4>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                                To Do List React.js
                            </h2>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                This project is a to do list made in react.js.
                            </p>
                            <p className="mt-2 text-gray-600 dark:text-gray-400 font-bold">
                                Tecnologies: React.js, JavaScript, HTML, CSS, Bootstrap.
                            </p>
                        </div>
                        <img className="h-56 w-full object-contain" src="https://raw.githubusercontent.com/Ninewinger/React_TODO_application/main/preview.bmp" alt="avatar" />
                        <div className="flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-700">
                            <a href="https://github.com/Ninewinger/React_TODO_application" className="text-blue-500 hover:underline">Read more</a>
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
                <p className="text-gray-600 dark:text-gray-400 pb-12">
                    I'm currently learning machine learning and data science, here are some of my projects.
                </p>
                
            </div>
        </Container>
    )
}
