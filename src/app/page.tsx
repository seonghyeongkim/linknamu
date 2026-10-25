import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";
import { links } from "@/lib/links";

// 보여 주기용 더미 데이터 — 나중에 실제 내용으로 교체
const profile = {
  name: "복실웜뱃",
  bio: "인생을 기록하는 웜뱃\n다양한 공부와 경험을 하고 있어요",
  imageUrl: "/wombatprofile.png",
};

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center gap-12 px-6 py-20 sm:py-28">
      <Profile {...profile} />
      <LinkList links={links} />
    </main>
  );
}
