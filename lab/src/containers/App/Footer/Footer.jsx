import React from "react";
import {
    Wrapper,
    IconsWrapper,
    LogoWrapper,
    StyledText,
    IconBase,
    TextBlock,
    TopRow,
    HorizontalLine,
} from "./Footer.styled";

import {
    TwitterOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    FacebookOutlined,
    BookOutlined,
} from "@ant-design/icons";

const Footer = () => {
    return (
        <Wrapper>
            <TopRow>
                <TextBlock>
                    <h1>Book Shop</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </TextBlock>

                <LogoWrapper>
                    <IconBase component={BookOutlined} />
                </LogoWrapper>

                <IconsWrapper>
                    <IconBase component={FacebookOutlined} color="#00d9ff" />
                    <IconBase component={TwitterOutlined} color="#03A9F4" />
                    <IconBase component={LinkedinOutlined} color="#007AB9" />
                    <IconBase component={InstagramOutlined} color="#E1306C" />
                </IconsWrapper>
            </TopRow>

            <HorizontalLine />
            <StyledText>
                © Book Shop all rights reserved
            </StyledText>
        </Wrapper>
    );
};

export default Footer;