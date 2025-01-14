import PropTypes from "prop-types";
import React from "react";
import { classNames } from "../../utils";
import Icon from "../Icon/Icon.jsx";
import styles from "./styles.css";

const TextArea = ({
  type,
  id,
  error,
  wrapperClassNames,
  inputClassNames,
  wrapped,
  ...props
}) => {
  return !wrapped ? (
    <div className={classNames(styles.textAreaWrapper, wrapperClassNames)}>
      <textarea
        id={id}
        placeholder=""
        className={classNames(
          styles.textArea,
          error && styles.textAreaError,
          inputClassNames
        )}
        type={type}
        {...props}
      />
      <Icon
        type="alert"
        backgroundColor="#ed6d47"
        iconColor="#feb8a5"
        className={classNames(
          styles.errorIcon,
          error && styles.errorIconActive
        )}
      />
      <p
        className={classNames(styles.errorMsg, error && styles.errorMsgActive)}>
        {error}
      </p>
    </div>
  ) : (
    <textarea
      id={id}
      placeholder=""
      className={classNames(
        styles.textArea,
        error && styles.textAreaError,
        inputClassNames
      )}
      type={type}
      {...props}
    />
  );
};

TextArea.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  error: PropTypes.node,
  wrapperClassNames: PropTypes.string,
  inputClassNames: PropTypes.string,
  placeholder: PropTypes.node,
  wrapped: PropTypes.bool,
};

TextArea.defaultProps = {
  type: "text",
  placeholder: "",
};

export default TextArea;
