import AuthLayout from "../components/AuthLayout";
import { useNavigate } from "react-router-dom";


function SignUp() {
    const navigate = useNavigate();
    return (
        <AuthLayout title="Sign Up">
            <div className="flex flex-col w-[90%] lg:w-[90%] xl:w-[75%] gap-[20px] sm:gap-[30px] sm:p-[20px]">
                {/* SIGN UP TITLE */}
                <div className="flex flex-col">
                    <h1 className="text-black font-bold text-[25px] sm:text-[35px]">Welcome To Yapper!</h1>
                    <p>Create your account</p>
                </div>

                {/* SIGN UP FORM */}
                <form action="" method="post" className="flex flex-col gap-[15px]">
                    {/* USERNAME */}
                    <div class="flex flex-col">
                        <label type="text" for="username" class="text-gray-700 text-[15px]">Username</label>
                        <div class="flex flex-col">
                            <input required type="string" id="username" placeholder="Enter your username" class="text-[16px] px-3 py-4 w-full font-light border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffd903] focus:border-transparent"/>
                        </div>
                    </div>

                    {/* EMAIL */}
                    <div class="flex flex-col">
                        <label required for="email" class="text-gray-700 text-[15px]">Email</label>
                        <div class="flex flex-col">
                            <input required type="string" id="email" placeholder="Enter your email" class="text-[16px] px-3 py-4 w-full font-light border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffd903] focus:border-transparent"/>
                        </div>
                    </div>

                    {/* PASSWORD */}
                    <div class="flex flex-col">
                        <label required for="password" class="text-gray-700 text-[15px]">Password</label>
                        <div class="relative">
                            <input required type="password" id="password" placeholder="Enter your password" class="text-[16px] w-full font-light px-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffd903] focus:border-transparent pr-16" />
                            <button type="button" id="togglePassword" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    height="24px" 
                                    viewBox="0 -960 960 960" 
                                    width="24px" 
                                    fill="#000000">
                                <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* CONFIRM PASSWORD */}
                    <div class="flex flex-col">
                        <label required for="confirm-password" class="text-gray-700 text-[15px]">Confirm Password</label>
                        <div class="relative">
                            <input required type="password" id="confirm-password" placeholder="Confirm your password" class="text-[16px] w-full font-light px-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffd903] focus:border-transparent pr-16" />
                            <button type="button" id="togglePassword" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    height="24px" 
                                    viewBox="0 -960 960 960" 
                                    width="24px" 
                                    fill="#000000">
                                <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* SIGN UP */}
                    <button type="submit" data-toggle-password class="w-full bg-gradient-to-r from-[#ffd903] to-[#ffe54f] text-black p-3 rounded-lg transition-all hover:shadow-sm duration-500ms cursor-pointer">
                        Sign Up
                    </button>
                </form>

                {/* SIGN UP WITH GOOLE */}
                <button class="flex gap-2 justify-center items-center w-full text-black p-3 rounded-lg border border-black duration-500 cursor-pointer">
                    <img src="/google.svg" alt="google" class="w-[20px] h-[20px]"/>
                    <p>Continue with Google</p>
                </button>

                {/* ALREADY HAVE AN ACCOUNT */}
                <p className="text-center">Already have an account? <span className="font-semibold cursor-pointer" onClick={() => navigate('/')}>Log in</span></p>
            </div>
        </AuthLayout>
        // CREATE JAVASCRIPT OF THE PASSWORD VIEWER
    );
}

export default SignUp;
