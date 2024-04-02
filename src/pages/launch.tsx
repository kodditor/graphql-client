import { useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
import { GET_LAUNCH } from "../query"


export default function LaunchPage (){

    const { launchId } = useParams()

    const { data } = useQuery(GET_LAUNCH, {
        variables: {
            launchId: launchId!
        }
    })

    return (
        <>
          <main className="bg-slate-900 pt-8 md:pt-16 pb-8 md:pb-16">
            <div className="w-[95%] max-w-[1500px] mb-12 md:mb-48 text-white m-auto h-[calc(60vh)] md:h-[calc(70vh)]">
              <div className="w-full mb-8">
                <h1 className="text-3xl font-bold text-center text-white">SpaceX API</h1>
              </div>
              <div className="w-full h-[60%] md:h-full  relative group">
                <div className="w-full h-full rounded grid place-items-center object-cover">
                    { data?.launch?.links?.video_link == null ?
                        <img className="w-full" src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        :
                        <iframe src={data?.launch?.links?.video_link?.replace('watch?v=', 'embed/').replace('.be/', 'be.com/embed/') ?? ''} width={'100%'} height={'100%'} />
                    }
                </div>
                <div className="w-full taper h-[15rem] group-hover:h-[4rem] md:group-hover:h-[2rem] duration-150 absolute bottom-0"></div>
                <div className="absolute -bottom-10 md:bottom-0 w-full md:items-center group-hover:-bottom-[45%] md:group-hover:-bottom-[15%] duration-300 gap-2 flex flex-col md:flex-row md:justify-between">
                  <div>
                    <h1 className="text-2xl md:text-7xl md:mb-2 font-bold">{data?.launch?.mission_name ?? 'Unknown'}</h1>
                    <span className="flex md:ml-3 gap-2 md:gap-4 items-center">
                      <p>{data?.launch?.links?.video_link ? 'Watch the livestream' : 'Livestream Unavailable'}</p>
                      <p className="text-orange-600">
                        {new Date(
                          data?.launch?.launch_date_utc,
                        ).toDateString()}
                      </p>
                    </span>
                  </div>
                  <a target="_blank" href={data?.launch?.links?.video_link ?? '/'}>
                    <button className="bg-orange-600 text-slate-900 hover:text-orange-600 hover:bg-slate-900 border-2 border-orange-600 duration-150 rounded-full px-4 py-2">{data?.launch?.links?.video_link ? 'Watch on Youtube' : 'Go back Home'}</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="overflow-hidden w-[95%] max-w-[1500px] m-auto text-white">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-4 border border-orange-600 rounded-xl p-8 bg-slate-800">
                        <h2 className="text-3xl font-bold text-orange-600 mb-4">Overview</h2>
                        <div className="flex flex-col gap-2 w-full">
                            <span className="flex justify-between gap-4">
                                <p className="text-lg text-slate-400">Mission Name:</p>
                                <p className="font-semibold text-right">{data?.launch?.mission_name ?? 'Unknown'}</p>
                            </span>
                            <span className="flex justify-between gap-4">
                                <p className="text-lg text-slate-400">Mission Status:</p>
                                <p className="font-semibold text-right">{data?.launch?.launch_success==null ?  'Unknown' : data?.launch?.launch_success ?  'Successful' : 'Unsuccessful'}</p>
                            </span>
                            <span className="flex justify-between gap-4">
                                <p className="text-lg text-slate-400">Launch Site:</p>
                                <p className="font-semibold text-right">{data?.launch?.launch_site?.site_name ?? 'Unknown'}</p>
                            </span>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-8 border border-orange-600 rounded-xl p-8 bg-slate-800">
                        <h2 className="text-3xl font-bold text-orange-600 mb-4">Media Sources</h2>
                        <div className="flex flex-col gap-2 w-full">
                            <span className="flex justify-between gap-4">
                                <p className="text-lg text-slate-400">Youtube Link</p>
                                <a href={data?.launch?.links?.video_link ?? ''} className="font-semibold text-right">{data?.launch?.links?.video_link ?? 'Unavailable'}</a>
                            </span>
                            <span className="flex justify-between gap-4">
                                <p className="text-lg text-slate-400">Article Link</p>
                                <a href={data?.launch?.links?.article_link ?? ''} className="font-semibold text-right">{data?.launch?.links?.article_link ?? 'Unavailable'}</a>
                            </span>
                            <span className="flex justify-between gap-4">
                                <p className="text-lg text-slate-400">Wikipedia Link</p>
                                <a href={data?.launch?.links?.wikipedia ?? ''} className="font-semibold text-right">{data?.launch?.links?.wikipedia ?? 'Unavailable'}</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid place-items-center w-full mt-8">
                <a href="/">
                    <button className="flex text-slate-900 bg-orange-600  border-2 border-orange-600 items-center group duration-150  rounded-full pl-4 pr-6 py-2">
                        <img src="/left-arrow.png" className="h-4 ml-2 mr-1 group-hover:mr-2 group-hover:ml-1 duration-150" />
                            Back to Home
                    </button>
                </a>
            </div>
            </main>
        </>
    )
}