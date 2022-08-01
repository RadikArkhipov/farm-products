import React from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import {
  Text,
  Figure,
  Image,
  TitleContainer,
  StyledHonorCard,
  StyledHonorIcon
} from "./styles";

function HonorCard({
  food, // различия продуктов питания
  about, // информация о продуктах питания
  feature, // особенность продуктов питания(фермерские, магазинные) FoodFeature
  image // url c изображением продуктов питания
}) {
  return (
    <StyledHonorCard>
      <Figure>
        <Image
          src={image}
          width={52}
          height={52}
          alt="изображение продукта питания"
        />
        <StyledHonorIcon feature={feature} />
      </Figure>

      <Title level={TitleLevel.H3} size={TitleSize.SMALL}>
        {food}
      </Title>

      <Text
        className="honor-card__text"
        dangerouslySetInnerHTML={{ __html: about }}
      />
    </StyledHonorCard>
  );
}

export default HonorCard;
