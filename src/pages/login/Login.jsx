import React from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import '../login/login.css'
import { FaCheck} from "react-icons/fa";

export default function Form() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = () => {
    return (
      window.location.href = " http://localhost:3002/"
    )
      }

  return (
    <div className="App">
     <div className="bground"/>
      <div className="container">
        {/* <div className="info">
          <h1>
            The Path to <span style={{color : "purple"}}>Sweet Memories</span>
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ut voluptatum, cumque quasi molestiae earum cupiditate ipsa esse placeat illum.</p>
        </div> */}
        <div className="card">
       
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>Login</h1>
        </div>
        <div >
          <label >Username</label>
          <br/>
          <input className="input_class"
            type="text"
            placeholder="Enter Username"
            {...register("name", { required: true ,
              minLength: 5,
              maxLength: 20
            })}
          />
          <br/>
            <error>
            {errors.name?.type === "required" && "Username is required"}
            {errors.name?.type === "minLength" && (<br/>) &&
              "Entered username should be more than 5 characters"}
            {errors.name?.type === "maxLength" && (<br/>) &&
              "Entered username should be less than 20 characters"}
              {errors.name && (errors.name.type !== 'minLength' || errors.name.type !== 'maxLength' || errors.name.type !== 'required') ? "" : <FaCheck style={{color : "green"}}/> }
          </error>
        </div>
        <div>
          <label >Password</label>
          <br/>
          <input className="input_class"
            type="password"
            placeholder="Enter password"
            {...register("password", {
              required: true,
              minLength: 5,
              maxLength: 20,
            })}
          />
          
          <error>
          <br/>
          {errors.password?.type === "required" && "Password is required"}
            {errors.password?.type === "minLength" &&
              "Entered password should be more than 5 characters"}
            {errors.password?.type === "maxLength" &&
              "Entered password should be less than 20 characters"}
              {errors.password && (errors.password.type !== 'minLength' || errors.password.type !== 'maxLength' || errors.password.type !== 'required') ? "" : <FaCheck style={{color : "green"}}/> }
              {/* {errors.password?.type !== "required" && type !== "minLength" &&  type !== "maxLength" && < FaCheck style={{color : "green"}}/>} */}
          </error>
        </div>
        <br />
        <div className="btn-submit">
          <input className="button" type="submit" value="Login" />
        </div>
        <br />
        <Link to="/register" className="last_link">
          Not a member? Signup.
        </Link>
        <br />
        <br />
      </form>
    </div>
    </div>
      </div>
    </div>
  );
}
