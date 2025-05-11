import { useState } from "react";
import { Button } from "../../atoms/Button/Button";

export const MontyHallPage = () => {
  const [isHits, setIsHits] = useState<[boolean, boolean, boolean]>([
    true,
    false,
    false,
  ]);

  return (
    <>
      <Button textContent="" />
    </>
  );
};
