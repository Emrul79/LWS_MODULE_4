import React, { useImperativeHandle, useRef } from "react";

export const MyInput = React.forwardRef((props, ref) => {
  const realInputRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      focus: () => {
        realInputRef.current.focus();
        realInputRef.current.style.borderRadius = "15px";
      },
    };
  });
  return <input ref={realInputRef} {...props} />;
});
