import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative pt-8 pb-6 overflow-hidden" style={{ background: '#FDF6E3' }}>
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#D6B25E]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#8B1E1A]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-4"> {/* Reduced space-y */}
            <Link href="/" className="inline-block">
              <img
                src="/maple-ford-logo.png"
                alt="Mapleford International School Logo"
                className="h-20 w-auto"
              />
            </Link>

            <p className="text-black text-[9px] leading-relaxed max-w-sm opacity-90" style={{ fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
              A legacy of educational excellence, dedicated to nurturing the next generation of global leaders through holistic learning and moral values.
            </p>
            <div className="flex gap-3 pt-2">
              {[
                { icon: '📱', href: 'https://wa.me/919000568416' },
                { icon: '📞', href: 'tel:+919000568416' },
                { icon: '✉️', href: 'mailto:info@mapleford.edu.in' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg bg-white hover:bg-[#8B1E1A] group"
                  style={{
                    border: '1px solid rgba(214,178,94,0.3)',
                  }}
                >
                  <span className="text-lg text-[#8B1E1A] group-hover:text-white transition-colors">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-base font-bold mb-4 text-black" style={{ fontFamily: "'Raleway', sans-serif" }}>Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Admissions', 'Programs', 'Campus', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-black hover:text-[#8B1E1A] transition-colors text-sm font-medium inline-block transform hover:translate-x-1 duration-200"
                    style={{ fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-bold mb-4 text-black" style={{ fontFamily: "'Raleway', sans-serif" }}>Academics</h4>
            <ul className="space-y-2">
              {[
                { label: 'Pre-School', href: '/programs#preschool' },
                { label: 'Elementary School', href: '/programs#elementary' },
                { label: 'High School', href: '/programs#highschool' },
                { label: 'Student Zone', href: '/student-zone' }
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-black hover:text-[#8B1E1A] transition-colors text-sm font-medium inline-block transform hover:translate-x-1 duration-200"
                    style={{ fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold mb-4 text-black" style={{ fontFamily: "'Raleway', sans-serif" }}>Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-[#8B1E1A] mt-0.5">📍</span>
                <span className="text-black leading-relaxed" style={{ fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
                  Hayathnagar, Hyderabad, Telangana
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#8B1E1A]">📞</span>
                <a href="tel:+919000568416" className="text-black hover:text-[#8B1E1A] transition-colors" style={{ fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
                  +91 90005 68416
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#8B1E1A]">✉️</span>
                <a href="mailto:info@mapleford.edu.in" className="text-black hover:text-[#8B1E1A] transition-colors" style={{ fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
                  info@mapleford.edu.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#D6B25E]/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-black text-xs" style={{ fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
            © {new Date().getFullYear()} Mapleford International School. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-black hover:text-[#8B1E1A] transition-colors text-xs font-medium">Privacy Policy</Link>
            <Link href="#" className="text-black hover:text-[#8B1E1A] transition-colors text-xs font-medium">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
