import { KAKAO_AUTH_URL } from "../login/OAuth";
import kakao_login from "../assets/kakao_login.png";
import styled from "styled-components";

const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`;

const KakaoLink = styled.a`
    margin: 40%;
`;

const KakaoImg = styled.img `
    margin-top: 10%;
    object-fit: cover;
    image-rendering: auto;
`;

const TestPage = () => {
    return(
        <Wrapper>
            <KakaoLink href={KAKAO_AUTH_URL} className="kakaobtn">
                <KakaoImg src={kakao_login} />
            </KakaoLink>
        </Wrapper>
    )
}

export default TestPage;