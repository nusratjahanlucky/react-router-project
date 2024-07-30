import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h2>Opps!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 &&
                <div>
                    <h3>page not found</h3>
                    <p>Go Back</p>
                    <Link to="/"><button>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;