
import { Button } from "@/components/ui/button";
import BlogHeader from "@/components/BlogHeader";
import BlogContent from "@/components/BlogContent";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-aws-lightgray">
      <BlogHeader />
      
      <main className="flex-grow w-full max-w-5xl mx-auto px-4 py-8">
        <article className="bg-white shadow-md rounded-lg overflow-hidden">
          <BlogContent />
          <SocialShare />
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
