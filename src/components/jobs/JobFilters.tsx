import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const JobFilters = ({ filters, setFilters }) => {
  return (
    <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg border">
      <h2 className="font-semibold mb-4">Filters</h2>
      
      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="salary">
          <AccordionTrigger>Salary Range</AccordionTrigger>
          <AccordionContent>
            <Slider
              value={[filters.salary.min, filters.salary.max]}
              onValueChange={(value) => setFilters({
                ...filters,
                salary: { min: value[0], max: value[1] }
              })}
              max={200000}
              step={1000}
            />
            <div className="flex justify-between text-sm mt-2">
              <span>${filters.salary.min.toLocaleString()}</span>
              <span>${filters.salary.max.toLocaleString()}</span>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Add more filter sections for roles, sectors, etc. */}
      </Accordion>
    </div>
  );
};

export default JobFilters;
