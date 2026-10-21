import { useEffect, useRef, useState, type ReactNode } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock3,
  ExternalLink,
  Leaf,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Send,
  Sprout,
  X,
} from 'lucide-react';

const WHATSAPP = '918630883629';
const PHONE = '917417434709';
const MAPS = 'https://maps.app.goo.gl/JD3uxwWw1GaZF4Jt6';
const EMAIL = 'atulbeejagency@gmail.com';

type Lang = 'en' | 'hi';
type Product = {
  name: string;
  hindi: string;
  category: string;
  categoryHindi: string;
  crop: string;
  cropHindi: string;
  description: string;
  descriptionHindi: string;
  image: string;
  alt: string;
  message: string;
  messageHindi: string;
};

const products: Product[] = [
  {
    name: 'Bharat DAP 18:46:0',
    hindi: 'भारत डीएपी 18:46:0',
    category: 'Phosphatic fertilizer',
    categoryHindi: 'फॉस्फेटिक उर्वरक',
    crop: 'For crop nutrition',
    cropHindi: 'फसल पोषण के लिए',
    description: 'Granular DAP fertilizer containing 18% nitrogen and 46% phosphate. Check the pack and seek crop-specific advice before use.',
    descriptionHindi: '18% नाइट्रोजन और 46% फॉस्फेट वाला दानेदार डीएपी उर्वरक। उपयोग से पहले पैक पर दिए निर्देश पढ़ें और फसल के अनुसार सलाह लें।',
    image: '/images/aalu/Image%20(10).jpg',
    alt: 'भारत डीएपी 18:46:0 उर्वरक का पैक',
    message: 'I would like to ask about Bharat DAP 18:46:0 fertilizer. Please share availability and price.',
    messageHindi: 'मुझे भारत डीएपी 18:46:0 उर्वरक के बारे में जानकारी चाहिए। कृपया उपलब्धता और कीमत बताएं।',
  },
  {
    name: 'Bharat MOP 60% K₂O',
    hindi: 'भारत एमओपी 60% पोटाश',
    category: 'Potash fertilizer',
    categoryHindi: 'पोटाश उर्वरक',
    crop: 'For crop nutrition',
    cropHindi: 'फसल पोषण के लिए',
    description: 'Muriate of potash fertilizer with 60% K₂O, as stated on the pack. Ask about the suitable quantity for your crop and soil.',
    descriptionHindi: 'पैक पर दी जानकारी के अनुसार 60% K₂O वाला म्यूरेट ऑफ पोटाश उर्वरक। फसल और मिट्टी के अनुसार मात्रा की सलाह लें।',
    image: '/images/aalu/Image%20(4).jpg',
    alt: 'भारत एमओपी 60% पोटाश उर्वरक का पैक',
    message: 'I would like to ask about Bharat MOP potash fertilizer. Please share availability and price.',
    messageHindi: 'मुझे भारत एमओपी पोटाश उर्वरक के बारे में जानकारी चाहिए। कृपया उपलब्धता और कीमत बताएं।',
  },
  {
    name: 'Super Kahar GR 10%',
    hindi: 'सुपर कहर जीआर 10%',
    category: 'Insecticide',
    categoryHindi: 'कीटनाशक',
    crop: 'Read label before use',
    cropHindi: 'उपयोग से पहले लेबल पढ़ें',
    description: 'Granular chlorpyrifos 10% GR insecticide. Use only for label-listed crops and pests, following all safety directions.',
    descriptionHindi: 'क्लोरपाइरीफॉस 10% जीआर आधारित दानेदार कीटनाशक। केवल लेबल पर दिए गए उपयोग और सुरक्षा निर्देशों के अनुसार ही प्रयोग करें।',
    image: '/images/aalu/Image%20(6).jpg',
    alt: 'सुपर कहर जीआर 10% कीटनाशक का पैक',
    message: 'I would like to ask about Super Kahar GR 10%. Please share availability and the product label details.',
    messageHindi: 'मुझे सुपर कहर जीआर 10% के बारे में जानकारी चाहिए। कृपया उपलब्धता और पैक पर दिए उपयोग निर्देश बताएं।',
  },
  {
    name: 'Multiplex Boron',
    hindi: 'मल्टीप्लेक्स बोरॉन',
    category: 'Micronutrient fertilizer',
    categoryHindi: 'सूक्ष्म पोषक उर्वरक',
    crop: 'Boron 10.5%',
    cropHindi: 'बोरॉन 10.5%',
    description: 'Boron micronutrient fertilizer (10.5% B, as shown on the pack). Confirm crop suitability and application with an agricultural advisor.',
    descriptionHindi: 'पैक पर दी जानकारी के अनुसार 10.5% बोरॉन वाला सूक्ष्म पोषक उर्वरक। फसल के लिए उपयुक्तता और उपयोग-विधि की सलाह लें।',
    image: '/images/aalu/Image%20(7).jpg',
    alt: 'मल्टीप्लेक्स बोरॉन सूक्ष्म पोषक उर्वरक का पैक',
    message: 'I would like to ask about Multiplex Boron fertilizer. Please share availability and pack details.',
    messageHindi: 'मुझे मल्टीप्लेक्स बोरॉन उर्वरक के बारे में जानकारी चाहिए। कृपया उपलब्धता और पैक का विवरण बताएं।',
  },
  {
    name: 'Potato Special',
    hindi: 'पोटैटो स्पेशल',
    category: 'Micronutrient fertilizer',
    categoryHindi: 'सूक्ष्म पोषक उर्वरक',
    crop: 'For potatoes',
    cropHindi: 'आलू की फसल के लिए',
    description: 'A multi-micronutrient fertilizer labelled for soil application on potatoes. Follow the pack directions or ask an agricultural advisor.',
    descriptionHindi: 'आलू की फसल में मिट्टी के माध्यम से उपयोग के लिए पैक पर दर्शाया गया बहु-सूक्ष्म पोषक उर्वरक। पैक के निर्देश मानें या कृषि विशेषज्ञ से पूछें।',
    image: '/images/aalu/Image%20(8).jpg',
    alt: 'पोटैटो स्पेशल बहु-सूक्ष्म पोषक उर्वरक का पैक',
    message: 'I would like to ask about Potato Special fertilizer. Please share availability and pack directions.',
    messageHindi: 'मुझे पोटैटो स्पेशल उर्वरक के बारे में जानकारी चाहिए। कृपया उपलब्धता और पैक पर दिए निर्देश बताएं।',
  },
  {
    name: 'Regent Ultra',
    hindi: 'रीजेंट अल्ट्रा',
    category: 'Insecticide',
    categoryHindi: 'कीटनाशक',
    crop: 'Read label before use',
    cropHindi: 'उपयोग से पहले लेबल पढ़ें',
    description: 'An insecticide in a 4 kg pack. Check the product label for approved crops, target pests, directions and safety precautions.',
    descriptionHindi: '4 किलो पैक में उपलब्ध कीटनाशक। मान्य फसल, लक्षित कीट, उपयोग-विधि और सुरक्षा सावधानियों के लिए उत्पाद का लेबल पढ़ें।',
    image: '/images/aalu/Image%20(9).jpg',
    alt: 'बायर रीजेंट अल्ट्रा कीटनाशक का 4 किलो पैक',
    message: 'I would like to ask about Regent Ultra insecticide. Please share availability and product label details.',
    messageHindi: 'मुझे रीजेंट अल्ट्रा कीटनाशक के बारे में जानकारी चाहिए। कृपया उपलब्धता और उत्पाद के लेबल का विवरण बताएं।',
  },
  {
    name: 'Mono Zinc',
    hindi: 'मोनो जिंक',
    category: 'Micronutrient fertilizer',
    categoryHindi: 'सूक्ष्म पोषक उर्वरक',
    crop: 'Zinc and sulphur',
    cropHindi: 'जिंक और सल्फर',
    description: 'Zinc sulphate monohydrate micronutrient fertilizer. The pack lists 33% zinc and 15% sulphur; check suitability before use.',
    descriptionHindi: 'जिंक सल्फेट मोनोहाइड्रेट सूक्ष्म पोषक उर्वरक। पैक पर 33% जिंक और 15% सल्फर दिया है; उपयोग से पहले उपयुक्तता जांचें।',
    image: '/images/aalu/Image%20(11).jpg',
    alt: 'मोनो जिंक सूक्ष्म पोषक उर्वरक का पैक',
    message: 'I would like to ask about Mono Zinc fertilizer. Please share availability and pack details.',
    messageHindi: 'मुझे मोनो जिंक उर्वरक के बारे में जानकारी चाहिए। कृपया उपलब्धता और पैक का विवरण बताएं।',
  },
  {
    name: 'Sulphur 90% Granules',
    hindi: 'सल्फर 90% दानेदार',
    category: 'Sulphur fertilizer',
    categoryHindi: 'सल्फर उर्वरक',
    crop: 'Granular formulation',
    cropHindi: 'दानेदार रूप',
    description: 'Granular sulphur fertilizer marked 90% on the pack. Ask about crop suitability and follow the label directions.',
    descriptionHindi: 'पैक पर 90% अंकित दानेदार सल्फर उर्वरक। फसल के लिए उपयुक्तता पूछें और लेबल पर दिए निर्देशों का पालन करें।',
    image: '/images/aalu/Image%20(12).jpg',
    alt: 'सल्फर 90% दानेदार उर्वरक का पैक',
    message: 'I would like to ask about Sulphur 90% granules. Please share availability and pack details.',
    messageHindi: 'मुझे सल्फर 90% दानेदार उर्वरक के बारे में जानकारी चाहिए। कृपया उपलब्धता और पैक का विवरण बताएं।',
  },
  {
    name: 'Kaveri Barseem Seed',
    hindi: 'कावेरी बरसीम बीज',
    category: 'Fodder seed',
    categoryHindi: 'चारा फसल का बीज',
    crop: 'Barseem / Berseem',
    cropHindi: 'बरसीम',
    description: 'Kaveri-branded barseem seed for sowing as a fodder crop. Ask the shop about pack size, sowing season and availability.',
    descriptionHindi: 'चारा फसल बरसीम की बुवाई के लिए कावेरी ब्रांड का बीज। पैक का वजन, बुवाई का समय और उपलब्धता दुकान से पूछें।',
    image: '/images/aalu/Image%20(13).jpg',
    alt: 'कावेरी बरसीम बीज का प्रचार पोस्टर और पैक',
    message: 'I would like to ask about Kaveri Barseem seed. Please share pack size, availability and price.',
    messageHindi: 'मुझे कावेरी बरसीम बीज के बारे में जानकारी चाहिए। कृपया पैक का वजन, उपलब्धता और कीमत बताएं।',
  },
];

