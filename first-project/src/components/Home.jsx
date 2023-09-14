import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            At TechyStar, we are dedicated to providing top-notch service-based
            solutions that cater to your unique requirements. Our website is
            designed to be your one-stop destination for all your needs,
            offering a wide range of services that are aimed at simplifying and
            enhancing your personal and professional life.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            At TechyStar, we are more than just a service provider.We are your
            dedicated partners in success. Founded 2023, we have been on a
            mission to empower individuals and businesses with innovative
            solutions that drive growth and excellence.<br></br> Our vision is
            to create a world where challenges are met with ingenious solutions,
            where every obstacle is a stepping stone to success. We strive to be
            at the forefront of innovation, leading the way in Industry by
            consistently delivering exceptional results.<br></br> Our mission is
            to transform your aspirations into achievements. We combine our
            expertise, creativity, and commitment to craft solutions that not
            only meet your immediate needs but also pave the way for sustained
            success.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
