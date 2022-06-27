import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


function Registration()
{
    const { register,handleSubmit,formState:{errors}}=useForm();
    const navigate=useNavigate()

    const onFormSubmit=(userData)=>{
        // console.log(userData)
        axios.post("http://localhost:5000/register",userData)
        .then((res)=>{
            console.log(res)
            navigate('/login')
        })
        .catch((err)=>{
            console.log(err)
            navigate('/')
        })
    }
    return(
        <div id="reg">
        <div className='container'>
        <div className='row'>
            <div className="col-11 col-sm-8 col-md-5 mx-auto mt-5 mb-4">
                <form className='border p-4 bg-secondary bg-opacity-50' onSubmit={handleSubmit(onFormSubmit)}>
                  <div className='mb-3'>
                  <p className='display-6'>Registration Form</p>
                  </div>

                    {/* username */}
                    <div className="mb-3">
                        <label htmlFor="un"><em>Name</em></label>
                        <input type="text" id="un" className="form-control" {...register("username", { required: true, minLength: 4 ,maxLength:10})} />
                        {/* validation error msg for username */}
                        {errors.username?.type === 'required' && <p className='text-danger'>* Username required</p>}
                        {errors.username?.type === 'minLength' && <p className='text-danger'>* Min length should be 4</p>}
                        {errors.username?.type === 'maxLength' && <p className='text-danger'>* Max length should be 10</p>}
                    </div>
                    {/* email */}
                    <div className="mb-3">
                        <label htmlFor="email"><em>Email</em></label>
                        <input type="email" id="email" className="form-control" {...register("email", { required: true })} />
                        {/* validation error msg for email */}
                        {errors.email?.type === 'required' && <p className='text-danger'>* Email required</p>}
                    </div>
                    {/* mobile number */}
                    <div className="mb-3">
                        <label htmlFor="number"><em>Mobilenumber</em></label>
                        <input type="number" id="number" className="form-control" {...register("number", { required: true })} />
                        {/* validation error msg for number */}
                        {errors.number?.type === 'required' && <p className='text-danger'>* Mobilenumber required</p>}
                    </div>
                    {/* password */}
                    <div className="mb-3">
                        <label htmlFor="pw"><em>Password</em></label>
                        <input type="password" id="pw" className="form-control" {...register("password", { required: true, minLength: 8 ,maxLength:16})} />
                        {/* validation error msg for password */}
                        {errors.password?.type === 'required' && <p className='text-danger'>* Password required</p>}
                        {errors.password?.type === 'minLength' && <p className='text-danger'>* Min length should be 8</p>}
                        {errors.password?.type === 'maxLength' && <p className='text-danger'>* Max length should be 16</p>}
                    </div>
                    {/* confirm password */}
                    <div className="mb-3">
                        <label htmlFor="pw"><em>Confirm Password</em></label>
                        <input type="password" id="pw" className="form-control" {...register("password", { required: true})} />
                        {/* validation error msg for password */}
                        {errors.password?.type === 'required' && <p className='text-danger'>* Confirm Password required</p>}
                    </div>  
                    <div className="mb-3">
                        <p>Are you:</p>
                        <input type="checkbox" id="singledonor"  />
                        <label for="singledonor">Individual Donor</label>
                        {/* validation error msg for password */}
                        <input type="checkbox" id="orgdonor" />
                        <label for="orgdonor">Donor Organiszation</label>
                    </div>       
                    {/* terms and conditions */}
                    <div className="mb-4">
                     <div className="form-check">
                            <input type="checkbox" id="front-end" className="form-check-input" {...register("skills")} value="front-end" />
                            <label htmlFor="front-end" className="form-check-label"><em>I accept all the <a href="#">Terms and conditions</a></em></label>
                        </div>
                    </div>
                    {/* submit button */}
                    <div className='mb-0 text-center'>
                    <button type="submit" className="btn btn-success w-50 mb-1">Register</button>                      
                    </div>
                </form>
            </div>
            </div>
            </div>
        </div>
        
    )
}

export default Registration;