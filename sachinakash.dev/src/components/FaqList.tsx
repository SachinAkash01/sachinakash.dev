import { useId, useState } from "react";

type Faq = { question: string; answer: string };

/**
 * Accordion of questions: one answer open at a time, with a smooth height
 * animation. Answers stay in the page markup for search engines.
 */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => {
        const open = openIndex === index;
        const buttonId = `${baseId}-q${index}`;
        const panelId = `${baseId}-a${index}`;
        return (
          <div className={`faq-item${open ? " is-open" : ""}`} key={faq.question}>
            <h3 className="faq-item__heading">
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                {faq.question}
                <span className="faq-item__icon" aria-hidden="true" />
              </button>
            </h3>
            <div
              id={panelId}
              className="faq-item__panel"
              role="region"
              aria-labelledby={buttonId}
              inert={!open}
            >
              <div>
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
