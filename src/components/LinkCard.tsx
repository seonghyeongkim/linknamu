type LinkCardProps = {
  title: string;
  url: string;
  count: number;
  onClick: () => void;
};

export default function LinkCard({ title, url, count, onClick }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="relative block w-full rounded-2xl border border-card-border bg-card px-16 py-4 text-center text-[15px] font-medium shadow-[0_8px_24px_-12px_var(--shadow)] backdrop-blur-xl transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-card-hover hover:shadow-[0_14px_30px_-14px_var(--shadow)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-muted active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {title}
      {/* 제목은 가운데 그대로 두고, 클릭 수만 오른쪽 끝에 작게 표시 */}
      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-normal tabular-nums text-muted">
        {count.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
