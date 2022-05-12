import React, { useState } from 'react';
import './SingleApartment.css';
import styled from 'styled-components';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css/pagination';

const SingleApartment = (props) => {

    // destructure properties
    const { id, title, price, purpose, area, rooms, bath, img } = props.data;
    // just for now 
    const [wishItem, setWishItem] = useState(false);

    const addWishlist = (id) => {
        console.log(id);
        setWishItem(prevCheck => !prevCheck);
        // send response to backend

    }

    return (
        <Container>

            <ImageSlider>
                <Swiper className='single-apartment'
                    modules={[Pagination]}
                    pagination={{
                        dynamicBullets: true,
                        clickable: true
                    }}
                    spaceBetween={20}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >

                    {
                        img.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img src={item} alt="" />
                            </SwiperSlide>
                        ))
                    }

                </Swiper>

                <WishBtn isWish={wishItem} onClick={() => addWishlist(id)}>
                    <img src="/img/icon-heart.png" alt="" />
                </WishBtn>
            </ImageSlider>

            <Details>
                <Name>{title}</Name>

                <PriceWraper>
                    <Button>For {purpose == 'rent' ? 'Rent' : 'Buy'}</Button>
                    <Price>${price.toLocaleString()}</Price>
                    {
                        !props?.data?.oldPrice ? null : <Discount>${props?.data?.oldPrice}</Discount>
                    }

                </PriceWraper>

                <FeatureWraper>

                    <SingleFeature>
                        <img src="/img/icon-sqr.png" alt="" />
                        <span>{area} Sqft</span>
                    </SingleFeature>

                    <SingleFeature>
                        <img src="/img/icon-bed.png" alt="" />
                        <span>{rooms} Rooms</span>
                    </SingleFeature>

                    <SingleFeature>
                        <img src="/img/icon-bath.png" alt="" />
                        <span>{bath} Bath</span>
                    </SingleFeature>

                </FeatureWraper>
            </Details>

        </Container>
    );
};

export default SingleApartment;


// styled components

const Container = styled.div`
background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
border-radius: 8px;
`;

const ImageSlider = styled.div`
position: relative;
`;

const WishBtn = styled.div`
position: absolute;
top: 12px;
right: 12px;
z-index: 90;
height: 32px;
width: 32px;
background: ${(props) => props.isWish ? 'var(--theme-color)' : 'rgba(0, 0, 0, 0.3)'} ;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
transition: background .3s;

&:hover{
    background: var(--theme-color);
}
`;

const Details = styled.div`
padding: 1rem;
`;

const Name = styled.h3`
font-weight: 500;
font-size: 18px;
line-height: 26px;
color: var(--font-primary);
`;
const PriceWraper = styled.div`
display: flex;
align-items: center;
padding: 1rem 0rem;
`;
const Button = styled.button`
font-size: 14px;
font-weight: 500;
background: transparent;
outline: none;
border: 3px solid var(--theme-color);
border-radius: 8px;
color: var(--theme-color);
padding: 4px 8px;
margin-right: 20px;
`;
const Price = styled.p`
margin-right: 20px;
font-weight: 500;
font-size: 18px;
line-height: 26px;
color: var(--theme-color);
`;
const Discount = styled.p`
text-decoration: line-through;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #999999;
`;

const FeatureWraper = styled.div`
display: flex;
justify-content: space-between;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #666666;
`;
const SingleFeature = styled.div`
display: flex;
align-items: center;

img{
    margin-right: 9px;
}
`;