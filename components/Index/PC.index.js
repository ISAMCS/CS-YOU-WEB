"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "styles/Index/PC.index.module.css";
import isabellaHeadshot from "public/IsabellaM.jpeg";
import yaelHeadshot from "public/Yael.png";
import rayaHeadshot from "public/Raya.png";
import kathleenHeadshot from "public/Kathleen.png";
import maxHeadshot from "public/Max.jpeg";
import lennyHeadshot from "public/Lenny.png";
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
  { name: "Yael Gertner", position: "Teaching Associate Professor,  Siebel School of Computing and Data Science @ University of Illinois Urbana Champaign, Principal Investigator", src: yaelHeadshot },
  { name: "Isabella Marquez", position: "Undergraduate Grainger Engineering Computer Science Student,  Siebel School of Computing and Data Science @ University of Illinois Urbana Champaign, CS + YOU's Web Developer", src: isabellaHeadshot },
  { name: "Max Fowler", position: "Teaching Assistant Professor, Siebel School of Computing and Data Science @ University of Illinois Urbana Champaign", src: maxHeadshot },
  { name: "Kathleen Isseneger", position: "Teaching Assistant Professor at Chico State", src: kathleenHeadshot },
  { name: "Raya Hegman Davis", position: "Director of Engagement, University of Wyoming School of Computing, Faculty Affiliate, Center for Digital Agriculture", src: rayaHeadshot },
  { name: "Lenny Pitt", position: "Professor Emeritus,  Siebel School of Computing and Data Science @ University of Illinois Urbana Champaign", src: lennyHeadshot },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [teamIndex, setTeamIndex] = useState(0);

  const handlePersonClick = (index) => {
    let newIndex = index;
    if (newIndex < 1) {
      newIndex = carouselImages.length;
    } else if (newIndex > carouselImages.length) {
      newIndex = 1;
    }
    setCurrentIndex(newIndex);
  };

  const navigateToPage = (link) => {
    window.location.href = link;
  };

  const handleTeamClick = (index) => {
    setTeamIndex(index);
  };

  const loopedImages = [
    carouselImages[carouselImages.length - 1],
    ...carouselImages,
    carouselImages[0],
  ];

  return (
    
    <div className={styles.indexContainer}>

      <div style={{ padding: "5vh" }}></div>

      {/* Main Content Section */}
      
        <div className={styles.indexMainContent}>
          <div className={styles.leftSection}>
            <a href="/chart.png" target="_blank" rel="noopener noreferrer">
              <img src="/chart.png" alt="Chart" className={styles.chartImage} />
            </a>
          </div>
          <div className={styles.rightSection}>
            <h2>About Our Mission</h2>
            <p>UIUC seeks to create an interactive and engaging website for the K12 audience to learn about computer science and its various applications!</p>
            <Link href="/Csplusx" passHref legacyBehavior>
              <button className={styles.exploreButton}>
                Explore CS + X
              </button>
            </Link>
          </div>
        </div>

      <div style={{ padding: "5vh" }}></div>

      {/* Carousel Section */}

        <div className={styles.carouselSection}>
          <h2>Explore More</h2>
          
          <div style={{ padding: "5vh" }}></div>

          <div className={styles.carouselTrack}>
            {loopedImages.slice(currentIndex - 1, currentIndex + 2).map((image, index) => {
              const actualIndex = currentIndex - 1 + index;
              const isMiddleCell = actualIndex === currentIndex;
              const isLeftCell = actualIndex === currentIndex - 1;
              const isRightCell = actualIndex === currentIndex + 1;

              return (
                <div
                  key={actualIndex}
                  className={styles.cells}
                  onClick={() => {
                    if (isMiddleCell) {
                      navigateToPage(image.link);
                    } else if (isLeftCell) {
                      handlePersonClick(currentIndex - 1);
                    } else if (isRightCell) {
                      handlePersonClick(currentIndex + 1);
                    }
                  }}
                >
                  <img src={image.src} alt={image.alt} />
                  <div className={styles.hoverText}>
                    <p dangerouslySetInnerHTML={{ __html: image.text }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      <div style={{ padding: "5vh" }}></div>

      {/* Meet the Team Section */}

        <div className={styles.meetTheTeamSection}>
          <h2>Meet the Team</h2>

          <div style={{ padding: "5vh" }}></div>

          <div className={styles.teamCarousel}>
            {[-1, 0, 1].map((offset) => {
              const index = (teamIndex + offset + teamMembers.length) % teamMembers.length;
              const member = teamMembers[index];
              const isCurrent = offset === 0;
              return (
                <div
                  key={index}
                  className={`${styles.teamCells} ${isCurrent ? styles.current : styles.blur}`}
                  style={{
                    zIndex: isCurrent ? 1 : 0,
                  }}
                  onClick={() => handleTeamClick(index)}
                >
                  <div className={styles.headshotWrapper}>
                    <Image
                      alt="headshot"
                      src={member.src}
                      className={styles.Headshot}
                      priority={isCurrent}
                      style={member.style}
                    />
                  </div>
                  <p className={styles.name} dangerouslySetInnerHTML={{ __html: member.name }} />
                  <p className={styles.position} dangerouslySetInnerHTML={{ __html: member.position }} />
                </div>
              );
            })}
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