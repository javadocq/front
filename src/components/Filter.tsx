import { motion } from "framer-motion";

interface FilterProps {
  filter: string;
  setFilter: (newFilter: string) => void;
}

export default function Filter({ filter, setFilter }: FilterProps) {
  const category: string[] = ["2025", "2024", "2023"];

  return (
    <div className="inline-flex items-center">
      <div
        role="tablist"
        aria-label="연도 필터"
        className="relative inline-flex rounded-3xl bg-gray-200 dark:bg-zinc-800 p-1"
      >
        {category.map((name) => {
          const isActive = filter === name;
          return (
            <button
              role="tab"
              aria-selected={isActive}
              type="button"
              key={name}
              onClick={() => setFilter(name)}
              className="relative overflow-hidden h-10 w-24 px-4 rounded-2xl font-bold text-base
                         flex items-center justify-center select-none"
            >
              {isActive && (
                <motion.div
                  layoutId="year-filter-pill"
                  className="absolute inset-0 rounded-2xl bg-black dark:bg-darkBg"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.45 }}
                />
              )}

              <span
                className={`relative z-[1] ${
                  isActive ? "text-white" : "text-stone-700 dark:text-stone-300"
                }`}
              >
                {name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
