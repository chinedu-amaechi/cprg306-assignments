import Link from "next/link";
import StudentInfo from "./student-info";

export default function Page() {
  return (
    <main>
        <h1>Shopping List | <Link href="./"> Home Page</Link></h1>
        <StudentInfo />
    </main>
  );
}