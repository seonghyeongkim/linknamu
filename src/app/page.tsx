import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";

// 보여 주기용 더미 데이터 — 나중에 실제 내용으로 교체
const profile = {
  name: "복실웜뱃",
  bio: "인생을 기록하는 웜뱃\n다양한 공부와 경험을 하고 있어요",
  imageUrl: "/wombatprofile.png",
};

const links = [
  { title: "🐙 깃허브", url: "https://github.com/seonghyeongkim" },
  {
    title: "💼 LinkedIn",
    url: "https://www.linkedin.com/in/%EC%84%B1%ED%98%95-%EA%B9%80-5bb9a7445/?isSelfProfile=true",
  },
  { title: "📨 이메일", url: "mailto:nicesh9862@gmail.com" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center gap-12 px-6 py-20 sm:py-28">
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
