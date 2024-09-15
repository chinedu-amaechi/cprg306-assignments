import Link from "next/link";

export default function StudentInfo() {
  return (
    <main>
      <h1>Student Information</h1>
      <p>Student Name: Chinedu Amaechi</p>
      <Link href="https://github.com/chinedu-amaechi?tab=repositories">My GitHub repository</Link>
    </main>
  );
}