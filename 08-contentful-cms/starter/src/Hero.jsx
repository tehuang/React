import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Hell of raclette artisan fingerstache big mood cardigan. Drinking
            vinegar sustainable gluten-free man braid, cardigan cliche freegan
            pitchfork mumblecore meh kickstarter tilde. Air plant marxism copper
            mug, semiotics banjo kitsch prism williamsburg +1 bespoke keffiyeh.
            Mixtape intelligentsia asymmetrical chillwave affogato chicharrones
            franzen food truck. Hot chicken letterpress neutra, locavore disrupt
            meh hella bushwick kickstarter hammock cornhole meditation hashtag
            tumblr.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
