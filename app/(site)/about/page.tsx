import AboutSection from "../components/AboutSection";

export default function About() {
  console.log("About page rendered");
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <AboutSection />
    </div>
  );
}
