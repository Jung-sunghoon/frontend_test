import Admin from "./Admin";
import Guest from "./Guest";
import User from "./User";
import LoadingSpinner from "./LoadingSpinner";

const SimpleRouter = ({ role, isLoading }) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  switch (role) {
    case "admin":
      return <Admin />;
    case "user":
      return <User />;
    case "guest":
      return <Guest />;
    default:
      return "뭔가 에러가 났음!";
  }
};

export default SimpleRouter;
