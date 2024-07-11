import React, { useEffect, useRef, useState } from "react";
import styles from "./Menu.module.scss";
import MenuArrow from "../../assets/menu_arrow.svg";

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
        {title}{" "}
        <MenuArrow
          width="12"
          height="8"
          className={isOpen ? styles.transform : ""}
        />
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
