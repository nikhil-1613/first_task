
import React from 'react';
import logo from '../images/logo.png';
import homeImage from '../images/Home.png';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

const SignUp = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row overflow-hidden">
      {/* Left Section */}
      <div className="lg:w-[40%] bg-black text-white flex flex-col justify-center items-center px-4 py-6 sm:px-6">
        <div className="flex items-center mb-4 w-full">
          <img src={logo} alt="Your Logo" className="h-10 mb-10 sm:mb-24 ml-16" />
        </div>
        <img
          src={homeImage}
          alt="Home"
          className="w-3/4 max-w-[500px] h-auto mb-10 sm:mb-16"
        />
        <h2 className="font-inter font-bold text-[24px] sm:text-[30px] text-center lg:text-left leading-tight mb-2 sm:mr-52">
          Lorem Ispam
        </h2>
        <p className="text-xs text-center lg:text-left mx-auto lg:mx-0 max-w-xs" >
          Lorem Ipsam is simply dummy text of the printing and typesetting industry.
        </p>
       
      </div>

      {/* Right Section */}
      <div className="lg:w-[60%] bg-gray-100 flex justify-center items-center px-4 py-6 sm:px-6">
        <div className="w-full max-w-md sm:max-w-lg">
          <h2 className="font-inter font-bold text-[36px] sm:text-[53.33px] leading-none mb-2">
            Create account
          </h2>
          <p className="text-sm mb-6">
            Already have an account?{' '}
            <a href="login" className="text-blue-600">
              Login
            </a>
          </p>

          <form className="space-y-4">
            <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-3 lg:space-y-0">
              <input
                type="text"
                placeholder="Name"
                className="w-full lg:w-1/2 p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full lg:w-1/2 p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <input
              type="email"
              placeholder="Email ID"
              className="w-full p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </button>
            </div>
            <select className="w-full p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option>Select User</option>
            </select>
            <div className="relative">
              <input
                type="text"
                placeholder="Profile Completion Form"
                className="w-full p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                readOnly
              />
              <label
                htmlFor="file-upload"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 border border-gray-300 rounded-md text-sm cursor-pointer hover:bg-gray-300"
              >
                Browse File
                <input id="file-upload" type="file" className="hidden" />
              </label>
            </div>
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 mt-1 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="text-sm leading-snug">
                I agree to the DeepaSaaS Terms of service and Privacy policy
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 text-sm"
              style={{ backgroundColor: '#2563EB' }}
            >
              CREATE ACCOUNT
            </button>
          </form>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-xs text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-md mb-3 text-sm hover:bg-gray-50">
            <FcGoogle size={20} className="mr-2" />
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
            <FaApple size={20} className="mr-2" />
            Continue with Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

// // src/SignUp.js
// import React from 'react';
// import logo from '../images/logo.png'; // Your logo image
// import homeImage from '../images/Home.png'; // Your home image
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'; // Eye icons for password
// import { FcGoogle } from 'react-icons/fc'; // Google icon
// import { FaApple } from 'react-icons/fa'; // Apple icon

// const SignUp = () => {
//   const [showPassword, setShowPassword] = React.useState(false);

//   return (
//     <div className="h-screen w-screen flex flex-col lg:flex-row overflow-hidden">
//       {/* Left Section - Image and Text */}
//       <div className="lg:w-[40%] bg-black text-white flex flex-col justify-center items-center p-4">
//         <div className="flex items-center mb-4">
//           <img src={logo} alt ="Your Logo" className="h-10 ascape: pre-line mb-24 mr-44" />
//         </div>
//         <img
//           src={homeImage}
//           alt="Home"
//           className="w-3/4 max-w-[500px] h-auto mb-16"
//         />
//         <h2
//           className="font-inter font-bold text-[30px] leading-none tracking-normal mb-2 text-center mr-60"
//           style={{ fontWeight: 700 }}
//         >
//           Lorem Ispam
//         </h2>
//         <p className="text-center text-xs mr-20">
//           Lorem Ipsam is simply dummy text of the printing and typesetting industry.
//         </p>
//       </div>

//       {/* Right Section - Form */}
//       <div className="lg:w-[60%] bg-gray-100 flex justify-center items-center p-4">
//         <div className="w-full max-w-lg">
//           <h2
//             className="font-inter font-bold text-[53.33px] leading-none tracking-normal mb-2"
//             style={{ fontWeight: 700 }}
//           >
//             Create account
//           </h2>
//           <p className="text-sm mb-6">
//             Already have an account?{' '}
//             <a href="login" className="text-blue-600">
//               Login
//             </a>
//           </p>

//           <form className="space-y-3">
//             <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-3 lg:space-y-0">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="w-full lg:w-1/2 p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
//               />
//               <input
//                 type="text"
//                 placeholder="Phone"
//                 className="w-full lg:w-1/2 p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
//               />
//             </div>
//             <input
//               type="email"
//               placeholder="Email ID"
//               className="w-full p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
//             />
//             <div className="relative">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 placeholder="Password"
//                 className="w-full p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//               >
//                 {showPassword ? (
//                   <AiOutlineEyeInvisible size={20} />
//                 ) : (
//                   <AiOutlineEye size={20} />
//                 )}
//               </button>
//             </div>
//             <select className="w-full p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
//               <option>Select User</option>
//             </select>
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Profile Completion Form"
//                 className="w-full p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
//                 readOnly
//               />
//               <label
//                 htmlFor="file-upload"
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 border border-gray-300 rounded-md text-sm cursor-pointer hover:bg-gray-300"
//               >
//                 Browse File
//                 <input id="file-upload" type="file" className="hidden" />
//               </label>
//             </div>
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 id="terms"
//                 className="mr-2 w-4 h-4 border-gray-300 rounded"
//               />
//               <label htmlFor="terms" className="text-sm">
//                 I agree to the DeepaSaaS Terms of service and Privacy policy
//               </label>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 text-sm"
//               style={{ backgroundColor: '#2563EB' }}
//             >
//               CREATE ACCOUNT
//             </button>
//           </form>

//           <div className="flex items-center my-3">
//             <hr className="flex-grow border-gray-300" />
//             <span className="mx-2 text-xs text-gray-500">or</span>
//             <hr className="flex-grow border-gray-300" />
//           </div>

//           <button className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-md mb-3 text-sm hover:bg-gray-50">
//             <FcGoogle size={20} className="mr-2" />
//             Continue with Google
//           </button>
//           <button className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
//             <FaApple size={20} className="mr-2" />
//             Continue with Apple
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
