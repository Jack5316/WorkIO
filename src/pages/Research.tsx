import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useForm } from "react-hook-form";

const Research = () => {
  const [isPhDInterested, setIsPhDInterested] = useState(false);
  const form = useForm();

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8 p-6">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl mb-4">Research Profile</h1>
          <p className="text-muted-foreground">
            Showcase your academic achievements and research interests
          </p>
        </div>

        <Form {...form}>
          <form className="space-y-8">
            {/* Research Interests */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Research Interests</h2>
              <FormField
                control={form.control}
                name="researchInterests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Research Areas</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your research interests..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </Card>

            {/* Publications */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Publications</h2>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="publicationTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Publication Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter publication title" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="publicationType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type</FormLabel>
                      <Select onValueChange={field.onChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="journal">Journal Paper</SelectItem>
                          <SelectItem value="conference">
                            Conference Paper
                          </SelectItem>
                          <SelectItem value="thesis">Thesis</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>
              <Button className="mt-4" variant="outline">
                Add Publication
              </Button>
            </Card>

            {/* Academic Performance */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">
                Academic Performance
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="gpa"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>GPA/Grade</FormLabel>
                      <FormControl>
                        <Input type="number" step="0.01" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="institution"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Institution</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </Card>

            {/* PhD Interest */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">PhD Interest</h2>
              <div className="flex items-center space-x-4">
                <Switch
                  checked={isPhDInterested}
                  onCheckedChange={setIsPhDInterested}
                />
                <span>I'm interested in pursuing a PhD</span>
              </div>
              {isPhDInterested && (
                <div className="mt-4">
                  <FormField
                    control={form.control}
                    name="phdInterests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Research Focus</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your intended PhD research focus..."
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              )}
            </Card>

            <Button type="submit" className="w-full">
              Save Research Profile
            </Button>
          </form>
        </Form>
      </div>
    </DashboardLayout>
  );
};

export default Research;
