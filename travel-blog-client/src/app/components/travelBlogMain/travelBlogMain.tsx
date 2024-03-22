'use client';

import Link from 'next/link';
import './travelBlogMain.css';
import Image from 'next/image';

const articles = [
  {
    date: 'Nov. 15th 2016',
    title: 'Modeling & Stylist in USA',
    category: 'Lifestyle',
    image: '/images/blog-1.jpg',
    description: `Far far away, behind the word mountains, far from the
      countries Vokalia and Consonantia, there live the blind
      texts. Dignissimos asperiores vitae velit veniam totam
      fuga molestias accusamus alias autem provident. Odit ab
      aliquam dolor eius. Dignissimos asperiores vitae velit
      veniam totam fuga molestias accusamus alias autem
      provident. Odit ab aliquam dolor eius.`,
    url: '/'
  },
  {
    date: 'Nov. 15th 2016',
    title: 'Modeling & Stylist in USA',
    category: 'Lifestyle',
    image: '/images/blog-1.jpg',
    description: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.`,
    url: '/'
  },
  {
    date: 'Nov. 15th 2016',
    title: 'Modeling & Stylist in USA',
    category: 'Lifestyle',
    image: '/images/blog-1.jpg',
    description: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.`,
    url: '/'
  },
  {
    date: 'Nov. 15th 2016',
    title: 'Modeling & Stylist in USA',
    category: 'Lifestyle',
    image: '/images/blog-1.jpg',
    description: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.`,
    url: '/'
  },
  {
    date: 'Nov. 15th 2016',
    title: 'Modeling & Stylist in USA',
    category: 'Lifestyle',
    image: '/images/blog-1.jpg',
    description: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.`,
    url: '/'
  }
];

const categories = [
  { title: 'Lifestyle', url: '/' },
  { title: 'Web Development', url: '/' },
  { title: 'Web Design', url: '/' },
  { title: 'Nature', url: '/' },
  { title: 'Life', url: '/' },
  { title: 'Entertainment', url: '/' }
];

const Article = ({ article }: { article: any }) => {
  return (
    <div className='travel-blog'>
      <div className='title title-pin text-center'>
        <span className='posted-on'>Nov. 15th 2016</span>
        <h3>
          <Link href={article.url}>{article.title}</Link>
        </h3>
        <span className='article-category'>{article.category}</span>
      </div>
      <a href='#'>
        <Image
          className='img-responsive'
          width={300}
          height={300}
          src={article.image}
          alt={article.title}
        />
      </a>
      <div className='blog-text text-center'>
        <p>{article.description}</p>
      </div>
    </div>
  );
};

const LatestPosts = ({ article }: { article: any }) => (
  <div className='blog-entry'>
    <a href='#'>
      <Image
        src={article.image}
        width={120}
        height={120}
        className='img-responsive'
        alt={article.title}
      />
      <div className='desc'>
        <span className='date'>Dec. 25, 2016</span>
        <h3>{article.title}</h3>
      </div>
    </a>
  </div>
);

const Category = ({ category }: { category: any }) => (
  <Link href={category.url}>{category.title}</Link>
);

const TravelBlogMain = () => {
  return (
    <div className='travel-blog-content'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-9 col-padded-right'>
            <div className='row'>
              {articles.map((article, i) => {
                return (
                  <div key={i} className={i === 0 ? 'col-md-12' : 'col-md-6'}>
                    <Article article={article} />
                  </div>
                );
              })}
            </div>
          </div>

          <div className='col-md-3'>
            <div className='side'>
              <div className='col-md-12 col-md-offset-0 text-center fh5co-heading fh5co-heading-sidebar'>
                <h2>
                  <span>About Me</span>
                </h2>
              </div>
              <div className='travel-blog-staff'>
                <Image
                  src='/images/user-2.jpg'
                  width={140}
                  height={140}
                  alt='Free HTML5 Templates by FreeHTML5.co'
                />
                <h3>Jean Smith</h3>
                <strong className='role'>CEO, Founder</strong>
                <p>
                  Quos quia provident conse culpa facere ratione maxime commodi
                  voluptates id repellat velit eaque aspernatur expedita.
                </p>
              </div>
            </div>
            <div className='side'>
              <div className='col-md-12 col-md-offset-0 text-center fh5co-heading fh5co-heading-sidebar'>
                <h2>
                  <span>Latest Posts</span>
                </h2>
              </div>
              {articles.slice(0, 3).map((article, i) => (
                <LatestPosts key={i} article={article} />
              ))}
            </div>
            <div className='side'>
              <div className='col-md-12 col-md-offset-0 text-center fh5co-heading fh5co-heading-sidebar'>
                <h2>
                  <span>Category</span>
                </h2>
              </div>
              <ul className='category'>
                {categories.map((category, i) => (
                  <Category key={i} category={category} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelBlogMain;
