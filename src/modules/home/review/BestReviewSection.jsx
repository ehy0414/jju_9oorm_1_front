import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import img from "../images/cake.png";

const SectionWrapper = styled.section`
  padding: 15px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const ReviewCard = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 12px;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 10px;
  margin-top: 2px;
`;

const Name = styled.span`
  font-weight: 500;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  color: #ffc107;
  font-size: 14px;
`;

const ReviewText = styled.p`
  margin-top: 12px;
  font-size: 14px;
  color: #333;
`;

const reviews = [
  {
    id: 1,
    name: "홍길동",
    rating: 4.5,
    text: "정말 유익한 수업이었어요! 선생님 설명이 귀에 쏙쏙 들어와요.",
    profileImg: "https://via.placeholder.com/40"
  },
  {
    id: 2,
    name: "김영희",
    rating: 5.0,
    text: "처음엔 걱정했는데 재밌고 쉽게 배울 수 있었어요!",
    profileImg: "https://via.placeholder.com/40"
  },
  {
    id: 3,
    name: "홍길동",
    rating: 5.0,
    text: "처음엔 걱정했는데 재밌고 쉽게 배울 수 있었어요!",
    profileImg: "https://via.placeholder.com/40"
  }
];

export function BestReviewSection() {

    const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating); // 정수 부분
    const hasHalfStar = rating % 1 >= 0.5; // 0.5 이상이면 반개

    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={`full-${i}`} color="#ffc107" />);
    }

    if (hasHalfStar) {
        stars.push(<FaStar key="half" color="#ffc107" style={{ opacity: 0.5 }} />);
    }

    // 나머지 빈 별 (최대 5개까지 맞추기)
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<FaStar key={`empty-${i}`} color="#e0e0e0" />);
    }

    return stars;
    };


  return (
    <SectionWrapper>
      <Title>수강생 베스트 리뷰</Title>
      {reviews.map((review) => (
        <ReviewCard key={review.id}>
          <TopRow>
            <Profile>
              <ProfileImg src={img} alt={`프로필`} />
              <Name>{review.name}</Name>
            </Profile>
                <Rating>{renderStars(review.rating)}</Rating>
          </TopRow>
          <ReviewText>{review.text}</ReviewText>
        </ReviewCard>
      ))}
    </SectionWrapper>
  );
}
