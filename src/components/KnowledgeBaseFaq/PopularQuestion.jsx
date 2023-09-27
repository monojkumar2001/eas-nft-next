"use client";
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import '../../styles/PopularQuestion.css'
const PopularQuestion = () => {
  const data = {
    rows: [
      {
        title: "+ Lorem ipsum dolor sit amet,",
        content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                  ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                  In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                  Fusce sed commodo purus, at tempus turpis.`,
      },
    ],
  };
  const styles = {
    // bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "blue",
    // rowContentColor: 'grey',
    // arrowColor: "red",
  };

  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };
  return (
    <div>
      <div className="faq-question-content mt-4">
        <div className="faq-question-content-header">
          <h1>FREQUENTLY ASKED QUESTIONS</h1>
          <h2 className="section-title-2 mb-5">Most Popular Questions</h2>
        </div>
        <div className="faq-conntes">
          <Faq data={data} styles={styles} />
        </div>
      </div>
    </div>
  );
};

export default PopularQuestion;
