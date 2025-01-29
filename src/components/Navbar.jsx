import Bookmarks from "./logos/Bookmarks";
import HomeLogo from "./logos/HomeLogo";
import MessageLogo from "./logos/MessageLogo";
import NotificationLogo from "./logos/NotificationLogo";
import SearchLogo from "./logos/SearchLogo";
import CommunitesLogo from "./logos/CommunitesLogo";
import TwitterLogo from "./TwitterLogo";
import BusinessLogo from "./logos/BusinessLogo";
import ProfileLogo from "./logos/ProfileLogo";
import MoreLogo from "./logos/MoreLogo";
import User from "./User";
import CosmosLogo from "./CosmosLogo";

export default function Navbar() {
  return (
    <div className="flex z-20">
      <aside className=" 2xl:flex lg:flex hidden z-20 bg-black flex-col justify-around px-20 border-right  h-screen 2xl:w-96 lg:w-80 fixed">
      <img src="https://github.com/Gildo-Henriques/twitter-copia/blob/main/public/twitter.png?raw=true" className="size-7" alt="" />
        <nav className="flex flex-col space-y-5 *:text-xl">
          {/* HOME */}
          <a href="" className="flex items-center space-x-2">
            {/* ^Logo */}
            <span>
              <HomeLogo />
            </span>
            {/* Link */}
            <span className="text-white font-semibold">Home</span>
          </a>
          {/* SEARCH */}
          <a href="" className="flex items-center space-x-2">
            {/* ^Logo */}
            <span>
              <SearchLogo />
            </span>
            {/* Link */}
            <span className="text-white font-thin">Explore</span>
          </a>
          {/* NOTIFICATIONS */}
          <a href="" className="flex items-center space-x-2">
            {/* ^Logo */}
            <span>
              <NotificationLogo />
            </span>
            {/* Link */}
            <span className="text-white font-thin">Notificações</span>
          </a>
          {/* MESSAGE */}
          <a href="" className="flex items-center space-x-2">
            {/* ^Logo */}
            <span>
              <MessageLogo />
            </span>
            {/* Link */}
            <span className="text-white font-thin">Mensagens</span>
          </a>
          {/* Bookmarks */}
          <a href="" className="flex items-center space-x-2">
            {/* ^Logo */}
            <span>
              <Bookmarks />
            </span>
            {/* Link */}
            <span className="text-white font-thin">Bookmarks</span>
          </a>
          {/* Communites */}
          <a href="" className="flex items-center space-x-2">
            {/* ^Logo */}
            <span>
              <CommunitesLogo />
            </span>
            {/* Link */}
            <span className="text-white font-thin">Communities</span>
          </a>
          {/* Premium */}
          <a href="" className="flex items-center space-x-2">
            {/* ^Logo */}
            <span>
              <TwitterLogo />
            </span>
            {/* Link */}
            <span className="text-white font-thin">Premium</span>
          </a>
          {/* Premium */}
          <a href="" className="flex items-center space-x-2">
            {/* ^Logo */}
            <span>
              <BusinessLogo />
            </span>
            {/* Link */}
            <span className="text-white font-thin">Business</span>
          </a>
          {/* Profile */}
          <a href="" className="flex items-center space-x-2">
            {/* ^Logo */}
            <span>
              <ProfileLogo />
            </span>
            {/* Link */}
            <span className="text-white font-thin">Profile</span>
          </a>
          {/* More */}
          <a href="" className="flex items-center space-x-2">
            {/* ^Logo */}
            <span>
              <MoreLogo />
            </span>
            {/* Link */}
            <span className="text-white font-thin">More</span>
          </a>
          <a
            href=""
            className="bg-white font-semibold py-3 text-center rounded-full"
          >
            Post
          </a>
        </nav>
        <User />
      </aside>
      <header className="w-full lg:h-14 h-auto bg-black/20 top-0 lg:pt-0 pt-8 z-10 backdrop-blur-lg border-bottom flex lg:flex-row flex-col fixed justify-center">
      <div className="lg:hidden flex w-full justify-between pb-5 px-5 relative">
      <img src="/public/COSMOS.png" alt="" className="object-cover rounded-full size-6" />
        <img src="/public/twitter.png" className="size-6 absolute inset-0 m-auto" alt="" />
        <button className="border rounded-full px-3 text-white text-sm">Upgrade</button>
      </div>
        <div className="h-full flex justify-center w-full items-end lg:px-80 2xl:px-[384px]">
          <button className="w-full transition-all duration-300 hover:bg-[#797878]/20 h-full flex items-end justify-center">
            <span className="text-white z-20 font-semibold border-b-4 border-b-blue-500 py-3">
              Para você
            </span>
          </button>
          <button className=" w-full transition-all duration-300 hover:bg-[#797878]/20 h-full flex items-end justify-center">
            <span className="text-gray-500   border-b-4 border-b-transparent py-3">
              Seguir a
            </span>
          </button>
        </div>
      </header>
      {/* div informações */}
      <div className="2xl:flex lg:flex hidden flex-col space-y-5 2xl:w-96 lg:w-80 border-left  bg-black h-screen right-0 fixed overflow-y-scroll z-10 2xl:p-5 2xl:px-10 px-5 lg:py-10">
        {/* BARRA DE PESQUISA */}
        <div className="flex w-full space-x-2 h-12 py-2 rounded-full outline-none border-full items-center px-2 justify-between">
          <label htmlFor="pesquisar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5 text-[#595858]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </label>
          <input
            type="search"
            name="pesquisar"
            id="pesquisar"
            className="text-white text-sm bg-transparent w-full outline-none"
          />
        </div>
        {/* Subscrever */}
        <div className="w-full border-full p-4 space-y-5 text-white rounded-2xl">
          <h2 className="text-xl font-bold">Subscrever para Premium</h2>
          <p>
            Inscreva-se para desbloquear novos recursos e, se for elegível,
            receba uma parte da receita.
          </p>
          <button className="font-semibold bg-blue-500 rounded-full px-5 py-2">
            Subscrever
          </button>
        </div>
        {/* O que esta acontecendo */}
        <div className="w-full border-full  text-white rounded-2xl">
          <div className="p-4">
            <h2 className="text-xl font-bold">O que está acontecendo</h2>
          </div>
          <div className="px-4 py-3 flex hover:bg-[#070a0d] justify-between">
            <div className="">
              <span className="text-xs text-[#929292]">
                Tendências em Angola
              </span>
              <p className="font-bold">Competição da CODEPOINT</p>
            </div>
          </div>
          <div className="px-4 py-3 flex hover:bg-[#070a0d] justify-between">
            <div className="">
              <span className="text-xs text-[#929292]">Política</span>
              <p className="font-bold">O Trump</p>
              <span className="text-xs text-[#929292]">5.48M posts</span>
            </div>
          </div>
          <div className="px-4 py-5 flex hover:bg-[#070a0d] rounded-b-2xl justify-between">
            <a href="" className="text-blue-500">
              Mostrar Mais
            </a>
          </div>
        </div>
        {/* Quem para seguir */}
        <div className="w-full border-full  text-white rounded-2xl">
          <div className="p-4">
            <h2 className="text-xl font-bold">O que está acontecendo</h2>
          </div>
          <div className="px-4 py-3 flex hover:bg-[#070a0d] justify-between">
            <div className="">
              <span className="text-xs text-[#929292]">
                Tendências em Angola
              </span>
              <p className="font-bold">Competição da CODEPOINT</p>
            </div>
          </div>
          <div className="px-4 py-3 flex hover:bg-[#070a0d] justify-between">
            <div className="">
              <span className="text-xs text-[#929292]">Política</span>
              <p className="font-bold">O Trump</p>
              <span className="text-xs text-[#929292]">5.48M posts</span>
            </div>
          </div>
          <div className="px-4 py-5 flex hover:bg-[#070a0d] rounded-b-2xl justify-between">
            <a href="" className="text-blue-500">
              Mostrar Mais
            </a>
          </div>
        </div>
        {/* oii */}
        <div className="pb-20">
          <p className="text-sm text-[#767676]">
            Termos e Condições de Serviço Política de Privacidade Política de
            Cookies A acessibilidade Informações sobre os anúncios - 2025 X
            Corp. (') ano- com e para o
          </p>
        </div>
      </div>
    </div>
  );
}
