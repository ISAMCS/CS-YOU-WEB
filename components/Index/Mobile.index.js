"use client";

import React, { useRef } from "react";
import Image from "next/image";
import styles from "styles/Index/Mobile.index.module.css";
import isabellaHeadshot from "public/IsabellaM.jpeg";
import yaelHeadshot from "public/Yael.png";
import rayaHeadshot from "public/Raya.png";
import kathleenHeadshot from "public/Kathleen.png";
import maxHeadshot from "public/Max.jpeg";
import lennyHeadshot from "public/Lenny.png";
import BackgroundLayout from "/components/Index/CSIntroSection.js";
import Link from "next/link";

const carouselImages = [
  { src: "/agri.png", alt: "Agriculture", text: "CS +<br />Crop Sciences", link: "/Crop-Sciences" },
  { src: "/anthro.jpg", alt: "Anthropology", text: "CS +<br />Anthropology", link: "/Anthropology" },
  { src: "/dictionary.jpg", alt: "Dictionary", text: "CS +<br />Linguistics", link: "/Linguistics" },
  { src: "/SchoolsOfAthens.jpg", alt: "Schools of Athens", text: "CS +<br />Philosophy", link: "/Philosophy" },
  { src: "/socials.png", alt: "Social Media", text: "CS +<br />Advertising", link: "/Advertising" },
  { src: "/child playing piano.jpg", alt: "Music", text: "CS +<br />Music", link: "/Music" }
];

const teamMembers = [
  { name: "Yael Gertner", position: "Teaching Associate Professor, Siebel School of Computing and Data Science @ University of Illinois Urbana Champaign, Principal Investigator", src: yaelHeadshot },
  { name: "Isabella Marquez", position: "Undergraduate Grainger Engineering Computer Science Student, Siebel School of Computing and Data Science @ University of Illinois Urbana Champaign, CS + YOU's Web Developer", src: isabellaHeadshot },
  { name: "Max Fowler", position: "Teaching Assistant Professor, Siebel School of Computing and Data Science @ University of Illinois Urbana Champaign", src: maxHeadshot },
  { name: "Kathleen Isseneger", position: "Teaching Assistant Professor </br /> at Chico State", src: kathleenHeadshot },
  { name: "Raya Hegman Davis", position: "Director of Engagement, University of Wyoming School of Computing, Faculty Affiliate, Center for Digital Agriculture", src: rayaHeadshot },
  { name: "Lenny Pitt", position: "Professor Emeritus, Siebel School of Computing and Data Science @ University of Illinois Urbana Champaign", src: lennyHeadshot },
];

const Home = () => {
  const carouselRef = useRef(null);
  const teamCarouselRef = useRef(null);

  const scrollToCell = (ref, index, total) => {
    if (!ref.current) return;
    const container = ref.current;
    const cell = container.children[index];
    if (cell) {
      const containerRect = container.getBoundingClientRect();
      const cellRect = cell.getBoundingClientRect();
      const scrollLeft = cell.offsetLeft - (container.offsetWidth / 2) + (cell.offsetWidth / 2);
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  };

  return (

    <div className={styles.indexContainer}>

      <div style={{ padding: "5vh" }}></div>

      {/* Main Content Section */}
      
        <div className={styles.indexMainContent}>
          <div className={styles.indexMainContent}>
            <BackgroundLayout />
          </div>
        </div>

     <div style={{ padding: "5vh" }}></div>

      {/* Carousel Section */}

        <div className={styles.carouselSection}>
          <h2>Explore More</h2>

          <div className={styles.carouselTrack} ref={carouselRef}>
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={styles.cells}
                tabIndex={0}
                onClick={() => window.location.href = image.link}
                onKeyDown={e => {
                  if (e.key === "Enter") window.location.href = image.link;
                }}
              >
                <img src={image.src} alt={image.alt} />
                <div className={styles.Text}>
                  <p dangerouslySetInnerHTML={{ __html: image.text }} />
                </div>
              </div>
            ))}
          </div>
        </div>

      {/* Meet the Team Section */}

        <div className={styles.meetTheTeamSection}>
          <h2>Meet the Team</h2>

          <div style={{ padding: "5vh" }}></div>

          <div className={styles.teamCarousel} ref={teamCarouselRef}>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={styles.teamCells}
                tabIndex={0}
                onClick={() => scrollToCell(teamCarouselRef, index, teamMembers.length)}
                onKeyDown={e => {
                  if (e.key === "Enter") scrollToCell(teamCarouselRef, index, teamMembers.length);
                }}
              >
                <Image
                  alt="headshot"
                  src={member.src}
                  className={styles.Headshot}
                  priority={false}
                  style={member.style}
                />
                <div className={styles.name}>{member.name}</div>
                <div
                  className={styles.position}
                  dangerouslySetInnerHTML={{ __html: member.position }}
                />
              </div>
            ))}
          </div>
        </div>

      <div style={{ padding: "5vh" }}></div>

      {/* Illinois Banner Section */}

        <div className={styles.illinoisBannerSection}>
          <div className={styles.orangeRectangle}>
            <img
              src="/Illinois_Banner.png"
              alt="Illinois Banner"
              className={styles.illinoisBannerImage}
            />
          </div>
        </div>

      <div style={{ padding: "5vh" }}></div>

      {/* Questions Section */}

        <div className={styles.questionsSection}>
          <h2>Questions? Comments? Concerns?</h2>
          <p>Email: <a href="mailto:ygertner@illinois.edu">ygertner@illinois.edu</a></p>
          <p>University of Illinois Urbana Champaign</p>
          <p>Grainger College of Engineering</p>
          <p>Siebel School of Computing and Data Science</p>
        </div>

      <div style={{ padding: "5vh" }}></div>
      
    </div>

  );
};

export default Home;