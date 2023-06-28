import Link from "next/link";

export default function About(){
  return(
    <>
      <h1>About Page</h1>
      <Link href={"/"} className="border-2 border-orange-500 px-2 py-1 rounded">Home</Link>
    </>
  )
}