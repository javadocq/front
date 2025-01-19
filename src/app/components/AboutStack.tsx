import Image from "next/image";

interface ThemeProp {
  theme: string;
}

export default function AboutStack({ theme }: ThemeProp) {
  return (
    <div className="mt-16 box-border border-2 w-10/12 h-56 rounded-lg flex max-[565px]:flex-col max-[565px]:h-auto max-[565px]:py-2 max-[565px]:gap-2 items-center min-[565px]:pl-12 bg-zinc-100 dark:bg-gray-400 overflow-hidden">
      {theme === "light" ? (
        <Image src="/about/icon_stack.svg" alt="스택" width={50} height={50} />
      ) : (
        <Image
          src="/about/icon_stack_dark.svg"
          alt="스택"
          width={50}
          height={50}
        />
      )}
      <div className="text-base ml-4 flex flex-col gap-4 w-full">
        <p className="font-bold flex flex-wrap items-center gap-2">
          Front :{" "}
          <span className="box-border border-2 rounded-lg p-1 bg-orange-400">
            React
          </span>
          <span className="box-border border-2 rounded-lg p-1 bg-green-400">
            TypeScript
          </span>
          <span className="box-border border-2 rounded-lg p-1 bg-sky-500">
            Next.js
          </span>
        </p>
        <p className="font-bold flex flex-wrap gap-2 items-center">
          Back :{" "}
          <span className="box-border border-2 rounded-lg p-1 bg-lime-400">
            Django
          </span>
          <span className="box-border border-2 rounded-lg p-1 bg-yellow-300">
            Spring Boot
          </span>
        </p>
        <p className="flex flex-wrap gap-2 items-center font-bold">
          DevOps/Deployment :{" "}
          <span className="box-border border-2 rounded-lg p-1 bg-blue-950 text-white">
            AWS(EC2, S3, Route53)
          </span>
          <span className="box-border border-2 rounded-lg p-1 bg-fuchsia-400">
            Netlify
          </span>
          <span className="box-border border-2 rounded-lg p-1 bg-pink-700">
            Cloudtype
          </span>
          <span className="box-border border-2 rounded-lg p-1 bg-neutral-400">
            Vercel
          </span>
        </p>
      </div>
    </div>
  );
}
