import { useEffect, useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { CgMenuMotion } from 'react-icons/cg';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const variants = {
    hidden: { opacity: 0, x: 0, y: -200 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -200 },
  };
  const { pathname } = useLocation();

  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <div className="pt-5">
      <button onClick={toggle}>
        <CgMenuMotion className={`text-[#C2021D]`} size={50} />
      </button>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            variants={variants}
            transition={{ ease: 'easeIn' }}
            initial="hidden"
            whileInView="enter"
            exit="exit"
            className="fixed flex filter backdrop-filter backdrop-blur-2xl bg-opacity-95 flex-col text-white bg-black top-0 left-0 h-screen w-full py-20"
          >
            <div className="flex w-full py-2 items-center  px-40 top-0 flex-row justify-between">
              <div className="flex flex-row gap-5 items-center text-center ">
                <div className="flex gap-2 items-center">
                  <NavLink to={'/'} className="w-[100px] h-auto">
                    <img src="/assets/spaceapps-logo.jpg" alt="" />
                  </NavLink>
                  <NavLink to={'/'} className="w-[100px] h-auto">
                    <img src="/assets/nasa-logo.png" alt="" />
                  </NavLink>
                </div>
              </div>

              <button onClick={toggle}>
                <RxCross1 className="text-blood font-extrabold" size={45} />
              </button>
            </div>
            <div className="flex flex-row h-[75vh] w-full  justify-center gap-16 items-center">
              <div>
                <ul className="flex gap-10 text-6xl flex-col items-center">
                  <li>
                    <NavLink
                      className={`custom-link ${
                        pathname === '/' ? 'bg-white text-black' : ''
                      }`}
                      to={'/'}
                    >
                      Ana Sayfa
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className={`custom-link ${
                        pathname === '/explore' ? 'bg-white text-black' : ''
                      }`}
                      to={'/explore'}
                    >
                      Keşfet
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="flex gap-4 items-center flex-col">
                <img
                  src={'/HAVELSAN_DIKEY_LOGO.png'}
                  width={600}
                  height={600}
                  alt=""
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
