interface FilterProps {
  filter: string;
  setFilter: (newFilter: string) => void;
}

export default function Filter({ filter, setFilter }: FilterProps) {
  const category: string[] = ["전체", "React", "TypeScript", "Next"];

  return (
    <div className="flex gap-4">
      {category.map((name, index) => {
        return (
          <button
            key={index}
            onClick={() => setFilter(name)}
            className={`box-border flex items-center justify-center ${
              filter === name
                ? "bg-black text-white dark:bg-slate-50 dark:text-black"
                : "bg-gray-300 text-stone-400"
            } w-24 h-10 rounded-3xl text-base font-bold transition`}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
}
