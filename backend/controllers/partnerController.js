import Partner from '../models/Partner.js';

// 1. Register Partner
export const registerPartner = async (req, res) => {
  try {
    const {
      fullName, phone, email, category, service, experience, // <--- yahan 'service' destructure kiya
      languages, visitingCharge, city, workingHours, bio,
    } = req.body;

    const profileImageUrl = req.files && req.files['profileImage'] ? req.files['profileImage'][0].path : '';
    
    const galleryUrls = req.files && req.files['gallery'] 
      ? req.files['gallery'].map((file) => file.path)
      : [];

    const newPartner = new Partner({
      fullName, phone, email, category, service, experience, // <--- yahan pass kar diya
      languages, visitingCharge, city, workingHours, bio,
      profileImage: profileImageUrl, gallery: galleryUrls,
    });

    const savedPartner = await newPartner.save();

    res.status(201).json({
      success: true,
      message: 'Partner request sent successfully!',
      data: savedPartner,
    });
  } catch (error) {
    console.error('Registration Error: ', error);
    res.status(500).json({ success: false, message: 'Server Error, please try again.' });
  }
};

// 2. Get All Partners (With Advanced Filtering)
export const getAllPartners = async (req, res) => {
  try {
    const { status, category } = req.query;
    let filter = {};

    // 1. Status Filter (UPDATED LOGIC)
    if (status && status.toLowerCase() === 'all') {
      // Agar 'all' pass kiya hai, toh filter.status mat lagao (Saare partners de do)
    } else if (status) {
      filter.status = status;
    } else {
      filter.status = 'Approved'; // Default public website ke liye
    }

    // 2. Category Filter
    if (category) {
      filter.category = { $regex: new RegExp(category, 'i') }; 
    }

    const partners = await Partner.find(filter).sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: partners.length,
      data: partners,
    });
  } catch (error) {
    console.error('Fetch Partners Error: ', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// 3. Update Partner Status
export const updatePartnerStatus = async (req, res) => {
  try {
    const { status } = req.body;
    
    const updatedPartner = await Partner.findByIdAndUpdate(
      req.params.id, 
      { status }, 
      { new: true }
    );

    if (!updatedPartner) {
      return res.status(404).json({ success: false, message: 'Partner not found' });
    }

    res.status(200).json({
      success: true,
      message: `Partner status updated to ${status}`,
      data: updatedPartner,
    });
  } catch (error) {
    console.error('Update Status Error: ', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// 4. Delete Partner
export const deletePartner = async (req, res) => {
  try {
    const deletedPartner = await Partner.findByIdAndDelete(req.params.id);

    if (!deletedPartner) {
      return res.status(404).json({ success: false, message: 'Partner not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Partner deleted successfully',
    });
  } catch (error) {
    console.error('Delete Partner Error: ', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};