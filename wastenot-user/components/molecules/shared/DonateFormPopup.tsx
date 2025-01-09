"use client";

import TextAndIconButton from "@/components/atoms/shared/TextAndIconButton.tsx";

import { kanit } from "@/utils/fonts.ts";
import { TextAndIconButtonType, TextAndIconButtonSize } from "@/utils/enums.ts";
import { BASE_API_URL } from "@/utils/consts.ts";
import { sleep } from "@/utils/helpers.ts";

import Image from "next/image";
import { toast } from "react-hot-toast";

interface DonateFormPopupProps {
  active: boolean;
  causeId: number;
  onClose: () => void;
}

enum ShippingType {
  SelfDelivered,
  Pickup,
}

export default function DonateFormPopup({
  active,
  onClose,
  causeId,
}: DonateFormPopupProps) {
  const [mealName, setMealName] = useState("");
  const [numberOfMeals, setNumberOfMeals] = useState(0);
  const [donatorName, setDonatorName] = useState("");
  const [donatorPhoneNumber, setDonatorPhoneNumber] = useState("");
  const [donationAddress, setDonationAddress] = useState("");
  const [shippingType, setShippingType] = useState(ShippingType.SelfDelivered);
  const [isLoading, setIsLoading] = useState(false);

  const handleMealNameChange = (event) => {
    setMealName(event.target.value);
  };

  const handleNumberOfMealsChange = (event) => {
    setNumberOfMeals(event.target.value);
  };

  const handleDonatorNameChange = (event) => {
    setDonatorName(event.target.value);
  };

  const handleDonatorPhoneNumberChange = (event) => {
    setDonatorPhoneNumber(event.target.value);
  };

  const handleDonationAddressChange = (event) => {
    setDonationAddress(event.target.value);
  };

  const handleShippingTypeChange = (event) => {
    setShippingType(event.target.value);
  };

  const onDonateBtnClick = async () => {
    try {
      setIsLoading(true);
      const toastId = toast.loading("Waiting...");

      const response = await fetch(`${BASE_API_URL}/causes/${causeId}/donate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          donator_name: donatorName,
          donator_type: "individual",
          donator_phone_number: donatorPhoneNumber,
          donation_shipping_type:
            shippingType == 0 ? "self-delivered" : "pickup",
          donation_address: donationAddress,
          meal_name: mealName,
          meal_donation_amount: numberOfMeals,
        }),
      });

      await sleep(3000);
      toast.dismiss(toastId);
      setIsLoading(false);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      } else {
        toast.success("You did it!");
      }
    } catch (err) {
      console.log(err);
      toast.error("Error occured!");
    } finally {
      setMealName("");
      setNumberOfMeals(0);
      setDonatorName("");
      setDonatorPhoneNumber("");
      setDonationAddress("");
      setShippingType(ShippingType.SelfDelivered);

      onClose();
    }
  };

  return (
    <div
      className={`${!active && "hidden"} z-50 fixed bg-neutral-4/50 w-full h-screen top-0 flex items-center justify-center`}
    >
      <div className="sticky bg-neutral-1 px-10 pb-10 pt-[65px] w-[726px] rounded-xl space-y-6">
        <button
          disabled={isLoading}
          onClick={onClose}
          className="w-[50px] h-[50px] bg-neutral-3 rounded-full absolute -top-[25px] left-1/2 transform -translate-x-1/2 flex items-center justify-center"
        >
          <Image
            src="/x-mark.svg"
            alt=""
            width={24}
            height={24}
            priority
            style={{
              filter: "invert(1)",
            }}
          />
        </button>
        <div
          className={`${kanit.className} text-lead font-medium pb-4 border-b border-neutral-6/60`}
        >
          How many meals you want to donate?
        </div>
        <div className="flex items-center justify-between space-x-5">
          <input
            disabled={isLoading}
            placeholder="Name of meal"
            type="text"
            value={mealName}
            onChange={handleMealNameChange}
            className={`${kanit.className} text-l text-neutral-4 font-light rounded border border-neutral-6 p-3 w-full bg-neutral-5 focus:ring-0 focus:outline-none`}
          />

          <input
            disabled={isLoading}
            placeholder="Number of meals"
            type="number"
            value={numberOfMeals}
            onChange={handleNumberOfMealsChange}
            className={`${kanit.className} text-l text-neutral-4 font-light rounded border border-neutral-6 p-3 w-full bg-neutral-5 focus:ring-0 focus:outline-none`}
          />
        </div>
        <div
          className={`${kanit.className} text-lead font-medium pb-4 border-b border-neutral-6/60`}
        >
          Deliver yourself or have us pick up?
        </div>
        <div className="space-y-5">
          <fieldset className="flex items-start space-x-[60px]">
            <div
              className={`${kanit.className} text-l flex items-center space-x-2`}
            >
              <input
                disabled={isLoading}
                id="self-delivered"
                className="peer/self-delivered w-5 h-5 text-primary accent-primary"
                type="radio"
                name="shipping-type"
                value={ShippingType.SelfDelivered}
                checked={shippingType == ShippingType.SelfDelivered}
                onChange={handleShippingTypeChange}
              />
              <label
                htmlFor="self-delivered"
                className="peer-checked/self-delivered:text-primary"
              >
                Self-delivered
              </label>
            </div>
            <div
              className={`${kanit.className} text-l flex items-center space-x-2`}
            >
              <input
                disabled={isLoading}
                id="pickup"
                className="peer/pickup w-5 h-5 text-primary accent-primary"
                type="radio"
                name="shipping-type"
                value={ShippingType.Pickup}
                checked={shippingType == ShippingType.Pickup}
                onChange={handleShippingTypeChange}
              />
              <label
                htmlFor="pickup"
                className="peer-checked/pickup:text-primary"
              >
                Pickup
              </label>
            </div>
          </fieldset>
          <input
            disabled={isLoading}
            placeholder="Address for pickup"
            type="text"
            value={donationAddress}
            onChange={handleDonationAddressChange}
            className={`${kanit.className} ${shippingType == ShippingType.SelfDelivered && "hidden"} text-l text-neutral-4 font-light rounded border border-neutral-6 p-3 w-full bg-neutral-5 focus:ring-0 focus:outline-none`}
          />
        </div>
        <div
          className={`${kanit.className} text-lead font-medium pb-4 border-b border-neutral-6/60`}
        >
          Personal info
        </div>
        <div className="flex flex-col items-center justify-start space-y-5">
          <input
            disabled={isLoading}
            placeholder="Your name"
            type="text"
            value={donatorName}
            onChange={handleDonatorNameChange}
            className={`${kanit.className} text-l text-neutral-4 font-light rounded border border-neutral-6 p-3 w-full bg-neutral-5 focus:ring-0 focus:outline-none`}
          />
          <input
            disabled={isLoading}
            placeholder="Your phone number"
            type="text"
            value={donatorPhoneNumber}
            onChange={handleDonatorPhoneNumberChange}
            className={`${kanit.className} text-l text-neutral-4 font-light rounded border border-neutral-6 p-3 w-full bg-neutral-5 focus:ring-0 focus:outline-none`}
          />
        </div>
        <div>
          <TextAndIconButton
            disabled={isLoading}
            onClick={onDonateBtnClick}
            text="Donate now"
            size={TextAndIconButtonSize.Large}
            type={TextAndIconButtonType.Secondary}
          />
        </div>
      </div>
    </div>
  );
}
