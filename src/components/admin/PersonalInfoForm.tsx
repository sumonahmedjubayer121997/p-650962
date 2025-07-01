
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Save } from "lucide-react";

interface PersonalInfo {
  name: string;
  title: string;
  experience: string;
}

const PersonalInfoForm = () => {
  const [formData, setFormData] = useState<PersonalInfo>({
    name: "",
    title: "",
    experience: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const savedData = localStorage.getItem("admin_personal_info");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleInputChange = (field: keyof PersonalInfo, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      localStorage.setItem("admin_personal_info", JSON.stringify(formData));
      localStorage.setItem("admin_last_updated", new Date().toLocaleString());
      setIsLoading(false);
      
      toast({
        title: "Personal Information Updated",
        description: "Your personal information has been saved successfully.",
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="title">Professional Title *</Label>
          <Input
            id="title"
            type="text"
            placeholder="e.g., Software Engineer"
            value={formData.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="experience">Years of Experience *</Label>
        <Input
          id="experience"
          type="text"
          placeholder="e.g., 3 or 3+"
          value={formData.experience}
          onChange={(e) => handleInputChange("experience", e.target.value)}
          required
        />
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

export default PersonalInfoForm;
