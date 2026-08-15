import { FaRegImage } from "react-icons/fa6";

const AboutPortfolio = ({ formData, handleChange }) => {
  return (
    <div className="mt-10">

      {/* Heading */}
      <div className="flex items-center gap-2 border-b-2 border-[#e2e8f0] pb-3 mb-6">
        <FaRegImage className="text-[#2ba955] text-2xl" />
        <h2 className="text-lg font-semibold text-[#001f3f]">
          About & Portfolio
        </h2>
      </div>

      {/* Bio */}
      <div className="w-full">
        <label className="block text-sm font-medium text-[#001f3f]">
          About You (Bio)
        </label>

        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          rows="5"
          placeholder="Tell customers about your skills, equipment, and work quality... (Hi, I am Ramesh. I have been providing...)"
          className="mt-2 w-full rounded-xl border-2 border-[#e2e8f0] bg-[#f8fafc] px-5 py-4 resize-none outline-none transition-all duration-200 focus:border-[#2ba955]"
        />
      </div>
    </div>
  );
};

export default AboutPortfolio;