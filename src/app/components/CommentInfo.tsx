export default function CommentInfo() {
  return (
    <div className="flex flex-col items-center mt-16">
      <p className="text-3xl max-[540px]:text-2xl max-[450px]:text-lg text-center">
        하고싶은 말을 아래 댓글로 적어주세요.
      </p>
      <p className="mt-4 text-center">(피드백, 소통, 공감 다 환영입니다!!)</p>
      <svg
        role="graphics-symbol"
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 24 24"
        className="animate-bounce mt-8"
      >
        <path fill="currentColor" d="M9 4h6v8h4.84L12 19.84L4.16 12H9z" />
      </svg>
    </div>
  );
}
