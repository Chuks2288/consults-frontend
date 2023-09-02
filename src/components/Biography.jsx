import React from 'react';
import AboutStyles from '../styles/AboutStyles.scss';
import { jeff1, jeff2, jeff3 } from '../images';

const Biography = () => {
    return (
        <div className='biography'>
            <div className="biography__top">
                <h2>Aona H. Jefferson</h2>
                <span>CEO, Founder & Secretary</span>
                <div className="">
                    <p>
                        Ms. Jefferson began her teaching career in her hometown of Washington, DC in 1970 at Coolidge HS.  In 1972, she was among the Charter Teachers who opened the new HD Woodson SHS. She served 27 years as a Health and Physical Education teacher in DC Public Schools. She coached a variety of athletic teams amassing many championships over an 18-year period from 1971 - 1989. She was among the first coaches of the Girls’ Varsity Track program, which began in 1971 and Girls’ Varsity Softball in 1974. She is the only female track coach to win the Outdoor Interhigh (City) Girls’ Varsity Track Championships in both the West and East Divisions (Coolidge and Woodson).
                    </p>

                    <p>
                        During the second year of the Girls’ Varsity Track program, Coolidge Girls’ Indoor Track Team won 1st place in all ten events! At Woodson SHS, Ms. Jefferson was the first to coach- Girls’ Varsity Track, Softball, Cheerleaders, and Boys’ Soccer. She also coached Varsity Volleyball. During the first ten years of Woodson’s opening and Girls’ Varsity Softball, her varsity softball teams won three East Division Championships, four Interhigh (City) Championships and three Tournament Championships. Therefore, adding to the winning tradition of the
                        “Tower of Power!”
                    </p>

                    <p>
                        During the second year of the Girls’ Varsity Track program, Coolidge Girls’ Indoor Track Team won 1st place in all ten events! At Woodson SHS, Ms. Jefferson was the first to coach- Girls’ Varsity Track, Softball, Cheerleaders, and Boys’ Soccer. She also coached Varsity Volleyball. During the first ten years of Woodson’s opening and Girls’ Varsity Softball, her varsity softball teams won three East Division Championships, four Interhigh (City) Championships and three Tournament Championships. Therefore, adding to the winning tradition of the
                        “Tower of Power!”
                    </p>

                    <p>
                        During the second year of the Girls’ Varsity Track program, Coolidge Girls’ Indoor Track Team won 1st place in all ten events! At Woodson SHS, Ms. Jefferson was the first to coach- Girls’ Varsity Track, Softball, Cheerleaders, and Boys’ Soccer. She also coached Varsity Volleyball. During the first ten years of Woodson’s opening and Girls’ Varsity Softball, her varsity softball teams won three East Division Championships, four Interhigh (City) Championships and three Tournament Championships. Therefore, adding to the winning tradition
                        of the “Tower of Power!”
                    </p>

                </div>

            </div>
            <div className="biography__bottom">
                <img src={jeff3} alt="" />
            </div>
        </div>
    )
}

export default Biography;