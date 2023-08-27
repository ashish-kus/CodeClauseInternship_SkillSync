import React, { useEffect } from "react";
import "./styles/features.css";

export const Features = () => {
  useEffect(() => {
    const features = document.querySelectorAll('.features-item'); // Corrected class name

    const observer = new IntersectionObserver(sections => {
      sections.forEach(section => {
        if (section.isIntersecting) {
          section.target.classList.add('show-feature');
        } else {
          section.target.classList.remove('show-feature');
        }
      });
    }, { threshold: 0.4 });

    features.forEach(feature => observer.observe(feature));

    return () => {
      features.forEach(feature => observer.unobserve(feature));
    };
  }, []);

  return (
    <>
      <div className="h-screen grid place-items-center bg-black">
        <section id="features" className=" ">
          <h2 className="text-4xl ">Features</h2>
          <div className="features-inner"> {/* Used className instead of class */}
            <div className="features-image m-auto"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/495197/phone-1.png" alt="Feature 1" /></div>
            <ul className="features-list list-1"> {/* Used className instead of class */}
              <br />
              <li class="features-item" >
                <h3 class="features-item-header">Feature 1</h3>
                <p class="features-item-text">I don’t mean to say that I know, of my own knowledge, what there is particularly dead about a door-nail.</p>
              </li>
              <li class="features-item" >
                <h3 class="features-item-header">Feature 2</h3>
                <p class="features-item-text">I don’t mean to say that I know, of my own knowledge, what there is particularly dead about a door-nail.</p>
              </li>
              <li class="features-item" >
                <h3 class="features-item-header">Feature 3</h3>
                <p class="features-item-text">I don’t mean to say that I know, of my own knowledge, what there is particularly dead about a door-nail.</p>
              </li>
            </ul>
            <ul className="features-list list-2"> {/* Used className instead of class */}
              <li class="features-item" >
                <h3 class="features-item-header">Feature 4</h3>
                <p class="features-item-text">I don’t mean to say that I know, of my own knowledge, what there is particularly dead about a door-nail.</p>
              </li>
              <li class="features-item" >
                <h3 class="features-item-header">Feature 5</h3>
                <p class="features-item-text">I don’t mean to say that I know, of my own knowledge, what there is particularly dead about a door-nail.</p>
              </li>
              <li class="features-item" >
                <h3 class="features-item-header">Feature 6</h3>
                <p class="features-item-text">I don’t mean to say that I know, of my own knowledge, what there is particularly dead about a door-nail.</p>
              </li>
            </ul>
          </div>
        </section>

      </div>
    </>
  );
}

export default Features;
