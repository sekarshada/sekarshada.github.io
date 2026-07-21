import { Mail, FileText } from "lucide-react";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-32">
      <div className="max-w-7xl mx-auto px-8 md:px-20 py-20">
        {/* CTA */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-sm text-orange-400 mb-4">
            Let's Connect
          </p>

          <h2 className="text-3xl font-semibold text-white mb-6">
            Building meaningful technology,
            <br />
            one experience at a time
          </h2>

          <p className="text-lg text-gray-400 leading-relaxed">
            I'm always happy to connect about research, teaching, product
            design, mixed reality, or opportunities to collaborate.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-10 mt-16">
          <a
            href="mailto:your@email.com"
            className="flex items-center gap-3 text-gray-300 hover:text-[#C96A2A] transition"
          >
            <Mail size={18} />
            Email
          </a>

          <a
            href="https://linkedin.com/in/gabriella-sekar-shada"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-[#C96A2A] transition"
          >
            {/* <Linkedin size={18} />
              LinkedIn */}

            <Icon icon="mdi:linkedin" width={22} />
          </a>

          <a
            href="https://github.com/sekarshada"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-[#C96A2A] transition"
          >
            <Icon icon="mdi:github" width={22} />

            {/* <Github size={18} />
              GitHub */}
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-14" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Gabriella Sekar Shada
            </h3>

            <p className="text-gray-500 mt-2">
              Research • Teaching • Product Design • Mixed Reality
            </p>
          </div>

          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Gabriella Sekar Shada.
            <br />
            Designed & developed with React + Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
