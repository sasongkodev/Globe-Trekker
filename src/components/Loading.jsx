import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <DotLottieReact
        src="https://lottie.host/49bda3a5-268d-40e7-9f11-8c61385ab093/nrVL4dTFod.lottie"
        loop
        autoplay
        style={{ width: "100px", height: "100px" }}
      />
    </div>
  );
};

export default Loading;
