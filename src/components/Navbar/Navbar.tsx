// Navbar.tsx
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
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenSubMenu(null);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest(`.${styles.menuItem}`)) {
        setOpenSubMenu(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenSubMenu(null);
  };

  const toggleSubMenu = (label: string) => {
    setOpenSubMenu(openSubMenu === label ? null : label);
  };

  // Функция закрытия меню при клике на ссылку
  const handleLinkClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
      setOpenSubMenu(null);
    }
  };

  if (!navbarData) {
    return null;
  }

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={`${styles.headerWrapper} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <div className={styles.logo}>
            <Link  className={styles.logoLink} onClick={handleLinkClick} href="/">
              <Image
                alt="Orzel Realty Logo"
                src={urlFor(navbarData.logo).url()}
                width={250}
                height={250}
                className={styles.logoImage}
              />
            </Link>
          </div>

          {isMobile && (
            <div className={styles.burgerIcon} onClick={toggleMenu}>
              <div className={`${styles.bar} ${isMenuOpen ? styles.rotateBar1 : ''}`} />
              <div className={`${styles.bar} ${isMenuOpen ? styles.hideBar : ''}`} />
              <div className={`${styles.bar} ${isMenuOpen ? styles.rotateBar2 : ''}`} />
            </div>
          )}

          {(isMobile && isMenuOpen) || !isMobile ? (
            <motion.nav
              className={`${styles.navbar} ${isMenuOpen ? styles.open : ''}`}
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
                        <IoIosArrowDown className={openSubMenu === menuItem.label ? styles.rotateIcon : ''} size="1.2rem" />
                      </div>
                    ) : (
                      <Link className={styles.menuItemLink} onClick={handleLinkClick} href={menuItem.link}>
                        {menuItem.label}
                      </Link>
                    )}
                    <AnimatePresence>
                      {menuItem.subMenu && openSubMenu === menuItem.label && (
                        <motion.ul
                          className={styles.subMenu}
                          initial={{ maxHeight: 0, overflow: 'hidden' }}
                          animate={{ maxHeight: 500, overflow: 'hidden' }}
                          exit={{ maxHeight: 0, overflow: 'hidden' }}
                          transition={{ duration: 0.5 }}
                        >
                          {menuItem.subMenu.map((subMenuItem, subIndex) => (
                            <li key={subIndex} className={styles.subMenuItem}>
                              <Link className={styles.subLink} onClick={handleLinkClick} href={subMenuItem.subLink}>
                                {subMenuItem.subLabel}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                ))}
                <li className={styles.menuItem}>
                  <Link className={styles.menuItemLink} onClick={handleLinkClick} href="tel:+48667240191">
                    +48 667 240 191
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