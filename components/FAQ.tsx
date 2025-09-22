import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const FAQ = () => {
  const faqItems = [
    {
      question: "How did the brand get started?",
      answer: "Our brand was founded in 2015 with a mission to provide comfortable, high-quality footwear solutions. It all began when our founder experienced foot pain and couldn't find products that offered both comfort and style."
    },
    {
      question: "What makes Stepp's different from our competitors?",
      answer: "Stepp's stands out through our innovative technology, premium materials, and commitment to customer satisfaction. Our products feature patented comfort technology that you won't find anywhere else."
    },
    {
      question: "How can I partner with your brand or become an affiliate?",
      answer: "We welcome partnerships! You can apply through our affiliate program page on our website. We offer competitive commissions, marketing materials, and dedicated support for our partners."
    },
    {
      question: "How long will it take to get my order?",
      answer: "Most orders are processed within 24 hours and delivered within 3-5 business days for domestic orders. International shipping typically takes 7-14 business days. Expedited shipping options are available at checkout."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day risk-free return policy. If you're not completely satisfied with your purchase, you can return it for a full refund or exchange. Items must be in original condition with packaging."
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          You Have <span className="text-orange-500">Questions.</span> We Have{' '}
          <span className="text-orange-500">Answers.</span>
        </h2>

        <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 data-[state=open]:bg-gray-50 flex items-center justify-between">
                <span className="font-bold text-gray-900 text-left flex-1 mr-4">{item.question}</span>
    
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;