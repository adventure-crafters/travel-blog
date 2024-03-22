'use client';

import './travelBlogPhotos.css';

const photos = [
  '/images/insta-1.jpg',
  '/images/insta-2.jpg',
  '/images/insta-3.jpg',
  '/images/insta-4.jpg'
];

const TravelBlogPhotos = () => {
  return (
    <div className='fh5co-instagram'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 col-md-offset-0 text-center fh5co-heading'>
            <h2>
              <span>Instagram Posts</span>
            </h2>
          </div>
        </div>
      </div>
      <div className='row'>
        {photos.map((url, i) => (
          <div key={i} className='col-md-3 nopadding '>
            <div
              className='insta'
              style={{ backgroundImage: `url(${url})` }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelBlogPhotos;
