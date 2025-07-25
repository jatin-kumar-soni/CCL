import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from './context/AppContext'
import { assets } from './assets/assets'
import RelatedDoctors from './components/RelatedDoctors'
import { toast } from 'react-toastify'
import axios from 'axios'

const Appointment = () => {
  const { docId } = useParams()
  const { doctors, currencySymbol,backendUrl,token,getDoctorsData } = useContext(AppContext)
  const daysOfweek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const navigate = useNavigate()
  const [docInfo, setdocInfo] = useState(null)
  const [docSlots, setdocSlots] = useState([])
  const [slotIndex, setslotIndex] = useState(0)
  const [slotTime, setslotTime] = useState("")
  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setdocInfo(docInfo)

  }
  const getAvailableSlots = async () => {
    setdocSlots([])

    // getting current date
    let today = new Date()
    for (let i = 0; i < 7; i++) {
      // getting date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)
      //setting end time of the date with index
      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0)
      // setting Hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      }
      else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }
      let timeSlots = []
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })


        let day = currentDate.getDate()

        let month = currentDate.getMonth()+1
        let year = currentDate.getFullYear()

        const slotDate = day + "_" + month + "_" + year
        const slotTime  = formattedTime

        const isSoltAvailable = docInfo.slots_booked[slotDate] && docInfo.slots_booked[slotDate].includes(slotTime) ? false : true

        if(isSoltAvailable)
        {
           //add slots to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime

        })
        }

       

        // Increment current Time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }
      setdocSlots(prev => ([...prev, timeSlots]))
    }
  }

  const bookAppointment = async () =>
  {
    if(!token)
    {
      toast.warn('login to book appointment')
      return navigate('/login')
    }
    try {
      
      const date= docSlots[slotIndex][0].datetime

      let day= date.getDate()
      let month = date.getMonth()+1
      let year = date.getFullYear()

      const slotDate = day + "_" + month + "_" + year

      const {data } = await axios.post(backendUrl + '/api/user/book-appointment',{docId,slotDate,slotTime},{headers:{token}})
      if(data.success)
      {
        toast.success(data.message)
        getDoctorsData()
        navigate('/my-appointment')
      }
      else
      {
        toast.error(data.message)
      }


    } catch (error) {

      console.log(error);
      toast.error(error.message)
      
      
    }
  }

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  useEffect(() => {
    getAvailableSlots()
  }, [docInfo]
  )
  useEffect(() => {
    console.log(docSlots);
  }, [docSlots])
  return docInfo && (
    <div>
      {/* ---------------DOCTOR DETAILS------------------- */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-[#5f6FFF] w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt='' />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/* -----DOC INFO : name, degree experience------- */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{docInfo.name} <img className='w-5' src={assets.verified_icon} alt='' /></p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>
              {docInfo.experience}
            </button>
          </div>
          {/* Doctor About */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
              About
              <img src={assets.info_icon} alt='' />
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>
            Appointment fee:<span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>
      {/* BOOKING SLOTS */}
      <div className='sm:ml-72 sm:pl-4 font-medium text-gray-700'>
        <p>
          Booking Slots
        </p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            docSlots.length && docSlots.map((item, index) => (
              <div onClick={() => setslotIndex(index)} className={`text-center py-6 min-w-[60px] rounded-full cursor-pointer ${slotIndex === index ? 'bg-[#5f6FFF] text-white' : 'border border-gray-200'}`} key={index}>
                <p>{item && item[0] && daysOfweek[item[0].datetime.getDay()]}</p>
                <p>{item && item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))

          }
        </div>
        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {
            docSlots.length && docSlots[slotIndex] && docSlots[slotIndex].map((item, index) => (
              <p onClick={() => setslotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-[#5f6FFF] text-white' : 'text-gray-400 border border-gray-300'}`} key={index}>
                {
                  item.time.toLowerCase()
                }

              </p>
            ))
          }
        </div>
        <button onClick={bookAppointment} className='bg-[#5f6FFF] text-white text-sm font-light px-4 py-3 rounded-full my-6'>Book An Appointment</button>
      </div>
      {/* Listing related Doctors  */}
      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  )
}

export default Appointment