const brands = [
  { name: 'Bayer', mark: 'B', tone: 'bayer' },
  { name: 'Syngenta', mark: 'S', tone: 'syngenta' },
  { name: 'UPL', mark: 'UPL', tone: 'upl' },
  { name: 'BASF', mark: 'BASF', tone: 'basf' },
  { name: 'FMC', mark: 'FMC', tone: 'fmc' },
  { name: 'Corteva', mark: 'C', tone: 'corteva' },
  { name: 'ADAMA', mark: 'A', tone: 'adama' },
  { name: 'Dhanuka', mark: 'D', tone: 'dhanuka' },
  { name: 'PI Industries', mark: 'PI', tone: 'pi' },
];

function waLink(message: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Namaste Atul Beej Agency, ${message}`)}`;
}

function callLink() {
  return `tel:+${PHONE}`;
}

function SectionKicker({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`section-kicker ${light ? 'section-kicker-light' : ''}`}>
      <span />
      {children}
    </p>
  );
}

function LanguageSwitch({ lang, toggle }: { lang: Lang; toggle: () => void }) {
  return (
    <button className="language-switch" onClick={toggle} aria-label="Switch language">
      <span className={lang === 'en' ? 'language-active' : ''}>EN</span>
      <span className="language-divider">/</span>
      <span className={lang === 'hi' ? 'language-active' : ''}>हिंदी</span>
    </button>
  );
}

