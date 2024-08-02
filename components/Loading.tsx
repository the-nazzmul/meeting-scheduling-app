import ClockLoader from "react-spinners/ClockLoader";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClockLoader size={150} speedMultiplier={2} />
    </div>
  );
};

export default LoadingPage;
