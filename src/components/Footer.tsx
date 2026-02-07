import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 overflow-hidden bg-white border-t border-gray-100">
      {/* Sleek Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#D6B25E]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#d0302b]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 pb-8 border-b border-gray-100">

          {/* Section 1: Brand & Identity (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block transition-transform hover:scale-105 duration-300">
              <img
                src="/maple-ford-logo.png"
                alt="Mapleford International School Logo"
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-[#4F4F4F] text-base leading-relaxed font-medium max-w-sm" style={{ fontFamily: '"Lato", sans-serif' }}>
              Nurturing inquisitive minds and noble hearts through a legacy of excellence. We are dedicated to shaping the global leaders of tomorrow.
            </p>

          </div>

          {/* Section 2: Explore (Span 2) */}
          <div className="lg:col-span-2 lg:col-start-6 space-y-6">
            <div className="text-sm font-black text-[#1A1A1A] uppercase tracking-[0.3em]" style={{ fontFamily: "'Raleway', sans-serif" }}>Explore</div>
            <ul className="space-y-3">
              {['About Us', 'Admissions', 'Curriculum', 'Campus', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-[#4F4F4F] hover:text-[#d0302b] transition-all text-base font-bold inline-block border-b border-transparent hover:border-[#d0302b]/30 pb-0.5"
                    style={{ fontFamily: '"Lato", sans-serif' }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Academics (Span 2) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="text-sm font-black text-[#1A1A1A] uppercase tracking-[0.3em]" style={{ fontFamily: "'Raleway', sans-serif" }}>Programs</div>
            <ul className="space-y-3">
              {[
                { label: 'Pre-School', href: '/curriculum' },
                { label: 'Elementary', href: '/curriculum' },
                { label: 'High School', href: '/curriculum' },
                { label: 'Student Zone', href: '/student-zone' }
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#4F4F4F] hover:text-[#d0302b] transition-all text-base font-bold inline-block border-b border-transparent hover:border-[#d0302b]/30 pb-0.5"
                    style={{ fontFamily: '"Lato", sans-serif' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Connect (Span 3) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="text-sm font-black text-[#1A1A1A] uppercase tracking-[0.3em]" style={{ fontFamily: "'Raleway', sans-serif" }}>Connect</div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">📍</div>
                <p className="text-[#4F4F4F] leading-relaxed font-bold text-base" style={{ fontFamily: '"Lato", sans-serif' }}>
                  Hayathnagar, Hyderabad,<br />Telangana - 500070
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">📞</div>
                <a href="tel:+919000568416" className="text-[#4F4F4F] hover:text-[#d0302b] transition-colors font-black text-lg" style={{ fontFamily: '"Lato", sans-serif' }}>
                  +91 90005 68416
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">✉️</div>
                <a href="mailto:info@mapleford.edu.in" className="text-[#4F4F4F] hover:text-[#d0302b] transition-colors font-bold text-base" style={{ fontFamily: '"Lato", sans-serif' }}>
                  info@mapleford.edu.in
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Branding & Attribution */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-[#1A1A1A] text-sm font-black" style={{ fontFamily: '"Lato", sans-serif' }}>
              © {new Date().getFullYear()} Mapleford International School. All rights reserved.
            </p>
          </div>

          <div className="flex gap-8 text-[11px] font-black uppercase tracking-widest">
            <Link href="/privacy-policy" className="text-[#4F4F4F] hover:text-[#d0302b] transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-[#4F4F4F] hover:text-[#d0302b] transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
