import Link from "next/link";
import styles from "../../styles/sideNav/SideNav.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
const SideNav = ()=> {
    return (
        <section className={styles.main}>
            <div className={styles.links}>
                <Link className={styles.link} href="">
                    <span className="px-2">Instagram</span>
                    <FontAwesomeIcon className="text-pink-500" icon={faInstagram}/>
                </Link>
                <Link className={styles.link} href="">
                    <span className="px-2">Twitter</span>
                    <FontAwesomeIcon className="text-blue-500" icon={faTwitter}/>
                </Link>
                <Link className={styles.link} href="">
                    <span className="px-2">LinkedIn</span>
                    <FontAwesomeIcon className="text-blue-800" icon={faLinkedin}/>
                </Link>
            </div>
        </section>
    )
}

export default SideNav;