import { useEffect, useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { supabase } from "../lib/supabase";
import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  // Pre-fill from URL param
  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.split("?")[1] || "");
    const product = params.get("product");
    if (product) {
      setMessage(`Hi! I'm interested in the "${product}". Could you share more details?`);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setStatus("sending");

    const { error } = await supabase.from("inquiries").insert({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    if (error) {
      setStatus("error");
    } else {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-cove-50 to-cove-100">
      <div className="max-w-3xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal ${visible ? "visible" : ""} text-center mb-12`}
        >
          <p className="text-cove-500 font-medium tracking-widest uppercase text-sm mb-3">
            Get in Touch
          </p>
          <h2 className="section-title">
            Let's Create Something <span className="italic text-cove-600">Beautiful</span>
          </h2>
          <p className="section-subtitle">
            Interested in a piece? Want a custom creation? Or just want to say
            hello? We'd love to hear from you.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
          {status === "success" ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} className="text-sage-600" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-ink-900 mb-2">
                Thank You!
              </h3>
              <p className="text-ink-500 mb-6">
                Your message has been received. We'll get back to you soon, in
                sha Allah.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="btn-outline"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-ink-600 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="e.g. Aisha Khan"
                  className="w-full px-4 py-3 rounded-xl border border-ink-200 bg-cove-50/50 text-ink-800 placeholder-ink-300 focus:outline-none focus:border-cove-400 focus:ring-2 focus:ring-cove-200 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-600 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-ink-200 bg-cove-50/50 text-ink-800 placeholder-ink-300 focus:outline-none focus:border-cove-400 focus:ring-2 focus:ring-cove-200 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-600 mb-2">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  placeholder="Tell us what you're looking for..."
                  className="w-full px-4 py-3 rounded-xl border border-ink-200 bg-cove-50/50 text-ink-800 placeholder-ink-300 focus:outline-none focus:border-cove-400 focus:ring-2 focus:ring-cove-200 transition-all resize-none"
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <AlertCircle size={16} />
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
