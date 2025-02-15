import { useForm } from "react-hook-form";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const ProfileSettings = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      title: "",
      bio: "",
      location: "",
      website: "",
      github: "",
      linkedin: "",
    }
  });

  return (
    <Card className="p-6">
      <div className="flex items-center space-x-4 mb-6">
        <Avatar className="h-20 w-20">
          <AvatarImage src="" />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
        <Button variant="outline">Change Photo</Button>
      </div>

      <Form {...form}>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Professional Title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea {...field} className="min-h-[100px]" />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Social Links</h3>
            <div className="grid grid-cols-2 gap-4">
              {["website", "github", "linkedin"].map((social) => (
                <FormField
                  key={social}
                  control={form.control}
                  name={social as any}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="capitalize">{social}</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              ))}
            </div>
          </div>

          <Button type="submit" className="w-full">Save Changes</Button>
        </form>
      </Form>
    </Card>
  );
};
