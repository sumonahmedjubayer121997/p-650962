
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Save } from "lucide-react";

const AboutForm = () => {
  const [about, setAbout] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const savedAbout = localStorage.getItem("admin_about");
    if (savedAbout) {
      setAbout(JSON.parse(savedAbout));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      localStorage.setItem("admin_about", JSON.stringify(about));
      localStorage.setItem("admin_last_updated", new Date().toLocaleString());
      setIsLoading(false);
      
      toast({
        title: "About Section Updated",
        description: "Your about section has been saved successfully.",
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="about">About / Summary *</Label>
        <Textarea
          id="about"
          placeholder="Write a brief summary about yourself, your experience, and what you're passionate about..."
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          rows={8}
          required
        />
        <p className="text-sm text-gray-500">
          Character count: {about.length}
        </p>
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={isLoading}
          className="flex items-center gap-2"
        >
          <Save className="h-4 w-4" />
          {isLoading ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </form>
  );
};

export default AboutForm;
