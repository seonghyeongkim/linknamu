import { connection } from "next/server";
import { links } from "@/lib/links";
import { getClicksCollection } from "@/lib/mongodb";

const linkIds = new Set(links.map((link) => link.id));

// 모든 링크의 클릭 수를 한 번에 돌려준다: { github: 42, linkedin: 7, ... }
export async function GET() {
  // 빌드 때 미리 만들어 두지 않고, 요청이 올 때마다 DB에서 읽도록 함
  await connection();

  const clicks = await getClicksCollection();
  const docs = await clicks.find({ _id: { $in: [...linkIds] } }).toArray();

  const counts: Record<string, number> = {};
  for (const id of linkIds) counts[id] = 0;
  for (const doc of docs) counts[doc._id] = doc.count;

  return Response.json(counts, {
    headers: { "Cache-Control": "no-store" },
  });
}

// 링크 하나의 클릭 수를 1 올린다. 요청 본문: { id: "github" }
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const id = body?.id;

  // 목록에 있는 링크만 집계 (아무 값이나 DB에 쌓이지 않도록)
  if (typeof id !== "string" || !linkIds.has(id)) {
    return Response.json({ error: "알 수 없는 링크입니다." }, { status: 400 });
  }

  const clicks = await getClicksCollection();
  const doc = await clicks.findOneAndUpdate(
    { _id: id },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" },
  );

  return Response.json({ id, count: doc?.count ?? 1 });
}
