export default function Comment() {
  return (
    <div className="box-border border-2 flex flex-col gap-2 w-8/12 h-32 bg-zinc-100 dark:bg-gray-400 pt-2 min-w-[300px]">
      <textarea
        placeholder="내용을 입력해주세요."
        className=" bg-inherit h-32 resize-none pl-2"
      />
      <div className="flex items-center box-border border-t-2 justify-between h-16 ">
        <div className="flex items-center flex-1">
          <p className="whitespace-nowrap pl-2">이름 : </p>
          <input className="bg-inherit ml-2 w-24" />
        </div>
        <button className="bg-black text-white dark:text-customBlue text-sm flex-shrink-0 h-9 w-2/12">
          등록
        </button>
      </div>
    </div>
  );
}
