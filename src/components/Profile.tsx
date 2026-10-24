import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function Profile({ name, bio, imageUrl }: ProfileProps) {
  return (
    <section className="flex flex-col items-center text-center">
      {/* 사진을 원 안에서 살짝 확대해 아래쪽 글씨가 보이지 않게 함 */}
      <div className="h-32 w-32 overflow-hidden rounded-full border-[3px] border-neutral-900 shadow-[0_18px_40px_-12px_var(--shadow),0_4px_12px_-4px_var(--shadow)] sm:h-[150px] sm:w-[150px]">
        <Image
          src={imageUrl}
          alt={`${name} 프로필 사진`}
          width={150}
          height={150}
          priority
          className="h-full w-full scale-110 object-cover object-[center_42%]"
        />
      </div>
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 max-w-xs whitespace-pre-line text-[15px] leading-relaxed text-muted">
        {bio}
      </p>
    </section>
  );
}
