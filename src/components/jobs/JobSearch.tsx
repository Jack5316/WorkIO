import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Search, Sparkles } from "lucide-react";

interface JobSearchProps {
  mode: 'normal' | 'ai';
}

const JobSearch = ({ mode }: JobSearchProps) => {
  const [query, setQuery] = useState('');
  const [aiPrompt, setAiPrompt] = useState('');

  if (mode === 'ai') {
    return (
      <div className="space-y-4">
        <Textarea
          placeholder="Describe your ideal job in detail. For example: I'm looking for a remote senior frontend developer position using React, with a salary above $120k, in a startup environment..."
          value={aiPrompt}
          onChange={(e) => setAiPrompt(e.target.value)}
          className="min-h-[120px]"
        />
        <Button className="w-full">
          <Sparkles className="mr-2 h-4 w-4" />
          Search with AI
        </Button>
      </div>
    );
  }

  return (
    <div className="relative">
      <Input
        placeholder="Search for jobs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pr-10"
      />
      <Search className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
    </div>
  );
};

export default JobSearch;
