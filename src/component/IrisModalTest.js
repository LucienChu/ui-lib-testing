import { IrisModal } from "irisrad-ui";
import React, { useState } from "react";

export default function IrisModalTest() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button onClick={() => setShowModal((value) => !value)}>
        {showModal ? "show" : "not show"}
        <IrisModal open={showModal} closeOnBackdrlpClicked={false} />
      </button>
    </div>
  );
}
