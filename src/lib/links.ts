// 메인 화면에 보여 줄 링크 목록
// id는 클릭 수를 저장할 때 쓰는 고유 이름 — 한 번 정하면 바꾸지 않기 (바꾸면 클릭 수가 0부터 다시 시작)
export type Link = {
  id: string;
  title: string;
  url: string;
};

export const links: Link[] = [
  { id: "github", title: "🐙 깃허브", url: "https://github.com/seonghyeongkim" },
  {
    id: "linkedin",
    title: "💼 LinkedIn",
    url: "https://www.linkedin.com/in/%EC%84%B1%ED%98%95-%EA%B9%80-5bb9a7445/?isSelfProfile=true",
  },
  { id: "email", title: "📨 이메일", url: "mailto:nicesh9862@gmail.com" },
];
