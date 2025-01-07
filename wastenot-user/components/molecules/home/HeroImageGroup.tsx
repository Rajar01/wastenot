import Image from "next/image";

export default function HeroImageGroup() {
  return (
    <div className="relative flex justify-between items-stretch">
      <div>
        <Image
          className="w-[856px] h-[524px] rounded-xl object-cover"
          src="https://placehold.co/856"
          alt=""
          width={856}
          height={524}
          priority
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <Image
            className="w-[416px] h-[250px] object-cover rounded-xl"
            src="https://placehold.co/100"
            alt=""
            width={416}
            height={250}
            priority
          />
        </div>
        <div>
          <Image
            className="w-[416px] h-[250px] object-cover rounded-xl"
            src="https://placehold.co/100"
            alt=""
            width={416}
            height={250}
            priority
          />
        </div>
      </div>
      <div className="absolute top-[180px] left-[790px]">
        <Image
          className="rounded-xl"
          src="/donate-now-circle.svg"
          alt="donate now circle"
          width={160}
          height={160}
          priority
        />
      </div>
    </div>
  );
}
