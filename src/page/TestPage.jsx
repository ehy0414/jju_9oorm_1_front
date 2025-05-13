import { KAKAO_AUTH_URL } from "../login/OAuth";
import kakao_login from "../assets/kakao_login.png";
import styled from "styled-components";
import api from "../api/axios";
import { useState } from "react";

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
    const [input1,setInput1] = useState("");
    const [input2,setInput2] = useState("");
    const [input3,setInput3] = useState("");

    const onChange1 = (e) => {
        setInput1(e.target.value);
    }
    const onChange2 = (e) => {
        setInput2(e.target.value);
    }
    const onChange3 = (e) => {
        setInput3(e.target.value);
    }

    const onSubmit = async() => {
        const data = {
            input1 : input1,
            input2 : input2,
            input3 : input3
        }
        try {
            const res = await api.post(``,{data});
            console.log(res)
        } catch (error) {
            console.error(error);
        }
    }
    return(
        <Wrapper>
            <form onSubmit={onSubmit}>
                <div>
                    <input type="text" onChange={onChange1}/>
                </div>
                <div>
                    <input type="text" onChange={onChange2}/>
                </div>
                <div>
                    <input type="text" onChange={onChange3}/>
                </div>
                <div>
                    <button type="submit">제출하기</button>
                </div>
            </form>
            <KakaoLink href={KAKAO_AUTH_URL} className="kakaobtn">
                <KakaoImg src={kakao_login} />
            </KakaoLink>
        </Wrapper>
    )
}

export default TestPage;