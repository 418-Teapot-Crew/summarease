import Menu from '../menu/Menu';
import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <header
      className={`flex w-full z-50 items-center h-[100px] fixed px-24 top-0 flex-row justify-between text-black border-b`}
    >
      <div className="flex flex-row gap-5 items-center text-center ">
        <div className="flex gap-2 items-center">
          {/* <div className="h-[70px] w-auto">
                  <img
                    src="/assets/spaceapps-logo.jpg"
                    className="w-full h-full"
                    alt=""
                  />
                </div> */}
          <NavLink to={'/'} className="h-[80px] w-auto">
            <img
              src="/HAVELSAN_YATAY_LOGO.png"
              className="w-full h-full"
              alt=""
            />
          </NavLink>
        </div>
      </div>
      <Menu />
    </header>
  );
}
