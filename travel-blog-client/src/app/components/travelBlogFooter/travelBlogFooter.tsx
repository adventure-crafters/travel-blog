'use client';
import Link from 'next/link';
import './travelBlogFooter.css';

const TravelBlogFooter = () => {
  return (
    <footer className='travel-blog-footer' role='contentinfo'>
      <div className='container'>
        <div className='row row-pb-md'>
          <div className='col-md-4 travel-blog-widget'>
            <h4>Adventures</h4>
            <p>
              Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
              reprehenderit. Eos cumque dicta adipisci architecto culpa amet.
            </p>
          </div>
          <div className='col-md-4 col-md-push-1'>
            <h4>Links</h4>
            <ul className='travel-blog-footer-links'>
              <Link href='/'>Home</Link>
              <Link href='/posts'>Posts</Link>
              <Link href='/about'>About</Link>
              <Link href='/contact'>Contact</Link>
            </ul>
          </div>

          <div className='col-md-4 col-md-push-1'>
            <h4>Contact Information</h4>
            <p>Address 198 West 21th Street, Suite 721 New York NY 10016</p>
            <p>minca.narcisa@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TravelBlogFooter;