function Header({ lang, toggle }: { lang: Lang; toggle: () => void }) {
  const [open, setOpen] = useState(false);
  const nav = [
    ['#home', lang === 'en' ? 'Home' : 'होम'],
    ['#products', lang === 'en' ? 'Products' : 'उत्पाद'],
    ['#brands', lang === 'en' ? 'Brands' : 'ब्रांड'],
    ['#visit', lang === 'en' ? 'Visit us' : 'हमसे मिलें'],
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#home" className="brand-lockup" onClick={() => setOpen(false)} aria-label="Atul Beej Agency home">
          <img src="/images/atul-logo.jpeg" alt="Atul Beej Agency" className="header-logo" />
          <span className="brand-copy">
            <strong>Atul Beej Agency</strong>
            <span>अतुल बीज एजेंसी</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map(([href, label]) => (
            <a href={href} key={href}>{label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <LanguageSwitch lang={lang} toggle={toggle} />
          <a className="header-call" href={callLink()}><Phone size={15} /> <span>{lang === 'en' ? 'Call the shop' : 'दुकान पर कॉल करें'}</span></a>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {nav.map(([href, label]) => (
            <a href={href} key={href} onClick={() => setOpen(false)}>{label}<ChevronRight size={17} /></a>
          ))}
          <a className="mobile-call" href={callLink()} onClick={() => setOpen(false)}><Phone size={16} /> {lang === 'en' ? 'Call 074174 34709' : '074174 34709 पर कॉल करें'}</a>
        </nav>
      )}
    </header>
  );
}

function EnquiryLink({ children, message, className = '' }: { children: ReactNode; message: string; className?: string }) {
  return (
    <a className={className} href={waLink(message)} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function Hero({ lang }: { lang: Lang }) {
  return (
    <section className="hero" id="home">
      <div className="hero-texture" />
      <div className="hero-inner">
        <div className="hero-copy reveal">
          <div className="eyebrow-pill"><span className="eyebrow-dot" /> Kathfori · कठफोरी · Firozabad</div>
          <h1>{lang === 'en' ? <>Your next<br /><em>field decision,</em><br />made closer.</> : <>आपके खेत का<br /><em>अगला फैसला,</em><br />अब पास में।</>}</h1>
          <p className="hero-intro">
            {lang === 'en'
              ? 'Seeds, crop protection and farm equipment from a local shop farmers can reach, call and ask before they travel.'
              : 'बीज, फसल सुरक्षा और कृषि उपकरण — एक ऐसी स्थानीय दुकान जहां किसान आने से पहले पूछ सकते हैं।'}
          </p>
          <div className="hero-buttons">
            <a href="#products" className="button button-dark">{lang === 'en' ? 'Explore products' : 'उत्पाद देखें'} <ArrowDownRight size={18} /></a>
            <EnquiryLink message="I want to enquire about a farm product. Please help me with current availability and price." className="button button-outline"><MessageCircle size={18} /> {lang === 'en' ? 'Ask on WhatsApp' : 'व्हाट्सऐप पर पूछें'}</EnquiryLink>
          </div>
          <div className="hero-note"><span className="note-rule" /> {lang === 'en' ? 'Availability changes. A quick call saves a wasted trip.' : 'उपलब्धता बदल सकती है। एक कॉल से बेकार की यात्रा बच सकती है।'}</div>
        </div>
        <div className="hero-visual reveal reveal-delay">
          <div className="hero-image-frame">
            <img src="/images/brand-banner.png" alt="Atul Beej Agency welcome banner with farmer and shop details" />
            <div className="image-caption">
              <span className="caption-line" />
              <span>{lang === 'en' ? 'Serving local farms since 2012' : '2012 से स्थानीय किसानों की सेवा'}</span>
            </div>
          </div>
          <div className="hero-badge"><Sprout size={23} /><span>{lang === 'en' ? 'Ask. Choose. Grow.' : 'पूछें। चुनें। उगाएं।'}</span></div>
        </div>
      </div>
      <div className="hero-scroll"><span>{lang === 'en' ? 'Scroll to explore' : 'आगे देखें'}</span><ArrowDownRight size={15} /></div>
    </section>
  );
}

function IntroStrip({ lang }: { lang: Lang }) {
  const items = [
    [<Leaf size={20} />, lang === 'en' ? 'Farmer-first guidance' : 'किसान पहले'],
    [<MessageCircle size={20} />, lang === 'en' ? 'Enquire before you travel' : 'आने से पहले पूछें'],
    [<MapPin size={20} />, lang === 'en' ? 'On Agra–Etawah Highway Road' : 'आगरा–इटावा हाईवे रोड पर'],
  ];
  return (
    <section className="intro-strip" aria-label="Shop highlights">
      <div className="intro-strip-inner">
        {items.map(([icon, text], index) => <div className="strip-item" key={index}>{icon}<span>{text}</span></div>)}
      </div>
    </section>
  );
}

function SeasonFeature({ lang }: { lang: Lang }) {
  return (
    <section className="season-section">
      <div className="season-inner">
        <div className="season-image-wrap reveal">
          <img src="/images/bajra-season.jpg" alt="Bajra seed packs ready for the season" />
          <div className="image-stamp">SEASON<br /><strong>NOTE 01</strong></div>
        </div>
        <div className="season-copy reveal reveal-delay">
          <SectionKicker>{lang === 'en' ? 'In the field right now' : 'अभी खेतों में'}</SectionKicker>
          <h2>{lang === 'en' ? <>Plan the season<br /><em>before the season</em><br />plans for you.</> : <>सीजन की तैयारी<br /><em>सीजन से पहले</em><br />करें।</>}</h2>
          <p>{lang === 'en' ? 'Bajra seed is one example of the seasonal enquiries we help with. Bring your crop, area and timing questions; ask what is available before making the trip.' : 'बाजरा बीज मौसमी पूछताछ का एक उदाहरण है। अपनी फसल, क्षेत्र और समय से जुड़े सवाल लेकर आएं; यात्रा से पहले उपलब्धता पूछें।'}</p>
          <a href="#products" className="text-link">{lang === 'en' ? 'See product examples' : 'उत्पाद उदाहरण देखें'} <ArrowRight size={16} /></a>
          <div className="season-footnote"><span>01</span> {lang === 'en' ? 'Examples are for orientation, not a live inventory.' : 'उदाहरण जानकारी के लिए हैं, लाइव स्टॉक सूची नहीं।'}</div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, lang }: { product: Product; lang: Lang }) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.alt} loading="lazy" />
        <span className="product-index">{String(products.indexOf(product) + 1).padStart(2, '0')}</span>
      </div>
      <div className="product-card-body">
        <div className="product-meta"><span>{lang === 'en' ? product.category : product.categoryHindi}</span><span>{lang === 'en' ? product.crop : product.cropHindi}</span></div>
        <h3>{product.name}</h3>
        <p className="hindi-line">{product.hindi}</p>
        <p className="product-description">{lang === 'en' ? product.description : product.descriptionHindi}</p>
        <EnquiryLink message={lang === 'en' ? product.message : product.messageHindi} className="product-enquire"><span>{lang === 'en' ? 'Ask about this product' : 'इस उत्पाद की जानकारी लें'}</span><ArrowRight size={15} /></EnquiryLink>
      </div>
    </article>
  );
}

