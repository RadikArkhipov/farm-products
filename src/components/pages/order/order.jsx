import React, { useState } from "react";
import Panel from "/src/components/ui/panel/panel";
import Title, { TitleSize } from "/src/components/ui/title/title";
import ProductCart from "/src/components/ui/product-cart/product-cart";
import Button from "/src/components/ui/button/button";
import CheckboxList from "/src/components/ui/checkbox-list/checkbox-list";
import {
  LeftColumn,
  StyledOrder,
  AddressInput,
  PriceLabel,
  PriceValue,
  ProductSwiper,
  CheckboxLabel
} from "./styles";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

// Оформление заказа
function Order({
  products // список продуктов
}) {
  const [selectProductIds, setSelectProductIds] = useState([]);

  return (
    <StyledOrder as="form">
      <LeftColumn>
        <Panel marginBottom={20} paddingTop={24} paddingBottom={10}>
          <Title as="h2" size={TitleSize.SMALL} marginBottom={12}>
            Выберите продукты
          </Title>
          <CheckboxList
            labelComponent={CheckboxLabel}
            name={"select-products"}
            isGridList={false}
            options={products.map((product) => ({
              value: product.id,
              title: product.name
            }))}
            selectValues={selectProductIds}
            onChange={setSelectProductIds}
          />
        </Panel>
        <Panel>
          <Title size={TitleSize.SMALL} marginBottom={24}>
            Сделать заказ
          </Title>
          <AddressInput placeholder="Введите адрес доставки" />
          <PriceLabel as="span">Цена</PriceLabel>
          <PriceValue>400</PriceValue>
          <Button maxWidth>Купить</Button>
        </Panel>
      </LeftColumn>
      <ProductSwiper
        spaceBetween={12}
        direction="vertical"
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        mousewheel
        pagination={{
          type: "fanction"
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCart product={product} />
          </SwiperSlide>
        ))}
      </ProductSwiper>
    </StyledOrder>
  );
}

export default Order;
