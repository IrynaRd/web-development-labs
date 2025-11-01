import react from "react";
import { StyledHeader, IconsWrapper } from "./Header.styled";
import {
    BookOutlined,
    TwitterOutlined,
    InstagramOutlined,
    FacebookOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from "@ant-design/icons";

const Header = () => (
    <StyledHeader title="Book Shop">
        <div>
            <IconsWrapper>
                <BookOutlined/>
            </IconsWrapper>
            <p>Book Shop</p>
        </div>
        <div>
            <IconsWrapper>
                <TwitterOutlined />

                <FacebookOutlined />

                <InstagramOutlined />
            </IconsWrapper>
        </div>
        <div>
            <IconsWrapper>
                <SearchOutlined />

                <ShoppingCartOutlined />
            </IconsWrapper>
        </div>
    </StyledHeader>
);

export default Header;