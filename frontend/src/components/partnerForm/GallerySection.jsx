import { FaCloudUploadAlt } from "react-icons/fa";

const GallerySection = ({ handleGalleryUpload }) => {
  return (
    <div className="mt-8">

      <label className="block text-sm font-medium text-[#001f3f] mb-3">
        Upload Previous Work Gallery (Up to 5 Images)
      </label>

      <label
        htmlFor="gallery"
        className="relative flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#dbe4ee] bg-[#f8fafc] py-10 transition hover:border-[#2ba955] hover:bg-[#f3faf5]"
      >
        <FaCloudUploadAlt className="text-5xl text-[#2ba955]" />

        <h3 className="mt-4 text-lg font-semibold text-[#001f3f]">
          Click or drag images to upload
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          PNG, JPG, JPEG up to 5MB
        </p>

        <input
          id="gallery"
          type="file"
          accept="image/*"
          multiple
          onChange={handleGalleryUpload}
          className="absolute inset-0 cursor-pointer opacity-0"
        />
      </label>
    </div>
  );
};

export default GallerySection;