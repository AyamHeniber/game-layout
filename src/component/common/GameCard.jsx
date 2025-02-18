import React from 'react'

export const GameCard = ({games,title}) => {
    return (
        <section className="p-3">
          <div className="text-center w-full mb-2">
            <p className="font-semibold text-transparent text-md bg-gradient-to-r py-1 from-[#ff6e02] to-[#ff0] px-2 w-full bg-clip-text ">
              {title}
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-3 text-xs md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 gap-4">
            {games.map((game, index) => (
              <div
                key={index}
                className="group relative flex flex-col md:h-64 items-center border border-red-600 rounded-lg overflow-hidden shadow-md transition-all duration-300 bg-gradient-to-r from-[#ff6e02] to-[#ff0]"
              >
                <a
                  href={game.link}
                  className="block w-full h-32 md:h-52 md:w-52 bg-cover md:bg-contain bg-no-repeat bg-center transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  style={{ backgroundImage: `url(${game.image})` }}
                ></a>
    
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={game.link}
                    className="bg-gradient-to-r from-[#ff6e02] to-[#828231] text-white py-2 px-4 rounded-full text-sm font-semibold"
                  >
                    Play
                  </a>
                </div>
    
                <div className="text-center w-full flex justify-center items-center h-auto mb-2 mt-1 p-0.5">
                  <p className="font-semibold  bg-gradient-to-r from-[#ff6e02] to-[#ff0] w-full ">
                    {game.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
}
