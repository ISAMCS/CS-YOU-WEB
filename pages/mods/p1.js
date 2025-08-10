import styles from 'styles/PC/mods/PC.p1.module.css';
import Image from 'next/image';
import React, { useState } from "react";
import { useRouter } from 'next/router';
import Navbar from "components/Navbar/NavbarLing.js"

const CARD_DATA = [
  {
    image: '/1.png',
    title: 'Question #1',
  },
  {
    image: '/2.png',
    title: 'Answer #1',
  },
  {
    image: '/3.png',
    title: 'Question #2',
  },
  {
    image: '/4.png',
    title: 'Answer #2',
  },
  {
    image: '/5.png',
    title: 'Question #3',
  },
  {
    image: '/6.png',
    title: 'Answer #3',
  },
];

const CARD_DATA2 = [
  {
    title: "Sentence (S)",
    structure: "[AdvP] NP [Aux] [Neg] VP [AdvP]",
    example: "Very quietly, three students have not finished the test yet."
  },
  {
    title: "Noun Phrase (NP)",
    structure: "[Det] [NumP] [AdjP…] Noun [PP…]",
    example: "the two big red dogs in the yard"
  },
  {
    title: "Prepositional Phrase (PP)",
    structure: "[DegP] Preposition NP [PP…]",
    example: "right behind the old house on the corner"
  },
  {
    title: "Verb Phrase (VP)",
    structure: "[AdvP] Verb (NP | PP) [AdvP…]",
    example: "very eagerly ate the pizza before dinner"
  },
  {
    title: "Adverb Phrase (AdvP)",
    structure: "[DegP] Adverb [PP…]",
    example: "really slowly through the tunnel"
  },
  {
    title: "Adjective Phrase (AdjP)",
    structure: "[DegP] Adjective [PP…]",
    example: "quite happy with the results"
  },
  {
    title: "Number Phrase (NumP)",
    structure: "[DegP] Number",
    example: "almost ten"
  },
  {
    title: "Degree Phrase (DegP)",
    structure: "Degree",
    example: "very, too, most"
  }
];

const youtubeVideos = [
  "n1zpnN-6pZQ?si=8IwNlN1v7zrF0xxY",
];


export default function P1() {
  const router = useRouter();
  const [currentCard, setCurrentCard] = useState(0);
  const [currentCard2, setCurrentCard2] = useState(0); // Blue section


  const handleHomeClick = () => {
    router.push('/linguistics');
  };


  const handleNextClick = () => {
    setCurrentCard((prev) => (prev + 1) % CARD_DATA.length);
  };

  const handlePrevOrange = () => {
  setCurrentCard((prev) => (prev - 1 + CARD_DATA.length) % CARD_DATA.length);
  };
  const handleNextOrange = () => {
    setCurrentCard((prev) => (prev + 1) % CARD_DATA.length);
  };

  const [currentVideo, setCurrentVideo] = useState(0);

  const handlePrev = () => {
    setCurrentVideo((prev) => (prev === 0 ? youtubeVideos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentVideo((prev) => (prev === youtubeVideos.length - 1 ? 0 : prev + 1));
  };
  
return (
  <>
    <Navbar />

      <div style={{ padding: "2%" }}></div>

      <div className={styles.indexContainer}>
        <h1 className={styles.pageTitle}>Project 1: Trees</h1>

      <div style={{ padding: "2%" }}></div>

      {/* Movie Time */}
      <section className={styles.audienceSection}>
        <img
          src="/foecircle.png"
          alt="FOE Circle"
          className={styles.foeCircle}
        />
        <div className={styles.audienceText}>
          A show in <br />foellinger<br />auditorium!
        </div>
        <img
          src="/project1.png"
          alt="Linguistics Item"
          className={styles.linguisticsItem}
        />
      </section>

      <div style={{ padding: "2%" }}></div>

      {/* Foellinger Time */}
      <section className={styles.carouselSection}>
        <div className={styles.carouselOverlay}>
          <div className={styles.carouselVideoWrapper}>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${youtubeVideos[currentVideo]}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.carouselVideo}
            ></iframe>
          </div>
        </div>
      </section>

      <div style={{ padding: "2%" }}></div>

      {/* Flashcard Section - Orange */}
      <section className={styles.containerOrange}>
        <div className={styles.centerContent}>
          <h2 className={styles.title}>
            {CARD_DATA[currentCard % CARD_DATA.length].title}
          </h2>
          {/* Arrow Row */}
          <div className={styles.arrowRow}>
            <Image
              src="/arrowre.png"
              alt="Previous"
              width={100}
              height={100}
              className={styles.arrowBack}
              onClick={handlePrevOrange}
              style={{ cursor: 'pointer' }}
            />
            <Image
              src="/arrowre.png"
              alt="Next"
              width={100}
              height={100}
              className={styles.arrow}
              onClick={handleNextOrange}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className={styles.flashcardWrapper}>
            <div className={styles.flashcardContainer}>
              <Image
                src="/flashcardNew.png"
                alt="Flashcard Background"
                width={1000}
                height={350}
                className={styles.flashcard}
              />
              <Image
                src={CARD_DATA[currentCard % CARD_DATA.length].image}
                alt="Card"
                width={600}
                height={400}
                className={styles.cardImage}
              />
            </div>
          </div>
        </div>
      </section>

      <div style={{ padding: "2%" }}></div>

      {/* Flashcard Section - Blue */}
      <section className={styles.containerBlue}>
        <div className={styles.centerContent}>
          <h2
            className={styles.title2}
            dangerouslySetInnerHTML={{
              __html: CARD_DATA2[currentCard2 % CARD_DATA2.length].title,
            }}
          />
          {/* Arrow Row */}
          <div className={styles.arrowRow}>
            <Image
              src="/arrowre.png"
              alt="Previous"
              width={100}
              height={100}
              className={styles.arrowBack}
              onClick={() =>
                setCurrentCard2(
                  (prev) => (prev - 1 + CARD_DATA2.length) % CARD_DATA2.length
                )
              }
              style={{ cursor: "pointer" }}
            />
            <Image
              src="/arrowre.png"
              alt="Next"
              width={100}
              height={100}
              className={styles.arrow}
              onClick={() =>
                setCurrentCard2((prev) => (prev + 1) % CARD_DATA2.length)
              }
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className={styles.flashcardWrapperBlue}>
            <div className={styles.flashcardContainer}>
              <Image
                src="/flashcardNew.png"
                alt="Flashcard Background"
                width={500}
                height={350}
                className={styles.flashcard}
              />
              <div className={styles.whiteBox}>
                <div className={styles.structure}>
                  {CARD_DATA2[currentCard2].structure}
                </div>
                <div className={styles.example}>
                  "{CARD_DATA2[currentCard2].example}"
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ padding: "2%" }}></div>

   </div>
  </>
);
}