import { IsUser } from "./_components/post";

export default async function Home() {
  return (
    <div>
      <button className="rounded bg-black px-2 py-1 text-sm text-white hover:bg-opacity-90">
        <IsUser />
      </button>
    </div>
  );
}
