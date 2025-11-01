import React from "react"
import CardItem from "../CardItem/CardItem";
import CardPicture from "../../assets/icons/images.jpg";
import { data } from "../../assets/data/data";
import { CardWrapper } from "../Catalog/Catalog.styled";
import Filter from "./Select/Select";

const Catalog = () => {
    return (
        <div>
            <Filter/>



            <CardWrapper>
                {data.map(({ title, author, text, image, price }, index) => (
                    <CardItem
                        title={title}
                        author={author}
                        text={text}
                        imageSrc={image}
                        price={price}
                        id={index}
                    />
                )

                )}
            </CardWrapper>

        </div>
    )
}


export default Catalog;