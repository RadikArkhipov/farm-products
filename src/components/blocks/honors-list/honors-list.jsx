import React from "react";
import Title from "/src/components/ui/title/title";
import HonorCard from "/src/components/ui/honor-card/honor-card";
import Button from "/src/components/ui/button/button";
import { HonorItem, HonorList, StyledHonorsList } from "./styles";

// список отличий в еде
function HonorsList({
  honors, // отличия
  level // уровень заголовка списка.
}) {
  return (
    <StyledHonorsList>
      {honors?.length ? (
        <>
          <Title level={level}>Почему фермерские продукты лучше?</Title>
          <HonorList $isGridList>
            {honors.map((honor) => (
              <HonorItem key={honor.id}>
                <HonorCard {...honor} />
              </HonorItem>
            ))}
          </HonorList>
        </>
      ) : null}
      <Button link="/buy">Купить</Button>
    </StyledHonorsList>
  );
}

export default HonorsList;
