import Link from "next/link";
import styles from "styles/NavbarPC/NavbarMus.module.css";

const Navbar = () => {
  return (
    <div className={styles.parentContainer}>
      <nav className={styles.navbar}>
       {/* Tablet/Mobile Navbar */}
        <div className={styles.navbarRow}>
          <div className={styles.logo}>
            <Link href="/" className={styles.logoLink}></Link>
          </div>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/music" className={styles.item}>
                CS + Music
              </Link>
            </li>
            <li>
              <Link href="/linguistics" className={styles.item}>
                CS + Linguistics
              </Link>
            </li>
            <li>
              <Link href="/anthropology" className={styles.item}>
                CS + Anthropology
              </Link>
            </li>
            <li>
              <Link href="/advertising" className={styles.item}>
                CS + Advertising
              </Link>
            </li>
            <li>
              <Link href="/philosophy" className={styles.item}>
                CS + Philosophy
              </Link>
            </li>
            <li>
              <Link href="/crop-sciences" className={styles.item}>
                CS + Crop Sciences
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;