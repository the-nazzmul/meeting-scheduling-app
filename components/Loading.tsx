import GridLoader from "react-spinners/GridLoader";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <GridLoader size={30} speedMultiplier={2}/>
    </div>
  );
};

export default LoadingPage;
