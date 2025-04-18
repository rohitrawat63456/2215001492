import axios from "axios";
const BASE_URL = "http://20.244.56.144/evaluation-service";
export const getTopUsers = async (req, res) => {
  try {
    const response1 = await axios.post(`${BASE_URL}/auth`, {
      email: "rohit.rawat_cs22@gla.ac.in",
      name: "rohit rawat",
      rollNo: "2215001492",
      accessCode: "CNneGT",
      clientID: "efc261a2-2235-415e-a9a9-1923bfc3f571",
      clientSecret: "meuZMGkRpJzzUjkk",
    });

    const token = response1.data.access_token;
    console.log("token is",token);
    const response2 = await axios.get(`${BASE_URL}/users`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const users = response2.data.users;
    console.log("user are",users)
    return res.json({success:true,message:"top users fetched successfully",user:users})
  }
    catch(err){
      console.log(err.message);
      return res.json({success:false,message:"some error occured"})
    }
  }

    