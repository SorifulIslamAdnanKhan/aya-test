import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PiQuotesLight } from "react-icons/pi";

const Testimonial = () => {

  const testimonials = [
    {
      id: 1,
      content: "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
      author: "Holden Caulfield",
      role: "DEVELOPER",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      content: "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
      author: "Alper Kamu",
      role: "DESIGNER",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      content: "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
      author: "Holden Caulfield",
      role: "DEVELOPER",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 4,
      content: "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
      author: "Alper Kamu",
      role: "DESIGNER",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 5,
      content: "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
      author: "Holden Caulfield",
      role: "DEVELOPER",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 6,
      content: "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
      author: "Alper Kamu",
      role: "DESIGNER",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 7,
      content: "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
      author: "Holden Caulfield",
      role: "DEVELOPER",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 8,
      content: "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
      author: "Alper Kamu",
      role: "DESIGNER",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-12">
      <div className="text-center max-w-2xl mx-auto p-2">
        <h2 className="font-bold mb-5">Testimonial</h2>
        <p>Fusce vel efficitur libero. Aenean maximus elit eu viverra laoreet. Donec consequat eu neque in dignissim. Duis ullamcorper facilisis augue nec ornare. Nam et purus a erat pulvinar porttitor.</p>
      </div>
      <div className="py-6 px-5 lg:mx-32">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-5 py-6">
              <div className="h-full p-2 md:p-5 border-2 border-blue-600 border-opacity-5 rounded-md">
                <PiQuotesLight className="block w-5 h-5 text-gray-400 mb-4"></PiQuotesLight>
                <p className="leading-relaxed mb-6">{testimonial.content}</p>
                <a className="inline-flex items-center">
                  <img alt="testimonial" src={testimonial.image} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">{testimonial.author}</span>
                    <span className="text-gray-500 text-sm">{testimonial.role}</span>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>


    </section>
  );
};

export default Testimonial;