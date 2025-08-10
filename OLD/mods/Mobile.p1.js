import styles from 'styles/Mobile/mods/Mobile.p1.module.css';
import Image from 'next/image';
import React, { useState } from "react";
import { useRouter } from 'next/router';

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

  const handleHomeClick = () => {
    router.push('/linguistics');
  };

  const handleNextClick = () => {
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
  <div className={styles.containerOG}>
    <h1 className={styles.pageTitle}>Project 1: Trees</h1>
    <Image
      src="/home.png"
      alt="Home"
      width={300}
      height={300}
      className={styles.homeIcon}
      onClick={handleHomeClick}
      style={{ cursor: 'pointer' }}
    />

    {/* Audience Section */}
    <section className={`${styles.audienceSection} ${styles.sectionSpacing}`}>
      <img
        src="/foecircle.png"
        alt="FOE Circle"
        className={styles.foeCircle}
      />
      <img
        src="/project1.png"
        alt="Linguistics Item"
        className={styles.linguisticsItem}
      />
      <div className={styles.audienceText}>
        A show in <br />foellinger<br />auditorium!
      </div>
    </section>


       {/* Carousel Section */}
      `<section className={styles.carouselSection}>
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
      </section>`

{/* Flashcard Section - Orange */}
<section className={styles.sectionSpacing}>
  <div className={styles.containerOrange}>
    <h2 className={styles.title}>
      {CARD_DATA[currentCard].title}
    </h2>
    <div className={styles.centerContent}>
      <div className={styles.flashcardWrapper}>
        {/* Image above the flashcard */}
        <Image
          src={CARD_DATA[currentCard].image}
          alt="Card"
          width={400}
          height={300}
          className={styles.cardImageTop}
        />
        <div className={styles.flashcardContainer}>
          <Image
            src="/flashcardNew.png"
            alt="Flashcard Background"
            width={550}
            height={350}
            className={styles.flashcard}
          />
        </div>
        {/* Arrows below the flashcard, side by side */}
        <div className={styles.arrowRow}>
          <Image
            src="/arrowre.png"
            alt="Previous"
            width={80}
            height={80}
            className={styles.arrowBack}
            onClick={() => setCurrentCard((prev) => (prev - 1 + CARD_DATA.length) % CARD_DATA.length)}
            style={{ cursor: 'pointer' }}
          />
          <Image
            src="/arrowre.png"
            alt="Next"
            width={80}
            height={80}
            className={styles.arrow}
            onClick={handleNextClick}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
    </div>
  </div>
</section>

{/* Flashcard Section - Blue */}
<section className={styles.sectionSpacing}>
  <div className={styles.containerBlue}>
    <h2 className={styles.title}>
      {CARD_DATA2[currentCard].title}
    </h2>
    <div className={styles.centerContentBlue}>
      <div className={styles.flashcardWrapperBlue}>
        {/* whiteBox above the flashcard */}
        <div className={styles.whiteBox}>
          <div className={styles.structure}>
            {CARD_DATA2[currentCard].structure}
          </div>
          <div className={styles.example}>
            "{CARD_DATA2[currentCard].example}"
          </div>
        </div>
        <div className={styles.flashcardContainer}>
          <Image
            src="/flashcardNew.png"
            alt="Flashcard Background"
            width={550}
            height={350}
            className={styles.flashcard}
          />
        </div>
        {/* Arrows below the flashcard, side by side */}
        <div className={styles.arrowRow}>
          <Image
            src="/arrowre.png"
            alt="Previous"
            width={80}
            height={80}
            className={styles.arrowBack}
            onClick={() => setCurrentCard((prev) => (prev - 1 + CARD_DATA2.length) % CARD_DATA2.length)}
            style={{ cursor: 'pointer' }}
          />
          <Image
            src="/arrowre.png"
            alt="Next"
            width={80}
            height={80}
            className={styles.arrow}
            onClick={handleNextClick}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
    </div>
  </div>
</section>
  </div>
  );
}