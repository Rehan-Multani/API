const cloudinary = require('cloudinary').v2;

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.SECRET_KEY,
});

const uploadCloudinary = async (req, res, next) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ error: 'No files were uploaded.' });
        }

        const uploadedImages = [];

        // Upload images to Cloudinary
        for (const file of req.files) {
            const dataUrl = `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;
            const result = await cloudinary.uploader.upload(dataUrl);

            uploadedImages.push({
                url: result.secure_url,
                public_id: result.public_id,
                asset_id:result.asset_id
            });
        }

        req.uploadedImages = uploadedImages; // Store uploaded image URLs in request object
        next(); // Move to the next middleware/controller
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = uploadCloudinary;
