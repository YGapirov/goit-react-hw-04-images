import { RotatingLines } from "react-loader-spinner";
import { LoaderContainer } from "./Loader.styled";

export const Loader = ({ isLoading }) => {
  return (
    <LoaderContainer>
      {isLoading && (
        <RotatingLines
          strokeColor="blue"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}
    </LoaderContainer>
  );
};
