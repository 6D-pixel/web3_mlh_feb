import Image from "next/image";
import TicTacToe from "@/components/TicTacToe";
export default function Home() {
  return (
    <main className="bg-violet-300 h-screen">
      <h1 className="text-4xl text-center text-blue-500">Flow Tic-Tac-Toe</h1>
      <TicTacToe />
    </main>
  );
}
