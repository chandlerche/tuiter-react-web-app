import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({post}) => {
    const dispatch = useDispatch();
    let heart_icon;
    if (post.liked){
        heart_icon = <i className="fa fa-heart ps-1 pt-3" style = {{"color":"red"}}></i>;
    } else{
        heart_icon = <i className="fa fa-heart"></i>;
    }
    return (
    <div >
        <i className={"fa fa-comment ps-1 pt-3 text-secondary"}/>
        <label className=" ps-1 pe-5 pt-3 text-secondary" >{post.replies}</label>

        <i className={"fa fa-retweet ps-1 pt-3 text-secondary"}/>
        <label className=" ps-1 pe-5 pt-3 text-secondary">{post.retuits}</label>

        <div>
            {heart_icon}
            <span className = "ps-1 pe-5 pt-3 text-secondary"> {post.likes}</span>
            <i onClick={() => dispatch(updateTuitThunk({...post,
                                                           likes: post.likes + 1,
                                                       liked: true}))}
               className="bi bi-heart-fill me-2 text-danger"></i>
        </div>

        <i className={"fa fa-external-link ps-1 pt-3 text-secondary"}/>
    </div>
    )
};

export default TuitStats;