function ProductsSection({ lang }: { lang: Lang }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeProduct, setActiveProduct] = useState(0);

  function scrollProducts(direction: number) {
    const carousel = carouselRef.current;
    const firstCard = carousel?.querySelector<HTMLElement>('.product-card');
    if (!carousel || !firstCard) return;

    const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 18;
    carousel.scrollBy({ left: direction * (firstCard.offsetWidth + gap), behavior: 'smooth' });
  }

  return (
    <section className="products-section" id="products">
      <div className="products-heading">
        <div>
          <SectionKicker>{lang === 'en' ? 'Products at Atul Beej Agency' : 'अतुल बीज एजेंसी के उत्पाद'}</SectionKicker>
          <h2>{lang === 'en' ? <>For your field,<br /><em>all in one place.</em></> : <>खेत की जरूरतें,<br /><em>एक ही जगह।</em></>}</h2>
          <p className="products-intro">{lang === 'en' ? 'Browse seeds, fertilizers and crop-protection products shown here. Ask us to confirm today’s stock, price and product-label details before visiting.' : 'यहाँ बीज, उर्वरक और फसल सुरक्षा के उत्पाद देखें। दुकान आने से पहले उपलब्ध स्टॉक, कीमत और पैक पर दिए निर्देशों की पुष्टि कर लें।'}</p>
        </div>
        <div className="carousel-controls">
          <span aria-live="polite">{String(activeProduct + 1).padStart(2, '0')}<i>/</i>{String(products.length).padStart(2, '0')}</span>
          <button type="button" onClick={() => scrollProducts(-1)} disabled={activeProduct === 0} aria-label={lang === 'en' ? 'Previous product' : 'पिछला उत्पाद'}>
            <ChevronLeft size={19} />
          </button>
          <button type="button" onClick={() => scrollProducts(1)} disabled={activeProduct >= products.length - 1} aria-label={lang === 'en' ? 'Next product' : 'अगला उत्पाद'}>
            <ChevronRight size={19} />
          </button>
        </div>
      </div>
      <div className="carousel-window">
        <div
          className="product-carousel"
          ref={carouselRef}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label={lang === 'en' ? 'Products' : 'उत्पाद'}
          onScroll={(event) => {
            const carousel = event.currentTarget;
            const firstCard = carousel.querySelector<HTMLElement>('.product-card');
            if (!firstCard) return;
            const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 18;
            const index = Math.round(carousel.scrollLeft / (firstCard.offsetWidth + gap));
            setActiveProduct(Math.min(index, products.length - 1));
          }}
        >
        {products.map((product) => <ProductCard product={product} lang={lang} key={product.name} />)}
        </div>
      </div>
      <p className="products-stock-note">{lang === 'en' ? 'Product details are indicative. Availability and packaging may change; please confirm with the shop.' : 'उत्पाद विवरण जानकारी के लिए हैं। उपलब्धता और पैक बदल सकते हैं; कृपया दुकान से पुष्टि करें।'}</p>
    </section>
  );
}

