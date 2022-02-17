import ClipLoader from "react-spinners/ClipLoader";

function Spinner() {
  return (
    <div className="flex h-screen items-center justify-center">
      <ClipLoader color={"#0323FC"} loading={true} size={80} />
    </div>
  );
}

export default Spinner;
