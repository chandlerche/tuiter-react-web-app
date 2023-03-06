import React from "react";
import {Link} from "react-router-dom";


const PostItem = (
    {
        post={ iconImage :"elon-musk.jpg",
            userName: 'Elon Musk',
            subName: '@elonmusk',
            time: '23h',
            text: 'Amazing show about @Inspiration4x mission!',
            image: '../../images/inspire.jpg',
            title: 'Countdown: Inspiration4 Mission to Space | Netflix Official Site',
            description: 'From training to launch to landing, this all-access docu-series rides along' +
                         'with the Inspiration4 crew on the first all-civilian orbital space...',
            link: 'netflix.com',
            linkIcon: '<i class="fas fa-paperclip text-secondary ps-2 pe-1"></i>',
            comment: '4.2k',
            share: '3.5k',
            love: '37.5k',
            upload: '',
            hyperlink : "@Inspiration4"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">

                {/* 这里是头像区*/}
                <div className="col-1">
                    <img height={40} className="float-end rounded-pill" alt={"item-img"} src={`/images/${post.iconImage}`} />
                </div>

                {/* 这里是正文区*/}
                <div className="col-11">

                    {/* 这里是用户信息区*/}
                    <div className=" fw-bolder">

                        {post.userName} <i className={"fa fa-check-circle ps-1 pe-1"} />
                        <span className="text-secondary fw-normal wd-text-post-small">{post.subName} · {post.time}</span>
                    </div>

                    {/* 这里是文字区*/}
                    <div className="fw-bolder pt-1 pb-2">
                        {post.text}
                        <Link href={post.hyperlink}/>
                    </div>

                    {/* 这里是图片区*/}
                    <div className="border rounded border-secondary">
                        <div>
                            <img className=" border-bottom rounded-top pt-0 border-secondary " alt={"icon-img"} src={`/images/${post.image}`} height={'100%'} width={'100%'} />
                        </div>
                        <div className="fw-bolder ps-2 pe-1 fs-6">
                            {post.title}
                        </div>
                        <div className="text-secondary ps-2 pe-1  wd-text-post-small">
                            {post.description}
                        </div>
                        <div className="text-secondary wd-text-post-small">
                            <i className={post.linkIcon}/>
                            {post.link}
                        </div>
                    </div>

                    {/* 这里是转评赞区*/}
                    <div >
                        <i className={"fa fa-comment ps-1 pt-3 text-secondary"}/>
                        <label className=" ps-1 pe-5 pt-3 text-secondary" >{post.comment}</label>

                        <i className={"fa fa-retweet ps-1 pt-3 text-secondary"}/>
                        <label className=" ps-1 pe-5 pt-3 text-secondary">{post.shared}</label>

                        <i className={"fa fa-heart ps-1 pt-3 text-secondary"}/>
                        <label className=" ps-1 pe-5 pt-3 text-secondary">{post.shared}</label>

                        <i className={"fa fa-external-link ps-1 pt-3 text-secondary"}/>
                    </div>

                </div>

            </div>
        </li>

    );

}

export default PostItem;