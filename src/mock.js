// Mock data for Custom Printed Boxes landing page

export const specifications = [
  {
    id: 1,
    name: 'UV Coating',
    description: 'Premium UV coating for enhanced durability and stunning visual appeal',
    icon: 'Sparkles'
  },
  {
    id: 2,
    name: 'Embossing',
    description: 'Raised texture printing for luxury tactile experience',
    icon: 'Layers'
  },
  {
    id: 3,
    name: 'Reverse Tuck',
    description: 'Secure closure system with professional finish',
    icon: 'Box'
  },
  {
    id: 4,
    name: 'Auto Tuck',
    description: 'Self-locking design for quick assembly and secure packaging',
    icon: 'Lock'
  },
  {
    id: 5,
    name: 'Spot UV',
    description: 'Selective UV coating for premium brand highlighting',
    icon: 'Zap'
  },
  {
    id: 6,
    name: 'Foil Stamping',
    description: 'Metallic foil application for luxurious branding',
    icon: 'Star'
  }
];

export const products = [
  {
    id: 1,
    imageUrl: 'https://customer-assets.emergentagent.com/job_cardbox-printing/artifacts/4vih599t_Gemini_Generated_Image_szbiyeszbiyeszbi.png',
    title: 'Premium Product Boxes',
    category: 'Retail Packaging'
  },
  {
    id: 2,
    imageUrl: 'https://customer-assets.emergentagent.com/job_cardbox-printing/artifacts/4hmeii1b_image00022.jpeg',
    title: 'Custom Branded Boxes',
    category: 'Brand Packaging'
  },
  {
    id: 3,
    imageUrl: 'https://customer-assets.emergentagent.com/job_cardbox-printing/artifacts/cie22mkl_image00014.jpeg',
    title: 'Luxury Packaging Solutions',
    category: 'Premium Boxes'
  },
  {
    id: 4,
    imageUrl: 'https://customer-assets.emergentagent.com/job_cardbox-printing/artifacts/zw0k8pmk_image00028.jpeg',
    title: 'Export Quality Boxes',
    category: 'Commercial Packaging'
  },
  {
    id: 5,
    imageUrl: 'https://customer-assets.emergentagent.com/job_cardbox-printing/artifacts/v4nrt7u9_image00045.jpeg',
    title: 'Custom Design Boxes',
    category: 'Specialty Printing'
  }
];

export const rigidBoxes = [
  {
    id: 1,
    imageUrl: 'https://customer-assets.emergentagent.com/job_cardbox-printing/artifacts/kmefe5vf_image00010.jpeg',
    title: 'Luxury Rigid Boxes',
    description: 'Premium rigid boxes for high-end products'
  },
  {
    id: 2,
    imageUrl: 'https://customer-assets.emergentagent.com/job_cardbox-printing/artifacts/7moqmb2n_image00002.jpeg',
    title: 'Custom Rigid Packaging',
    description: 'Sturdy and elegant rigid box solutions'
  },
  {
    id: 3,
    imageUrl: 'https://customer-assets.emergentagent.com/job_cardbox-printing/artifacts/rrf7uvwv_image00036.jpeg',
    title: 'Premium Rigid Boxes',
    description: 'High-quality rigid boxes with custom printing'
  }
];

export const displayBoxes = [
  {
    id: 1,
    imageUrl: 'https://customer-assets.emergentagent.com/job_cardbox-printing/artifacts/9nc91xv3_IMG_5256.jpg',
    title: 'Retail Display Boxes',
    description: 'Eye-catching display packaging for retail'
  },
  {
    id: 2,
    imageUrl: 'https://customer-assets.emergentagent.com/job_cardbox-printing/artifacts/dowy9mr0_image00006.jpeg',
    title: 'Counter Display Solutions',
    description: 'Professional display boxes for countertop presentation'
  }
];

export const features = [
  {
    id: 1,
    title: 'Export Quality',
    description: 'International standard materials and printing quality',
    icon: 'Globe'
  },
  {
    id: 2,
    title: 'Worldwide Delivery',
    description: 'Fast and reliable shipping to any location globally',
    icon: 'Truck'
  },
  {
    id: 3,
    title: 'Free Samples',
    description: 'Request samples of our successful projects',
    icon: 'Package'
  },
  {
    id: 4,
    title: 'Custom Designs',
    description: 'Fully customizable designs to match your brand',
    icon: 'Palette'
  }
];

export const mockSubmitSampleRequest = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Sample request submitted:', formData);
      resolve({ success: true, message: 'Sample request submitted successfully!' });
    }, 1000);
  });
};

export const mockSubmitContact = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Contact form submitted:', formData);
      resolve({ success: true, message: 'Thank you! We will contact you soon.' });
    }, 1000);
  });
};