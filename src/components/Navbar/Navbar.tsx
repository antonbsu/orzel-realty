'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getNavbar } from "@/libs/apis";
import { urlFor } from "@/libs/sanity";
import { Navbar as NavbarType } from "@/models/navbar";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [navbarData, setNavbarData] = useState<NavbarType | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const fetchData = async () => {
    try {
      const data: NavbarType = await getNavbar();
      setNavbarData(data);
    } catch (error) {
      console.error('Error fetching Navbar data:', error);
    }
  };

  useEffect(() => {
    fetchData();

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Или любое другое значение, подходящее для ваших потребностей
    };

    handleResize(); // Установка начального значения
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenSubMenu(null);
  };

  const toggleSubMenu = (label: string) => {
    setOpenSubMenu(openSubMenu === label ? null : label);
  };

  if (!navbarData) {
    return null;
  }

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <div className={styles.logo}>
            <Link href="/">
              <div className={styles.logoLink}>
                <Image
                  alt="Orzel-Realty Logo"
                  src={urlFor(navbarData.logo).url()}
                  width={100}
                  height={100}
                  className={styles.logoImage}
                />
              </div>
            </Link>
          </div>

          {/* Burger Icon for Mobile */}
          {isMobile && (
            <div className={styles.burgerIcon} onClick={toggleMenu}>
              <div className={`${styles.bar} ${isMenuOpen && styles.rotateBar1}`} />
              <div className={`${styles.bar} ${isMenuOpen && styles.hideBar}`} />
              <div className={`${styles.bar} ${isMenuOpen && styles.rotateBar2}`} />
            </div>
          )}

          {/* Navigation Menu */}
          {(isMobile && isMenuOpen) || !isMobile ? (
            <nav className={`${styles.navbar} ${isMenuOpen && styles.open}`}>
              <ul className={styles.menuItems}>
                {navbarData.menuItems.map((menuItem, index) => (
                  <li key={index} className={styles.menuItem} onClick={() => toggleSubMenu(menuItem.label)}>
                    {menuItem.subMenu ? (
                      <span>{menuItem.label}</span>
                    ) : (
                      <Link href={menuItem.link}>
                        {menuItem.label}
                      </Link>
                    )}

                    {/* Submenu */}
                    {menuItem.subMenu && openSubMenu === menuItem.label && (
                      <ul className={styles.subMenu}>
                        {menuItem.subMenu.map((subMenuItem, subIndex) => (
                          <li key={subIndex} className={styles.subMenuItem}>
                            <Link href={subMenuItem.subLink}>
                              {subMenuItem.subLabel}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>

      </div>
    </header>
  );
};

export default Navbar;