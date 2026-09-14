export interface AssetMetadata {
  path: string;
  description: string;
  width?: number;
  height?: number;
  focalPosition?: string;
  status: 'original' | 'generated' | 'crop' | 'placeholder';
}

export const ASSET_REGISTRY: Record<string, AssetMetadata> = {
  crest: {
    path: '/images/school-crest.png',
    description: 'SPS gold and navy heraldic emblem with open book, torch, and wreath',
    status: 'generated',
  },
  heroStudents: {
    path: '/images/hero-students.webp',
    description: 'Four Indian school students in light-blue uniform and navy ties on modern campus',
    width: 1200,
    height: 800,
    focalPosition: 'center 35%',
    status: 'generated',
  },
  academicLab: {
    path: '/images/academic-lab.webp',
    description: 'Two uniformed students with a microscope in laboratory',
    width: 600,
    height: 400,
    focalPosition: 'right center',
    status: 'generated',
  },
  studentBasketball: {
    path: '/images/student-basketball.webp',
    description: 'Student in SPS basketball jersey on outdoor sports court',
    width: 600,
    height: 400,
    focalPosition: 'right center',
    status: 'generated',
  },
  campus: {
    path: '/images/campus.webp',
    description: 'Green landscaped campus grounds and school architecture',
    width: 600,
    height: 400,
    focalPosition: 'right center',
    status: 'generated',
  },
  parentPriya: {
    path: '/images/parent-priya.webp',
    description: 'Circular testimonial portrait of Mrs. Priya Sharma',
    width: 200,
    height: 200,
    focalPosition: 'center top',
    status: 'generated',
  },
  newsScience: {
    path: '/images/news-science.webp',
    description: 'Students at science exhibition holding awards',
    width: 300,
    height: 200,
    focalPosition: 'center center',
    status: 'generated',
  },
  newsGreenCampus: {
    path: '/images/news-green-campus.webp',
    description: 'Students planting saplings during campus green initiative',
    width: 300,
    height: 200,
    focalPosition: 'center center',
    status: 'generated',
  },
  newsToppers: {
    path: '/images/news-toppers.webp',
    description: 'Academic toppers felicitation ceremony',
    width: 300,
    height: 200,
    focalPosition: 'center center',
    status: 'generated',
  },
};
