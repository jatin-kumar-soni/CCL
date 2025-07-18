import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import {toast} from 'react-toastify'
import axios from 'axios'
const AddDoctor = () => {
  const [docImg,setDocImg]=useState(false)
  const [name,setName]=useState('')
   const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
     const [experience,setExperience]=useState('1 year')
      const [hospital,setHospital]=useState('')
       const [fees,setFees]=useState('')
        const [about,setAbout]=useState('')
         const [speciality,setSpeciality]=useState('General physician')
          const [degree,setDegree]=useState('')
           const [address1,setAddress1]=useState('')
            const [address2,setAddress2]=useState('')

            const { backendurl,aToken } =useContext(AdminContext)


  const onSubmitHandler = async (event) =>
  {
    event.preventDefault()

    try {
      if (!docImg) {
        return toast.error('Image not selected')
        
      }

      const formData = new FormData()
      formData.append('image',docImg)
      formData.append('name',name)
       formData.append('email',email)
       formData.append('password',password)
       formData.append('experience',experience)
       formData.append('fees',Number(fees))
       formData.append('about',about)
       formData.append('speciality',speciality)
       formData.append('degree',degree)
       formData.append('hospital',hospital)
       formData.append('address',JSON.stringify({line1:address1,line2:address2}))
       
       // console.log formdata

       formData.forEach((value,key) =>
       {
        console.log(`${key} : ${value}`)
       })

       const {data} = await axios.post(backendurl + '/api/admin/add-doctor',formData, {headers:{aToken}})

       if(data.success)
       {
        toast.success(data.message)
        setDocImg(false)
        setName('')
        setEmail('')
        setPassword('')
        setAddress1('')
        setAddress2('')
        setDegree('')
        setHospital('')
        setAbout('')
        setFees('')

        
        
       }
       else{
        toast.error(data.message)
       }
      
    } catch (error) {

      toast.error(error.message)
      console.log(error)
      
    }
  }


  return (
    <form onSubmit={onSubmitHandler} className='m-5 w-full'>
      <p className='mb-3 text-2xl  font-semibold text-gray-700'>  Add Doctor   </p>
      <div className='bg-white px-8 py-8 rounded-xl shadow-md w-full max-w-4xl max-h-[80vh] overflow-y-auto'>

        <div className='flex items-center gap-4 mb-8 text-gray-500'>
          <label htmlFor='doc-img'>
            <img className='w-16 h-16 bg-gray-100 rounded-full cursor-pointer object-cover'
             src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} alt='' />
          </label>
          <input type='file' onChange={(e) => setDocImg(e.target.files[0])} id='doc-img' hidden />
          <p>
            Upload Doctor <br /> Picture</p>
        </div>

        <div className=' flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
          <div className='w-full lg:flex-1 flex flex-col gap-4'>

            <div className=' flex flex-col flex-1 gap-1'>
              <p>
                Doctor Name
              </p>
              <input onChange={(e) => setName(e.target.value)}
              value={name} 
              className='border rounded px-3 py-2' type='text' placeholder='Enter Name' required />
            </div>

            <div className='flex-1 flex-col gap-1'>
              <p>
                Doctor Email
              </p>
              <input onChange={(e) => setEmail(e.target.value)}
              value={email} 
              className='border rounded px-3 py-2' type='email' placeholder='Enter Email' required />
            </div>

            <div className='flex-1 flex-col gap-1'>
              <p>
                Doctor Password
              </p>
              <input  onChange={(e) => setPassword(e.target.value)}
              value={password} className='border rounded px-3 py-2' type='password' placeholder='Enter Password' required />
            </div>

            <div className='flex-1 flex-col gap-1'>
              <p>
                Doctor Experience
              </p>
              <select onChange={(e) => setExperience(e.target.value)}
              value={experience} className='border rounded px-3 py-2' name="" id="">
                <option value="1 year">1 Year</option>
                <option value="2 year">2 Year</option>
                <option value="3 year">3 Year</option>
                <option value="4 year">4 Year</option>
                <option value="5 year">5 Year</option>
                <option value="6 year">6 Year</option>
                <option value="7 year">7 Year</option>
                <option value="8 year">8 Year</option>
                <option value="9 year">9 Year</option>
                <option value="10 year">10 Year</option>

              </select>
            </div>


            
            <div className=' flex flex-col flex-1 gap-1'>
              <p>
              Hospital Name
              </p>
              <input onChange={(e) => setHospital(e.target.value)}
              value={hospital} className='border rounded px-3 py-2' type='text' placeholder='Enter Hospital Name' required />
            </div>
            

            <div className='flex-1 flex-col gap-1'>
              <p>
                Doctor Fees
              </p>
              <input onChange={(e) => setFees(e.target.value)}
              value={fees} className='border rounded px-3 py-2' type='number' placeholder='Enter Fees' required />
            </div>

          </div>

          <div className='w-full lg:flex-1 flex flex-col gap-4'>
            <div className='flex-1 flex-col gap-1'>
            <p>Speciality</p>
            <select onChange={(e) => setSpeciality(e.target.value)}
              value={speciality} className='border rounded px-3 py-2' name='' id=''>
              <option value="" disabled>Select Experience</option>
              <option value="General physician">General physician</option>
              <option value="Gynecologist">Gynecologist</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Pediatricians">Pediatricians</option>
              <option value="Neurologist">Neurologist</option>
              <option value="Gastroenterologist">Gastroenterologist</option>
            </select>
          </div>
          <div className='flex-1 flex-col gap-1'>
            <p>Education</p>
            <input onChange={(e) => setDegree(e.target.value)}
              value={degree} className='border rounded px-3 py-2' type='text' placeholder='Enter Education' required />
          </div>

          <div className='flex-1 flex-col gap-1'>
            <p>Address</p>
            <input onChange={(e) => setAddress1(e.target.value)}
              value={address1} className='border rounded px-3 py-2' type='text' placeholder='adress line 1' required />
            <input onChange={(e) => setAddress2(e.target.value)}
              value={address2} className='border rounded px-3 py-2' type='text' placeholder='adress line 2' required />
          </div>

        </div>
      </div>
      <div>
        <p className='mt-4 mb-2'>About</p>
        <textarea onChange={(e) => setAbout(e.target.value)}
              value={about} className='w-full px-4 pt-2 border rounded' placeholder='about yourself'
          rows={5}
          required />
      </div>
<button type='submit' className="bg-blue-600 hover:bg-blue-700 transition duration-200 px-8 py-3 mt-6 text-white rounded-full">
  Add Doctor
</button>

      </div>




    </form>
  )
}
export default AddDoctor