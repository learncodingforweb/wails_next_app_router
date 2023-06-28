import Link from "next/link";

export default function Home(){
  return(
    <>
      <h1>Home Page</h1>
      <Link href={"/about"} className="border-2 border-orange-500 px-2 py-1 rounded">About</Link>
    </>
  )
}