import { forwardRef, useImperativeHandle, useRef } from "react";
const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime,onReset },
  ref
) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const score = Math.round((1 - remainingTime / (targetTime * 1000) ) * 100 );
  const formatedRemainingTime = (remainingTime / 1000).toFixed(2);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>You Lost!!</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        You target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You Stopped the timer with{" "}
        <strong>{formatedRemainingTime} seconds left!!</strong>
      </p>
      <form action="dialog" >
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
