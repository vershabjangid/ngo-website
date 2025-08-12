import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './media.css';
import { Home } from './pages/web/pages/Home';
import { AdminLogin } from './pages/admin/auth/AdminLogin';
import { Dashboard } from './pages/admin/pages/Dashboard';
import { AdminPrivate } from './pages/admin/auth/AdminPrivate';
import { DashHome } from './pages/admin/pages/DashHome';
import { DashViewHomeBanner } from './pages/admin/pages/dashboard home/view/DashViewHomeBanner';
import { DashViewHomeAbout } from './pages/admin/pages/dashboard home/view/DashViewHomeAbout';
import { DashViewHomeGoals } from './pages/admin/pages/dashboard home/view/DashViewHomeGoals';
import { DashViewHomeManagement } from './pages/admin/pages/dashboard home/view/DashViewHomeManagement';
import { DashViewHomeManagementProfile } from './pages/admin/pages/dashboard home/view/DashViewHomeManagementProfile';
import { DashViewHomeGallery } from './pages/admin/pages/dashboard home/view/DashViewHomeGallery';
import { DashViewHomeTeamMember } from './pages/admin/pages/dashboard home/view/DashViewHomeTeamMember';
import { DashViewHomeTeamProfile } from './pages/admin/pages/dashboard home/view/DashViewHomeTeamProfile';
import { DashViewHomeDonation } from './pages/admin/pages/dashboard home/view/DashViewHomeDonation';
import { DashGoals } from './pages/admin/pages/DashGoals';
import { DashViewGoals } from './pages/admin/pages/dashboard goals/view/DashViewGoals';
import { DashboardGallery } from './pages/admin/pages/DashboardGallery';
import { DashViewGallery } from './pages/admin/pages/dashboard gallery/view/DashViewGallery';
import { DashViewParagraphHeading } from './pages/admin/pages/dashboard goals/view/DashViewParagraphHeading';
import { DashUpdateGoalsHeading } from './pages/admin/pages/dashboard goals/update/DashUpdateGoalsHeading';
import { DashUpdateGoalsParagraph } from './pages/admin/pages/dashboard goals/update/DashUpdateGoalsParagraph';
import { Gallery } from './pages/web/pages/Gallery';
import { DashAbout } from './pages/admin/pages/DashAbout';
import { DashViewAboutBanner } from './pages/admin/pages/dashboard about/view/DashViewAboutBanner';
import { About } from './pages/web/pages/About';
import { DashViewAboutParagraphSection } from './pages/admin/pages/dashboard about/view/DashViewAboutParagraphSection';
import { DashViewAboutParagraph } from './pages/admin/pages/dashboard about/view/DashViewAboutParagraph';
import { DashViewGalleryBanner } from './pages/admin/pages/dashboard gallery/view/DashViewGalleryBanner';
import { DashNews } from './pages/admin/pages/DashNews';
import { DashViewNewsBanner } from './pages/admin/pages/dashboard news/view/DashViewNewsBanner';
import { NewsEvents } from './pages/web/pages/News&Events';
import { DashViewNews } from './pages/admin/pages/dashboard news/view/DashViewNews';
import { Contact } from './pages/web/pages/Contact';
import { DashContact } from './pages/admin/pages/DashContact';
import { DashViewContactBanner } from './pages/admin/pages/dashboard contact/view/DashViewContactBanner';
import { DashQueries } from './pages/admin/pages/DashQueries';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/news' element={<NewsEvents />} />

          <Route path='/admin-login' element={<AdminLogin />} />
          <Route element={<AdminPrivate />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/dash-home' element={<DashHome />} />
            <Route path='/view-home-banner-slides' element={<DashViewHomeBanner />} />
            <Route path='/view-home-about-section' element={<DashViewHomeAbout />} />
            <Route path='/view-home-goals' element={<DashViewHomeGoals />} />
            <Route path='/view-home-management' element={<DashViewHomeManagement />} />
            <Route path='/view-home-management-profile' element={<DashViewHomeManagementProfile />} />
            <Route path='/view-home-gallery' element={<DashViewHomeGallery />} />
            <Route path='/view-our-team-content' element={<DashViewHomeTeamMember />} />
            <Route path='/view-home-team-card' element={<DashViewHomeTeamProfile />} />
            <Route path='/view-home-donation' element={<DashViewHomeDonation />} />

            {/* dash goals  */}
            <Route path='/dash-goals' element={<DashGoals />} />
            <Route path='/view-home-Goals-cards' element={<DashViewGoals />} />
            <Route path='/view-home-paragraph-heading' element={<DashViewParagraphHeading />} />
            <Route path='/update-home-paragraph-heading' element={<DashUpdateGoalsHeading />} />
            <Route path='/update-home-paragraph-paragraph' element={<DashUpdateGoalsParagraph />} />

            {/* dash gallery  */}
            <Route path='/dash-gallery' element={<DashboardGallery />} />
            <Route path='/view-gallery' element={<DashViewGallery />} />
            <Route path='/view-gallery-banner' element={<DashViewGalleryBanner />} />
            {/* about  us */}
            <Route path='/dash-about' element={<DashAbout />} />
            <Route path='/view-about-banner' element={<DashViewAboutBanner />} />
            <Route path='/view-about-paragraph' element={<DashViewAboutParagraphSection />} />
            <Route path='/view-all-about-paragraph' element={<DashViewAboutParagraph />} />

            {/* news */}
            <Route path='/dash-news' element={<DashNews />} />
            <Route path='/view-news-banner' element={<DashViewNewsBanner />} />
            <Route path='/view-news' element={<DashViewNews />} />
            <Route path='/view-all-about-paragraph' element={<DashViewAboutParagraph />} />

            {/* contact */}
            <Route path='/dash-contact' element={<DashContact />} />
            <Route path='/view-contact-banner' element={<DashViewContactBanner />} />
            <Route path='/dash-queries' element={<DashQueries />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
