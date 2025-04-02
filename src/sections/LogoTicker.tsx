import acmeLogo from '@/assets/logo-acme.png';
import apexLogo from '@/assets/logo-apex.png';
import celestialLogo from '@/assets/logo-celestial.png';
import quantumLogo from '@/assets/logo-quantum.png';
import pulseLogo from '@/assets/logo-pulse.png';
import echologo from '@/assets/logo-echo.png';

export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2>Trusted by top innovative teams</h2>
          </div>
          <div className="flex-1 overflow-x-auto whitespace-nowrap">
            <div className="flex gap-14 justify-center">
              {[
                acmeLogo,
                pulseLogo,
                echologo,
                celestialLogo,
                apexLogo,
                quantumLogo,
              ].map((logo) => (
                <img src={logo.src} key={logo.src} className="h-6 w-auto max-w-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
