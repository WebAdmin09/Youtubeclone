import { useContext, useState } from "react";
import { CtxProvider } from "../context/GlobalState";
import { AsideItems } from "../static/data";
import { Link } from "react-router-dom";

export default function Aside() {
  const { bgMode, asideText, showAside } = useContext(CtxProvider);
  const [active, setActive] = useState("Home");
  const [showMore] = useState(false);

  return (
    <aside
      className={`fixed top-[64px] left-0 h-full md:bottom-0 md:top-auto md:h-[61px]  ${asideText ? "w-fit" : "w-[225px]"
        } md:w-full py-7 px-4 md:p-0 md:flex md:items-center ${bgMode ? "bg-[#17171E]" : "bg-white"
        } md:z-[999999] ${showAside ? "z-[999999]" : ""}`}
    >
      <div className='mb-4 md:m-0 md:flex md:flex-row md:justify-around md:items-center md:w-full'>
        {AsideItems.Top.map((item, index) => {
          return (
            <Link
              onClick={() => setActive(item.name)}
              to={`/${item.name === "Home" ? "" : item.name.toLowerCase()}`}
              key={index}
            >
              <div
                className={` h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer ${asideText ? "w-fit" : ""
                  } ${bgMode ? "hover:bg-white/20" : "hover:bg-black/10"} my-1 ${item.name === active
                    ? `${bgMode ? "bg-white/20" : "bg-black/10"}`
                    : ""
                  }`}
              >
                <span
                  className={`${asideText ? "mr-0" : "mr-5"} ${bgMode ? "text-white" : ""
                    } md:m-0`}
                >
                  {item.icon}
                </span>
                <p
                  className={`p-2 text-sm font-medium ${bgMode ? "text-white" : ""
                    } select-none ${asideText ? "hidden" : ""} md:hidden`}
                >
                  {item.name}
                </p>
              </div>
            </Link>
          );
        })}
        <Link>
          <li

            className={`h-10 md:w-[45px] md:h-[40px] flex justify-start px-3 rounded-xl items-center cursor-pointer ${asideText ? "w-fit" : ""
              } ${bgMode ? "hover:bg-white/20" : "hover:bg-black/10"} my-1 ${"Private Route" === active
                ? `${bgMode ? "bg-white/20" : "bg-black/10"}`
                : ""
              }`}
          >
            <i
              className={`fa-solid fa-lock text-[21px] flex justify-center items-center ${asideText ? "mr-0" : "mr-5"
                } ${bgMode ? "text-white" : ""} md:m-0`}
            ></i>
            <p
              className={`p-2 text-sm font-medium ${bgMode ? "text-white" : ""
                } select-none ${asideText ? "hidden" : ""} md:hidden`}
            >
              Private Route
            </p>
          </li>
        </Link>
      </div>
      <hr className='my-2 md:hidden' />
      <div
        className={`overflow-hidden transition-transform origin-top ${showMore ? "scale-y-1 h-auto" : "scale-y-0 h-0"
          } md:hidden`}
      >
        {AsideItems.Middle.map((item, index) => {
          return (
            <Link
              to={`/${item.name.toLowerCase().replace(/ /g, "")}`}
              key={index}
            >
              <div
                className={`h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer ${asideText ? "w-fit" : ""
                  } ${bgMode ? "hover:bg-white/20" : "hover:bg-black/10"} my-1 ${item.name.toLowerCase().replace(/ /g, "") === active
                    ? `${bgMode ? "bg-white/20" : "bg-black/10"}`
                    : ""
                  }`}
              >
                <span
                  className={`${asideText ? "mr-0" : "mr-5"} ${bgMode ? "text-white" : ""
                    }`}
                >
                  {item.icon}
                </span>
                <p
                  className={`p-2 text-sm font-medium ${bgMode ? "text-white" : ""
                    } select-none ${asideText ? "hidden" : ""}`}
                >
                  {item.name}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
      <li

        className={`h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer ${asideText ? "w-fit" : ""
          } ${bgMode ? "hover:bg-white/20" : "hover:bg-black/10"} my-1 md:hidden`}
      >
        <i
          className={`fa-solid ${showMore ? "fa-chevron-up" : "fa-chevron-down"
            }  text-[21px] flex justify-center items-center ${asideText ? "mr-0" : "mr-5"
            } ${bgMode ? "text-white" : ""}`}
        ></i>
        <p
          className={`p-2 text-sm font-medium ${bgMode ? "text-white" : ""
            } select-none ${asideText ? "hidden" : ""}`}
        >
          {showMore ? "Hide" : "Show more"}
        </p>
      </li>
    </aside>
  );
}
