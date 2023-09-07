import Image from "next/image";

const Page3 = () => {
  return (
    <div className="page3">
    <div className="page3-title">
      <p>REVOLUTIONARY</p>
    </div>
    <div className="zimo-icons">
    <Image
      src="/images/page3img.png"
      alt="Description of the image"
      width={700}
      height={60}
    />
    </div>
    <div className="page3-footer">
      <p>The only platform of it's kind in the world.</p>
    </div>
   </div>
  )
}

export default Page3
