import Project from "../../components/Project";

export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center pt-20">
      <div className="box-border flex items-center justify-center bg-black dark:bg-darkBg w-56 h-16 rounded-lg mt-10">
        <p className="text-white dark:text-white text-3xl font-bold">PROJECT</p>
      </div>
      <Project />
    </div>
  );
}
