import React from 'react'
import HTMLFlipBook from 'react-pageflip';
import Page from './Page';



const MyBook = () => {
    const totalPages = 10;
    const pages = [];
    for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
      pages.push(<Page key={pageNumber} number={pageNumber}>Page text {pageNumber}</Page>);
    }
  return (
    <div className='Book'>
        <HTMLFlipBook 
        width={300}
        height={300}
        // showCover={true}
        >
    {pages}
        </HTMLFlipBook>
    </div>
  )
}

export default MyBook