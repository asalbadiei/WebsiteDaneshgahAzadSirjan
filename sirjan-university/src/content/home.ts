import type { ImageRef, L } from '@/types/content';

const l = (fa: string, en: string): L => ({ fa, en });
const im = (name: string, fa: string, en: string): ImageRef => ({ src: `/illustrations/${name}.svg`, alt: { fa, en }, illustrative: true });

export type HeroSlide = {
  id: string;
  /**
   * The image is finished artwork with its own text (a designed banner): it is shown as-is,
   * without the tint, the overlaid title or a link. Its alt text must repeat the text it contains.
   */
  artwork?: boolean;
  eyebrow: L;
  title: L;
  body: L;
  image: ImageRef;
  primary: { label: L; href: string };
  secondary?: { label: L; href: string };
};

export const heroSlides: HeroSlide[] = [
  {
    id: 'banner',
    artwork: true,
    eyebrow: l('آموزش، پژوهش و فناوری؛ مسیری برای ساختن آینده', 'Education, research and technology: a path to building the future'),
    title: l('دانشگاه آزاد اسلامی واحد سیرجان', 'Islamic Azad University, Sirjan Branch'),
    body: l('', ''),
    image: {
      src: '/images/hero-banner.jpg',
      alt: l(
        'بنر دانشگاه آزاد اسلامی واحد سیرجان بر روی عکس سردر پردیس: «آموزش، پژوهش و فناوری؛ مسیری برای ساختن آینده» — آموزش، پژوهش، فناوری — سیرجان، استان کرمان',
        'Islamic Azad University, Sirjan Branch banner over a photo of the campus gateway: “Education, research and technology: a path to building the future” — Education, Research, Technology — Sirjan, Kerman Province',
      ),
    },
    primary: { label: l('درباره دانشگاه', 'About the university'), href: '/about' },
  },
  {
    id: 'admissions',
    eyebrow: l('پذیرش دانشجو', 'Admissions'),
    title: l('راهنمای کامل پذیرش و ثبت‌نام دانشجویان جدید', 'A complete guide to admissions and new-student registration'),
    body: l('مدارک لازم، مراحل ثبت‌نام و پرسش‌های متداول را پیش از مراجعه بررسی کنید.', 'Review required documents, registration steps and frequently asked questions before you apply.'),
    image: im('students', 'تصویر نمادین دانشجویان', 'Illustration of students'),
    primary: { label: l('اطلاعات پذیرش', 'Admissions information'), href: '/admissions' },
    secondary: { label: l('رشته‌های تحصیلی', 'Academic programmes'), href: '/programs' },
  },
  {
    id: 'research',
    eyebrow: l('پژوهش و نوآوری', 'Research and innovation'),
    title: l('از ایده تا کسب‌وکار در مرکز رشد و خانه نوآوری', 'From idea to venture at the Growth Center and Innovation House'),
    body: l('پشتیبانی از تیم‌های فناور، پژوهش‌های کاربردی و همکاری با صنایع منطقه.', 'Support for technology teams, applied research and partnerships with regional industry.'),
    image: im('innovation', 'تصویر نمادین نوآوری و فناوری', 'Illustration of innovation and technology'),
    primary: { label: l('خانه نوآوری', 'Innovation House'), href: '/innovation' },
    secondary: { label: l('مرکز رشد', 'Growth Center'), href: '/growth-center' },
  },
];

/** SAMPLE FIGURES — not official statistics. Shown with a visible "sample" label. */
export const stats: { id: string; value: number; suffix?: string; label: L; icon: string }[] = [
  { id: 'students', value: 4800, suffix: '+', label: l('دانشجو', 'Students'), icon: 'users' },
  { id: 'programs', value: 60, suffix: '+', label: l('رشته و گرایش', 'Programmes'), icon: 'book' },
  { id: 'faculty', value: 180, label: l('عضو هیئت علمی', 'Faculty members'), icon: 'graduation' },
  { id: 'faculties', value: 4, label: l('دانشکده', 'Faculties'), icon: 'building' },
  { id: 'centres', value: 3, label: l('مرکز پژوهشی و فناوری', 'Research centres'), icon: 'flask' },
];

export const quickAccess: { id: string; title: L; description: L; href: string; icon: string }[] = [
  { id: 'faculties', icon: 'building', href: '/faculties', title: l('دانشکده‌ها', 'Faculties'), description: l('معرفی دانشکده‌ها و گروه‌های آموزشی', 'Faculties and their academic groups') },
  { id: 'programs', icon: 'book', href: '/programs', title: l('رشته‌های تحصیلی', 'Academic programmes'), description: l('جستجو و مقایسه رشته‌ها در همه مقاطع', 'Search and compare programmes at every level') },
  { id: 'admissions', icon: 'clipboard', href: '/admissions', title: l('پذیرش و ثبت‌نام', 'Admissions & registration'), description: l('راهنمای ثبت‌نام دانشجویان جدید', 'Guidance for new-student registration') },
  { id: 'publications', icon: 'newspaper', href: '/publications', title: l('خبرنامه‌ها و نشریات', 'Newsletters & publications'), description: l('آرشیو خبرنامه‌ها، گزارش‌ها و نشریات', 'Archive of newsletters, reports and journals') },
];
