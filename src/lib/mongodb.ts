import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error(".env.local에 MONGODB_URI가 없습니다.");
}

// 개발 중에는 코드가 바뀔 때마다 모듈이 다시 실행되므로,
// 연결을 전역에 보관해 같은 연결을 재사용한다.
const globalForMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

const clientPromise =
  globalForMongo._mongoClientPromise ?? new MongoClient(uri).connect();

if (process.env.NODE_ENV !== "production") {
  globalForMongo._mongoClientPromise = clientPromise;
}

type ClickDoc = { _id: string; count: number };

// 링크별 클릭 수를 담는 컬렉션: { _id: 링크 id, count: 클릭 수 }
export async function getClicksCollection() {
  const client = await clientPromise;
  return client.db("linknamu").collection<ClickDoc>("clicks");
}
