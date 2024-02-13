import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosConfig"; // Adjust the import path
import Dashboard from "./Dashboard";

const TopTracks = () => {
  const [tracks, setTracks] = useState([]);
  const [timeRange, setTimeRange] = useState("short_term"); // State to keep track of the selected time range
  const [error, setError] = useState("");
  const [isBusy, setIsBusy] = useState(true);

  // useEffect hook to fetch tracks based on the selected time range
  useEffect(() => {
    const fetchTopTracks = async () => {
      // Your fetching logic here, utilizing `timeRange` in the request
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
          setError("No access token found.");
          return;
        }
        const response = await axiosInstance.get(
          `/top-tracks?time_range=${timeRange}`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        setTracks(response.data.items); // Assuming the API response structure
      } catch (err) {
        setError("Failed to load top tracks.");
      }
    };

    fetchTopTracks();
    setIsBusy(false);
  }, [timeRange]); // This ensures fetchTopTracks is called every time timeRange changes

  const changeTime = (event) => {
    setIsBusy(true);
    setTimeRange(event.target.value); // Handler to update timeRange state
  };

  const clean_data = ({ tracks }) => [
    // depan tengah
    {
      id: 0,
      position: [0, 1.4, 2],
      rotation: [Math.PI / 16, 0, 0],
      url: `${tracks[0].album.images[1].url}`,
      song_name: `${tracks[0].name}`,
      artist: `${tracks[0].artists[0].name}`,
      // duration : `${Math.round(tracks[0].duration_ms / 60)}`
    },
    // depan kiri
    {
      id: 1,
      position: [-1.3, 1.4, 2],
      rotation: [Math.PI / 16, 0, 0],
      url: `${tracks[1].album.images[1].url}`,
      song_name: `${tracks[1].name}`,
      artist: `${tracks[1].artists[0].name}`,
      // duration : `${Math.round(tracks[1].duration_ms / 1000)/60}`
    },
    //depan kanan
    {
      id: 2,
      position: [1.3, 1.4, 2],
      rotation: [Math.PI / 16, 0, 0],
      url: `${tracks[2].album.images[1].url}`,
      song_name: `${tracks[2].name}`,
      artist: `${tracks[2].artists[0].name}`,
      // duration : `${Math.round(tracks[2].duration_ms / 1000)}`
    },
    // kiri ke kanan
    {
      id: 3,
      position: [-2, 0, 2.75],
      rotation: [0, Math.PI / 2, 0],
      url: `${tracks[3].album.images[1].url}`,
      song_name: `${tracks[3].name}`,
      artist: `${tracks[3].artists[0].name}`,
      // duration : `${Math.round(tracks[3].duration_ms / 1000)}`
    },
    {
      id: 4,
      position: [-1.8, 0, 1.5],
      rotation: [0, Math.PI / 2.5, 0],
      url: `${tracks[4].album.images[1].url}`,
      song_name: `${tracks[4].name}`,
      artist: `${tracks[4].artists[0].name}`,
      // duration : `${Math.round(tracks[4].duration_ms / 1000)}`
    },
    {
      id: 5,
      position: [-1.1, 0, 0.4],
      rotation: [0, Math.PI / 4, 0],
      url: `${tracks[5].album.images[1].url}`,
      song_name: `${tracks[5].name}`,
      artist: `${tracks[5].artists[0].name}`,
      // duration : `${Math.round(tracks[5].duration_ms / 1000)}`
    },
    // tengah
    {
      id: 6,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      url: `${tracks[6].album.images[1].url}`,
      song_name: `${tracks[6].name}`,
      artist: `${tracks[6].artists[0].name}`,
      // duration : `${Math.round(tracks[6].duration_ms / 1000)}`
    },
    {
      id: 7,
      position: [1.1, 0, 0.4],
      rotation: [0, -Math.PI / 4, 0],
      url: `${tracks[7].album.images[1].url}`,
      song_name: `${tracks[7].name}`,
      artist: `${tracks[7].artists[0].name}`,
      // duration : `${Math.round(tracks[7].duration_ms / 1000)}`
    },
    {
      id: 8,
      position: [1.8, 0, 1.5],
      rotation: [0, -Math.PI / 2.5, 0],
      url: `${tracks[8].album.images[1].url}`,
      song_name: `${tracks[8].name}`,
      artist: `${tracks[8].artists[0].name}`,
      // duration : `${Math.round(tracks[8].duration_ms / 1000)}`
    },
    {
      id: 9,
      position: [2, 0, 2.75],
      rotation: [0, -Math.PI / 2, 0],
      url: `${tracks[9].album.images[1].url}`,
      song_name: `${tracks[9].name}`,
      artist: `${tracks[9].artists[0].name}`,
      // duration : `${Math.round(tracks[9].duration_ms / 1000)}`
    },
  ];

  if (error) return <div>{error}</div>;
  // Inside your TopTracks component's return statement
  return (
    <section className="w-full h-screen relative flex flex-col">
      <div className="relative w-full lg:max-w-sm">
        <select
          className="absolute top-5 left-5 z-10 py-2 px-7 text-gray-500 bg-white border rounded-md shadow-sm"
          onChange={changeTime}
          value={timeRange}
        >
          <option value="short_term">Last Month</option>
          <option value="medium_term">Last 6 Months</option>
          <option value="long_term">All Time</option>
        </select>
      </div>
      <div className="flex-grow overflow-auto">
        {!isBusy && tracks.length > 0 ? (
          <Dashboard data={clean_data({ tracks })} />
        ) : null}{" "}
        {/* Pass updated tracks as props */}
      </div>
    </section>
  );
};

export default TopTracks;
