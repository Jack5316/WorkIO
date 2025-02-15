import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export const NotificationSettings = () => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Notification Preferences</h2>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label className="text-base">Email Notifications</Label>
            <p className="text-sm text-muted-foreground">
              Receive email updates about your job applications
            </p>
          </div>
          <Switch />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label className="text-base">Job Alerts</Label>
            <p className="text-sm text-muted-foreground">
              Get notified about new job opportunities
            </p>
          </div>
          <Switch />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label className="text-base">Application Updates</Label>
            <p className="text-sm text-muted-foreground">
              Receive updates about your job applications
            </p>
          </div>
          <Switch />
        </div>

        <Button className="w-full">Save Preferences</Button>
      </div>
    </Card>
  );
};
