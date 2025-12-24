import { useState } from "react";

type ToggleMenuProps = {
  onClick?: () => void;
};

const ToggleMenu = ({ onClick }: ToggleMenuProps) => {
  const [active, setActive] = useState(false);

  const animationBtn = () => {
    setActive(prev => !prev);
    onClick?.();
  };

  return (
    <button
      onClick={animationBtn}
      className="
        w-[50px] h-[50px]
        rounded-md
        bg-transparent
        cursor-pointer
        block md:hidden
      "
    >
      <span
        className={`
          block mx-auto my-1
          w-[20px] h-[2px]
          bg-slate-200
          transition-all duration-300
          ${active ? "translate-y-[6px] -rotate-45" : ""}
        `}
      />
      <span
        className={`
          block mx-auto my-1
          w-[20px] h-[2px]
          bg-slate-200
          transition-all duration-300
          ${active ? "opacity-0" : ""}
        `}
      />
      <span
        className={`
          block mx-auto my-1
          w-[20px] h-[2px]
          bg-slate-200
          transition-all duration-300
          ${active ? "-translate-y-[6px] rotate-45" : ""}
        `}
      />
    </button>
  );
};

export default ToggleMenu;
