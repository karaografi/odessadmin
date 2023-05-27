import React,{useRef,useState,useEffect} from 'react'
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import { useNavigate,useLocation } from 'react-router';

const Login = () => {

  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
      userRef.current.focus();
  }, [])

  useEffect(() => {
      setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          const response = await axios.post("https://testapi.odessayazilim.com/api/Auth/Login",
              JSON.stringify({ user, pwd }),
              {
                  headers: { 'Content-Type': 'application/json' },
                  withCredentials: true
              }
          );
          console.log(JSON.stringify(response?.data));
          console.log(JSON.stringify(response));
          const accessToken = response?.data?.accessToken;
          const roles = response?.data?.roles;
          setAuth({ user, pwd, roles, accessToken });
          setUser('');
          setPwd('');
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
          errRef.current.focus();
      }
  }

  
  
    return (
        <section className="min-h-screen flex items-stretch text-white ">
       {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
        <div className="lg:flex w-1/2 hidden bg-gray-400 bg-no-repeat bg-cover relative items-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'}}>
          <div className="absolute bg-black opacity-40 inset-0 z-0" />
          <div className="w-full px-24 z-10">
            <h1 className="text-3xl font-semibold text-left tracking-wide mb-9">Merakınızın peşinden gidin: “Benim özel bir yeteneğim yok. Yalnızca tutkulu bir meraklıyım.”</h1>
            <p className="text-xl my-4">Albert Einstein</p>
          </div>

        </div>
        <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-black" >
          <div className="absolute lg:hidden z-10 inset-0 bg-gray-400 bg-no-repeat bg-cover items-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'}}>
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
                    className="block w-full p-4 text-lg rounded-xl bg-gray-900"  name="password" placeholder="Şifre" />
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
      </section>
    )
}

export default Login