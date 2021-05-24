import { React } from "react";

import FaqElement from "./FaqElement";
import Container from "./Container";

function Faq() {
  const quesAnsArr = [
    {
      ques: "What is this?",
      ans: "This is an Experiment This is an Experiment This is an Experiment This is an Experiment This is an Experiment This is an Experiment",
      id: "123",
    },
    { ques: "How it works?", ans: "It works by Magic", id: "231" },
    { ques: "How to Pay?", ans: "Cash", id: "321" },
    { ques: "How to use?", ans: "Simply use", id: "122" },
  ];

  return (
    <Container title="FAQ's">
      {quesAnsArr.map((el, i) => {
        return <FaqElement ques={el.ques} ans={el.ans} key={el.id} />;
      })}
    </Container>
  );
}

export default Faq;
