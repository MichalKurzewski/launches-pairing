import useFetch from "./hooks/useFetch";
import StaticHeader from "./components/StaticHeader";
import { AxiosResponse } from "axios";
import { spaceXApiConfig } from "./configs/spaceXApiConfig";
import Error from "./components/Error";
import ListOfCards from "./components/ListOfCards";
import Loading from "./components/Loading";
import ParticlesBackground from "./components/background/ParticlesBackground";
import { useEffect } from "react";
export interface ILaunchDataMap {
  name: string;
  date_utc: string;
  core: string;
  payloads: string[];
  image: string;
  failureReasons: string[];
}

export interface ILaunchDataMapList {
  launchData: ILaunchDataMap[] | undefined;
}

interface ILaunchItemFromAPI {
  name: string;
  date_utc: string;
  cores: [{ core: string }];
  payloads: string[];
  links: { patch: { small: string } };
  failures: [{ reason: string }];
}

const App: React.FC = () => {

  return (
    <div id="top-container" className="text-slate-700 dark:text-slate-100">
      <ParticlesBackground />
      <StaticHeader />
      <div id="central-container" className="container mx-auto px-4">
        <DisplayContent />
      </div>
    </div>
  );
};
export default App;
export interface ISpaceXResponse extends AxiosResponse {
  docs: ILaunchItemFromAPI[];
}
const DisplayContent: React.FC = () => {
  const { data, status, error } = useFetch<ISpaceXResponse>(spaceXApiConfig);
  if (status === "error" && error !== null) {
    return <Error error={error} />;
  }
  if (status === "loading") {
    return <Loading />;
  }
  const launchData = data?.docs.map((item: ILaunchItemFromAPI) => ({
    name: item.name,
    date_utc: item.date_utc,
    core: item.cores[0].core,
    payloads: item.payloads,
    image: item.links.patch.small,
    failureReasons: item.failures.map((failure) => failure.reason),
  }));
  return <ListOfCards launchData={launchData} />;
};
