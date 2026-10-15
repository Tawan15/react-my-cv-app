import NavBar from "./../components/NavBar";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import html from "./../assets/html.png"
import css from "./../assets/css.png"
import node from "./../assets/node.png"
import react from "./../assets/react.png"
import java from "./../assets/java.png"
import Firebase from "./../assets/Firebase.png"
import figma from "./../assets/figma.png"
import spring from "./../assets/spring.png"

export default function Home() {
  return (
    <>
      {/* Head NavBar */}
      <NavBar pname="H" colorLinkNavBar="#FFF714" />
      {/* Hero Section */}
      <div className="flex items-center justify-between pt-30 pl-80 pr-80">
        {/* Detail Left */}
        <div className="flex flex-col gap-2">
          <span className="text-white text-6xl font-bold">Full Stack Web</span>
          <span className="text-white text-6xl font-bold">Developer</span>
          <br />
          <span className="text-white text-2xl">
            Hi, I'm Tawan SAU. A passwionate Full Stack
          </span>
          <span className="text-white text-2xl">
            Web Developer based in Thailand
          </span>
          <div className="flex gap-4 pt-3">
            <FaLinkedin className="text-green-400 text-4xl" />
            <FaGithub className="text-green-400 text-4xl" />
          </div>
        </div>
        {/* Detail Right */}
        <div>
          <img
            src="https://cms.dmpcdn.com/moviearticle/2024/12/27/25e9c990-c3ff-11ef-ab97-d1596af7994c_webp_original.webp"
            alt=""
            className="w-[450px] h-[450px] object-cover rounded-full"
          />
        </div>
      </div>

      {/* Text Tech Stack */}
      <div className="flex justify-center pt-20">
        <p className="text-white text-2xl font-bold">
          My Tech Stack
        </p>
      </div>

      {/* img Tech Stack */}
      <div className="flex items-center justify-center gap-10 pt-10">
        <img src={html} alt="html" />
        <img src={css} alt="css" />
        <img src={node} alt="node" />
        <img src={react} alt="react" />
        <img src={spring} alt="spring" />
        <img src={java} alt="java" />
        <img src={figma} alt="figma" />
        <img src={Firebase} alt="Firebase" />

      </div>
    </>
  );
}
