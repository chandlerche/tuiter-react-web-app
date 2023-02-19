import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.js";

function PostSummaryList() {

    return(`
       
        <ul class="list-group">
        ${PostSummaryItem(post)}
        </ul>
    
    `);


}

export default PostSummaryList;