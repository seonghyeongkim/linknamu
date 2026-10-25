"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { Link } from "@/lib/links";

type LinkListProps = {
  links: Link[];
};

export default function LinkList({ links }: LinkListProps) {
  // 서버에서 받은 클릭 수 (받기 전에는 비어 있어 0회로 표시)
  const [serverCounts, setServerCounts] = useState<Record<string, number>>({});
  // 이 화면에서 누른 횟수 — 서버 값과 따로 두어 응답 순서와 상관없이 더해 보여 줌
  const [localClicks, setLocalClicks] = useState<Record<string, number>>({});

  // 페이지가 열릴 때 모든 링크의 클릭 수를 한 번에 가져옴
  useEffect(() => {
    let ignore = false;
    fetch("/api/clicks", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: Record<string, number> | null) => {
        if (!ignore && data) setServerCounts(data);
      })
      .catch(() => {});
    return () => {
      ignore = true;
    };
  }, []);

  function handleClick(id: string) {
    // 화면에는 바로 +1 반영
    setLocalClicks((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

    // 새 탭으로 넘어가도 요청이 끊기지 않도록 keepalive 사용
    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
      keepalive: true,
    }).catch(() => {});
  }

  return (
    <ul className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            title={link.title}
            url={link.url}
            count={(serverCounts[link.id] ?? 0) + (localClicks[link.id] ?? 0)}
            onClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
