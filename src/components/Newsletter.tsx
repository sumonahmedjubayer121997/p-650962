
import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive updates about the latest design stories and tips."
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="bg-white py-20">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Don't want to miss anything?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Get weekly updates on the newest design stories, case studies and tips right in your mailbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              className="flex-1 px-6 py-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-700"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-4 px-8 rounded-md transition-all duration-300 whitespace-nowrap"
            >
              {isSubmitting ? "Submitting..." : "submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
