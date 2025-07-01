
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Plus, Edit, Trash2, Save, X } from "lucide-react";

interface WorkExperience {
  id: string;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  isPresent: boolean;
}

const WorkExperienceForm = () => {
  const [experiences, setExperiences] = useState<WorkExperience[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Omit<WorkExperience, 'id'>>({
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    isPresent: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const savedExperiences = localStorage.getItem("admin_experience");
    if (savedExperiences) {
      setExperiences(JSON.parse(savedExperiences));
    }
  }, []);

  const saveToStorage = (newExperiences: WorkExperience[]) => {
    localStorage.setItem("admin_experience", JSON.stringify(newExperiences));
    localStorage.setItem("admin_last_updated", new Date().toLocaleString());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      let newExperiences;
      
      if (editingId) {
        newExperiences = experiences.map(exp => 
          exp.id === editingId ? { ...formData, id: editingId } : exp
        );
      } else {
        const newExperience: WorkExperience = {
          ...formData,
          id: Date.now().toString()
        };
        newExperiences = [...experiences, newExperience];
      }

      setExperiences(newExperiences);
      saveToStorage(newExperiences);
      setIsLoading(false);
      setIsDialogOpen(false);
      resetForm();
      
      toast({
        title: editingId ? "Experience Updated" : "Experience Added",
        description: `Work experience has been ${editingId ? "updated" : "added"} successfully.`,
      });
    }, 1000);
  };

  const handleEdit = (experience: WorkExperience) => {
    setFormData({
      jobTitle: experience.jobTitle,
      company: experience.company,
      startDate: experience.startDate,
      endDate: experience.endDate,
      isPresent: experience.isPresent
    });
    setEditingId(experience.id);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    const newExperiences = experiences.filter(exp => exp.id !== id);
    setExperiences(newExperiences);
    saveToStorage(newExperiences);
    
    toast({
      title: "Experience Deleted",
      description: "Work experience has been deleted successfully.",
    });
  };

  const resetForm = () => {
    setFormData({
      jobTitle: "",
      company: "",
      startDate: "",
      endDate: "",
      isPresent: false
    });
    setEditingId(null);
  };

  const handleInputChange = (field: keyof Omit<WorkExperience, 'id'>, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Work Experience ({experiences.length})</h3>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm} className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Experience
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>
                {editingId ? "Edit Experience" : "Add New Experience"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job Title *</Label>
                <Input
                  id="jobTitle"
                  placeholder="e.g., Software Engineer"
                  value={formData.jobTitle}
                  onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company *</Label>
                <Input
                  id="company"
                  placeholder="e.g., Google"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startDate">Start Date *</Label>
                  <Input
                    id="startDate"
                    type="month"
                    value={formData.startDate}
                    onChange={(e) => handleInputChange("startDate", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="endDate">End Date</Label>
                  <Input
                    id="endDate"
                    type="month"
                    value={formData.endDate}
                    onChange={(e) => handleInputChange("endDate", e.target.value)}
                    disabled={formData.isPresent}
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="isPresent"
                  checked={formData.isPresent}
                  onChange={(e) => {
                    handleInputChange("isPresent", e.target.checked);
                    if (e.target.checked) {
                      handleInputChange("endDate", "");
                    }
                  }}
                  className="rounded"
                />
                <Label htmlFor="isPresent">Currently working here</Label>
              </div>

              <div className="flex justify-end gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  <X className="h-4 w-4" />
                  Cancel
                </Button>
                <Button type="submit" disabled={isLoading}>
                  <Save className="h-4 w-4" />
                  {isLoading ? "Saving..." : "Save"}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {experiences.length === 0 ? (
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-gray-500">
                No work experience added yet. Click "Add Experience" to get started.
              </p>
            </CardContent>
          </Card>
        ) : (
          experiences.map((experience) => (
            <Card key={experience.id}>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{experience.jobTitle}</CardTitle>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {experience.company}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {new Date(experience.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {' '}
                      {experience.isPresent ? 'Present' : new Date(experience.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(experience)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(experience.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default WorkExperienceForm;
