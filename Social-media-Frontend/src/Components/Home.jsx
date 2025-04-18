import { TopUser } from "./TopUsers"
import { TrendinPosts } from "./TrendingPosts"
import { useState,useEffect } from "react";
import axios from 'axios';
export const Home = ()=>{
  const [topUsers,setTopUsers]= useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:3000/hostname/users");
        const userData = res.data.user; 
        if (userData) {
          const usersArray = Object.entries(userData).map(([id, name]) => ({
            id,
            name,
          }));
          setTopUsers(usersArray);
        }
      } catch (error) {
        console.log("some error occurred", error.message);
      }
    };
  
    fetchUsers();
  }, []);
  
  return (
    <>
      <div className="bg-gray-100 min-h-screen p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Top Users</h1>
            <TopUser topUsers={topUsers} />
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Trending Posts</h1>
            <TrendinPosts />
          </div>
        </div>
      </div>
    </>
  );
}