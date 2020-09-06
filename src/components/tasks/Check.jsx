import React from "react";
import { Icon } from 'react-icons-kit';
import { check } from 'react-icons-kit/fa/check';


const Check = ({ checked, onClick }) => {
  if (checked === true) {
    return (
      <Icon
        icon={check}
        size={32}
        className="text-success"
        style={{ cursor: "pointer" }}
        onClick={onClick}
      >
        check_circle_outline
      </Icon>
    );
  } else {
    return (
      <Icon
        icon={check}
        size={32}
        className="text-muted"
        style={{ cursor: "pointer" }}
        onClick={onClick}
      >
        check_circle_outline
      </Icon>
    );
  }
};

export default Check;