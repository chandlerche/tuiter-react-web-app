import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
    {
        post = {
            _id: 234,
            topic: "Space",
            userName: "SpaceX",
            time: "2h",
            title: "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            image: "spacex.png",
            liked: true,
            replies: 123,
            retuits: 432,
            likes: 2345,
            handle: "@spacex",
            tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return(
        <li className="list-group-item">
            <div className="row">

                {/* 这里是头像区*/}
                <div className="col-auto">
                    <img height={50} className="float-end rounded-circle" alt={"item-img"} src={`/images/${post.image}`} />
                </div>

                {/* 这里是正文区*/}
                <div className="col-10">

                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(post._id)}></i>

                    {/* 这里是用户信息区*/}
                    <div className=" fw-bolder">

                        {post.userName}
                        <i className={"fa fa-check-circle ps-2 pe-2"} />
                        <span className="text-secondary fw-normal wd-text-post-small">{post.handle} · {post.time}</span>
                    </div>

                    {/* 这里是文字区*/}
                    <div className="fw-normal pt-1 pb-2">
                        {post.tuit}
                    </div>

                    {/* 这里是转评赞区*/}
                    <TuitStats post={post}/>

                </div>

            </div>
        </li>

    );

}

export default TuitItem;