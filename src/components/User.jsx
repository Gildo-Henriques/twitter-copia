import CosmosLogo from "./CosmosLogo";

export default function User() {
  return (
    <>
      <div className="flex space-x-2 items-center py-3 px-5 hover:bg-[#1c1c1c] rounded-full w-full">
        <CosmosLogo/>
        <div className="flex flex-col">
            <span className="text-white text-base font-semibold">COSMOS</span>
            <span className="text-slate-500 text-xs">cosmos@gmail.com</span>
        </div>
      </div>
    </>
  );
}
