import { useQuery } from "@apollo/client";
import "./App.css";
import { GET_LATEST_LAUNCH, GET_LAUNCHES } from "./query";
import { useState } from "react";

function App() {
  const latestQuery = useQuery(GET_LATEST_LAUNCH);
  const launchesQuery = useQuery(GET_LAUNCHES);

  const [ search, setSearchQuery ] = useState<string>('')
  const [page, setPage ] = useState<number>(1)
  const pageLimit = 25;

  console.log(search)
  //const pageNum = Math.ceil(( (launchesQuery?.data?.launches?.length! ?? pageLimit)/pageLimit))
  const spaceImages = [
    'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1457364887197-9150188c107b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1590907047706-ee9c08cf3189?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1517976547714-720226b864c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1516850228053-a807778c4e0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1541185933-c43f4922c6f7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1516849677043-ef67c9557e16?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1457365050282-c53d772ef8b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1457364983758-510f8afa9f5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ]

  return (
    <>
      <main className="bg-slate-900 pt-8 md:pt-16 pb-8 md:pb-16 scroll-smooth">
        <div className="w-[95%] max-w-[1500px] mb-20 md:mb-32 text-white m-auto md:h-[calc(70vh)]">
          <div className="w-full mb-8">
            <h1 className="text-3xl font-bold text-center text-white">SpaceX API</h1>
          </div>
          <div className="w-full h-full relative">
            <div className="w-full h-full rounded grid place-items-center overflow-hidden object-cover">
              <img className="w-full" src="/hero.jpg" />
            </div>
            <div className="w-full taper h-[15rem] absolute bottom-0"></div>
            <div className="absolute -bottom-10 md:bottom-0 w-full md:items-center gap-2 flex flex-col md:flex-row md:justify-between">
              <div>
                <h1 className="text-3xl md:text-7xl mb-2 font-bold" id='all' >Watch the latest launch</h1>
                <span className="flex ml-3 gap-4 items-center">
                  <p>{latestQuery?.data?.launchLatest?.mission_name}</p>
                  <p className="text-orange-600">
                    {new Date(
                      latestQuery?.data?.launchLatest?.launch_date_utc,
                    ).toDateString()}
                  </p>
                </span>
              </div>
              <a className="w-fit" target="_blank" href={latestQuery.data?.launchLatest?.links?.video_link ?? ''}>
                <button className="bg-orange-600 text-slate-900 hover:text-orange-600 hover:bg-slate-900 border-2 border-orange-600 duration-150 rounded-full px-2 md:px-4 py-1 md:py-2">Open on Youtube</button>
              </a>
            </div>
          </div>
        </div>
        <div className="overflow-hidden w-[95%] max-w-[1500px] m-auto text-white ">
          <div className="flex md:items-center flex-col md:flex-row gap-3 md:justify-between mb-6 md:mb-8">
            <h2 className="text-2xl md:text-4xl font-semibold" >All Launches</h2>
            <form action="/search" className="relative">
              <input className="w-full md:w-fit px-2 md:px-4 pl-8 md:pl-10 py-1 md:py-2 text-lg rounded-full border-2 border-orange-600 bg-slate-900 focus:border-orange-600 focus:bg-slate-800 focus:outline-none focus:ring-0" placeholder='Search by mission or rocket name'onChange={(e) => setSearchQuery(e.target.value)} maxLength={50} name="query" id='query' pattern="[a-zA-Z0-9 -]+" />
              <img src="/search.png" className="w-4 absolute top-[12px] md:top-[16px] left-3 md:left-4"  />
            </form>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-8 mb-8">
            {launchesQuery.loading &&
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((_, idx) => {
                return (
                  <div
                    key={idx}
                    className="w-full flex flex-col bg-gray-800 p-2 md:p-4 rounded-md gap-6 shadow-md"
                  >
                    <div className="w-full aspect-video bg-gray-600 rounded-md animate-pulse"></div>
                    <div className="w-full flex flex-col gap-3">
                      <div className="w-2/3 h-5 bg-gray-600 animate-pulse rounded-md"></div>
                      <span className='flex flex-col gap-2 md:flex-row justify-between'>
                        <div className="w-2/4 h-4 bg-gray-600 animate-pulse rounded-md"></div>
                        <div className="w-1/4 h-4 bg-gray-600 animate-pulse rounded-md"></div>  
                      </span>
                    </div>
                  </div>
                );
              })}
            {!launchesQuery.loading && launchesQuery.error != null &&
              <div className="col-span-full p-4 bg-slate-800 text-slate-600 rounded overflow-hidden text-lg grid place-items-center">
                <p>
                  An error occurred while fetching the data
                  - ({launchesQuery?.error?.name})
                </p>
              </div>
            }
            {!launchesQuery.loading &&
              launchesQuery.error == null &&
              launchesQuery.data?.launches &&
              launchesQuery.data.launches!.filter(
                (l) => l?.links?.video_link != null 
                && (l.mission_name?.includes(search) || l.rocket?.rocket_name?.includes(search) ))
                .reverse()
                .slice(search == '' ? (pageLimit * (page - 1)) : 0 , search == '' ?  (pageLimit * page) : -1)
                .map((launch, idx) => { //If it has no meaningful content I don't want it
                return (
                  <a href={`/launch/${launch?.id}`} key={idx} className="w-full group flex flex-col gap-2 md:gap-4 p-2 md:p-4 bg-slate-800 hover:bg-slate-700 duration-150 hover:shadow-lg rounded-md overflow-hidden shadow  text-white">
                    <div className="w-full aspect-video rounded-md overflow-hidden ">
                      <img className="w-full group-hover:scale-110 duration-300" src={spaceImages[Math.floor(Math.random()* (spaceImages.length - 1))]} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-xl md:text-2xl font-bold">{launch?.mission_name}</p>
                      <span className="flex flex-col md:flex-row gap-1 justify-between md:items-center">
                        <p>{launch?.rocket?.rocket_name} Rocket</p>
                        <p className="text-xs text-orange-500">{new Date(launch?.launch_date_utc).toDateString()}</p>
                      </span>
                    </div>
                  </a>
                );
              })}
          </div>
          <div className="w-full grid place-items-center">
            <div className={`${search == '' ? 'flex' : 'hidden' } gap-2 md:gap-4 cursor-pointer rounded-full p-1 bg-slate-800`}>
              <a href="#all" className={`w-8 h-8 rounded-full grid place-items-center ${ page == 1 ? 'bg-slate-700 text-white' : 'bg-slate-800 text-slate-400'} hover:bg-slate-700 hover:text-slate-400 `} onClick={() => setPage(1)}>1</a>
              <a href="#all" className={`w-8 h-8 rounded-full grid place-items-center ${ page == 2 ? 'bg-slate-700 text-white' : 'bg-slate-800 text-slate-400'} hover:bg-slate-700 hover:text-slate-400 `} onClick={() => setPage(2)}>2</a>
              <a href="#all" className={`w-8 h-8 rounded-full grid place-items-center ${ page == 3 ? 'bg-slate-700 text-white' : 'bg-slate-800 text-slate-400'} hover:bg-slate-700 hover:text-slate-400 `} onClick={() => setPage(3)}>3</a>
              <a href="#all" className={`w-8 h-8 rounded-full grid place-items-center ${ page == 4 ? 'bg-slate-700 text-white' : 'bg-slate-800 text-slate-400'} hover:bg-slate-700 hover:text-slate-400 `} onClick={() => setPage(4)}>4</a>
              <a href="#all" className={`w-8 h-8 rounded-full grid place-items-center ${ page == 5 ? 'bg-slate-700 text-white' : 'bg-slate-800 text-slate-400'} hover:bg-slate-700 hover:text-slate-400 `} onClick={() => setPage(5)}>5</a>
              <a href="#all" className={`w-8 h-8 rounded-full grid place-items-center ${ page == 6 ? 'bg-slate-700 text-white' : 'bg-slate-800 text-slate-400'} hover:bg-slate-700 hover:text-slate-400 `} onClick={() => setPage(6)}>6</a>
              <a href="#all" className={`w-8 h-8 rounded-full grid place-items-center ${ page == 7 ? 'bg-slate-700 text-white' : 'bg-slate-800 text-slate-400'} hover:bg-slate-700 hover:text-slate-400 `} onClick={() => setPage(7)}>7</a>
              <a href="#all" className={`w-8 h-8 rounded-full grid place-items-center ${ page == 8 ? 'bg-slate-700 text-white' : 'bg-slate-800 text-slate-400'} hover:bg-slate-700 hover:text-slate-400 `} onClick={() => setPage(8)}>8</a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
