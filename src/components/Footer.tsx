import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden bg-[#d0302b] text-white">
      {/* Reference Design Background Overlay - School Campus feel */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-center bg-cover opacity-10 mix-blend-overlay"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541339907198-e08756ebafe1?w=1600&h=600&fit=crop")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#d0302b]/95 via-[#d0302b]/90 to-[#8d211d]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content - 3 Column Layout from reference */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center mb-16">

          {/* Logo Section */}
          <div className="md:col-span-4 flex justify-center md:justify-start">
            <Link href="/" className="inline-block transition-transform hover:scale-105 duration-300">
              <div className="bg-white/95 p-4 rounded-2xl shadow-2xl">
                <img
                  src="/maple-ford-logo.png"
                  alt="Mapleford International School Logo"
                  className="h-20 w-auto"
                />
              </div>
            </Link>
          </div>

          {/* Vertical Divider 1 */}
          <div className="hidden md:block md:col-span-1 border-r border-white/20 h-24 my-auto"></div>

          {/* Address Section */}
          <div className="md:col-span-3 space-y-4 text-center md:text-left">
            <div className="flex flex-col gap-2">
              <p className="text-white/90 font-bold text-lg leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>
                Hayathnagar, Hyderabad,<br />
                Telangana - 500070
              </p>
              <a
                href="https://goo.gl/maps/example"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center md:justify-start gap-2 text-white/80 hover:text-white transition-colors group mt-2"
              >
                <span className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-all font-bold">📍</span>
                <span className="font-bold border-b border-white/20 group-hover:border-white">Get Directions</span>
              </a>
            </div>
          </div>

          {/* Vertical Divider 2 */}
          <div className="hidden md:block md:col-span-1 border-r border-white/20 h-24 my-auto"></div>

          {/* Contact Details Section */}
          <div className="md:col-span-3 space-y-3 text-sm font-bold text-center md:text-left">
            <div className="flex flex-col gap-2">
              <p className="text-white/80"><span className="text-white">Contact:</span> <a href="tel:+919000568416" className="hover:underline">+91 90005 68416</a></p>
              <p className="text-white/80"><span className="text-white">Admissions:</span> <a href="mailto:admissions@mapleford.edu.in" className="hover:underline">admissions@mapleford.edu.in</a></p>
              <p className="text-white/80"><span className="text-white">Mail:</span> <a href="mailto:info@mapleford.edu.in" className="hover:underline">info@mapleford.edu.in</a></p>
              <p className="text-white/80"><span className="text-white">Careers:</span> <a href="mailto:careers@mapleford.edu.in" className="hover:underline">careers@mapleford.edu.in</a></p>
            </div>
          </div>
        </div>

        {/* Navigation Links Row - Bottom of Reference */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 pt-10 border-t border-white/10 mb-8">
          {[
            { label: 'Privacy Policy', href: '/privacy-policy' },
            { label: 'Terms & Conditions', href: '/terms-of-service' },
            { label: 'Cancellation & Refund', href: '/refund-policy' },
            { label: 'Shipping & Exchange', href: '/shipping-policy' }
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white/70 hover:text-white font-bold text-sm transition-colors tracking-wide"
              style={{ fontFamily: '"Lato", sans-serif' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Copyright Attribution */}
        <div className="text-center pt-4">
          <p className="text-white/50 text-xs font-bold tracking-widest uppercase" style={{ fontFamily: '"Lato", sans-serif' }}>
            © {new Date().getFullYear()} by Mapleford International School Group
          </p>
        </div>
      </div>
    </footer>
  );
}
