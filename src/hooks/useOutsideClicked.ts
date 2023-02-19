import { MutableRefObject, useEffect, useState } from "react";

export default function useOutsideClicked(
  ref: MutableRefObject<HTMLElement | null>
) {
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event?.target as Node)) {
        setIsClicked(true);
      } else {
        setIsClicked(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return isClicked;
}
