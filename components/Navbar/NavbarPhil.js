import Link from "next/link";
import styles from "styles/Navbar/NavbarPhil.module.css";

const Navbar = () => {
  return (
    <div className={styles.parentContainer}>
      <nav className={styles.navbar}>
        
        {/* PC/Large Screen Navbar */}
        <div className={styles.navbarPC}>
          <div className={styles.logo}><Link href="/" className={styles.logoLink}></Link></div>
          <ul className={styles.navLinks}>
            <li><Link href="/Music" className={styles.item}>CS + Music</Link></li>
            <li><Link href="/Linguistics" className={styles.item}>CS + Linguistics</Link></li>
            <li><Link href="/Anthropology" className={styles.item}>CS + Anthropology</Link></li>
            <li><Link href="/Advertising" className={styles.item}>CS + Advertising</Link></li>
            <li><Link href="/Philosophy" className={styles.item}>CS + Philosophy</Link></li>
            <li><Link href="/Crop-Sciences" className={styles.item}>CS + Crop Sciences</Link></li>
          </ul>
        </div>

        {/* Tablet/Mobile Navbar */}
        <div className={styles.navbarMobile}>
          <div className={styles.logo}>
           <Link href="/" className={styles.logoLink}></Link>
           </div>
            <ul className={styles.navLinks}>
              <li><Link href="/Music" className={styles.item}>CS + Music</Link></li>
              <li><Link href="/Linguistics" className={styles.item}>CS + Linguistics</Link></li>
              <li><Link href="/Anthropology" className={styles.item}>CS + Anthropology</Link></li>
              <li><Link href="/Advertising" className={styles.item}>CS + Advertising</Link></li>
              <li><Link href="/Philosophy" className={styles.item}>CS + Philosophy</Link></li>
              <li><Link href="/Crop-Sciences" className={styles.item}>CS + Crop Sciences</Link></li>
            </ul>
         </div>
      </nav>
    </div>
  );
};


export default Navbar;