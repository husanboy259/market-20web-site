import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Have a question? We'd love to hear from you. Get in touch with us today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info */}
            <div className="bg-white rounded-lg border border-border p-8">
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground mb-4">
                support@markethub.com
                <br />
                info@markethub.com
              </p>
              <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
            </div>

            <div className="bg-white rounded-lg border border-border p-8">
              <Phone className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Phone</h3>
              <p className="text-muted-foreground mb-4">
                +1 (555) 123-4567
                <br />
                +1 (555) 123-4568
              </p>
              <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-6PM EST</p>
            </div>

            <div className="bg-white rounded-lg border border-border p-8">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Address</h3>
              <p className="text-muted-foreground mb-4">
                123 Commerce Street
                <br />
                New York, NY 10001
              </p>
              <p className="text-sm text-muted-foreground">Visit our headquarters</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-white rounded-lg border border-border p-12">
            <h2 className="text-2xl font-bold text-foreground mb-8">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  placeholder="Your message here..."
                  rows={6}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  required
                ></textarea>
              </div>

              <Button size="lg" className="w-full" type="submit">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Common Questions</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              {
                q: "What are your shipping times?",
                a: "We offer 2-5 business day shipping on most orders.",
              },
              {
                q: "Do you accept returns?",
                a: "Yes! We offer 30-day easy returns on all purchases.",
              },
              {
                q: "Is checkout secure?",
                a: "Absolutely. We use SSL encryption for all transactions.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-border p-6">
                <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                <p className="text-muted-foreground text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
