import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "../src/components/header/Header";
import HeroSection from "./components/herosection/HeroSection";
import ProcessSection from "./components/process/ProcessSection";
import UploadSection from "./components/upload/UploadSection";
import VoiceSection from "./components/voice/VoiceSection";
import PreviewSection from "./components/preview/PreviewSection";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ProcessSection />
      <UploadSection />
      <VoiceSection />
      <PreviewSection />
      <Footer />
    </div>
  );
}

export default App;
