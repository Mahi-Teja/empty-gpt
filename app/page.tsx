import { ModeToggle } from "@/components/ui/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  await auth.protect();
  return (
    <main>
      Welcome to EmptyGPT
      <ModeToggle />
      <UserButton />
    </main>
  );
}
