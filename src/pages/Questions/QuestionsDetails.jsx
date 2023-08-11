import React from "react";
import upvote from '../../assets/up2.svg'
import downvote from '../../assets/down2.svg'
import {useParams,Link} from 'react-router-dom'
import './Questions.css';
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from "./DisplayAnswer";

function QuestionsDetails()
{
    const {id} = useParams();

    var questionsList = [{
        _id : '1',
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
        _id : '2',
        upVotes : 3,
        downVotes:2,
        noOfAnswers: 0,
        questionTitle:"what is Objects and Classes?",
        questionBody: "It meant to be",
        questionTags: ["Java","C++","Python"],
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
        _id : '3',
        upVotes : 3,
        downVotes:2,
        noOfAnswers: 0,
        questionTitle:"what happens in a Deadlock?",
        questionBody: "It meant to be",
        questionTags: ["Operating Systems"],
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

    return(
        <div className="question-details-page">
            {
                questionsList === null ?
                <h1>Loading...</h1>:
                <>
                    {
                        questionsList.filter(question=>question._id === id).map(question =>(
                            <div key={question._id}>
                                <section className="question-details-container">
                                    <h1>{question.questionTitle}</h1>
                                    <div className="question-votes">
                                        <img src={upvote} alt="upvote" width={18}/>
                                        <p>{question.upVotes-question.downVotes}</p>
                                        <img src={downvote} alt="downvote" width={18}/>
                                    </div>
                                    <div style={{width:"100%"}}>
                                        <p className="question-body">{question.questionBody}</p>
                                        <div className="question-details-tags">
                                            {
                                                question.questionTags.map((tag)=>(
                                                    <p key = {tag}>{tag}</p>
                                                ))
                                            }
                                        </div>
                                        <div className="question-actions-user">
                                            <div>
                                                <button type="button" className="edit-question-btn">Share</button>
                                                <button type="button" className="edit-question-btn">Delete</button>
                                            </div>
                                            <div>
                                                <p>asked {question.askedOn}</p>
                                                <Link to={`/User/${question.userId}`} className="user-link" style={{color:'#0086da'}}>
                                                    <Avatar backgroundColor='orange' px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                    <div>
                                                        {question.userPosted}
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {
                                    question.noOfAnswers !== 0 && (
                                        <section>
                                            <h3>{question.noOfAnswers} answers</h3>
                                            <DisplayAnswer key={question._id} question={question}/>
                                        </section>
                                    )
                                }
                                <section className="post-ans-container">
                                    <h3>Your Answers</h3>
                                    <form >
                                        <textarea name="" id="" cols="30" rows="10"></textarea>
                                        <input type="submit" className="post-ans-btn" value="Post Your Answer" />
                                    </form>
                                    <p>
                                        Browse other question tagged
                                        {
                                            question.questionTags.map((tag) => (
                                                <Link to='/Tags' key={tag} className="ans-tags"> {tag} </Link>
                                            ))
                                        } or {
                                            <Link to="/AskQuestion" style={{textDecoration : 'none',color:'#009dff0'}}>Ask Your Own Question.</Link>
                                        }
                                    </p>
                                </section>
                            </div>
                        ))
                    }
                </>
            }
        </div>
    )
}

export default QuestionsDetails;