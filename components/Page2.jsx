import Image from "next/image";

const Page2 = () => {
  return (
    <div className="page2">
              <div className="page-image">
        <Image
          src="/images/page2img.png"
          alt="Description of the image"
          width={200}
          height={50}
        />
        </div>
        <div className="page-text">
        <p>We are the global platform.</p>
        <p>Services in over one hundred and twenty countries.</p>
        </div>
    </div>
  )
}

export default Page2
