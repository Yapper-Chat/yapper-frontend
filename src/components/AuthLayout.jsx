function AuthLayout({ title, children }){
    return(
        <>
            <div className="flex h-screen">
                {/* FIXED IMAGE SIDE */}
                <div className="hidden md:block w-1/2 h-screen fixed top-0 left-0 bg-[url('/AuthImage.jpg')] bg-cover bg-center p-[30px] lg:p-[65px]">
                <div className="flex flex-col justify-between h-full">
                    <img src="/yapperFullLogo.svg" alt="logo" className="w-[170px]" />
                    <h1 className="text-white text-[30px] md:text-[40px] font-bold w-[300px] md:w-[380px]">
                    Network Is Your Net Worth
                    </h1>
                </div>
                </div>

                {/* SCROLLABLE FORM SIDE */}
                <div className="flex flex-col w-full md:w-1/2 md:ml-[50%] h-screen overflow-y-auto pt-5 sm:pt-0 sm:justify-center items-center">
                {/* FORM */}
                {children}
                </div>
            </div>
        </>

    )
}
export default AuthLayout;