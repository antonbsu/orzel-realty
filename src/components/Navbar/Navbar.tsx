'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { getNavbar } from "@/libs/apis";
import { urlFor } from "@/libs/sanity";
import { motion, AnimatePresence } from 'framer-motion';
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
            <motion.nav
              className={`${styles.navbar} ${isMenuOpen && styles.open}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <ul className={styles.menuItems}>
                {navbarData.menuItems.map((menuItem, index) => (
                  <li key={index} className={styles.menuItem} onClick={() => toggleSubMenu(menuItem.label)}>
                    {menuItem.subMenu ? (
                      <div className={styles.menuItemLabel}>
                        <span>{menuItem.label}</span>
                        <IoIosArrowDown size="1.2rem" />
                      </div>
                    ) : (
                        <Link
                          href={menuItem.link}
                          className={styles.menuItemLink}
                        >
                        {menuItem.label}
                      </Link>
                    )}

                    {/* Submenu */}
                    <AnimatePresence>
                      {menuItem.subMenu && openSubMenu === menuItem.label && (
                        <motion.ul
                          className={styles.subMenu}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          {menuItem.subMenu.map((subMenuItem, subIndex) => (
                            <motion.li
                              key={subIndex}
                              className={styles.subMenuItem}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                            >
                              <Link
                                className={styles.subLink}
                                href={subMenuItem.subLink}
                              >
                                {subMenuItem.subLabel}
                              </Link>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                     </AnimatePresence>
                  </li>
                ))}
                <li>
                  <Link
                    className={styles.menuItemLink}
                    href="tel:+48517351391"
                  >
                    517 351 391
                  </Link>
                </li>
              </ul>
            </motion.nav>
          ) : null}
        </div>

      </div>
    </header>
  );
};

export default Navbar;