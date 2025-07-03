
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, ExternalLink, BookOpen } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Save the contact request to the database
      const { error: dbError } = await supabase
        .from('contact_requests')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message || '',
          }
        ]);

      if (dbError) {
        console.error('Error saving contact request:', dbError);
        toast({
          title: "Error",
          description: "There was an error submitting your request. Please try again.",
          variant: "destructive",
        });
        return;
      }

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          message: formData.message
        }
      });

      if (emailError) {
        console.error('Error sending email:', emailError);
        // Don't show error to user since the form was saved successfully
      }

      console.log("Contact request saved successfully:", formData);
      
      toast({
        title: "Thank you for your interest!",
        description: "We'll be in touch within 1-3 working days with early access information.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error",
        description: "There was an unexpected error. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Get Early Access
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join the waitlist to be among the first to experience LongevityCoa.ch and optimize your healthspan
          </p>
        </div>



        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Why Join Early?</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-slate-800">Exclusive Beta Access</h4>
                  <p className="text-slate-600">Be the first to test new features and provide feedback</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-slate-800">Personalized Onboarding</h4>
                  <p className="text-slate-600">Get individual guidance on setting up your health optimization journey</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-slate-800">Early Bird Pricing</h4>
                  <p className="text-slate-600">Special pricing for early adopters and founding members</p>
                </div>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-slate-200">
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Get in Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <a 
                    href="mailto:info@mabu.red" 
                    className="text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    info@mabu.red
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-blue-600" />
                  <a 
                    href="https://www.linkedin.com/in/mbuchhorn/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl text-slate-800">Contact Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your health optimization goals or questions..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full"
                    disabled={isSubmitting}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-lg py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Join Early Access"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
