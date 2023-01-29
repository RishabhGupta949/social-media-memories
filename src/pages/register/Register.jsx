import React from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { FaCheck} from "react-icons/fa";
// import '../register/re'

export default function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
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
          <h1>Registration</h1>
        </div>

        <div >
          <label >First Name</label>
          <br/>
          <input className="input_class"
            type="text"
            placeholder="Enter First name"
            {...register("name", { required: true })}
          />
          <br/>
          <error>
            {errors.name?.type === "required" && "First Name is required"}
            {errors.name?.type !== 'required' && <FaCheck style={{color : "green"}}/> }
          </error>
        </div>
        <div >
          <label >Last Name</label>
          <br/>
          <input className="input_class"
            type="text"
            placeholder="Enter Last name"
            {...register("lastname", { required: true })}
          />
            <br/>
          <error>
            {errors.lastname?.type === "required" && "Last Name is required"}
            {errors.lastname?.type !== 'required' && <FaCheck style={{color : "green"}}/> }
          </error>
        </div>
        <div >
          <label >Email</label>
          <br/>
          <input className="input_class"
            type="text"
            placeholder="Enter primary email"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
            })}
          />
          <br/>
          <error>
            {errors.email?.type === "required" && "Email is required"}
            {errors.email?.type === "pattern" &&
              "Entered email is in wrong format"}
              {errors.email && (errors.email.type !== 'pattern' || errors.email.type !== 'required') ? "" : <FaCheck style={{color : "green"}}/> }
          </error>
        </div>
        <div >
          <label >Username</label>
          <br/>
          <input className="input_class"
            type="text"
            placeholder="Enter username"
            {...register("username", { required: true })}
          />
          <br/>
          <error>
            {errors.name?.type === "required" && "Username is required"}
            {errors.address?.type === "minLength" &&
              "Entered username should be more than 10 characters"}
            {errors.address?.type === "maxLength" &&
              "Entered username should be more than 100 characters"}
              {errors.username && (errors.username.type !== 'minLength' || errors.username.type !== 'maxLength' || errors.username.type !== 'required') ? "" : <FaCheck style={{color : "green"}}/> }
          </error>
        </div>
        <div >
          <label >Phone Number</label>
          <br/>
          <input className="input_class"
            type="number"
            placeholder="Enter Phone no"
            {...register("number",{
              required: true,
              minLength: 10,
              maxLength: 10,
            })}
          />
          <br/>
          <error>
          {errors.name?.type === "required" && "Phone number is required"}
            {errors.number?.type === "minLength" &&
              "Entered number is less than 6 digits"}
            {errors.number?.type === "maxLength" &&
              "Entered number is more than 12 digits"}
              {errors.number && (errors.number.type !== 'minLength' || errors.number.type !== 'maxLength' || errors.number.type !== 'required') ? "" : <FaCheck style={{color : "green"}}/> }
          </error>
        </div>
        <div >
          <label >Password</label>
          <br/>
          <input className="input_class"
            type="password"
            placeholder="Enter password"
            {...register("password",{ required: true } , {
              required: true,
              minLength: 5,
              maxLength: 20,
            })}
          />
          <br/>
          <error>
          {errors.name?.type === "required" && "Password is required"}
            {errors.password?.type === "minLength" &&
              "Entered password is less than 5 characters"}
            {errors.password?.type === "maxLength" &&
              "Entered password is more than 20 characters"}
              {errors.password && (errors.password.type !== 'minLength' || errors.password.type !== 'maxLength' || errors.password.type !== 'required') ? "" : <FaCheck style={{color : "green"}}/> }
          </error>
        </div>
        <div>
          <label >Address</label>
          <br/>
          <input className="input_class"
            type="text"
            placeholder="Enter address"
            {...register("address", { required: true } ,{
              required: true,
              minLength: 10,
              maxLength: 100,
            })}
          />
          <br/>
          <error>
          {errors.name?.type === "required" && "Address is required"}
            {errors.address?.type === "minLength" &&
              "Entered address is less than 10 characters"}
            {errors.address?.type === "maxLength" &&
              "Entered password is more than 100 characters"}
              {errors.address && (errors.address.type !== 'minLength' || errors.address.type !== 'maxLength' || errors.address.type !== 'required') ? "" : <FaCheck style={{color : "green"}}/> }
          </error>
        </div>
        <br />
        <div className="btn-submit">
          <input className="button" type="submit" value="Make New Memories" />
        </div>
        <br />
        <Link to="/login" className="last_link">
          Already a member? Login.
        </Link>
        <br />
        <br />
        <a href="http://localhost:3002/" className="last_link1">
          Skip
        </a>
      </form>
    </div>
    </div>
      </div>
    </div>
  );
}
