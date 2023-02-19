
import WhoToFollowListItem from "./WhoToFollowListItem.js";

import who from "./who.js"

const WhoToFollowList = () => {
    return (`
           
           <ul class="list-group">
               <li class="list-group-item bg-light">
                        <div class="row fw-bolder ms-3">
                            Who to follow
                        </div>
               </li>
           <!-- continue here -->
           ${WhoToFollowListItem(who)}
           </ul>
`); }


export default WhoToFollowList;