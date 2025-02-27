import PropTypes from "prop-types";
import React from "react";
import styles from "./styles.css";
import { classNames } from "../../utils";

const DropdownItem = ({
  handleClose,
  onClick,
  className,
  children,
  ...props
}) => {
  const handleClick = () => {
    handleClose && handleClose();
    onClick && onClick();
  };
  return (
    <li
      onClick={handleClick}
      className={classNames(styles.dropdownItem, className)}
      {...props}>
      {children}
    </li>
  );
};

DropdownItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  handleClose: PropTypes.func,
  onClick: PropTypes.func,
};

export default DropdownItem;
