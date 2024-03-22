'use client';

import Link from 'next/link';
import './travelBlogHero.css';

//TODO: props - articles with tag 'featured' - (always 3 articles to keep the format)

const TravelBlogHero = () => {
  return (
    <div className='travel-blog-hero container'>
      <div className='row'>
        <div className='col-md-8 main-featured'>
          <Link href='/about'>
            <h1 className='main-featured-text'>
              Not Every Project Needs To Be Perfect
            </h1>
            <p className='main-featured-text'>
              Free html5 templates Made by freehtml5.co
            </p>
          </Link>
        </div>
        <div className='col-md-4'>
          <Link
            href='/'
            className='featured text-center'
            style={{ backgroundImage: 'url(images/img_bg_1.jpg)' }}
          >
            <div className='desc'>
              <span className='date'>Dec 25, 2016</span>
              <h3>Every Start has an End</h3>
              <span className='category'>Inspirational</span>
            </div>
          </Link>
          <Link
            href='#'
            className='featured text-center'
            style={{ backgroundImage: 'url(images/img_bg_2.jpg)' }}
          >
            <div className='desc'>
              <span className='date'>Dec 25, 2016</span>
              <h3>Most Beautiful Website in 2016</h3>
              <span className='category'>Inspirational</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TravelBlogHero;
