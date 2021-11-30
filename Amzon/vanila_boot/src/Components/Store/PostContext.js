import {createContext,useState} from "react";

// export const PostContext = createContext(null)

// function Post({children}){
//     const [postDetails, setpostDetails] = useState()
     
//     return(
//         <PostContext.Provider value={postDetails,setpostDetails}>
//           {children}
//         </PostContext.Provider>
//     )

// }
//  export default Post;

const PostContext = createContext(null);

const val = useContext(PostContext);

<PostContext.Provider value={mContext}>

</PostContext.Provider>

export default PostContext;