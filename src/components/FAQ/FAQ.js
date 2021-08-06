import React, { useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/fontawesome-free-solid'
import { FAQS } from "../../reviewAndFAQText";
import "./FAQ.css";

const FAQ = () => {

  const [expanded, setExpanded] = useState();
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
      <div className="wrapper">
        <h1 className="sectionTitle">FAQ</h1>
        <div className={ `accordionsContainer`}>
          {
            FAQS.faqText.map((faq, i) => {
              return (
                <div key={i} className="accordionCont">
                  <Accordion className="accordion" expanded={expanded === i} onChange={handleChange(i)}>
                      <AccordionSummary
                      expandIcon={<FontAwesomeIcon icon={faAngleDown} className="expandMoreIcon"/>}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className="accordion_Header"
                      >
                      <h3 className="accordion_Heading">{faq.question}</h3>
                      </AccordionSummary>
                      <AccordionDetails className="accordion_Detail">
                      <p className="accordion_Para">{faq.answer}</p>
                      </AccordionDetails>
                  </Accordion>
                </div>
              );
            })
          }
        </div>
      </div>
  );
}

export default FAQ;
