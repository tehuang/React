import Title from "./Title";
import { services } from "../data";
const Services = () => {
  return (
    <div>
      <Title title="our" subTitle="services" />
      <section className="section services" id="services">
        <div className="section-center services-center">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article className="service" key={id}>
                <span className="service-icon">
                  <i className={icon}></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">{title}</h4>
                  <p className="service-text">{text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default Services;
