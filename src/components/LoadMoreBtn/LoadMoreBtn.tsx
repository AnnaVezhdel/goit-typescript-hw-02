import { LoadMoreBtnProps } from "../App/App.types";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleChangePage }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <button
        style={{
          margin: "20px",
          fontSize: "20px",
          fontWeight: "500",
          borderRadius: "8px",
          cursor: "pointer",
          backgroundColor: "darkblue",
          padding: "14px 20px",
        }}
        onClick={handleChangePage}
      >
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
