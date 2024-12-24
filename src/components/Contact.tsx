import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">
          Contact <span className="text-primary">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>your.email@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 (XXX) XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>California, United States</span>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md bg-accent/50 border border-border focus:border-primary focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-md bg-accent/50 border border-border focus:border-primary focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full px-4 py-3 rounded-md bg-accent/50 border border-border focus:border-primary focus:outline-none resize-none"
              />
              <button className="w-full px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;