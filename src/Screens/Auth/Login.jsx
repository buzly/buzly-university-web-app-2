import React, { useState } from "react";
import PageTransition from "../Components/PageTransition";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { LoadingButton } from "@mui/lab";
import { loginAPI, testAPI } from "../../API/Auth";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {profileSlice} from "../../store/profileReducer";
import { useDispatch } from 'react-redux';

const Media = () => {
  return (
    <img
      src="https://buzly-dashboard.s3.us-east-2.amazonaws.com/assets/Buzly-Education.png"
      className="object-contain lg:w-1/2 w-0 h-full lg:px-28"
    />
  );
};

const Interactive = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true)
    if(email === "" || password === "") {
        toast.error('Make sure email & password field are filled in', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setLoading(false)
        return
    }
    const res = await loginAPI(email, password)
    // const test = await testAPI()
    console.warn(res.data)
    if(res?.data?.message?.email){
        console.warn(res.data.message)
        dispatch(profileSlice.actions.setEmail(res.data.message.email))
    }else{
        toast.error('Incorrect email or password', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    // console.log(JSON.stringify(test))
    setLoading(false)
  };

  return (
    <div className="w-full lg:w-1/2 h-full px-12 ">
      <div className="font-Inter flex flex-col items-center">
        <img
          className="w-14 h-14 object-contain"
          src="https://buzly-dashboard.s3.us-east-2.amazonaws.com/assets/Artboard_6_6-_1_.png"
        />
        <div className="border-slate-200 border-[1px] w-full flex flex-col p-8 rounded-md mt-10">
          <text className="text-2xl text-neutral-800 dark:text-white mb-10">
            Log In
          </text>
          <TextField
            label="Name"
            variant="filled"
            value={email}
            required
            onChange={
                (e) => setEmail(e.target.value)
            }
          />
          <TextField
            label="Password"
            variant="filled"
            value={password}
            password
            required
            onChange={
                (e) => setPassword(e.target.value)
            }
            type="password"
            
          />
          <div className="flex flex-row justify-between w-full items-center">
            <div className="flex flex-row items-center">
              <Checkbox defaultChecked />
              <text className="text-zinc-400 dark:text-white text-xs text-center">
                Remember me
              </text>
            </div>
            <button className="hover:underline">
              <text className="text-zinc-400 dark:text-white text-xs mr-4 text-center">
                Forgot Password?
              </text>
            </button>
          </div>

          <LoadingButton variant="contained"
          onClick={
            () => login(email, password)
          }
          loading={loading}
          >Login</LoadingButton>
          <button className="flex flex-row self-center mt-4 hover:underline">
            <text className="text-zinc-400 dark:text-white text-xs text-center">
              {"Don't have an account?"}
            </text>

            <text className="text-zinc-800 dark:text-white text-xs ml-2">
              {"Sign up"}
            </text>
          </button>
        </div>
      </div>

      {/* <LoadingButton variant="contained" size="large" style={{paddingLeft: 50, paddingRight: 50, paddingTop:15, paddingBottom: 15}}
        onClick={goToLogin}
        >Login</LoadingButton>
        <LoadingButton variant="outlined" size="large" style={{paddingLeft: 50, paddingRight: 50, paddingTop:15, paddingBottom: 15}}>Sign Up</LoadingButton> */}
    </div>

  );
};

function Login() {
  const [authType, setAuthType] = useState("login");
  return (

    <PageTransition>
      <div className="flex flex-row justify-between w-screen h-screen p-10 pt-20 bg-white dark:bg-neutral-800">
       
        <Interactive />
        <Media />
        <ToastContainer/>
      </div>
    </PageTransition>
    

  );
}

export default Login;
