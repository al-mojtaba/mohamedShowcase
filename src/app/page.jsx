import Image from "next/image"
import profilePic from "./../../public/Icon.jpg"

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 lg:flex-row p-8">
      
      <Image
      src={profilePic}

      alt="Picture of Imam ali"

      className="w-[350px] md:w-[450px] lg:w-[500px]"
      />

      <div className="w-[300px] md:w-[450px] lg:w-[500px] text-center">
        <p className="text-5xl  mb-8">I&apos;m <span className=" text-amber-500">Mohamed</span></p>
        
        <p className="text-2xl">and I am thrilled to have you visit my online space. This website is dedicated to sharing my journey, passions, and the various projects I am involved in.</p>
      </div>

    </div>
  )
}
