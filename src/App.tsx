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
  crop: string;
  image: string;
  alt: string;
  message: string;
};

const products: Product[] = [
  {
    name: 'DEKALB DKC 9208',
    hindi: 'डीकेलब डीकेसी 9208',
    category: 'Maize seed',
    crop: 'Maize / मक्का',
    image: '/images/dekalb-dkc-9208.png',
    alt: 'DEKALB DKC 9208 maize seed packet',
    message: 'I want to enquire about DEKALB DKC 9208 maize seed. Please share current availability and price.',
  },
  {
    name: 'Pioneer 86M90',
    hindi: 'पायनियर 86M90',
    category: 'Hybrid bajra seed',
    crop: 'Bajra / बाजरा',
    image: '/images/pioneer-bajra-86m90.jpg',
    alt: 'Pioneer 86M90 hybrid bajra seed packet',
    message: 'I want to enquire about Pioneer 86M90 hybrid bajra seed. Please share current availability and price.',
  },
  {
    name: 'ProAgro 9001',
    hindi: 'प्रोएग्रो 9001',
    category: 'Hybrid seed',
    crop: 'Bajra / बाजरा',
    image: '/images/proagro-bajra-9001.jpg',
    alt: 'ProAgro 9001 hybrid seed packet',
    message: 'I want to enquire about ProAgro 9001 hybrid seed. Please share current availability and price.',
  },
  {
    name: 'Garuda farm sprayer',
    hindi: 'गरुड़ फार्म स्प्रेयर',
    category: 'Farm equipment',
    crop: 'Farm use / खेत का उपयोग',
    image: '/images/garuda-sprayer.jpg',
    alt: 'Yellow Garuda farm sprayer',
    message: 'I want to enquire about the Garuda farm sprayer. Please share current availability and price.',
  },
  {
    name: 'Syngenta crop protection',
    hindi: 'सिंजेंटा फसल सुरक्षा',
    category: 'Crop protection',
    crop: 'Multiple crops / कई फसलें',
    image: '/images/syngenta-crop-protection.webp',
    alt: 'Syngenta crop protection products in a field',
    message: 'I want to enquire about Syngenta crop protection products. Please help me with the current selection.',
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
        <span className="product-index">0{products.indexOf(product) + 1}</span>
      </div>
      <div className="product-card-body">
        <div className="product-meta"><span>{product.category}</span><span>{product.crop}</span></div>
        <h3>{product.name}</h3>
        <p className="hindi-line">{product.hindi}</p>
        <p className="product-description">{lang === 'en' ? 'Ask the shop about the current selection, price and suitable enquiry details.' : 'वर्तमान चयन, कीमत और जरूरी जानकारी के लिए दुकान से पूछें।'}</p>
        <EnquiryLink message={product.message} className="product-enquire"><span>{lang === 'en' ? 'Enquire about this' : 'इसके बारे में पूछें'}</span><ArrowRight size={15} /></EnquiryLink>
      </div>
    </article>
  );
}

function ProductCarousel({ lang }: { lang: Lang }) {
  const scroller = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const scroll = (direction: number) => {
    scroller.current?.scrollBy({ left: direction * (window.innerWidth < 640 ? 292 : 392), behavior: 'smooth' });
  };
  const handleScroll = () => {
    if (!scroller.current) return;
    const width = scroller.current.firstElementChild?.clientWidth ?? 1;
    setActive(Math.min(products.length - 1, Math.max(0, Math.round(scroller.current.scrollLeft / (width + 18)))));
  };
  return (
    <section className="products-section" id="products">
      <div className="products-heading">
        <div>
          <SectionKicker>{lang === 'en' ? 'The enquiry shelf' : 'पूछताछ की सूची'}</SectionKicker>
          <h2>{lang === 'en' ? <>A few things<br /><em>farmers ask for.</em></> : <>किसान जिन चीज़ों के बारे में<br /><em>पूछते हैं।</em></>}</h2>
        </div>
        <div className="carousel-controls">
          <span>{String(active + 1).padStart(2, '0')} <i>/</i> {String(products.length).padStart(2, '0')}</span>
          <button onClick={() => scroll(-1)} aria-label="Previous products"><ChevronLeft size={20} /></button>
          <button onClick={() => scroll(1)} aria-label="Next products"><ChevronRight size={20} /></button>
        </div>
      </div>
      <div className="carousel-window">
        <div className="product-carousel" ref={scroller} onScroll={handleScroll} tabIndex={0} aria-label="Product examples carousel">
          {products.map((product) => <ProductCard product={product} lang={lang} key={product.name} />)}
        </div>
      </div>
      <div className="carousel-bottom">
        <div className="carousel-dots" aria-hidden="true">{products.map((product, index) => <span className={index === active ? 'active' : ''} key={product.name} />)}</div>
        <p>{lang === 'en' ? 'Swipe or use the arrows. Product examples only; ask the shop for today’s selection.' : 'स्वाइप करें या तीरों का उपयोग करें। उत्पाद उदाहरण मात्र; आज का चयन दुकान से पूछें।'}</p>
      </div>
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
  const [lang, setLang] = useState<Lang>('en');
  useEffect(() => {
    document.title = 'Atul Beej Agency · Seeds & farm supplies in Kathfori';
    const description = 'Atul Beej Agency in Kathfori, Firozabad — enquire about seeds, crop protection products and farm equipment before you visit.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, []);
  return (
    <div className="app-shell">
      <Header lang={lang} toggle={() => setLang(lang === 'en' ? 'hi' : 'en')} />
      <main>
        <Hero lang={lang} />
        <IntroStrip lang={lang} />
        <SeasonFeature lang={lang} />
        <ProductCarousel lang={lang} />
        <BrandsSection lang={lang} />
        <EnquirySection lang={lang} />
        <VisitSection lang={lang} />
      </main>
      <Footer lang={lang} />
      <FloatingActions lang={lang} />
    </div>
  );
}