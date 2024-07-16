import Image from "next/image";
import { ThreeDCardDemo } from "@/components/three-d-card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <ThreeDCardDemo />
    </main>
  );
}
