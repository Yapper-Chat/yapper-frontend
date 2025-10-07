function AuthLayout({ title, children }){
    return(
        <>
            <div className="flex">
                {/* SIDE IMAGE */}
                <div className="hidden md:block w-1/2 h-screen bg-[url('/AuthImage.jpg')] bg-cover bg-center p-[30px] lg:p-[65px]">
                    <div className="flex flex-col justify-between h-full">
                        <img src="/yapperFullLogo.svg" alt="logo" className="w-[170px]"/>
                        <h1 className="text-white text-[30px] md:text-[40px] font-bold w-[300px] md:w-[380px]">Network Is Your Net Worth</h1>
                    </div>
                </div>

                {/* FORM SECTION */}
                <div className="flex flex-col w-full md:w-1/2 h-screen justify-center items-center">
                    {/* FORM */}
                    {children}
                </div>
            </div>
        </>
    )
}
export default AuthLayout;