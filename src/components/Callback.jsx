import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Global flag is defined outside the component at the top of the file
// At the top level of your module, outside the component
let isCallbackProcessed = false;

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // console.log("Callback component effect invoked.");
    // console.log(isCallbackProcessed);
    if (!isCallbackProcessed) {
      const params = new URLSearchParams(window.location.search);
      const accessToken = params.get("access_token");
      const refreshToken = params.get("refresh_token");

      if (accessToken) {
        // console.log("Access token", accessToken);
        // console.log("Processing tokens...");
        localStorage.setItem("accessToken", accessToken);
        if (refreshToken) localStorage.setItem("refreshToken", refreshToken);

        // Mark the callback as processed to prevent duplicate processing
        isCallbackProcessed = true;

        // console.log("Navigating to TopTracks...");
        navigate("/top-tracks");
      } else {
        console.log("No access token found, redirecting to error page...");
        navigate("/error");
      }
    } else {
      console.log(
        "Callback processing was previously completed. Redirecting to avoid duplication..."
      );
      navigate("/top-tracks"); // Adjust based on your application's needs
    }
  }, [navigate]);

  // Optionally, consider adding a cleanup function if there's a logical place to reset isCallbackProcessed
  // But be mindful of where and when it's reset, to avoid unintended side effects

  return <div>Loading...</div>;
};

export default Callback;
