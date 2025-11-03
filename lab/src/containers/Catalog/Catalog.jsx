import React from "react"
import CardItem from "../CardItem/CardItem";
import { data, GenreOptions, OriginOptions, SortOptions } from "../../assets/data/data";
import { CardWrapper, HeadWrapper, FilterWrapper } from "../Catalog/Catalog.styled";
import Filter from "./Select/Select";
import { Button } from './Catalog.styled';

const Catalog = () => {
    return (
        <div>
            <HeadWrapper>
                <FilterWrapper>
                    <Filter placeholder = {"Genre"} options = {GenreOptions}/>
                    <Filter placeholder = {"Origin"} options = {OriginOptions}/>
                    <Filter placeholder = {"Sort by"} options = {SortOptions}/>
                </FilterWrapper>
                <Button >Apply</Button>
            </HeadWrapper>

            <CardWrapper>
                {data.map(({ title, author, text, image, price, id }) => (
                    <CardItem
                        key={id}
                        title={title}
                        author={author}
                        text={text}
                        imageSrc={image}
                        price={price}
                    />
                )

                )}
            </CardWrapper>

        </div>
    )
}


export default Catalog;