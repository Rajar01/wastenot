import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image src="/wastenot-logo.svg" alt="" width={208} height={48} priority />
    </div>
  );
}
