import React from 'react';
import AboutStyles from '../styles/AboutStyles.scss';
import { boardNames } from '../data';
import { Link } from 'react-router-dom';
import { jeff1 } from '../images';

const Board = () => {
    return (
        <div className='main__board'>
            <div className="board">
                <div className="board__top">
                    <h2>Board of Directors</h2>
                    <p>
                        At Jefferson Educational Consulting, our board members are a distinguished group of visionaries, leaders, and experts who steer our organization's mission with unparalled dedication. Their collective wisdom, strategic insights, and passion for positive change drive our workshops, seminars, and initiatives that empower individuals and organization alike.
                    </p>
                </div>
                <div className="board__middle">
                    {boardNames.map((item) => (
                        <div className="board__middle-content">
                            <div className="board__middle-photo">
                                <img src={item.photos} alt="" />
                            </div>
                            <div className="board__middle-info">
                                <h2>{item.name}</h2>
                                <p>{item.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="board__bottom">
                <div className="board__bottom-photo">
                    <img src={jeff1} alt="" />
                </div>
                <div className="board__bottom-content">
                    <h2>Connect with our Board of Directors</h2>
                    <p>
                        Each board member brings a wealth of experience and a unique perspective to the table, contributing to our unwavering commitment to excellence.
                    </p>
                    <Link to="/contact" className='btn consult__btn'> Free Consultation</Link>
                </div>
            </div>
        </div>
    )
}

export default Board