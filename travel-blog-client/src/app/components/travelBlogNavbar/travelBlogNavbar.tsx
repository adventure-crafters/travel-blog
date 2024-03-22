'use client';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import './travelBlogNavbar.css';

interface TravelBlogNavbarProps {
  shouldDisplayLogo: boolean;
}

const TravelBlogNavbar = ({ shouldDisplayLogo }: TravelBlogNavbarProps) => {
  return (
    <div className='travel-blog-nav'>
      <Navbar expand='sm' className='top-menu'>
        <Container>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav>
              <Link href='/'>Home</Link>
              <Link href='/posts'>Posts</Link>
              <Link href='/about'>About</Link>
              <Link href='/contact'>Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {shouldDisplayLogo && (
        <div className='col-xs-12 text-center logo-menu'>
          <div id='travel-blog-logo'>
            <h1>
              <Link href='/'>
                Adventures<span>.</span>
                <small>Blog</small>
              </Link>
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};
export default TravelBlogNavbar;
