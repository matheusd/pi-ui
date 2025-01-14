import React from "react";
import ReactSelect, { components } from "react-select";
import AsyncSelect from "react-select/async";
import CreatableSelect from "react-select/creatable";
import PropTypes from "prop-types";
import { classNames } from "../../utils";
import styles from "./styles.css";

const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <div
      className={classNames(
        styles.arrowAnchor,
        props.selectProps.menuIsOpen && styles.arrowAnchorOpen
      )}
    />
  </components.DropdownIndicator>
);

DropdownIndicator.propTypes = {
  selectProps: PropTypes.object,
};

const Select = ({
  width,
  isMobile,
  isAsync,
  isCreatable,
  customStyles,
  customComponents,
  ...props
}) => {
  const defaultStyles = {
    indicatorSeparator: () => ({
      display: "none",
    }),
    container: (provided) => ({
      width: width ? width : provided.width,
      padding: "0.2rem 0 0.2rem 0.4rem",
    }),
    control: () => ({
      userSelect: "none",
      boxShadow: "none",
      borderRadius: "0.2rem",
      minHeight: isMobile ? "4.4rem" : "3rem",
      minWidth: "6rem",
      borderColor: "var(--input-border-color)",
      backgroundColor: "var(--card-background)",
      "&:hover": {
        borderColor: "var(--input-border-color)",
      },
    }),
    menu: () => ({
      zIndex: "999",
      boxShadow: "0px 1rem 2rem rgba(0, 0, 0, 0.16)",
      borderRadius: "0.2rem",
      backgroundColor: "var(--card-background)",
    }),
    menuList: () => ({
      padding: "0",
    }),
    singleValue: () => ({
      color: "var(--color-primary-dark)",
    }),
    option: (_, state) => ({
      color: "var(--tab-text-color)",
      backgroundColor: state.isFocused
        ? "var(--color-blue-lighter)"
        : "var(--card-background)",

      cursor: "pointer",
    }),
  };

  const mergedCustomStyles = [
    ...new Set([...Object.keys(defaultStyles), ...Object.keys(customStyles)]),
  ]
    .map((key) => ({
      [key]: (provided, state) => ({
        ...provided,
        ...(defaultStyles[key] && defaultStyles[key](provided, state)),
        ...(customStyles[key] && customStyles[key](provided, state)),
      }),
    }))
    .reduce((prev, curr) => ({ ...prev, ...curr }), {});

  const SelectComponent = isAsync
    ? AsyncSelect
    : isCreatable
    ? CreatableSelect
    : ReactSelect;

  return (
    <div>
      <SelectComponent
        styles={mergedCustomStyles}
        components={{
          DropdownIndicator,
          ...(customComponents && customComponents),
        }}
        {...props}
      />
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  isCreatable: PropTypes.bool,
  width: PropTypes.number,
  value: PropTypes.object,
  isMobile: PropTypes.bool,
  onChange: PropTypes.func,
  customStyles: PropTypes.object,
  customComponents: PropTypes.object,
};

Select.defaultProps = {
  isSearchable: false,
  isCreatable: false,
  customStyles: {},
  customComponents: {},
};

export default React.memo(Select);
