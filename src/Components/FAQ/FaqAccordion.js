import { Disclosure } from "@headlessui/react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
// import { faqs } from "./faqData";

const FaqAccordion = ({ question, answer }) => {
  return (
    <>
      <div className="faq-q">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="w-full rounded-t-md flex justify-between items-center px-1 py-3 hover:bg-blue-300">
                <div className="text-xl font-semibold text-club-700 text-left">
                  {question}
                </div>
                <span className={open ? "text-club-400" : "text-gray-700"}>
                  {open ? (
                    <BiChevronUp className="text-2xl" />
                  ) : (
                    <BiChevronDown className="text-2xl" />
                  )}
                </span>
              </Disclosure.Button>

              <Disclosure.Panel className="bg-blue-200 rounded-b-md">
                <div className="px-2 py-2 text-lg text-black">{answer}</div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};

export default FaqAccordion;
