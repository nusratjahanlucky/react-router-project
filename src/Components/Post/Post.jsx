import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id,title} = post;

    const navigate = useNavigate();

    const handleShowDetail = () =>{
        navigate(`/post/${id}`)
    }

    return (
        <div>
            <h2>title:{title}</h2>
            <p>Post id:{id}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default Post;