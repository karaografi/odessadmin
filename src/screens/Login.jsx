import React, { useRef, useState, useEffect } from 'react'
import axios from 'axios';
import { axiosPrivate } from '../api/axios';
import useAuth from '../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router';

const Login = () => {


  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [authenticatorCode, setAuthenticatorCode] = useState();
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [isCode, setCode] = useState(false);

  useEffect(() => {
    //userRef.current.focus();
      return;
  }, [isCode])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const response = await axios.post("https://testapi.odessayazilim.com/api/Auth/Login",
      //     JSON.stringify({ user, pwd }),
      //     {
      //         headers: { 'Content-Type': 'application/json' },
      //         withCredentials: true
      //     }
      // );
      alert("basıldı")
      const response = await axios.post("https://testapi.odessayazilim.com/api/Auth/Login", { 'email': user, 'password': pwd}, { withCredentials: true });

      console.log("response", response);
      if (response.data.accessToken === null && (response.data.requiredAuthenticatorType === 0 || 1)) {
        setCode(true);
        // debugger;
      }else{
        //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;

      setAuth({ user, pwd, roles, accessToken });
      setUser('');
      setPwd('');

      navigate(from, { replace: true });
      }
      
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      console.log(user, pwd);
      console.log("ulaşamadınız")
      errRef.current.focus();
    }
  }


  const handleWithCodeSubmit = async (e) => {
    e.preventDefault();

    try {
      alert("basıldı")
      const response = await axios.post("https://testapi.odessayazilim.com/api/Auth/Login", { 'email': user, 'password': pwd,"authenticatorCode":authenticatorCode}, { withCredentials: true });

      console.log("response", response);
        //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;

      setAuth({ user, pwd, roles, accessToken });
      setUser('');
      setPwd('');
      setAuthenticatorCode();
      navigate(from, { replace: true });
      
      
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      console.log(user, pwd);
      console.log("ulaşamadınız")
      errRef.current.focus();
    }
  }

  const loginPage = <section className="min-h-screen flex items-stretch text-white ">
    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
    <div className="lg:flex w-1/2 hidden bg-gray-400 bg-no-repeat bg-cover relative items-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)' }}>
      <div className="absolute bg-black opacity-40 inset-0 z-0" />
      <div className="w-full px-24 z-10">
        <h1 className="text-3xl font-semibold text-left tracking-wide mb-9">Merakınızın peşinden gidin: “Benim özel bir yeteneğim yok. Yalnızca tutkulu bir meraklıyım.”</h1>
        <p className="text-xl my-4">Albert Einstein</p>
      </div>

    </div>
    <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-black" >
      <div className="absolute lg:hidden z-10 inset-0 bg-gray-400 bg-no-repeat bg-cover items-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)' }}>
        <div className="absolute bg-black opacity-40 inset-0 z-0 " />
      </div>
      <div className="w-full py-20 z-20 bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 rounded-md shadow-inner">
        <h1 className="my-6 text-6xl mb-20 font-semibold">
          Odessa Yazılım
        </h1>
        <form onSubmit={handleSubmit} className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
          <div className="pb-2 pt-4">
            <input
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="block w-full p-4 text-lg rounded-xl bg-gray-900  " />
          </div>
          <div className="pb-2 pt-4">
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              className="block w-full p-4 text-lg rounded-xl bg-gray-900" name="password" placeholder="Şifre" />
          </div>
          <div className="text-right text-gray-100 hover:underline font-bold hover:text-gray-100">
            <a href="#">Şifrenizi mi unuttunuz?</a>
          </div>
          <div className="px-4 pb-2 pt-4">
            <button className="block w-full p-4 text-lg rounded-xl bg-blue-900 focus:outline-none mt-10 font-semibold">Giriş Yap</button>
          </div>
        </form>
      </div>
    </div>
  </section>;


  const digitPage = <div>
    <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'}}>
        <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
              <h1 className="mb-2 text-2xl">Kodu Girin</h1>
            </div>
            <form onSubmit={handleWithCodeSubmit}>
              <div className="mb-4 text-lg">
              <input
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setAuthenticatorCode(e.target.value)}
              value={authenticatorCode}
              required type="authenticatorCode"
              name="authenticatorCode"
              id="authenticatorCode"
              placeholder="******"
              className="block w-full p-4 text-lg rounded-xl bg-gray-900  " />
              </div>
              <div className="mt-8 flex justify-center text-lg text-black">
                <button type="submit" className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Gönder</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  </div>;
 
  return isCode==false ? loginPage : digitPage;
  
}
export default Login