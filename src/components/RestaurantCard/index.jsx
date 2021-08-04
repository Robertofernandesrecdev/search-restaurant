import React from "react";
import ReactStars from "react-rating-stars-component";
import restaurante from '../../assets/restaurante-fake.png';
import { Restaurant, RestaurantInfo, RestaurantPhoto, Title, Address } from "./styles";

const RestaurantCard = () => (
    <Restaurant>
        <RestaurantInfo>
            <Title>Nome do Restaurante</Title>
            <ReactStars count={5} isHalf value={4} edit={false} activeColor="#e7711c" />Avaliação
            <Address>Av. Prefeito de Lima Castro</Address>
        </RestaurantInfo>
        <RestaurantPhoto src={restaurante} alt="Foto do Restaurante"/>
    </Restaurant>
);
export default RestaurantCard;
