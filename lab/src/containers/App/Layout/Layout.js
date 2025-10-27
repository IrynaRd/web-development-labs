import react from "react";
import { StyledHeader, IconsWrapper } from "./Layout.styles";
import {
    BookOutlined,
    TwitterOutlined,
    InstagramOutlined,
    FacebookOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from "@ant-design/icons";

const Layout = () => (
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

export default Layout;