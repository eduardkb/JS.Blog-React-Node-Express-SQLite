import postData from "../dev/DB_PostAndTags.json"
import Post from "./Post";

const PostsPannel = () =>{
    return(
		<div>
			{postData.map((post)=>{
				return(
					<Post key={post.id} postData={post}/>
				)
			})}
    	</div>
    )
}



export default PostsPannel;