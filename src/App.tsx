import { useQuery } from "@apollo/client";
import "./App.css";
import { GET_LATEST_LAUNCH, GET_LAUNCHES } from "./query";

function App() {
  const latestQuery = useQuery(GET_LATEST_LAUNCH);
  const launchesQuery = useQuery(GET_LAUNCHES);

  return (
    <>
      <main>
        <div className="w-screen h-screen">
          {!latestQuery.loading && latestQuery.error == null && (
            <div className="w-full">
              <div className="w-full aspect-square">
                <iframe
                  width={"100%"}
                  height={"100%"}
                  src={latestQuery.data.launchNext.links.video_link ?? ""}
                />
              </div>
              <div>
                <h1 className="text-3xl">Watch the latest launch</h1>
                <span className="flex gap-4 items-center">
                  <p>{latestQuery.data.launchNext.mission_name}</p>
                  <p>
                    {new Date(
                      latestQuery.data.launchNext.launch_date_utc,
                    ).toDateString()}
                  </p>
                </span>
              </div>
            </div>
          )}
        </div>
        <div>
          <h2>All Launches</h2>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {launchesQuery.loading &&
              [0, 1, 2, 3, 4, 5, 6, 7].map((_, idx) => {
                return (
                  <div
                    key={idx}
                    className="w-full bg-gray-700 p-4 rounded-md shadow-md"
                  >
                    <div className="w-full aspect-square bg-gray-500 rounded-md animate-pulse"></div>
                    <div className="w-full flex flex-col gap-2">
                      <div className="w-full h-8 bg-gray-500 animate-pulse rounded-md"></div>
                      <div className="w-2/3 h-6 bg-gray-500 animate-pulse rounded-md"></div>
                    </div>
                  </div>
                );
              })}
            {!launchesQuery.loading && launchesQuery.error != null && (
              <div className="col-span-full p-4 bg-gray-500 text-lg grid place-items-center">
                <p>
                  An error occurred while fetching the data.
                  <br />({launchesQuery.error.name})
                </p>
              </div>
            )}
            {!launchesQuery.loading &&
              launchesQuery.error == null &&
              launchesQuery.data.launches.map((launch, idx) => {
                return (
                  <div key={idx}>
                    <div className="w-full aspect-square rounded-md shadow-md">
                      <iframe
                        width={"100%"}
                        height={"100%"}
                        src={launch.links.video_link.replace(
                          "watch?v=",
                          "embed/",
                        )}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p>{new Date(launch.launch_date_utc).toDateString()}</p>
                      <p>{launch.mission_name}</p>
                      <p>{launch.rocket.rocket_name}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
