import Image from "next/image"
import profilePic from "./../../public/Icon.jpg"

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 lg:flex-row p-16">

      <Image
      src={profilePic}
      alt="Picture of Imam ali"
      className="w-[400px] md:w-[450px] lg:w-[500px]"
      placeholder="blur"
      />

      <div className="w-[400px] md:w-[450px] lg:w-[500px] text-center">
        <p className="text-5xl  mb-8">I'm <span className=" text-amber-500">Mohamed</span></p>
        
        <p className="text-2xl">and I am thrilled to have you visit my online space. This website is dedicated to sharing my journey, passions, and the various projects I am involved in.</p>
      </div>

    </div>
  )
}