function BrandsSection({ lang }: { lang: Lang }) {
  return (
    <section className="brands-section" id="brands">
      <div className="brands-inner">
        <div className="brands-copy">
          <SectionKicker light>{lang === 'en' ? 'One stop, many names' : 'एक जगह, कई ब्रांड'}</SectionKicker>
          <h2>{lang === 'en' ? <>Ask about the<br /><em>brands you trust.</em></> : <>अपने भरोसेमंद<br /><em>ब्रांड के बारे में पूछें।</em></>}</h2>
          <p>{lang === 'en' ? 'Our catalogue includes examples across seed, crop protection and farm-use categories. Selection can change, so contact the shop before you visit.' : 'हमारी सूची में बीज, फसल सुरक्षा और कृषि उपयोग की श्रेणियों के उदाहरण हैं। चयन बदल सकता है, इसलिए आने से पहले दुकान से संपर्क करें।'}</p>
          <div className="brand-list" aria-label="Brands to enquire about">
            {brands.map((brand) => (
              <span className="brand-chip" key={brand.name}>
                <strong className={`brand-logo brand-${brand.tone}`}>{brand.mark}</strong>
                <span>{brand.name}</span>
              </span>
            ))}
          </div>
          <EnquiryLink message="I want to enquire about brands and product categories available at Atul Beej Agency." className="button button-gold"><MessageCircle size={17} /> {lang === 'en' ? 'Ask about a brand' : 'ब्रांड के बारे में पूछें'}</EnquiryLink>
        </div>
        <div className="brands-art reveal">
          <img src="/images/all-brands-banner.png" alt="Atul Beej Agency all brands artwork" loading="lazy" />
          <div className="art-label">{lang === 'en' ? 'Different brands. One local conversation.' : 'अलग ब्रांड। एक स्थानीय बातचीत।'}</div>
        </div>
      </div>
    </section>
  );
}

