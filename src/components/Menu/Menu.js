import React, { useEffect, useRef, useState } from "react";
import styles from "./Menu.module.scss";

function Menu({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdown}>
      <div onClick={toggleMenu} className={styles.dropdownButton}>
        {title} <span className={styles.arrow}>&#9662;</span>
      </div>
      {isOpen && (
        <ul className={styles.dropdownMenu} ref={menuRef}>
          {items.map((item, index) => (
            <li key={index} className={styles.dropdownItem}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Menu;
