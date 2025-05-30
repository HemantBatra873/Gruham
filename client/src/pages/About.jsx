import { Link } from "react-router-dom"


export default function About() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-semibold mb-4 text-gray-600 font-head">
        About
        <span className="text-black font-head ml-2">Gruham</span>
      </h1>

      <p className="mb-4 text-slate-700">
        Welcome to Gruham, your premier destination for real estate in India.
        Developed by
          <Link to={"https://www.linkedin.com/in/hemantbatra43/"} className="text-black  font-bold"> Hemant Batra</Link>
         , Gruham is a state-of-the-art real estate
        platform built on the robust MERN stack, designed to make home listing
        and searching seamless and efficient.
      </p>
      <h1 className="text-2xl font-semibold mb-4 text-gray-600 font-head">
          Our
          <span className="text-black font-head ml-2">Vision</span>
        </h1>
      <p className="mb-4 text-slate-700">
        At Gruham, our vision is to revolutionize the way real estate
        transactions are conducted in India. We aim to provide a user-friendly
        platform that empowers homeowners and buyers with the tools they need to
        navigate the real estate market with ease and confidence.
      </p>
      <h1 className="text-2xl font-semibold mb-4 text-gray-600 font-head">
        Key
        <span className="text-black font-head ml-2">Features</span>
      </h1>
      <p className="mb-4 text-slate-700">
        Gruham allows homeowners to effortlessly create and upload their own
        home listings. With an intuitive interface, users can add detailed
        descriptions, upload high-quality images, and provide essential
        information about their properties. This ensures that potential buyers
        get a comprehensive view of the homes listed on our platform.
      </p>
      <p className="mb-4 text-slate-700">
        We prioritize the security and authenticity of our users. Gruham ensures
        that only authenticated buyers can contact landlords, providing a safe
        and trustworthy environment for all parties involved. This feature helps
        in building genuine connections and facilitates smooth communication
        between buyers and sellers.
      </p>
      <p className="mb-4 text-slate-700">
        Our advanced search and filtering options allow users to find their
        dream home quickly and efficiently. Whether you are looking for a villa,
        apartment, or a plot of land, Gruham’s powerful search tools make it
        easy to narrow down your options based on location, price range,
        property type, and more.
      </p>
      <p className="mb-4 text-slate-700">
        Gruham is designed to be fully responsive, providing an optimal viewing
        experience across all devices. Whether you are browsing on a desktop,
        tablet, or smartphone, our platform ensures a seamless and visually
        appealing experience.
      </p>
      <p className="mb-4 text-slate-700">
        Each listing on Gruham includes comprehensive property details,
        including neighborhood insights, nearby amenities, and high-resolution
        images. This helps buyers make informed decisions and provides sellers
        with a platform to showcase their properties effectively.
      </p>
      <p className="mb-4 text-slate-700">
        Gruham boasts a clean, modern, and user-friendly interface that is easy
        to navigate. Our platform is designed to provide a hassle-free
        experience for both tech-savvy users and those who are less familiar
        with online real estate services.
      </p>
      <h1 className="text-2xl font-semibold mb-4 text-gray-600 font-head">
        Our
        <span className="text-black font-head ml-2">Commitment</span>
      </h1>
      <p className="mb-4 text-slate-700">
        Gruham is committed to providing exceptional service and support to our
        users. We continuously strive to improve our platform by incorporating
        user feedback and staying updated with the latest technological
        advancements. Our goal is to make the process of buying, selling, and
        renting properties as smooth and enjoyable as possible.
      </p>
      <h1 className="text-2xl font-semibold mb-4 text-gray-600 font-head">
        Contact
        <span className="text-black font-head ml-2">us</span>
      </h1>
      <p className="mb-4 text-slate-700">
        We value your feedback and are here to assist you with any queries or
        concerns. Feel free to reach out to us. Thank you for choosing Gruham.
        We look forward to helping you find your perfect home or the ideal buyer
        for your property.
      </p>
       
      <Link to={`mailto:"hemantbatra567@gmail.com"`}>
            <button className="bg-gray-900 text-white text-center font-semibold rounded-lg  hover:bg-white hover:text-black transition-all  ease-in border-2 border-transparent hover:border-black p-3">Contact us</button>        
      </Link>
    </div>
  );
}
