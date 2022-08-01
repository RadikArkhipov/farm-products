import React from "react";
import { StyledHonorIcon } from "./styles";

export const FoodFeature = {
  FARM: "farm",
  SHOP: "shop"
};

function HonorIcon({ className = "", feature }) {
  let options;

  switch (feature) {
    case FoodFeature.FARM:
      options = {
        text: "Фермерские продукты",
        bgColor: "#88AA4D"
      };
      break;
    case FoodFeature.SHOP:
      options = {
        text: "Магазинные продукты",
        bgColor: "#F75531"
      };
      break;
  }

  return options.text ? (
    <StyledHonorIcon className={className} $bgColor={options.bgColor}>
      {options.text}
    </StyledHonorIcon>
  ) : null;
}

//  return options.text ? (
//    <span
//      className={`honor-icon ${className}`}
//      style={{ backgroundColor: options.bgColor }}
//    >
//     {options.text}
//   </span>
// ) : null;
//}

export default HonorIcon;
