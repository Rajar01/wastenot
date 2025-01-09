import FAQQuestionCard from "@/components/molecules/home/FAQQuestionCard.tsx";

export default function FAQQuestionCardGroup() {
  return (
    <div className="flex-1 space-y-6">
      <FAQQuestionCard
        question="How can i make food donation?"
        answer={`To make a food donation, you can easily navigate to our "Causes" page on our website. Here, you'll find a list of various causes supported by our organization. Simply click on the specific cause related to food assistance that resonates with you. This will likely take you to a dedicated page for that cause, where you can find more information about how your donation will be used to help those in need. You'll then typically find options to make a monetary donation directly on that page, often through secure online payment gateways.
`}
      />
      <FAQQuestionCard
        question="What types of food donations are typically accepted"
        answer="Most food banks and charities welcome non-perishable, unopened, and unexpired food items. This usually includes canned goods (fruits, vegetables, soups, beans), boxed meals, pasta, rice, and other shelf-stable items. However, it's crucial to check the specific guidelines of the organization you're donating to, as some may have preferences or restrictions on certain items."
      />
      <FAQQuestionCard
        question="Will my contributions be appreciated?"
        answer="Absolutely, your contributions are highly appreciated!  We rely on the generosity of donors like you to continue our important work.  While we may not be able to display photos of all contributors on our website due to privacy concerns or website limitations, we do recognize all gifts with gratitude.  If you have any questions about how your contribution will be used or if you'd like to discuss recognition options in more detail, you can feel free to contact us at 85486 (308) 555-0121 or debra.holt@example.com."
      />
      <FAQQuestionCard
        question="How can i find a food bank or charity near me that accepts donations?"
        answer={`To find a food bank or charity near you that accepts donations, you can easily utilize our website's "Causes" page. Once you navigate to this page, you'll find a list of various charitable organizations that we support. By clicking on the specific cause related to food assistance, you'll be directed to a detailed page for that cause. Within this detailed page, you can often find valuable information such as the location(s) of the food bank or charity associated with that particular cause. This will help you locate a convenient and accessible option for making your donation.`}
      />
      <FAQQuestionCard
        question="How can I get food donation?"
        answer="Our organization isn't currently set up to directly distribute food donations to individuals. However, we can connect you with resources to help! If you're facing food insecurity, there are many food banks and charities in your area that can provide assistance. We recommend reaching out to us at 85486 (308) 555-0121 or debra.holt@example.com and letting us know your location. Our team can then provide you with contact information for food banks or charities near you that can directly distribute food to those in need."
      />
    </div>
  );
}
