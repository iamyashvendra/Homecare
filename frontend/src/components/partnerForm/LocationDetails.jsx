import { FaLocationDot } from "react-icons/fa6";

const LocationDetails = ({ formData, handleChange }) => {
  return (
   <>
    <div className="">
      <div className="flex items-center gap-2 border-b-2 border-[#e2e8f0] pb-3 mb-6">
        <FaLocationDot  className="text-[#2ba955] text-2xl" />
        <h2 className="text-lg font-semibold text-[#001f3f]">Location & Availability</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <div className="w-full">
          <label className="block text-sm font-medium text-[#001f3f]">City / Area</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="e.g. Rajasthan, Jaipur"
            className="mt-2 w-full h-12 px-4 rounded-xl border-2 border-[#e2e8f0] bg-[#f8fafc] outline-none focus:border-[#2ba955]"
            required
          />
        </div>

        <div className="w-full">
          <label className="block text-sm font-medium text-[#001f3f]">Working Days & Hours</label>
          <input
            type="text"
            name="workingHours"
            value={formData.workingHours}
            onChange={handleChange}
            placeholder="e.g. Mon-Sat (9:00 AM - 7:00 PM)"
            className="mt-2 w-full h-12 px-4 rounded-xl border-2 border-[#e2e8f0] bg-[#f8fafc] outline-none focus:border-[#2ba955]"
          />
        </div>
      </div>
    </div>
   </>
  )
}

export default LocationDetails;