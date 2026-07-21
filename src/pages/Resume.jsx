import Header from "../components/Header";
import cvPDF from "../cv/CV_Gabriella.pdf";
import Footer from "../components/Footer";
export default function Resume() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Header />

      <section className="pt-32 pb-20">

        <div className="max-w-7xl mx-auto px-8">

          <div className="flex items-center justify-between mb-10">

            <div>
              <p className="uppercase tracking-[0.2em] text-sm text-lime-300">
                Curriculum Vitae
              </p>

              <h1 className="text-3xl font-semibold mt-2">
                Gabriella Sekar Shada
              </h1>
            </div>

            <a
              href="/cv/CV_Gabriella.pdf"
              download
              className="px-6 py-3 rounded-full bg-lime-300 text-black font-semibold hover:scale-105 transition"
            >
              Download PDF
            </a>

          </div>

          <div className="rounded-3xl overflow-hidden border border-white/10">

            <iframe
               src={cvPDF}
              title="CV"
              className="w-full h-[85vh]"
            />

          </div>

        </div>

      </section>
      <Footer/>
    </main>
  );
}