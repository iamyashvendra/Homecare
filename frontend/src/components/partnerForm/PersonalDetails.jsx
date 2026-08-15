import { FaRegIdCard } from "react-icons/fa";

const PersonalDetails = ({ formData, handleChange, handlePictureChange }) => {
  return (
    <>
      <div className="-mt-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#001f3f]">Join as a Professional Partner</h1>
          <p className="mt-3 text-sm md:text-base text-[#555555]">
            Fill out the details below to create your professional profile and start getting clients.
          </p>
        </div>

        <div className="flex items-center gap-2 border-b-2 border-[#e2e8f0] pb-3 mb-6">
          <FaRegIdCard className="text-[#2ba955] text-2xl" />
          <h2 className="text-lg font-semibold text-[#001f3f]">Personal Details</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full">
            <label className="block text-sm font-medium text-[#001f3f]">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Yashvendra Singh Jadaun"
              className="mt-2 w-full h-12 px-4 rounded-xl border-2 border-[#e2e8f0] bg-[#f8fafc] outline-none focus:border-[#2ba955]"
              required
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-[#001f3f]">Profile Picture</label>
            <input
              type="file"
              name="profileImage"
              accept="image/*"
              onChange={handlePictureChange}
              className="mt-2 w-full p-2 px-2 h-12 rounded-xl border-2 border-[#e2e8f0] bg-[#f8fafc]"
              required
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-[#001f3f]">Mobile Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
              className="mt-2 w-full h-12 px-4 rounded-xl border-2 border-[#e2e8f0] bg-[#f8fafc] outline-none focus:border-[#2ba955]"
              required
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-[#001f3f]">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="yashvender720@gmail.com"
              className="mt-2 w-full h-12 px-4 rounded-xl border-2 border-[#e2e8f0] bg-[#f8fafc] outline-none focus:border-[#2ba955]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;