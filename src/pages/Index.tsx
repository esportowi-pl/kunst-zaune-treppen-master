
import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import IntroSection from '@/components/home/IntroSection';
import ProductsGallery from '@/components/home/ProductsGallery';
import ProcessTimeline from '@/components/home/ProcessTimeline';
import PortfolioGallery from '@/components/home/PortfolioGallery';
import TestimonialsElegant from '@/components/home/TestimonialsElegant';
import StatsBar from '@/components/home/StatsBar';
import CtaElegant from '@/components/home/CtaElegant';

const Index = () => {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <IntroSection />
      <ProductsGallery />
      <ProcessTimeline />
      <PortfolioGallery />
      <TestimonialsElegant />
      <StatsBar />
      <CtaElegant />
    </>
  );
};

export default Index;
