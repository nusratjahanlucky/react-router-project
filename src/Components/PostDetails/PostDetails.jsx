import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {title,body} = post;
    const navigate = useNavigate();

    const handleShowDetail = () =>{
        navigate(-1) 
    }
    return (
        <div>
            <h2>PostDetails:</h2>
            <p>Title:{title}</p>
            <p>Body:{body}</p>
            <button onClick={handleShowDetail}>Go Back</button>
        </div>
    );
};

export default PostDetails;