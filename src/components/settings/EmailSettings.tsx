import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle } from "lucide-react";

export const EmailSettings = () => {
  const [magicLinkSent, setMagicLinkSent] = useState(false);
  const form = useForm({
    defaultValues: {
      email: "",
    }
  });

  const onSubmit = async (data: { email: string }) => {
    // Implement magic link email sending logic here
    setMagicLinkSent(true);
  };

  return (
    <Card className="p-6 space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Email Settings</h2>
        <p className="text-sm text-muted-foreground">
          Manage your email preferences and security settings
        </p>
      </div>

      {magicLinkSent && (
        <Alert>
          <CheckCircle className="h-4 w-4" />
          <AlertDescription>
            Magic link has been sent to your email address. Please check your inbox.
          </AlertDescription>
        </Alert>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Send Magic Link
          </Button>
        </form>
      </Form>

      <div className="pt-6 border-t">
        <h3 className="text-lg font-medium mb-4">Security</h3>
        <Button variant="destructive" className="w-full">
          Delete Account
        </Button>
      </div>
    </Card>
  );
};
