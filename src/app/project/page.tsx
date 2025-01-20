import Project from "../components/Project";

export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center">
      <div className="box-border flex items-center justify-center bg-black dark:bg-slate-50 w-56 h-16 rounded-lg mt-10">
        <p className="text-white dark:text-black text-3xl">PROJECT</p>
      </div>
      <Project />
    </div>
  );
}
