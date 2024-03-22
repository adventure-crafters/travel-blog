'use client';

import Image from 'next/image';
import './travelBlogPopularPosts.css';
import Link from 'next/link';

//TODO: props - articles with tag 'popular' - (consider only 4 articles to keep the format)
const articles = [
  {
    title: 'Conquer The World',
    image: '/images/blog-1.jpg',
    url: '/'
  },
  {
    title: 'List Minimal Design',
    image: '/images/blog-2.jpg',
    url: '/'
  },
  {
    title: 'Modeling Spotted',
    image: '/images/blog-1.jpg',
    url: '/'
  },
  {
    title: 'Around The World',
    image: '/images/blog-2.jpg',
    url: '/'
  }
];

const TravelBlogPopularPosts = () => {
  const Article = ({ article }: { article: any }) => {
    return (
      <div className='col-md-3'>
        <div className='travel-blog'>
          <Link href={article.url}>
            <Image
              className='img-responsive'
              src={article.image}
              width={200}
              height={180}
              alt={article.title}
            />
            <div className='blog-text'>
              <h3>{article.title}</h3>
            </div>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className='travel-blog-popular'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 col-md-offset-0 text-center fh5co-heading'>
            <h2>
              <span>Popular Post</span>
            </h2>
          </div>
        </div>
        <div className='row'>
          {articles.map((article, index) => (
            <Article key={index} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelBlogPopularPosts;
