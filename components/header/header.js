"use client";
import Link from "next/link";
import Image from "next/image";
import HeaderBackground from './header-background';
import logoImg from '@/assets/logo.png';
import classes from './header.module.css';
const Header = () => {
return (
    <>
    <HeaderBackground/>
<header className={classes.header}>
    <Link className={classes.logo} href="/">
    <Image src={logoImg} alt="NextLevel Food" priority/>
    NextLevel Food
    </Link>
    <nav className={classes.nav}>
        <ul>
            <li>
                <Link href="/meals">Browse Meals</Link></li>
                <li>
                <Link href="/community">Foodies Community</Link>
            </li>
        </ul>
    </nav>
</header>
</>
 );
}

export default Header;