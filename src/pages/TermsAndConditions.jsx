import { LuMail, LuPhone } from "react-icons/lu";
import { BackButton } from "../components/UiComponents";

const TermaAndConditions = () => {
  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center p-5 bg-gradient-to-tr from-gray-200 via-blue-200 to-cyan-200">
      <BackButton />
      <div className="flex flex-col gap-6 w-full lg:w-1/2 bg-white h-5/6 lg:h-dvh scroll-smooth overflow-auto p-5 text-sm rounded-lg">
        <label className="font-bold text-gray-500 text-4xl lg:text-5xl">
          Terms and <span className="text-blue-700">Conditions</span>
        </label>
        <p className="text-gray-500">
          Welcome to <strong className="text-blue-600">EduSync ICT</strong>. By
          accessing and using our website, you agree to comply with and be bound
          by the following terms and conditions of use. Please read them
          carefully.
        </p>

        <label className="text-xl font-bold">1. Acceptance of Terms</label>
        <p className="text-gray-500">
          By accessing our website or using our services, you accept these terms
          in full. If you do not agree with any part of these terms, you must
          not use this website.
        </p>

        <label className="text-xl font-bold">2. Changes to Terms</label>
        <p className="text-gray-500">
          EduSync ICT reserves the right to revise these terms and conditions at
          any time without prior notice. Updated terms will be posted on this
          page with the revised date.
        </p>

        <label className="text-xl font-bold">3. Intellectual Property</label>
        <p className="text-gray-500">
          All content, logos, and materials on this website are owned by or
          licensed to EduSync ICT. Unauthorized use, reproduction, or
          distribution is strictly prohibited.
        </p>

        <label className="text-xl font-bold">4. Use of Services</label>
        <p className="text-gray-500">
          You agree to use our services only for lawful purposes and not to
          engage in activities that may harm our reputation or disrupt
          operations.
        </p>

        <label className="text-xl font-bold">5. Limitation of Liability</label>
        <p className="text-gray-500">
          EduSync ICT is not liable for any damages, direct or indirect, arising
          from the use or inability to use our services or website content.
        </p>

        <label className="text-xl font-bold">6. Privacy</label>
        <p className="text-gray-500">
          Your privacy is important to us. Please refer to our Privacy Policy to
          understand how we collect, use, and protect your information.
        </p>

        <label className="text-xl font-bold">7. Contact Information</label>
        <p className="text-gray-500">
          For any questions about these Terms and Conditions, please contact us
          at:
        </p>
        <div className="flex flex-col gap-2 justify-start items-start text-blue-700 ">
          <a
            href="mailto:nadeesharuwandima@gmail.com?subject=EduSync%20ICT%20Terms%20Inquiry"
            className="flex flex-row gap-2 justify-center items-center duration-300 ease-in hover:text-blue-900"
          >
            {" "}
            <LuMail />
            nadeesharuwandima@gmail.com
          </a>
          <div className="flex flex-row gap-2 justify-center items-center">
            <LuPhone /> +94 71 176 4232
          </div>
        </div>

        <p className="text-gray-600 italic">Last updated: November 2025</p>
      </div>
    </div>
  );
};

export default TermaAndConditions;
