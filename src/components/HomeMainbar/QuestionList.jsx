import React from "react";
import {Link} from 'react-router-dom';
import Question from "./Question";

const QuestionList = ({questionList}) => {
    return (
        <>
        {
            questionList.map((question) =>(
                <Question question={question} key = {question._id}/>
            ))
        }
        </>
    )
}

export default QuestionList;