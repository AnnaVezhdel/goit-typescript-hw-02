import { Circles } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <Circles
      height="80"
      width="80"
      color="purple"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass="circles"
      visible={true}
    />
  );
};

export default Loader;
