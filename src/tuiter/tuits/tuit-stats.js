import React from "react";

const TuitStats = ({post}) => {
    return (
    <div >
        <i className={"fa fa-comment ps-1 pt-3 text-secondary"}/>
        <label className=" ps-1 pe-5 pt-3 text-secondary" >{post.replies}</label>

        <i className={"fa fa-retweet ps-1 pt-3 text-secondary"}/>
        <label className=" ps-1 pe-5 pt-3 text-secondary">{post.retuits}</label>

        <i className={"fa fa-heart ps-1 pt-3 text-secondary"}/>
        <label className=" ps-1 pe-5 pt-3 text-secondary">{post.likes}</label>

        <i className={"fa fa-external-link ps-1 pt-3 text-secondary"}/>
    </div>
    )
};

export default TuitStats;