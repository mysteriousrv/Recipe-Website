import Footer from "./Footer";
const About = () => {
  return (
    <div>
      
    <div className="flex flex-col md:flex-row items-start max-w-6xl mx-auto px-4 py-10 gap-10">
      {/* Image Section */}
      <div className="w-full  mt-7 md:w-1/2">
        <img
          src="./src/assets/img/rv.jpg" // Replace with your actual image
          alt="Lindsay"
          className="rounded-xl object-cover :"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2">
        <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-1">
          Zaika Junction &gt; About Me
        </p>
        <h1 className="text-4xl font-bold text-purple-800 mb-4">About Me</h1>
        <h2 className="text-lg font-semibold mb-2">
          Hi, my name is <span className="italic text-purple-700 font-normal">Ritvij Verma</span>
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          And Zaika Junction is my little corner of the internet!
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
         Hi, my name is Ritvij Verma. I’ve recently completed my B.Tech in 2025 from Dr. APJ Abdul Kalam Technical University. I'm a passionate and self-motivated frontend developer with a strong grasp of modern web technologies including React, JavaScript, Tailwind CSS, SCSS, and more. As a fresher, I’m eager to apply my skills in a challenging and growth-oriented environment, and I’m currently looking for exciting opportunities to kickstart my career in web development.

        </p>
        <p className="text-gray-700 leading-relaxed">
          This project is a part of my learning journey and reflects my growing interest in building clean, responsive, and user-friendly web applications
        </p>
      </div>
    </div>
  );
<Footer/>
    </div>
  )
}

export default About