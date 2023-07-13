import { useRef, useState } from 'react';
import  Cookies  from  'js-cookie' ;
const Login = () => {

    const userRef = useRef();

    const useFormInput = (initialValue) => {
      const [value, setValue] = useState(initialValue);
    
      const handleChange = (e) => {
        setValue(e.target.value);
      };
      return {
        value,
        onChange: handleChange,
      };
    };

    const username = useFormInput("");
    const password = useFormInput("");
    // const [isLoggedin, setIsLoggedin] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [loader, setLoader] = useState(false);
    const handleSubmit = async (event) => {
      setLoader(true);
      event.preventDefault();

      var requestOptions = {
        method: "POST",
        headers: {
          // "secretcode": "Ebliethos123",
          // "secretkey": "Bearer 1w4194jri32orjq3r",
          // "Content-Type": "application",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "email=" + username.value + "&password=" + password.value,
      };
  
      const api = await fetch(
        process.env.REACT_APP_API_URL2 +`auth/login`,
        // process.env.REACT_APP_API_URL +`production/login`,
        requestOptions
      );
      const res = await api.json();
      const token = JSON.stringify(res['token'])
      if (api.ok) {
        sessionStorage.setItem("auth", JSON.stringify(token));
        setLoader(false);
        setRedirect(true);
      } else {
        setLoader(false);
        alert("Email Atau Password Yang Anda Masukkan Tidak Sesuai!");
      }
    };
    
    
   const loginRedirect = JSON.parse(sessionStorage.getItem("auth"));

  if (redirect === true) {
    return window.location.reload();
  } else if (loginRedirect !== null && loginRedirect.data.role === 6) {
    return (window.location.hash = "#/memo");
  } else if (loginRedirect !== null && loginRedirect.data.role === 7) {
    return (window.location.hash = "#/dashboard-gudang");
  } else if (loginRedirect !== null && loginRedirect.data.role === 5) {
    return (window.location.hash = "#/dashboard-adv");
  } else if (loginRedirect !== null && loginRedirect.data.role === 8) {
    return (window.location.hash = "#/dashboard");
  } else if (loginRedirect !== null && loginRedirect.data.role === 2) {
    return (window.location.hash = "#/dashboard-supervisor");
  } else if (loginRedirect !== null && loginRedirect.data.role === 9) {
    return (window.location.hash = "#/transaksi-berjalan-cc");
  } else if (loginRedirect !== null && loginRedirect.data.role === 1) {
    return (window.location.hash = "#/dashboard-ceo");
  }
  return (
 <>
  <section className="vh-100">
    <div className="container py-5 h-100">
      <div className="row d-flex align-items-center justify-content-center h-100">
        <div className="col-md-8 col-lg-7 col-xl-6">
          <img src="logo/logo ethos 2.png" className="img-fluid" alt="Phone image" />
        </div>
        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
          {/* <div className='d-flex justify-content-center m-4'>
            <img src="logo/logoethosWord.png" loading="lazy" alt="User Image" className="img-fluid" />
          </div> */}
          <form onSubmit={handleSubmit}>
            {/* Email input */}
            <div className="form-outline mb-4">
              <input ref={userRef} {...username} type="email" id="email" className="form-control form-control-lg" placeholder="Username" />
              <label className="form-label">Email address</label>
            </div>
            {/* Password input */}
            <div className="form-outline mb-4">
              <input {...password} type="password" id="password" className="form-control form-control-lg" placeholder="Password" />
              <label className="form-label">Password</label>
            </div>
            <div className="d-flex justify-content-around align-items-center mb-4">
              {/* Checkbox */}
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label"> Remember me </label>
              </div>
              <a href="#!">Forgot password?</a>
            </div>
            {/* Submit button */}
            <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>
            <div className="divider d-flex align-items-center my-4">
            </div>
            <button className="add-button btn btn-primary btn-block">Install to home screen</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</>

  );
};

export default Login;
