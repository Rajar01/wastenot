import { kanit } from "@/utils/fonts.ts";

interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <button
      className={`${kanit.className} w-full p-3 rounded-xl text-l font-semibold bg-primary text-white`}
    >
      {text}
    </button>
  );
}
