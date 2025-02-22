import React from 'react';

const HomeThreeSingleReviews = ({image,name,text}) => {
    return (
        <>
            <div className="item">
                <div className="review-box">
                    <div className="members-rating">
                        <ul>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                        </ul>
                    </div>
                    <div className="members-text">
                        <p>{!text ?' Lorem ipsum dolor sit amet, coning ctetur adipisicing elit, sed do it on eiusmod tempor incididunt me ut labore et dolore.' : text}</p>
                    </div>
                    <div className="about-author d-flex align-items-center">
                        <div className="author-ava">
                            <img src={`img/membership/members-icon-${image}.png`} alt="" />
                        </div>
                        <div className="author-desination author-desination-2">
                            <h4>{name}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeThreeSingleReviews;