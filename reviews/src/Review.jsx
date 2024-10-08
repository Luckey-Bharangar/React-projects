import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

    const [index, setIndex] = useState(0)
    const {name, image, job, text} = people[index]

    // const prevHandler = () => {
    //     setIndex(() =>{
    //         let newIndex = index - 1
    //         if(newIndex<0){
    //             return people.length - 1
    //         }
    //         return newIndex
    //     })
    // }

    // const nextHandler = () => {
    //     setIndex(() =>{
    //         let newIndex =  index + 1
    //         if(newIndex > people.length-1){
    //             return 0
    //         }
    //         return newIndex
    //     })
    // }

    const checkNumber = (number) => {
        if (number > people.length - 1) {
          return 0;
        }
        if (number < 0) {
          return people.length - 1;
        }
        return number;
      };
      const nextHandler = () => {
        setIndex((index) => {
          let newIndex = index + 1;
          return checkNumber(newIndex);
        });
      };
      const prevHandler = () => {
        setIndex((index) => {
          let newIndex = index - 1;
          return checkNumber(newIndex);
        });
      };
      const randomHandler = () => {
        let randomNumber = Math.floor(Math.random() * people.length);
        if (randomNumber === index) {
          randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
      };


  return (
    <article className='review'>
        <div className="img-container">
            <img src={image} alt={name} className='person-img' />
            <span className="qoute-icon">
                <FaQuoteRight/>
            </span>
        </div>
        <h4 className="author"> {name} </h4>
        <p className="job"> {job} </p>
        <p className="info"> {text} </p>
        <div className="button-container">
            <button className='prev-btn' onClick={prevHandler}>
                <FaChevronLeft/>
            </button>
            <button className='next-btn' onClick={nextHandler}>
                <FaChevronRight/>
            </button>
        </div>
        <button className='random-btn' onClick={randomHandler}>
            surprise me
        </button>
    </article>
  )
}

export default Review
