import Link from 'next/link';
import styles from './nav.module.scss';
const Navbar = () => {
    return (
        <nav className={styles.navContainer}>
            <ul>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/jmann">
                        jmann
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard">
                        Dashboard
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;