function EnquirySection({ lang }: { lang: Lang }) {
  return (
    <section className="enquiry-section">
      <div className="enquiry-inner">
        <div className="enquiry-header">
          <SectionKicker>{lang === 'en' ? 'A simple next step' : 'अगला आसान कदम'}</SectionKicker>
          <h2>{lang === 'en' ? <>Ask first.<br /><em>Travel sure.</em></> : <>पहले पूछें।<br /><em>फिर निश्चिंत होकर आएं।</em></>}</h2>
        </div>
        <div className="steps">
          <div className="step"><span>01</span><div><h3>{lang === 'en' ? 'Tell us your crop' : 'अपनी फसल बताएं'}</h3><p>{lang === 'en' ? 'Share the product, crop or equipment you are looking for.' : 'जिस उत्पाद, फसल या उपकरण की जरूरत है, बताएं।'}</p></div></div>
          <div className="step"><span>02</span><div><h3>{lang === 'en' ? 'Choose a channel' : 'संपर्क का तरीका चुनें'}</h3><p>{lang === 'en' ? 'Call, email or send a ready enquiry on WhatsApp.' : 'कॉल, ईमेल या व्हाट्सऐप से पूछताछ भेजें।'}</p></div></div>
          <div className="step"><span>03</span><div><h3>{lang === 'en' ? 'Plan your visit' : 'अपनी यात्रा तय करें'}</h3><p>{lang === 'en' ? 'Confirm the current selection and directions before you set out.' : 'निकलने से पहले चयन और रास्ते की पुष्टि करें।'}</p></div></div>
        </div>
        <div className="enquiry-actions">
          <EnquiryLink message="I want to enquire about a farm product. Please help me with current availability and price." className="button button-dark"><Send size={17} /> {lang === 'en' ? 'Start a WhatsApp enquiry' : 'व्हाट्सऐप पूछताछ शुरू करें'}</EnquiryLink>
          <a href={callLink()} className="button button-quiet"><Phone size={17} /> 074174 34709</a>
        </div>
      </div>
    </section>
  );
}

