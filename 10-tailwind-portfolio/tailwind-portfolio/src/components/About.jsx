import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="About Me" />
          <p className="text-slate-600 mt-8 leading-loose">
            I'm currently pursuing my Master's degree in Computer Science at
            Stevens Institute of Technology Before enrolloing Stevens as a
            graduate student, I spent over 4 years working as an IT support
            analyst at Qualcomm. About a year ago, I realized my desire to learn
            more and immerse myself in the field of information technology.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
