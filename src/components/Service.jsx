import React from "react";

const services = [
  {
    id: 1,
    title: "Responsive Web Design",
    description: "Ensuring the website looks great on all devices (mobile, tablet, desktop).",
  },
  {
    id: 2,
    title: " Interactive UI Development",
    description: "Creating engaging and user-friendly interfaces with animations and smooth interactions.",
  },
  {
    id: 3,
    title: "Wireframing & Prototyping",
    description: "Designing UI layouts before development using Figma, Adobe XD, or Sketch.",
  },
  {
    id: 4,
    title: " Static & Dynamic Websites",
    description: "Building both simple static sites and dynamic web applications.",
  },
  {
    id: 5,
    title: "React.js Development",
    description: "Building fast and scalable web apps using React.",
  },
  {
    id: 6,
    title: " Code Minification",
    description: "Optimizing CSS, JavaScript, and images to improve performance.",
  },
];
const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;