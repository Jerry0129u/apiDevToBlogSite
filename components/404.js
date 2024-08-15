export default function Error() {
    return (
     <div>
            <div className="my-[100px] max-w-[642px] w-full justify-center flex items-center mx-auto">
                <div className="font-[400] text-[72px] leading-[72px] text-black">404</div>
                <hr class="h-px border-0 bg-slate-400 w-[156px] rotate-90"></hr>
                <div className="w-[392px] flex flex-col gap-5">
                    <div className="font-[600] text-[24px] leading-[40px] text-black">Page Not Found</div>
                    <div className="font-[400] text-[18px] leading-6 text-zinc-500">We're sorry, This page is unknown or does not exist the page you are looking for.</div>
                    <div className="w-[130px] h-[40px] rounded-md py-[10px] px-4 bg-indigo-500">
                      <p className="font-[500] text-[14px] leading-5 items-center">Back To Home</p>
                    </div>
                </div>
            </div>
     </div>
    )}
    