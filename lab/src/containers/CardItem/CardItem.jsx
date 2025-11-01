import React from "react"
import { Card, Button } from "antd"
import { Footer } from "./CardItem.styled"

const { Meta } = Card

const CardItem = ({ title = 'no title', author, text, imageSrc, price }) => (
    <Card
        hoverable
        style={{ width: 350, borderRadius: "20px" }}
        cover={
            <img style={{ borderRadius: "20px", maxWidth: "auto" }} alt="example" src={imageSrc} />
        }
    >
        <Meta title={title} description={
            <>
                <p style={{ color: "rgba(0, 0, 0, 0.65)", marginBottom: "4px" }}>
                    {author} </p>
                {text}
            </>
        } />
        <Footer>
            <p>${price}</p>
            <Button>Show More</Button>
        </Footer>
    </Card>
);

export default CardItem