import AboutMe from "./components/AboutMe";
import Archiving from "./components/Archiving";
import Hook from "./components/Hook";
import MainProjectView from "./components/MainProjectView";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hook />
      <AboutMe />
      <MainProjectView />
      <Archiving />
    </div>
  );
}
