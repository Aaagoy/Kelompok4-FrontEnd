import { redirect } from "next/dist/client/components/redirect";

export default function Home() {
  return (
    redirect("/homepage")
  );
}
