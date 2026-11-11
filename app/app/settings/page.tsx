import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export default function SettingsPage() {
  return (
    <div className="max-w-5xl flex-1 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="mt-2 text-muted-foreground">
          Layout only: nothing on this screen is saved yet.
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>
                This is how others will see you on the site.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2 border-b border-border/40 pb-6">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="your-username" />
                <p className="text-sm text-muted-foreground">
                  This is your public display name. It can be your real name or
                  a pseudonym.
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="A line or two about you"
                  className="resize-y"
                />
                <p className="text-sm text-muted-foreground">
                  You can <span>@mention</span> other users and organizations.
                </p>
              </div>
            </CardContent>
            <CardFooter className="border-t border-border/40 bg-muted/20 px-6 py-4">
              <Button>Update profile</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="account">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Update your account settings. Set your preferred language and
                timezone.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-40 items-center justify-center border-2 border-dashed border-border/40 bg-muted/10 text-muted-foreground">
                Placeholder content for Account tab
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>
                Configure how you receive notifications.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-3">
                <Checkbox id="notify-emails" defaultChecked />
                <div className="space-y-1 leading-none">
                  <Label htmlFor="notify-emails">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive emails about your account activity.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox id="notify-marketing" />
                <div className="space-y-1 leading-none">
                  <Label htmlFor="notify-marketing">Marketing Emails</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive emails about new products, features, and more.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t border-border/40 bg-muted/20 px-6 py-4">
              <Button>Save preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
