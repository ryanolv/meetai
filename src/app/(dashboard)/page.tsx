import { auth } from "@/lib/auth";

import { HomeView } from "@/modules/home/ui/views/home-view";
import { caller } from "@/trpc/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const { greeting } = await caller.hello({ text: "Ryan" });

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }

  return <p>{greeting}</p>;
  return <HomeView />;
}
