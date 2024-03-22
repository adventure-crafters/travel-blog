import TravelBlogFooter from './components/travelBlogFooter/travelBlogFooter';
import TravelBlogHero from './components/travelBlogHero/travelBlogHero';
import TravelBlogMain from './components/travelBlogMain/travelBlogMain';
import TravelBlogNavbar from './components/travelBlogNavbar/travelBlogNavbar';
import TravelBlogPhotos from './components/travelBlogPhotos/travelBlogPhotos';
import TravelBlogPopularPosts from './components/travelBlogPopularPosts/travelBlogPopularPosts';

export default function Home() {
  return (
    <>
      <TravelBlogNavbar shouldDisplayLogo />
      <TravelBlogHero />
      <TravelBlogPopularPosts />
      <TravelBlogMain />
      <TravelBlogPhotos />
      <TravelBlogFooter />
    </>
  );
}
