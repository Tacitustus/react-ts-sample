import { ButtonProps } from "./ButtonProps";

export const Button = (props: ButtonProps) => {
  const { textContent } = props;
  return (
    <>
      <button type="button">{textContent}</button>
    </>
  );
};
