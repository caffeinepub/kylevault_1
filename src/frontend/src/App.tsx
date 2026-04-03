import { Clock, Gem, Menu, Sparkles, Truck, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiFacebook, SiInstagram, SiTiktok, SiX } from "react-icons/si";

const WHATSAPP_NUMBER = "2347039852428";

const products = [
  {
    id: 1,
    name: "Oud Royale",
    price: 89,
    desc: "Deep, rich oud crafted for bold presence",
    img: "/assets/generated/oud-royale.dim_600x700.jpg",
  },
  {
    id: 2,
    name: "Velour Noir",
    price: 79,
    desc: "Dark, smooth scent with a seductive finish",
    img: "/assets/generated/velour-noir.dim_600x700.jpg",
  },
  {
    id: 3,
    name: "Amber Elixir",
    price: 84,
    desc: "Warm amber blend with irresistible depth",
    img: "/assets/generated/amber-elixir.dim_600x700.jpg",
  },
  {
    id: 4,
    name: "Imperial Gold",
    price: 92,
    desc: "A luxurious fragrance made for distinction",
    img: "/assets/generated/imperial-gold.dim_600x700.jpg",
  },
  {
    id: 5,
    name: "Silk Bloom",
    price: 64,
    desc: "Soft floral elegance for everyday luxury",
    img: "/assets/generated/silk-bloom.dim_600x700.jpg",
  },
  {
    id: 6,
    name: "Aqua Veil",
    price: 49,
    desc: "Fresh, clean scent with a smooth finish",
    img: "/assets/generated/aqua-veil.dim_600x700.jpg",
  },
  {
    id: 7,
    name: "Spice Drift",
    price: 58,
    desc: "Warm spice notes with modern energy",
    img: "/assets/generated/spice-drift.dim_600x700.jpg",
  },
];

const features = [
  {
    icon: <Clock size={28} strokeWidth={1.5} style={{ color: "#C8A86A" }} />,
    title: "Long-Lasting Fragrances",
    desc: "Our scents are crafted to stay with you all day and night.",
  },
  {
    icon: <Sparkles size={28} strokeWidth={1.5} style={{ color: "#C8A86A" }} />,
    title: "Premium Quality",
    desc: "Sourced from the world's finest fragrance ingredients.",
  },
  {
    icon: <Gem size={28} strokeWidth={1.5} style={{ color: "#C8A86A" }} />,
    title: "Affordable Luxury",
    desc: "Designer-quality scents at accessible prices.",
  },
  {
    icon: <Truck size={28} strokeWidth={1.5} style={{ color: "#C8A86A" }} />,
    title: "Fast Delivery",
    desc: "Swift, secure shipping to your doorstep.",
  },
];

function WhatsAppIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      role="img"
      aria-label="WhatsApp"
    >
      <title>WhatsApp</title>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function getWhatsAppLink(productName: string) {
  const msg = `Hello, I'm interested in ${productName} from Kylure. I'd like to place an order.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function FadeSection({
  children,
  className = "",
}: { children: React.ReactNode; className?: string }) {
  const ref = useFadeIn();
  return (
    <div ref={ref} className={`fade-in-section ${className}`}>
      {children}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "Collections", id: "collections" },
    { label: "Fragrances", id: "collections" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: scrolled ? "rgba(8,8,8,0.95)" : "rgba(8,8,8,0.6)",
          borderBottom: scrolled
            ? "1px solid rgba(200,168,106,0.2)"
            : "1px solid transparent",
          transition: "background-color 0.3s ease, border-color 0.3s ease",
        }}
        className="nav-blur"
        data-ocid="nav.panel"
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 1.5rem",
            height: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <button
            type="button"
            onClick={() => scrollTo("home")}
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "1.75rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              color: "#F2F0EA",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            data-ocid="nav.link"
          >
            KYLURE
          </button>

          <div
            className="hidden md:flex"
            style={{ gap: "2.25rem", alignItems: "center" }}
          >
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.label}
                onClick={() => scrollTo(link.id)}
                className="nav-link"
                style={{ background: "none", border: "none" }}
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="md:hidden"
            onClick={() => setOpen(true)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#F2F0EA",
            }}
            data-ocid="nav.menu.button"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="mobile-menu-overlay" data-ocid="nav.mobile.panel">
          <button
            type="button"
            onClick={() => setOpen(false)}
            style={{
              position: "absolute",
              top: "1.25rem",
              right: "1.5rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#F2F0EA",
            }}
            data-ocid="nav.mobile.close_button"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          <div
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "2rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              color: "#C8A86A",
              marginBottom: "1rem",
            }}
          >
            KYLURE
          </div>
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.label}
              onClick={() => scrollTo(link.id)}
              style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: "1.75rem",
                fontWeight: 400,
                letterSpacing: "0.12em",
                color: "#F2F0EA",
                background: "none",
                border: "none",
                cursor: "pointer",
                textTransform: "uppercase",
              }}
              data-ocid={`nav.mobile.${link.label.toLowerCase()}.link`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/assets/generated/hero-bg.dim_1600x900.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />
      <div
        className="hero-overlay"
        style={{ position: "absolute", inset: 0, zIndex: 1 }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          width: "100%",
          paddingTop: "80px",
        }}
      >
        <div style={{ maxWidth: "620px" }} className="text-center md:text-left">
          <p
            className="animate-fade-in"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#C8A86A",
              marginBottom: "1.25rem",
            }}
          >
            Premium Fragrance House
          </p>

          <h1
            className="animate-fade-in-delay"
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "#F2F0EA",
              marginBottom: "1.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            Experience Luxury
            <br />
            <span style={{ fontStyle: "italic", fontWeight: 400 }}>
              in Every Scent
            </span>
          </h1>

          <p
            className="animate-fade-in-delay2"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "rgba(242,240,234,0.75)",
              marginBottom: "1rem",
              maxWidth: "520px",
            }}
          >
            Kylure offers premium, long-lasting fragrances designed to define
            your presence and leave a lasting impression.
          </p>

          <p
            className="animate-fade-in-delay2"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              color: "#C8A86A",
              marginBottom: "2.25rem",
            }}
          >
            Luxury fragrances • Long-lasting • Affordable elegance
          </p>

          <div className="animate-fade-in-delay3">
            <button
              type="button"
              className="kylure-btn"
              onClick={() => {
                const el = document.getElementById("collections");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              data-ocid="hero.primary_button"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "120px",
          background: "linear-gradient(to bottom, transparent, #080808)",
          zIndex: 2,
        }}
      />
    </section>
  );
}

function ProductCard({
  product,
  index,
}: { product: (typeof products)[0]; index: number }) {
  return (
    <div
      className="kylure-card"
      style={{ display: "flex", flexDirection: "column" }}
      data-ocid={`products.item.${index}`}
    >
      <div className="product-img-wrapper">
        <img src={product.img} alt={product.name} loading="lazy" />
      </div>

      <div
        style={{
          padding: "1.25rem 1.25rem 1.5rem",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <h3
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "1.125rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#F2F0EA",
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.8125rem",
            color: "#9A9A9A",
            lineHeight: 1.6,
            flex: 1,
          }}
        >
          {product.desc}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "0.75rem",
          }}
        >
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1.375rem",
              fontWeight: 600,
              color: "#C8A86A",
            }}
          >
            ${product.price}
          </span>
          <a
            href={getWhatsAppLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="kylure-btn-whatsapp"
            data-ocid={`products.order.button.${index}`}
          >
            <WhatsAppIcon size={14} />
            Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

function ProductsSection() {
  return (
    <section
      id="collections"
      style={{ backgroundColor: "#080808", padding: "6rem 0" }}
    >
      <div
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        <FadeSection>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#C8A86A",
                marginBottom: "0.75rem",
              }}
            >
              Our Signature Collection
            </p>
            <h2
              style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 300,
                color: "#F2F0EA",
                marginBottom: "0.75rem",
                letterSpacing: "-0.01em",
              }}
            >
              Exclusive Collections
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.9375rem",
                color: "#9A9A9A",
              }}
            >
              Handcrafted fragrances for every personality
            </p>
            <div className="divider-gold" style={{ marginTop: "1.5rem" }} />
          </div>
        </FadeSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
          data-ocid="products.list"
        >
          {products.map((product, idx) => (
            <FadeSection key={product.id}>
              <ProductCard product={product} index={idx + 1} />
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section
      id="features"
      style={{
        backgroundColor: "#0D0D0D",
        padding: "6rem 0",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        <FadeSection>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#C8A86A",
                marginBottom: "0.75rem",
              }}
            >
              The Kylure Promise
            </p>
            <h2
              style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                fontWeight: 300,
                color: "#F2F0EA",
                marginBottom: "0.75rem",
              }}
            >
              Why Choose Kylure
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.9375rem",
                color: "#9A9A9A",
                maxWidth: "520px",
                margin: "0 auto",
              }}
            >
              Designed for confidence, elegance, and lasting impressions.
            </p>
            <div className="divider-gold" style={{ marginTop: "1.5rem" }} />
          </div>
        </FadeSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {features.map((feat) => (
            <FadeSection key={feat.title}>
              <div className="feature-card">
                <div style={{ marginBottom: "1rem" }}>{feat.icon}</div>
                <h3
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#F2F0EA",
                    marginBottom: "0.5rem",
                  }}
                >
                  {feat.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.875rem",
                    color: "#9A9A9A",
                    lineHeight: 1.6,
                  }}
                >
                  {feat.desc}
                </p>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#080808",
        padding: "6rem 0",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 1.5rem",
          textAlign: "center",
        }}
      >
        <FadeSection>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#C8A86A",
              marginBottom: "1rem",
            }}
          >
            Our Story
          </p>
          <h2
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              color: "#F2F0EA",
              marginBottom: "1.5rem",
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
            }}
          >
            The Art of Luxury Fragrance
          </h2>
          <div className="divider-gold" style={{ marginBottom: "2rem" }} />
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1rem",
              lineHeight: 1.85,
              color: "rgba(242,240,234,0.72)",
              marginBottom: "1.25rem",
            }}
          >
            Kylure is a premium fragrance brand focused on delivering luxury
            scents that are long-lasting, elegant, and accessible. Our goal is
            to help you express confidence through scent. Every bottle is a
            statement — of taste, of presence, of who you are.
          </p>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1rem",
              lineHeight: 1.85,
              color: "rgba(242,240,234,0.72)",
            }}
          >
            From deep ouds to fresh aquatics, each fragrance is carefully
            curated to evoke emotion and leave a lasting impression on everyone
            around you.
          </p>
        </FadeSection>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#0D0D0D",
        padding: "6rem 0",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 1.5rem" }}>
        <FadeSection>
          <div
            style={{
              backgroundColor: "#141414",
              border: "1px solid rgba(200,168,106,0.25)",
              borderRadius: "20px",
              padding: "3rem 2.5rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#C8A86A",
                marginBottom: "0.75rem",
              }}
            >
              Reach Out
            </p>
            <h2
              style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: "2.25rem",
                fontWeight: 300,
                color: "#F2F0EA",
                marginBottom: "0.75rem",
              }}
            >
              Get In Touch
            </h2>
            <div className="divider-gold" style={{ marginBottom: "2rem" }} />

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="kylure-whatsapp-contact"
              style={{ margin: "0 auto 2rem", display: "inline-flex" }}
              data-ocid="contact.primary_button"
            >
              <WhatsAppIcon size={18} />
              Chat on WhatsApp
            </a>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                marginBottom: "2rem",
                alignItems: "center",
              }}
            >
              {[
                { emoji: "📱", label: "WhatsApp:", value: "+234 703 985 2428" },
                { emoji: "📧", label: "Email:", value: "hello@kylure.com" },
                { emoji: "📍", label: "Location:", value: "Lagos, Nigeria" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.875rem",
                    color: "#9A9A9A",
                  }}
                >
                  <span>{item.emoji}</span>
                  <span style={{ color: "rgba(242,240,234,0.6)" }}>
                    {item.label}
                  </span>
                  <span style={{ color: "#F2F0EA" }}>{item.value}</span>
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.75rem",
              }}
            >
              {[
                {
                  icon: <SiInstagram size={15} />,
                  label: "Instagram",
                  href: "#",
                },
                {
                  icon: <SiFacebook size={15} />,
                  label: "Facebook",
                  href: "#",
                },
                { icon: <SiX size={14} />, label: "TwitterX", href: "#" },
                { icon: <SiTiktok size={14} />, label: "TikTok", href: "#" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="social-icon"
                  data-ocid={`contact.${social.label.toLowerCase()}.link`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </FadeSection>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        backgroundColor: "#080808",
        borderTop: "1px solid rgba(200,168,106,0.25)",
        padding: "3.5rem 0 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "2rem",
            fontWeight: 600,
            letterSpacing: "0.25em",
            color: "#F2F0EA",
            marginBottom: "0.5rem",
          }}
        >
          KYLURE
        </div>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.8125rem",
            letterSpacing: "0.12em",
            color: "#9A9A9A",
            marginBottom: "2rem",
          }}
        >
          Luxury in Every Scent
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {[
            { label: "Collections", id: "collections" },
            { label: "Fragrances", id: "collections" },
            { label: "About", id: "about" },
            { label: "Contact", id: "contact" },
          ].map((link) => (
            <button
              type="button"
              key={link.label}
              onClick={() => scrollTo(link.id)}
              className="nav-link"
              style={{ background: "none", border: "none" }}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.07)",
            marginBottom: "1.5rem",
          }}
        />

        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.75rem",
            color: "#9A9A9A",
            marginBottom: "0.5rem",
          }}
        >
          © {year} Kylure. All rights reserved. | Premium Fragrance House
        </p>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.7rem",
            color: "rgba(154,154,154,0.6)",
          }}
        >
          Built with ❤️ using{" "}
          <a
            href={caffeineLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#C8A86A", textDecoration: "none" }}
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div style={{ backgroundColor: "#080808", minHeight: "100vh" }}>
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <FeaturesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
