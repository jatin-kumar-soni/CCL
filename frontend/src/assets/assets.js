import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

// export const doctors = [
//     {
//         _id: 'doc1',
//         name: 'Dr. Richard James',
//         image: doc1,
//         speciality: 'General physician',
//         degree: 'MBBS',
//         experience: '4 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 50,
//         address: {
//             line1: '17th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc2',
//         name: 'Dr. Emily Larson',
//         image: doc2,
//         speciality: 'Gynecologist',
//         degree: 'MBBS',
//         experience: '3 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 60,
//         address: {
//             line1: '27th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc3',
//         name: 'Dr. Sarah Patel',
//         image: doc3,
//         speciality: 'Dermatologist',
//         degree: 'MBBS',
//         experience: '1 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 30,
//         address: {
//             line1: '37th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc4',
//         name: 'Dr. Christopher Lee',
//         image: doc4,
//         speciality: 'Pediatricians',
//         degree: 'MBBS',
//         experience: '2 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 40,
//         address: {
//             line1: '47th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc5',
//         name: 'Dr. Jennifer Garcia',
//         image: doc5,
//         speciality: 'Neurologist',
//         degree: 'MBBS',
//         experience: '4 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 50,
//         address: {
//             line1: '57th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc6',
//         name: 'Dr. Andrew Williams',
//         image: doc6,
//         speciality: 'Neurologist',
//         degree: 'MBBS',
//         experience: '4 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 50,
//         address: {
//             line1: '57th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc7',
//         name: 'Dr. Christopher Davis',
//         image: doc7,
//         speciality: 'General physician',
//         degree: 'MBBS',
//         experience: '4 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 50,
//         address: {
//             line1: '17th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc8',
//         name: 'Dr. Timothy White',
//         image: doc8,
//         speciality: 'Gynecologist',
//         degree: 'MBBS',
//         experience: '3 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 60,
//         address: {
//             line1: '27th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc9',
//         name: 'Dr. Ava Mitchell',
//         image: doc9,
//         speciality: 'Dermatologist',
//         degree: 'MBBS',
//         experience: '1 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 30,
//         address: {
//             line1: '37th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc10',
//         name: 'Dr. Jeffrey King',
//         image: doc10,
//         speciality: 'Pediatricians',
//         degree: 'MBBS',
//         experience: '2 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 40,
//         address: {
//             line1: '47th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc11',
//         name: 'Dr. Zoe Kelly',
//         image: doc11,
//         speciality: 'Neurologist',
//         degree: 'MBBS',
//         experience: '4 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 50,
//         address: {
//             line1: '57th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc12',
//         name: 'Dr. Patrick Harris',
//         image: doc12,
//         speciality: 'Neurologist',
//         degree: 'MBBS',
//         experience: '4 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 50,
//         address: {
//             line1: '57th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc13',
//         name: 'Dr. Chloe Evans',
//         image: doc13,
//         speciality: 'General physician',
//         degree: 'MBBS',
//         experience: '4 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 50,
//         address: {
//             line1: '17th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc14',
//         name: 'Dr. Ryan Martinez',
//         image: doc14,
//         speciality: 'Gynecologist',
//         degree: 'MBBS',
//         experience: '3 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 60,
//         address: {
//             line1: '27th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc15',
//         name: 'Dr. Amelia Hill',
//         image: doc15,
//         speciality: 'Dermatologist',
//         degree: 'MBBS',
//         experience: '1 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 30,
//         address: {
//             line1: '37th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
// ]
export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Arvind Kumar',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '6 Years',
        hospital: 'Raj Hospital, Ranchi',
        about: 'Dr. Arvind Kumar focuses on preventive care and managing common ailments with a patient-first approach.',
        fees: 50,
        phone: '9835170011',
        timings: '10:00 AM - 1:00 PM',
        address: {
            line1: 'Kanta Toli, Circular Road',
            line2: 'Ranchi, Jharkhand'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Neha Singh',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS, MS',
        experience: '5 Years',
        hospital: 'Santevita Hospital, Ranchi',
        about: 'Dr. Neha is dedicated to women’s health and specializes in pregnancy care and reproductive health.',
        fees: 60,
        phone: '9835122233',
        timings: '11:00 AM - 3:00 PM',
        address: {
            line1: 'Church Road',
            line2: 'Main Road, Ranchi'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Radhika Verma',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD',
        experience: '2 Years',
        hospital: 'Hill View Hospital, Ranchi',
        about: 'Dr. Radhika helps patients with skin, hair, and nail issues with modern treatments.',
        fees: 30,
        phone: '9835100090',
        timings: '9:00 AM - 12:00 PM',
        address: {
            line1: 'Lalpur Chowk',
            line2: 'Ranchi, Jharkhand'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Prakash Das',
        image: doc4,
        speciality: 'Pediatrician',
        degree: 'MBBS, DCH',
        experience: '4 Years',
        hospital: 'Medanta Hospital, Ranchi',
        about: 'Dr. Prakash is passionate about child health and provides compassionate pediatric care.',
        fees: 40,
        phone: '9431104455',
        timings: '10:30 AM - 1:30 PM',
        address: {
            line1: 'Harmu Bypass',
            line2: 'Ranchi, Jharkhand'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Shalini Mishra',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS, DM',
        experience: '7 Years',
        hospital: 'RIMS, Ranchi',
        about: 'Dr. Shalini treats complex neurological disorders with experience and empathy.',
        fees: 50,
        phone: '9334432211',
        timings: '11:00 AM - 2:00 PM',
        address: {
            line1: 'Bariatu Road',
            line2: 'Ranchi, Jharkhand'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Ankit Raj',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS, DM',
        experience: '6 Years',
        hospital: 'Guru Nanak Hospital, Ranchi',
        about: 'Dr. Ankit has expertise in managing epilepsy, stroke, and other nervous system conditions.',
        fees: 50,
        phone: '9431122766',
        timings: '12:00 PM - 3:00 PM',
        address: {
            line1: 'Kokar Industrial Area',
            line2: 'Ranchi, Jharkhand'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Nitesh Kumar',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '5 Years',
        hospital: 'Manipal Hospital, Ranchi',
        about: 'Dr. Nitesh ensures holistic and personalized treatment for every patient.',
        fees: 50,
        phone: '7545032233',
        timings: '9:00 AM - 12:00 PM',
        address: {
            line1: 'Morabadi Stadium Road',
            line2: 'Ranchi, Jharkhand'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Swati Jha',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS, MS',
        experience: '4 Years',
        hospital: 'Sadar Hospital, Ranchi',
        about: 'Dr. Swati provides compassionate care in infertility, maternity, and gynecological surgeries.',
        fees: 60,
        phone: '7979945633',
        timings: '10:00 AM - 1:30 PM',
        address: {
            line1: 'Purulia Road',
            line2: 'Ranchi, Jharkhand'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Isha Kumari',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD',
        experience: '2 Years',
        hospital: 'Devkamal Hospital, Ranchi',
        about: 'Dr. Isha handles cosmetic and clinical dermatology with evidence-based practices.',
        fees: 30,
        phone: '7903251771',
        timings: '11:30 AM - 2:00 PM',
        address: {
            line1: 'Harmu Housing Colony',
            line2: 'Ranchi, Jharkhand'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Rajeev Ranjan',
        image: doc10,
        speciality: 'Pediatrician',
        degree: 'MBBS, DCH',
        experience: '3 Years',
        hospital: 'K.C. Roy Memorial Hospital, Ranchi',
        about: 'Dr. Rajeev ensures healthy child development and illness prevention.',
        fees: 40,
        phone: '7488975322',
        timings: '10:00 AM - 12:30 PM',
        address: {
            line1: 'Ashok Nagar',
            line2: 'Ranchi, Jharkhand'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Vandana Sinha',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS, DM',
        experience: '8 Years',
        hospital: 'Maa Sharda Hospital, Ranchi',
        about: 'Dr. Vandana is known for treating brain and spinal disorders with precision.',
        fees: 50,
        phone: '8298881100',
        timings: '9:30 AM - 12:00 PM',
        address: {
            line1: 'Kutchery Road',
            line2: 'Ranchi, Jharkhand'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Subham Pandey',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS, DM',
        experience: '5 Years',
        hospital: 'Seva Sadan Hospital, Ranchi',
        about: 'Dr. Subham uses a patient-centric approach to handle migraines and seizures.',
        fees: 50,
        phone: '9123456789',
        timings: '11:00 AM - 1:30 PM',
        address: {
            line1: 'Argora Chowk',
            line2: 'Ranchi, Jharkhand'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Manish Tiwari',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '6 Years',
        hospital: 'Mahatma Gandhi Memorial Hospital, Ranchi',
        about: 'Dr. Manish provides preventive and chronic illness management with care.',
        fees: 50,
        phone: '9801234433',
        timings: '8:30 AM - 11:30 AM',
        address: {
            line1: 'Kanke Road',
            line2: 'Ranchi, Jharkhand'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Anjali Priya',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS, MS',
        experience: '5 Years',
        hospital: 'Abdur Razzaque Ansari Hospital, Ranchi',
        about: 'Dr. Anjali offers expert care in maternity, IVF, and women’s health.',
        fees: 60,
        phone: '9709125566',
        timings: '10:00 AM - 1:00 PM',
        address: {
            line1: 'Irba, NH-33',
            line2: 'Ranchi, Jharkhand'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Tanvi Mishra',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD',
        experience: '3 Years',
        hospital: 'Hope Hospital, Ranchi',
        about: 'Dr. Tanvi provides advanced skincare and cosmetic treatments.',
        fees: 30,
        phone: '8756690021',
        timings: '10:00 AM - 1:00 PM',
        address: {
            line1: 'Hinoo Chowk',
            line2: 'Ranchi, Jharkhand'
        }
    }
];
