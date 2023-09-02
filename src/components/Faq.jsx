import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ServiceStyles from '../styles/ServiceStyles.scss';
import { dropdown } from '../redux/slice/searchSlice';
import { toggleDropdwn } from '../redux/slice/searchSlice';
import { AiOutlineMinus } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import { jeff3 } from '../images';



const Faq = () => {

    const dispatch = useDispatch();
    const { dropdown } = useSelector((state) => state.search);

    const faqDropDown = () => {
        dispatch(toggleDropdwn())
    }

    return (
        <div className="faq">
            <div className="faq__image">
                <img src={jeff3} alt="" />
            </div>
            <div className="faq__question">
                <h2>Frequently Asked <br /> Questions</h2>
                <p>
                    We understand that you might have questions, and we're here to provide you with the answers you need. Our commitment to transparency means that we're ready to address your most common injuries about our services, workshops, seminars, and everything in between.
                </p>

                <div className="faq__dropdown "
                    onClick={faqDropDown}
                >
                    <h3>How to get started</h3>

                    <span>
                        {dropdown ? <AiOutlineMinus /> : <BiChevronDown />}
                    </span>

                </div>

                <div className="faq__answer-head">
                    {
                        dropdown &&
                        <p className='faq__answer'>
                            Embarking on a transformative journey is just a step away. Allow us to guide you toward success
                            by taking taking these simple steps. Connect with us to discuss your goals and needs, explore our range of workshops and seminars, and let us tailor a customized plan that aligns perfectly with
                            your aspirations. With our expertise together, we'll achieve remarkable results right from the very start.
                        </p>
                    }
                </div>
            </div>
        </div>
    )
}



export default Faq;