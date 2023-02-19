import { MutableRefObject, useEffect, useState } from "react";

export default function useOutsideClicked(
  ref: MutableRefObject<HTMLElement | null>,
  reinitialize?: boolean //dependecy state to reset isClicked to false
) {
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    setIsClicked(false);
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
  }, [ref, reinitialize]);
  return isClicked;
}
