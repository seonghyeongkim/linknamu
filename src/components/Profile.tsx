import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function Profile({ name, bio, imageUrl }: ProfileProps) {
  return (
    <section className="flex flex-col items-center gap-3 text-center">
      <Image
        src={imageUrl}
        alt={`${name} 프로필 사진`}
        width={96}
        height={96}
        priority
        className="h-24 w-24 rounded-full border border-zinc-200 object-cover dark:border-zinc-800"
      />
      <h1 className="mt-2 text-xl font-semibold">{name}</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">{bio}</p>
    </section>
  );
}
