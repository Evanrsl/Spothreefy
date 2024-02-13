import React from "react";

const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL;

const Home = () => {
  const handleLogin = () => {
    console.log("Redirecting to server login...");
    window.location.href = `${VITE_SERVER_URL}/login`;
  };

  return (
    // <div>
    //   <h1>Welcome to the Spotify App</h1>
    //   <button onClick={handleLogin}>Log in with Spotify</button>

    // </div>
    <section className="w-full h-screen ">
      <div className="absolute top-10 left-0 right-0 z-10 flex items-center justify-center flex-col">
        <h1 className="text-white font-black text-[60px]">Spothreefy</h1>
        <h2 className="text-[30px] text-secondary">Top Tracks Generator</h2>
        <button
          onClick={handleLogin}
          className="text-[20px] text-white bg-green-500 m-10 p-5 rounded-xl"
        >
          Login to Spotify
        </button>
        {/* <NavLink to="/logged">logged</NavLink> */}
      </div>
    </section>
  );
};

export default Home;
