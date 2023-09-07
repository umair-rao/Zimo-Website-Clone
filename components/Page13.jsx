import Image from "next/image";

const Page13 = () => {
  return (
    <div className="page13">
      <div className="page-icon">
      <Image
          src="/images/page13img1.png"
          alt="Description of the image"
          width={260}
          height={100}
        />
      </div>
      <div className="page13-title">
        <p>Document-signing software technology that lets you sign documents online.</p>
      </div>
      <div className="page13-footer">
        <img className="page13-footer-img" src="/images/page13img2.png" alt="zimo-icon" />
        <img src="/images/page13img3.png" alt="Adam-Sign" />
      </div>
    </div>
  )
}

export default Page13
