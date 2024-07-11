import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {writeDigit, deleteDigit, truePassword} from './PasswordSlice.ts'

const Password: React.FC = () => {

  const password = useSelector((state: RootState) => state.password.value);
  const isCorrect = useSelector((state: RootState) => state.password.isCorrect);
  const dispatch = useDispatch();

  const click = (digit: number) => {
    dispatch(writeDigit(digit));
  }

  const deleteClick = () => {
    dispatch(deleteDigit());
  };

  const enterClick = () => {
    dispatch(truePassword());
  }

  const passwordStars = () => {
    return '*'.repeat(password.length);
  }

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h4>Enter Password here:</h4>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-md-6 text-center">
          <h4>{passwordStars()}</h4>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-md-6 text-center">
          <div className="btn-group">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((digit) => (
              <button
                key={digit}
                className="btn btn-primary m-1"
                onClick={() => click(digit)}
              >
                {digit}
              </button>
            ))}
          </div>
          <div className="mt-3">
            <button className="btn btn-warning m-1" onClick={deleteClick}>
              Delete
            </button>
            <button className="btn btn-success m-1" onClick={enterClick}>
              Enter
            </button>
          </div>
        </div>
      </div>
      {isCorrect !== null && (
        <div className="row justify-content-center mt-3">
          <div className="col-md-6 text-center">
            <p style={{color: isCorrect ? 'green' : 'red'}}>
              {isCorrect ? 'Access Granted' : 'Access Denied'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Password;