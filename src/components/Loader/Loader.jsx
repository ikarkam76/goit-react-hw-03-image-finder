import { LoadSpinner } from './Loader.styled';
import { RotatingLines } from 'react-loader-spinner';


export const Loader = ({ visible }) => {
    return (
      <LoadSpinner>
        <RotatingLines
          strokeColor="blue"
          strokeWidth="3"
          animationDuration="1"
          width="196"
          visible={visible}
        />
      </LoadSpinner>
    );
};