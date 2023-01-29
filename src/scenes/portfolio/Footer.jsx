import SocialMediaIcons from "../../components/SocialMediaIcons"


const Footer = () => {
  return (
    <footer className="h-48 bg-red pt-10 ">
      <div className="w-10/12 mx-auto ">
        <div className="md:flex justify-center md:justify-between text-center items-center ">
          <p className="font-playfair font-semibold text-2xl text-deep-blue">
            WILLY MRF
          </p><SocialMediaIcons />
          <p className="font-playfair text-2xl text-deep-blue">
            2023
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer