type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-card-border bg-card px-6 py-4 text-center text-[15px] font-medium shadow-[0_8px_24px_-12px_var(--shadow)] backdrop-blur-xl transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-card-hover hover:shadow-[0_14px_30px_-14px_var(--shadow)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-muted active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {title}
    </a>
  );
}
