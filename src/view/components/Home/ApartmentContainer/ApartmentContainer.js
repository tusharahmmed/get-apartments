import React, { useEffect, useState } from 'react';
import './AppartmentContainer.css';
import styled from 'styled-components';
import SingleApartment from './SingleApartment/SingleApartment';

import { Scrollbar, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import { device } from '../../../../utils/screenSize';


const ApartmentContainer = () => {

    const [apartments, setApartments] = useState(null);

    useEffect(() => {
        fetch('/apartments.json')
            .then(res => res.json())
            .then(data => setApartments(data))
    }, [])

    return (
        <Container className='section-padding'>

            <TitleSection>
                <Title>All Apartments</Title>
                <ShowAll className='swiper-button-next'><span>Show All</span> <img src="/img/icon-arrow.png" alt="" /></ShowAll>
            </TitleSection>

            <ApartmentWraper>

                {
                    !apartments ? 'No Appartment Found' : <Swiper className='appartment-slider'
                        modules={[Scrollbar, Navigation]}
                        noSwiping={true}
                        noSwipingClass={'swiper-slide'}
                        spaceBetween={30}
                        slidesPerView={4}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        scrollbar={{ draggable: true }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                        }}
                        breakpoints={
                            {
                                // when window width is >= 100px
                                100: {
                                    slidesPerView: 1,
                                    spaceBetween: 20
                                },
                                // when window width is >= 650px
                                650: {
                                    slidesPerView: 2,
                                    spaceBetween: 30
                                },
                                // when window width is >= 900px
                                900: {
                                    slidesPerView: 3,
                                    spaceBetween: 30
                                },
                                // when window width is >= 1200px
                                1200: {
                                    slidesPerView: 4,
                                    spaceBetween: 30
                                },
                                // when window width is >= 1600px
                                1600: {
                                    slidesPerView: 5,
                                    spaceBetween: 30
                                }
                            }
                        }
                    >

                        {
                            apartments.map(item => (
                                <SwiperSlide key={item.id}>
                                    <SingleApartment data={item} />
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                }

            </ApartmentWraper>

        </Container>
    );
};

export default ApartmentContainer;


// styled components

const Container = styled.section`
@media ${device.laptop}{
    padding-top: 1rem;
}
@media ${device.pad}{
    padding-top: 2rem;
}
@media ${device.mobileL}{
    padding-top: 4rem;
}
`;


const TitleSection = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

const Title = styled.h2`
color: var(--font-primary);
font-weight: 500;
font-size: 32px;
line-height: 46px;

@media ${device.mobileL}{
    font-size: 26px;
}
`;

const ShowAll = styled.button`
color: var(--theme-color);
font-weight: 500;
font-size: 16px;
line-height: 23px;
letter-spacing: 0.02em;
cursor: pointer;
outline: none;
background: transparent;
border: none;
`;

const ApartmentWraper = styled.div`
padding-top: 1rem;
`;