function VisitSection({ lang }: { lang: Lang }) {
  return (
    <section className="visit-section" id="visit">
      <div className="visit-inner">
        <div className="visit-card">
          <SectionKicker>{lang === 'en' ? 'Come by the shop' : 'दुकान पर आएं'}</SectionKicker>
          <h2>{lang === 'en' ? <>Find us at<br /><em>Kathfori.</em></> : <>हमें <em>कठफोरी</em><br />में खोजें।</>}</h2>
          <p className="address">Agra–Etawah Highway Road,<br />Kathfori, Firozabad,<br />Uttar Pradesh 283142</p>
          <div className="visit-links">
            <a href={MAPS} target="_blank" rel="noreferrer"><MapPin size={17} /> {lang === 'en' ? 'Open directions' : 'रास्ता खोलें'} <ExternalLink size={14} /></a>
            <a href={`mailto:${EMAIL}`}><Mail size={17} /> {EMAIL}</a>
            <a href={callLink()}><Phone size={17} /> 074174 34709</a>
          </div>
          <div className="timing-note"><Clock3 size={16} /><span>{lang === 'en' ? 'Timings and availability can change. Please call before you visit.' : 'समय और उपलब्धता बदल सकते हैं। आने से पहले कॉल करें।'}</span></div>
        </div>
        <a className="map-visual" href={MAPS} target="_blank" rel="noreferrer" aria-label="Open Google Maps directions to Kathfori">
          <div className="map-grid" />
          <div className="map-road road-one" /><div className="map-road road-two" /><div className="map-road road-three" />
          <div className="map-pin"><MapPin size={24} /></div>
          <div className="map-label"><strong>Atul Beej Agency</strong><span>Kathfori · कठफोरी</span><small>Open in Google Maps <ExternalLink size={12} /></small></div>
        </a>
      </div>
    </section>
  );
}

