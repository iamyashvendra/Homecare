import { FaBriefcase } from "react-icons/fa";
import { categories } from "../../assets/data/data"; 

const ProfessionalDetails = ({ formData, handleChange }) => {
  return (
    <>
      <div className="flex items-center gap-2 border-b-2 border-[#e2e8f0] pb-3 mb-6">
        <FaBriefcase className="text-[#2ba955] text-2xl" />
        <h2 className="text-lg font-semibold text-[#001f3f]">Professional Details</h2>
      </div>

      <div className="grid -mt-8 grid-cols-1 md:grid-cols-2 gap-6">
        <div className="w-full">
          <label className="block text-sm font-medium text-[#001f3f]">Service Category</label>
          <select 
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-2 w-full p-2 px-2 h-12 rounded-xl border-2 border-[#e2e8f0] bg-[#f8fafc] outline-none focus:border-[#2ba955]" 
            required
          >
            <option value="">Select your profession</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full">
          <label className="block text-sm font-medium text-[#001f3f]">Experience (in Years)</label>
          <input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="mt-2 w-full p-2 px-2 h-12 rounded-xl border-2 border-[#e2e8f0] bg-[#f8fafc] outline-none focus:border-[#2ba955]"
            placeholder="e.g. 8"
            required
          />
        </div>

        <div className="w-full">
          <label className="block text-sm font-medium text-[#001f3f]">Languages Spoken</label>
          <input
            type="text"
            name="languages"
            value={formData.languages}
            onChange={handleChange}
            placeholder="e.g. Hindi, English, Kannada"
            className="mt-2 w-full h-12 px-4 rounded-xl border-2 border-[#e2e8f0] bg-[#f8fafc] outline-none focus:border-[#2ba955]"
            required
          />
        </div>

        <div className="w-full">
          <label className="block text-sm font-medium text-[#001f3f]">Visiting Charge (₹)</label>
          <input
            type="number"
            name="visitingCharge"
            value={formData.visitingCharge}
            onChange={handleChange}
            placeholder="e.g. 199"
            className="mt-2 w-full h-12 px-4 rounded-xl border-2 border-[#e2e8f0] bg-[#f8fafc] outline-none focus:border-[#2ba955]"
          />
        </div>
      </div>
    </>
  )
}

export default ProfessionalDetails;