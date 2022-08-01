import React from "react";
import { StyledButton } from "./styles";
/*
function Button({ children, minWidth, link, className }) {
  return (
    <StyledButton
      $minWidth={minWidth}
      {...(link ? { href: link } : { as: "button", type: "button" })}
      className={className}
    >
      {children}
    </StyledButton>
  );
}*/

function Button({
  children, // дочерний элемент, отображаемый в кнопке
  link, // ссылка
  minWidth, // делает кнопку на 100% родителя
  className, // класс
  onClick, // событие по клику
  ...props // остальные переданные пропсы
}) {
  return (
    <StyledButton
      {...props}
      $minWidth={minWidth}
      {...(link ? { to: link } : { as: "button", onClick, type: "button" })}
      className={className}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
