const Footer = () => {
  return (
    <div>
      <div className="">
        <div className="max-w-7xl py-10 px-4 sm:px-6  sm:flex justify-between mx-auto">
          <div className="p-5 sm:w-2/12 border-r">
            <div className="text-sm uppercase text-indigo-600 font-bold">
              Menu
            </div>
            <ul>
              <li className="my-2">
                <a className="hover:text-indigo-600" href="#">
                  Home
                </a>
              </li>
              <li className="my-2">
                <a className="hover:text-indigo-600" href="#">
                  Services
                </a>
              </li>
              <li className="my-2">
                <a className="hover:text-indigo-600" href="#">
                  Products
                </a>
              </li>
              <li className="my-2">
                <a className="hover:text-indigo-600" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="p-5 sm:w-7/12 border-r text-center">
            <h3 className="font-bold text-2xl text-indigo-600 mb-4">
            Woven Earth
            </h3>
            <p className="text-gray-500 text-sm mb-10">
            Discover the beauty of sustainable craftsmanship at Woven Earth Art & Craft. Our website showcases an array of meticulously woven creations, blending natural materials with artistic ingenuity to bring warmth and authenticity into your home. Explore our collection and embrace the essence of eco-friendly elegance today.
            </p>
          </div>
          <div className="p-5 sm:w-3/12">
            <div className="text-lg uppercase text-indigo-600 font-bold">
              Contact Us
            </div>
            <ul>
              <li className="my-2">
                <a className="hover:text-indigo-600" href="#">
                  Woven Tower, Floor 4 San Francisco, CA
                </a>
              </li>
              <li className="my-2">
                <a className="hover:text-indigo-600" href="#">
                  Woven Earth@company.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex py-5 m-auto  text-sm flex-col items-center border-t max-w-screen-xl ">
          <div className="md:flex-auto  mt-2 flex-row flex space-x-5">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
        </a>
        <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
        </a>
          </div>
          <div className="my-5">Woven Earth © Copyright 2024. All Rights Reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
