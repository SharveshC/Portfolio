
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:sharveshchandrasekkhar@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert("Opening your email client. If it doesn't open, please copy the details and email me directly at sharveshchandrasekkhar@gmail.com");
    
    // Clear form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "sharveshchandrasekkhar@gmail.com",
      link: "mailto:sharveshchandrasekkhar@gmail.com"
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91 63811 65996",
      link: "tel:+916381165996"
    },
    {
      icon: "🐱",
      label: "GitHub",
      value: "SharveshC",
      link: "https://github.com/SharveshC"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "Sharvesh C",
      link: "https://www.linkedin.com/in/sharvesh-c-95b272312/"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-white mb-4">
            Get In <span className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto rounded-full"></div>
          <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
            Let's connect! I'm always open to discussing new opportunities, projects, or just having a tech chat.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="font-poppins font-semibold text-2xl text-white mb-8">
              Let's Connect
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a 
                  key={info.label}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="flex items-center p-4 bg-gradient-to-br from-slate-900/70 to-slate-900/30 rounded-2xl border border-white/10 hover:shadow-[0_25px_60px_rgba(2,6,23,0.6)] transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-portfolio-blue to-portfolio-purple rounded-xl flex items-center justify-center text-xl mr-4 group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <div className="font-medium text-white group-hover:text-portfolio-blue transition-colors">
                      {info.label}
                    </div>
                    <div className="text-white/70 text-sm">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gradient-to-br from-slate-900/70 to-slate-900/40 p-8 rounded-3xl border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.6)]">
              <h3 className="font-poppins font-semibold text-2xl text-white mb-6">
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-transparent bg-white/10 text-white placeholder:text-white/40 focus:border-portfolio-blue focus:ring-portfolio-blue"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-transparent bg-white/10 text-white placeholder:text-white/40 focus:border-portfolio-blue focus:ring-portfolio-blue"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full border-transparent bg-white/10 text-white placeholder:text-white/40 focus:border-portfolio-blue focus:ring-portfolio-blue resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-portfolio-blue to-portfolio-purple text-white hover:from-portfolio-blue-dark hover:to-portfolio-purple transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
