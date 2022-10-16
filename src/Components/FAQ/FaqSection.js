import React, { useState } from "react";
import { faqs } from "./faqData";
import FaqAccordion from "./FaqAccordion";

const FaqSection = () => {
  const [data] = useState(faqs);
  return (
    <>
      <section className="container py-10 faq-section">
        <div className="w-full mx-auto my-10 px-4 lg:px-10 bg-gray-200 flex flex-col gap-3 md:rounded-lg">

          <h2 className="faq-title font-bold text-club-700 pt-1">
            FAQs
          </h2>
    
          <div className="flex flex-col mb-4">
            {data.map(faq => {
              return <FaqAccordion key={faq.id} {...faq} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqSection;
