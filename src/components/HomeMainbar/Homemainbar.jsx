import React from "react";
import {Link,useLocation,useNavigate} from 'react-router-dom';
import Question from "./Question";
import QuestionList from "./QuestionList";
import './Homemainbar.css';
import AskQuestion from "../../pages/AskQuestion/AskQuestion";

function Homemainbar()
{
    var questionsList = [{
        _id : 1,
        upVotes : 3,
        downVotes:2,
        noOfAnswers: 2,
        questionTitle:"what is a function?",
        questionBody: "It meant to be",
        questionTags: ["Java","Node JS", "react JS"],
        userPosted: "Yash",
        userId:1,
        askedOn: "Jan 1",
        answer:[{
            answerBody:"Answer",
            userAnswered: "kumar",
            answeredOn:"jan 2",
            userId:2
        }]
    },
    {
        _id : 2,
        upVotes : 3,
        downVotes:2,
        noOfAnswers: 0,
        questionTitle:"what is a function?",
        questionBody: "It meant to be",
        questionTags: ["Java","Node JS", "react JS"],
        userPosted: "Yash",
        askedOn: "Jan 1",
        answer:[{
            answerBody:"Answer",
            userAnswered: "kumar",
            answeredOn:"jan 2",
            userId:2
        }]
    },
    {
        _id : 3,
        upVotes : 3,
        downVotes:2,
        noOfAnswers: 0,
        questionTitle:"what is a function?",
        questionBody: "It meant to be",
        questionTags: ["Java","Node JS", "react JS"],
        userPosted: "Yash",
        askedOn: "Jan 1",
        answer:[{
            answerBody:"Answer",
            userAnswered: "kumar",
            answeredOn:"jan 2",
            userId:2
        }]
    }
]

    const location = useLocation();
    const navigate = useNavigate();
    const user = 1;

    function checkAuth()
    {
        if (user === null)
        {
            alert("Login or Sign Up to ask Questions")
            navigate('/Auth');
        }else{
            navigate('AskQuestion')
        }
    }

    return(
        <div className="main-bar">
            <div className="main-bar-header">
                {
                    location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
                }
                <button onClick={checkAuth} className="ask-btn">Ask Questions</button>
            </div>
            <div>
                {
                    questionsList === null ? <h1>Null</h1> : 
                    <>
                        <p>{questionsList.length} Questions </p>
                        <QuestionList questionList={questionsList}/>
                    </>
                    
                }
            </div>
        </div>
    )  ;
}

export default Homemainbar;