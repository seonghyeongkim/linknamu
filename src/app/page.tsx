import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";

// 보여 주기용 더미 데이터 — 나중에 실제 내용으로 교체
const profile = {
  name: "김성형",
  bio: "작은 발걸음이라도 나아가는 사람",
  imageUrl: "/profile-placeholder.svg",
};

const links = [
  { title: "GitHub", url: "https://github.com" },
  { title: "LinkedIn", url: "https://www.linkedin.com" },
  { title: "Blog", url: "https://example.com" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center gap-10 px-4 py-16">
      <Profile {...profile} />
      <ul className="flex w-full flex-col gap-4">
        {links.map((link) => (
          <li key={link.url}>
            <LinkCard {...link} />
          </li>
        ))}
      </ul>
    </main>
  );
}