function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/images/atul-logo.jpeg" alt="Atul Beej Agency" />
          <p>{lang === 'en' ? 'A local agricultural shop for farmers around Kathfori, कठफोरी, Firozabad and nearby villages.' : 'कठफोरी, Firozabad और आसपास के गांवों के किसानों के लिए स्थानीय कृषि दुकान।'}</p>
        </div>
        <div className="footer-column"><span className="footer-label">{lang === 'en' ? 'Navigate' : 'देखें'}</span><a href="#products">{lang === 'en' ? 'Product examples' : 'उत्पाद उदाहरण'}</a><a href="#brands">{lang === 'en' ? 'Brands' : 'ब्रांड'}</a><a href="#visit">{lang === 'en' ? 'Visit the shop' : 'दुकान पर आएं'}</a></div>
        <div className="footer-column"><span className="footer-label">{lang === 'en' ? 'Contact' : 'संपर्क'}</span><a href={callLink()}><Phone size={14} /> 074174 34709</a><a href={waLink('I want to enquire about a farm product.')}><MessageCircle size={14} /> 8630883629 WhatsApp</a><a href={`mailto:${EMAIL}`}><Mail size={14} /> {EMAIL}</a></div>
      </div>
      <div className="footer-bottom"><span>© Atul Beej Agency · Kathfori, Uttar Pradesh</span><span>{lang === 'en' ? 'Product examples are not a live stock list.' : 'उत्पाद उदाहरण लाइव स्टॉक सूची नहीं हैं।'}</span></div>
    </footer>
  );
}

function FloatingActions({ lang }: { lang: Lang }) {
  return (
    <>
      <a className="floating-whatsapp" href={waLink('I want to enquire about a farm product. Please help me with current availability and price.')} target="_blank" rel="noreferrer" aria-label={lang === 'en' ? 'Message Atul Beej Agency on WhatsApp' : 'व्हाट्सऐप पर संदेश भेजें'}><MessageCircle size={24} /></a>
      <div className="mobile-contact-bar"><a href={callLink()}><Phone size={16} /> {lang === 'en' ? 'Call shop' : 'कॉल करें'}</a><a href={waLink('I want to enquire about a farm product.')}><MessageCircle size={16} /> WhatsApp</a></div>
    </>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>('hi');
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = lang === 'hi' ? 'अतुल बीज एजेंसी · कठफोरी, फिरोजाबाद' : 'Atul Beej Agency · Kathfori, Firozabad';
    const description = lang === 'hi'
      ? 'कठफोरी, फिरोजाबाद स्थित अतुल बीज एजेंसी में बीज, उर्वरक और फसल सुरक्षा उत्पादों की जानकारी लें।'
      : 'Ask Atul Beej Agency in Kathfori, Firozabad about seeds, fertilizers and crop-protection products.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, [lang]);
  return (
    <div className="app-shell">
      <Header lang={lang} toggle={() => setLang(lang === 'en' ? 'hi' : 'en')} />
      <main>
        <ProductsSection lang={lang} />
        <Hero lang={lang} />
        <IntroStrip lang={lang} />
        <SeasonFeature lang={lang} />
        <BrandsSection lang={lang} />
        <EnquirySection lang={lang} />
        <VisitSection lang={lang} />
      </main>
      <Footer lang={lang} />
      <FloatingActions lang={lang} />
    </div>
  );
}