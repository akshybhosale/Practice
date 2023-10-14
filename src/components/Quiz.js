import Question from "./Question";
import "./quiz.css";
import { useReducer, useState } from "react";

const intialState = {
    currentQuestionIndex: 0,
    questions:[],
};

const reducer = (state, action) => {
    console.log("reducer", state, action);
    if(action.type === "NEXT_QUESTION"){
       return{

       ...state,
        currentQuestionIndex: state.currentQuestionIndex+1,
    };
}
    return state;
}
const Quiz = () => {
    const[state, dispatch] = useReducer(reducer, intialState);
    console.log("state", state);
  return (
    <>
      <div className="quiz">
        <div>
          <div className="score">
            Question 1/8 </div>
            <Question questions ={state.questions}/>
            <div className="next-biutton" onClick={() => dispatch({type: "NEXT_Question"})}>Next question</div>
          
        </div>
      </div>
    </>
  );
};
export default Quiz;
