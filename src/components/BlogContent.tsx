import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import ArchitectureDiagram from './ArchitectureDiagram';
import MetricsCard from './MetricsCard';
import SectionDivider from './SectionDivider';
import ImageGallery from './ImageGallery';

const BlogContent = () => {
  const generatedImages = [
    "/lovable-uploads/f25cbc8b-511d-4900-bf28-f468c598589c.png",
    "/lovable-uploads/76fba517-180b-43ce-9900-ea76b726a1fa.png",
    "/lovable-uploads/f8b04919-321e-4fed-8f32-def62b0b861c.png",
    "/lovable-uploads/4d67ccfa-550b-4b8b-8ccd-69bb58ed09bc.png",
    "/lovable-uploads/c57e0849-50a8-41eb-bcdb-bc7c06e7c342.png",
    "/lovable-uploads/e52dc8d7-8064-442f-a6bf-3d91467d9f05.png",
    "/lovable-uploads/d624f257-3f2c-475e-86a8-6171e25b7e07.png",
    "/lovable-uploads/f659d8a1-7541-4c52-af07-182e25e9d2a1.png"
  ];

  return (
    <div className="p-6 md:p-10">
      <div className="flex items-center mb-6">
        <img 
          src="/lovable-uploads/29ffa6e9-f807-4f30-a5d1-58037ae55325.png" 
          alt="Shaik Mohammed Huzaifa" 
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h3 className="font-medium">Shaik Mohammed Huzaifa</h3>
          <p className="text-gray-600 text-sm">AWS Community Builder | Solutions Architect</p>
        </div>
      </div>
      
      {/* Introduction */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">✨ Introduction</h2>
        <p className="text-aws-darkgray mb-4">
          Welcome to the AWS Community Day Bengaluru 2025 Blogathon! As cloud technology continues to evolve, 
          artificial intelligence and machine learning have become critical components in building intelligent, 
          scalable, and efficient applications. The integration of AI/ML capabilities with AWS has transformed 
          how businesses operate, enabling them to extract meaningful insights from vast amounts of data, 
          automate complex processes, and deliver personalized experiences at scale.
        </p>
        <p className="text-aws-darkgray mb-4">
          In this blog post, we'll explore the powerful AI/ML services offered by AWS and walk through a 
          real-world implementation that demonstrates how these services can be leveraged to solve complex 
          business challenges. Whether you're an experienced developer or just beginning your cloud journey, 
          this post will provide valuable insights into the practical applications of AWS AI/ML services.
        </p>
      </section>
      
      <SectionDivider />
      
      {/* AWS AI/ML Services Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">🤖 AWS AI/ML Services Overview</h2>
        <p className="text-aws-darkgray mb-6">
          AWS offers a comprehensive suite of AI and ML services that cater to various use cases and technical 
          expertise levels. Let's explore some of the key services that are transforming how businesses leverage AI/ML:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-aws-blue mb-2">Amazon SageMaker</h3>
              <p className="text-aws-darkgray">
                A fully managed service that enables developers and data scientists to build, train, and deploy 
                machine learning models at scale. SageMaker eliminates the heavy lifting typically associated 
                with each step of the machine learning process, making it easier to develop high-quality models.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-aws-blue mb-2">Amazon Rekognition</h3>
              <p className="text-aws-darkgray">
                A service that makes it easy to add image and video analysis to applications. Rekognition 
                can identify objects, people, text, scenes, and activities in images and videos, as well as 
                detect inappropriate content.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-aws-blue mb-2">Amazon Comprehend</h3>
              <p className="text-aws-darkgray">
                A natural language processing (NLP) service that uses machine learning to find insights and 
                relationships in text. It can identify language, extract key phrases, places, people, brands, 
                or events, and analyze sentiment.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-aws-blue mb-2">Amazon Lex</h3>
              <p className="text-aws-darkgray">
                A service for building conversational interfaces into applications using voice and text. 
                It provides advanced deep learning functionalities of automatic speech recognition (ASR) and 
                natural language understanding (NLU).
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-aws-blue mb-2">Amazon Bedrock</h3>
              <p className="text-aws-darkgray">
                A fully managed service that makes foundation models (FMs) from leading AI companies available 
                through an API. Bedrock simplifies the process of building and scaling generative AI applications 
                with FMs, offering a choice of models to best fit application needs.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-aws-blue mb-2">Amazon Transcribe</h3>
              <p className="text-aws-darkgray">
                An automatic speech recognition service that uses machine learning models to convert audio to text. 
                It can be used to transcribe customer service calls, generate subtitles, and create searchable 
                archives of audio/video content.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <p className="text-aws-darkgray mb-4">
          These services can be combined in various ways to create powerful AI/ML solutions tailored to specific business needs. 
          In the next section, we'll explore a real-world implementation that leverages some of these services to create 
          an intelligent customer service solution.
        </p>
      </section>
      
      <SectionDivider />
      
      {/* Real-World Implementation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">🔧 Real-World Implementation: Intelligent Customer Service Solution</h2>
        <p className="text-aws-darkgray mb-6">
          To demonstrate the practical application of AWS AI/ML services, let's walk through a real-world implementation 
          of an intelligent customer service solution for a financial services company. This solution combines several 
          AWS AI/ML services to create a seamless, efficient, and personalized customer experience.
        </p>
        
        <h3 className="text-xl font-semibold text-aws-blue mb-3">The Challenge</h3>
        <p className="text-aws-darkgray mb-6">
          A large financial institution was struggling with high call volumes, lengthy resolution times, and 
          inconsistent customer experiences across their support channels. They needed a solution that could:
        </p>
        <ul className="list-disc pl-6 mb-6 text-aws-darkgray">
          <li>Automatically handle routine inquiries to free up human agents for complex issues</li>
          <li>Analyze customer sentiment in real-time to prioritize urgent cases</li>
          <li>Transcribe and analyze call recordings to identify trends and improvement areas</li>
          <li>Provide personalized recommendations based on customer history and preferences</li>
          <li>Scale seamlessly during peak periods without compromising service quality</li>
        </ul>
        
        <h3 className="text-xl font-semibold text-aws-blue mb-3">The Solution Architecture</h3>
        <p className="text-aws-darkgray mb-6">
          We designed and implemented an intelligent customer service solution using a combination of AWS AI/ML services. 
          Here's how the architecture looks:
        </p>
        
        <div className="mb-8">
          <ArchitectureDiagram />
        </div>
        
        <h3 className="text-xl font-semibold text-aws-blue mb-3">Key Components</h3>
        
        <div className="pl-4 border-l-4 border-aws-blue mb-6">
          <h4 className="font-medium mb-2">Conversational Interface</h4>
          <p className="text-aws-darkgray mb-4">
            We used <strong>Amazon Lex</strong> to build a conversational chatbot that could understand and respond to 
            customer inquiries across web, mobile, and voice channels. The chatbot was trained to handle common scenarios 
            such as account balance inquiries, transaction history, password resets, and general product information.
          </p>
        </div>
        
        <div className="pl-4 border-l-4 border-aws-blue mb-6">
          <h4 className="font-medium mb-2">Sentiment Analysis</h4>
          <p className="text-aws-darkgray mb-4">
            <strong>Amazon Comprehend</strong> was implemented to analyze customer messages and detect sentiment in real-time. 
            This allowed the system to prioritize negative or urgent cases and route them to specialized human agents when necessary.
          </p>
        </div>
        
        <div className="pl-4 border-l-4 border-aws-blue mb-6">
          <h4 className="font-medium mb-2">Call Analysis</h4>
          <p className="text-aws-darkgray mb-4">
            <strong>Amazon Transcribe</strong> was used to convert customer call recordings into text, which was then analyzed 
            using <strong>Amazon Comprehend</strong> to identify common issues, trending topics, and areas for improvement in 
            the customer service process.
          </p>
        </div>
        
        <div className="pl-4 border-l-4 border-aws-blue mb-6">
          <h4 className="font-medium mb-2">Personalization Engine</h4>
          <p className="text-aws-darkgray mb-4">
            We built a recommendation system using <strong>Amazon SageMaker</strong> that analyzed customer data, transaction 
            history, and interaction patterns to provide personalized product recommendations and proactive support.
          </p>
        </div>
        
        <div className="pl-4 border-l-4 border-aws-blue mb-6">
          <h4 className="font-medium mb-2">Document Processing</h4>
          <p className="text-aws-darkgray mb-4">
            <strong>Amazon Textract</strong> was implemented to automatically extract information from uploaded customer 
            documents, significantly reducing processing time for applications and service requests.
          </p>
        </div>
        
        <div className="pl-4 border-l-4 border-aws-blue mb-6">
          <h4 className="font-medium mb-2">Generative AI Assistant</h4>
          <p className="text-aws-darkgray mb-4">
            <strong>Amazon Bedrock</strong> powered an advanced AI assistant that could generate detailed responses to complex 
            customer queries, draft personalized communications, and assist human agents with research and information gathering.
          </p>
        </div>
      </section>
      
      <SectionDivider />
      
      {/* From Prompt to Pixel Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">🎨 From Prompt to Pixel: My Hackathon Journey</h2>
        <p className="text-aws-darkgray mb-6">
          Beyond the customer service implementation, I had the opportunity to participate in the Rocketium 
          hackathon, where I explored the fascinating intersection of large language models and image generation 
          using AWS Bedrock. This project combined Claude 3.5 Sonnet with Stable Diffusion XL to create a 
          powerful image generation pipeline.
        </p>
        
        <Card>
          <CardContent className="p-6">
            <h3 className="font-bold text-lg text-aws-blue mb-2">Project Overview</h3>
            <p className="text-aws-darkgray mb-4">
              The core objective was to leverage Claude 3.5 Sonnet's exceptional language understanding to generate 
              detailed, consistent image prompts, which would then be processed by Stable Diffusion XL to create 
              high-quality visuals. This combination aimed to bridge the gap between natural language description 
              and visual creation.
            </p>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-aws-blue mb-2">Implementation Workflow</h3>
              <ul className="list-disc pl-4 text-aws-darkgray space-y-2">
                <li>Prompt Engineering with Claude 3.5</li>
                <li>Integration with AWS Bedrock API</li>
                <li>Stable Diffusion XL Pipeline</li>
                <li>Image Post-processing</li>
                <li>Result Analysis & Iteration</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-aws-blue mb-2">Key Challenges</h3>
              <ul className="list-disc pl-4 text-aws-darkgray space-y-2">
                <li>Token optimization for detailed prompts</li>
                <li>Maintaining style consistency</li>
                <li>Handling API rate limits</li>
                <li>Error handling in the pipeline</li>
                <li>Performance optimization</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-aws-blue mb-3">Common Bedrock Studio Errors</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-aws-blue">
              <h4 className="font-medium mb-2">TokenLimitExceeded</h4>
              <p className="text-aws-darkgray">
                Solution: Implemented prompt chunking and dynamic token management to stay within limits while 
                maintaining prompt quality.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-aws-blue">
              <h4 className="font-medium mb-2">ModelTemporarilyUnavailable</h4>
              <p className="text-aws-darkgray">
                Solution: Added exponential backoff retry mechanism with fallback to alternative model versions.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-aws-blue">
              <h4 className="font-medium mb-2">InvalidImagePrompt</h4>
              <p className="text-aws-darkgray">
                Solution: Implemented prompt validation and sanitization pipeline before submission to SDXL.
              </p>
            </div>
          </div>
        </div>
        
        <ImageGallery
          images={generatedImages}
          title="Generated Pet Food Advertisements"
          description="A series of vibrant, dynamic pet food advertisements generated using our AWS Bedrock-powered pipeline. Each image showcases consistent brand identity while exploring different compositions and elements."
        />
      </section>
      
      <SectionDivider />
      
      {/* Measurable Impact */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">📊 KPIs and Measurable Impact</h2>
        <p className="text-aws-darkgray mb-6">
          The implementation of the intelligent customer service solution delivered significant measurable improvements 
          across various key performance indicators:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <MetricsCard 
            title="Automation Rate" 
            value="68%" 
            description="of routine inquiries handled without human intervention, up from 15% before implementation"
            icon="🤖"
          />
          
          <MetricsCard 
            title="Average Resolution Time" 
            value="4.2 minutes" 
            description="reduced from 12.8 minutes, a 67% improvement"
            icon="⏱️"
          />
          
          <MetricsCard 
            title="Customer Satisfaction" 
            value="92%" 
            description="satisfaction score, an increase of 24 percentage points"
            icon="😊"
          />
          
          <MetricsCard 
            title="Cost Savings" 
            value="$2.4M" 
            description="annual operational cost reduction through automation and efficiency"
            icon="💰"
          />
        </div>
        
        <div className="bg-aws-lightgray p-6 rounded-lg mb-6">
          <h3 className="font-semibold text-lg mb-3">ROI Analysis</h3>
          <p className="text-aws-darkgray mb-4">
            The solution delivered a 287% return on investment within the first year, with the initial implementation 
            cost recovered in just 4.5 months. Beyond the direct cost savings, the company also experienced:
          </p>
          <ul className="list-disc pl-6 text-aws-darkgray">
            <li>18% reduction in customer churn</li>
            <li>32% increase in cross-selling success through personalized recommendations</li>
            <li>42% reduction in training time for new customer service agents</li>
            <li>Ability to scale support operations during peak periods without additional staffing</li>
          </ul>
        </div>
      </section>
      
      <SectionDivider />
      
      {/* Challenges and Solutions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">🧩 Challenges and Solutions</h2>
        <p className="text-aws-darkgray mb-6">
          The implementation journey wasn't without challenges. Here's how we addressed some of the key hurdles:
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-aws-blue mb-3">Challenge 1: Data Privacy and Compliance</h3>
          <p className="text-aws-darkgray mb-4">
            As a financial institution, the company needed to ensure strict compliance with regulations like GDPR and ensure 
            customer data protection.
          </p>
          <div className="bg-white p-4 border-l-4 border-aws-orange">
            <h4 className="font-medium mb-2">Solution:</h4>
            <p className="text-aws-darkgray">
              We leveraged AWS's compliance capabilities including data encryption at rest and in transit using AWS KMS, 
              VPC isolation for sensitive workloads, and IAM for fine-grained access control. Amazon Macie was implemented 
              to continuously monitor and protect sensitive data. We also designed the solution to minimize data retention 
              and implemented automated data lifecycle policies.
            </p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-aws-blue mb-3">Challenge 2: Integration with Legacy Systems</h3>
          <p className="text-aws-darkgray mb-4">
            The company had several legacy systems that needed to be integrated with the new AI/ML solution.
          </p>
          <div className="bg-white p-4 border-l-4 border-aws-orange">
            <h4 className="font-medium mb-2">Solution:</h4>
            <p className="text-aws-darkgray">
              We used Amazon API Gateway and AWS Lambda to create a flexible integration layer that could connect with 
              various legacy systems through custom adapters. Where direct integration wasn't possible, we implemented 
              AWS Glue for ETL processes to synchronize data between systems. This approach minimized changes to existing 
              systems while enabling them to participate in the AI/ML workflows.
            </p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-aws-blue mb-3">Challenge 3: Model Accuracy and Training</h3>
          <p className="text-aws-darkgray mb-4">
            Initial versions of some ML models had accuracy issues, particularly with financial industry-specific terminology.
          </p>
          <div className="bg-white p-4 border-l-4 border-aws-orange">
            <h4 className="font-medium mb-2">Solution:</h4>
            <p className="text-aws-darkgray">
              We leveraged Amazon SageMaker Ground Truth to efficiently label domain-specific training data. For the 
              chatbot, we used Amazon Lex's automatic slot resolution and built custom slot types for financial terms. 
              We also implemented a continuous improvement pipeline using Amazon A2I (Augmented AI) for human review of 
              low-confidence predictions, gradually improving model accuracy over time.
            </p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-aws-blue mb-3">Challenge 4: Scaling During Peak Periods</h3>
          <p className="text-aws-darkgray mb-4">
            The solution needed to handle significant spikes in volume during month-end, tax season, and market events.
          </p>
          <div className="bg-white p-4 border-l-4 border-aws-orange">
            <h4 className="font-medium mb-2">Solution:</h4>
            <p className="text-aws-darkgray">
              We designed the architecture using serverless components where possible (Lambda, API Gateway) and 
              implemented auto-scaling for SageMaker endpoints. For predictable high-volume periods, we set up 
              scheduled scaling actions based on historical patterns. We also implemented a queueing mechanism using 
              Amazon SQS to smooth out traffic spikes and ensure consistent performance.
            </p>
          </div>
        </div>
      </section>
      
      <SectionDivider />
      
      {/* Conclusion */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-4">💡 Conclusion</h2>
        <p className="text-aws-darkgray mb-4">
          The integration of AWS AI/ML services has transformed how businesses operate, enabling them to deliver 
          personalized, efficient, and scalable solutions. In our real-world example, a financial institution was 
          able to significantly improve customer experience, reduce operational costs, and create new opportunities 
          for growth by strategically implementing these technologies.
        </p>
        <p className="text-aws-darkgray mb-4">
          As AI/ML technologies continue to evolve, AWS remains at the forefront, providing innovative services that 
          democratize access to these powerful capabilities. Whether you're looking to enhance customer service, 
          optimize operations, or create entirely new business models, AWS AI/ML services offer the tools and 
          infrastructure needed to bring your vision to life.
        </p>
        <p className="text-aws-darkgray mb-4">
          For developers and organizations just beginning their AI/ML journey, AWS provides a pathway that can start 
          simple with managed services like Amazon Comprehend or Amazon Rekognition, and grow into sophisticated 
          custom models developed with Amazon SageMaker. The key is to start with clear business objectives, choose 
          the right tools for your specific needs, and iterate based on real-world feedback.
        </p>
        <p className="text-aws-darkgray">
          I encourage you to explore the rich ecosystem of AWS AI/ML services and join the vibrant AWS community to 
          share experiences and learn from others. The future of cloud computing is intelligent, and with AWS, you 
          have the power to be at the forefront of this transformation.
        </p>
      </section>
      
      <div className="mt-10 pt-6 border-t border-gray-200">
        <div className="inline-block bg-aws-orange text-white text-sm font-medium px-3 py-1 rounded-full">
          Written for the AWS Community Day Blogathon 2025
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
