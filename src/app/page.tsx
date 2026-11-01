import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ToolsSection from "@/components/ToolsSection";
import ProjectsSection from "@/components/ProjectsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#07060A] text-[#FBFBFD] selection:bg-[#FF1F8E] selection:text-white">
      {/* Interactive trailing cursor */}
      <CustomCursor />

      {/* Editorial navigation header */}
      <Navbar />

      {/* Section 01: Cinematic sequence intro */}
      <HeroSection />

      {/* Section 02: About designer & ethos */}
      <AboutSection />

      {/* Section 03: My Creative Tools (Orbit composition from PDF Page 1) */}
      <ToolsSection />

      {/* Section 04: Selected in-depth case studies (Vuzhavu, AD Trucks, Skincare) */}
      <ProjectsSection />

      {/* Section 05: Creative Gallery (Logos, Posters, Graphics, Thumbnails, Packaging, Web, Video) */}
      <GallerySection />

      {/* Section 06: Client Enquiry & collaboration form */}
      <ContactSection />

      {/* Studio footer */}
      <Footer />
    </main>
  );
}
