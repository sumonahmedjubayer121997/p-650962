
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Plus, X, Save, ExternalLink } from "lucide-react";

interface Tool {
  name: string;
  icon?: string;
}

const ToolsForm = () => {
  const [tools, setTools] = useState<Tool[]>([]);
  const [newTool, setNewTool] = useState({ name: "", icon: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const savedTools = localStorage.getItem("admin_tools");
    if (savedTools) {
      setTools(JSON.parse(savedTools));
    }
  }, []);

  const handleAddTool = () => {
    if (newTool.name.trim() && !tools.some(tool => tool.name === newTool.name.trim())) {
      setTools(prev => [...prev, {
        name: newTool.name.trim(),
        icon: newTool.icon.trim() || undefined
      }]);
      setNewTool({ name: "", icon: "" });
    }
  };

  const handleRemoveTool = (toolToRemove: string) => {
    setTools(prev => prev.filter(tool => tool.name !== toolToRemove));
  };

  const handleSave = async () => {
    setIsLoading(true);

    setTimeout(() => {
      localStorage.setItem("admin_tools", JSON.stringify(tools));
      localStorage.setItem("admin_last_updated", new Date().toLocaleString());
      setIsLoading(false);
      
      toast({
        title: "Tools Updated",
        description: `${tools.length} tools have been saved successfully.`,
      });
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTool();
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <h3 className="font-medium">Add New Tool</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="toolName">Tool Name *</Label>
                <Input
                  id="toolName"
                  placeholder="e.g., VS Code, GitHub, Figma"
                  value={newTool.name}
                  onChange={(e) => setNewTool(prev => ({ ...prev, name: e.target.value }))}
                  onKeyPress={handleKeyPress}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="toolIcon">Icon URL (optional)</Label>
                <Input
                  id="toolIcon"
                  placeholder="https://example.com/icon.png"
                  value={newTool.icon}
                  onChange={(e) => setNewTool(prev => ({ ...prev, icon: e.target.value }))}
                  onKeyPress={handleKeyPress}
                />
              </div>
            </div>
            <Button
              type="button"
              onClick={handleAddTool}
              disabled={!newTool.name.trim()}
              className="flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Add Tool
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-2">
        <Label>Current Tools ({tools.length})</Label>
        <div className="min-h-[200px] p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
          {tools.length === 0 ? (
            <p className="text-gray-500 text-center">
              No tools added yet. Add your first tool above.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg border"
                >
                  <div className="flex items-center gap-3">
                    {tool.icon && (
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className="w-8 h-8 object-contain rounded"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    )}
                    <span className="font-medium">{tool.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {tool.icon && (
                      <a
                        href={tool.icon}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    <button
                      onClick={() => handleRemoveTool(tool.name)}
                      className="text-red-500 hover:text-red-600 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          onClick={handleSave}
          disabled={isLoading}
          className="flex items-center gap-2"
        >
          <Save className="h-4 w-4" />
          {isLoading ? "Saving..." : "Save Tools"}
        </Button>
      </div>
    </div>
  );
};

export default ToolsForm;
