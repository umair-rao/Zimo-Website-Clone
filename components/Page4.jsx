import Image from "next/image";

const Page4 = () => {
  return (
      <div className="page4">
        <div className="page4img">
        <Image
          src="/images/page4img.png"
          alt="Description of the image"
          width={700}
          height={400}
        />
        </div>
        <div className="page4-logo">
        <p>ZIMO GROUP</p>
        </div>
      </div>
  )
}

export default Page4
