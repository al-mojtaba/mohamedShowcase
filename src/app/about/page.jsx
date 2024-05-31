import Image from "next/image"
import one from "./../../../public/Works/1.jpg"
import two from "./../../../public/Works/2.jpg"
import three from "./../../../public/Works/3.jpg"
import four from "./../../../public/Works/4.jpg"
import five from "./../../../public/Works/5.jpg"
import six from "./../../../public/Works/6.jpg"




export default function page() {
  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-4 justify-center items-start ">
      <Image src={one} className="w-[250px]  lg:w-[425px]"/>
      <Image src={two} className="w-[250px]  lg:w-[425px]"/>
      <Image src={three} className="w-[250px]  lg:w-[425px]"/>
      <Image src={four} className="w-[250px]  lg:w-[425px]"/>
      <Image src={five} className="w-[250px]  lg:w-[425px]"/>
      <Image src={six} className="w-[250px]  lg:w-[425px]"/>
      </div>
    </div>
  )
}
