
import React, { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { fromTable } from "@/integrations/supabase/helpers";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { UserPlus } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface AdminUser {
  id: string;
  email: string;
  role: string;
  created_at: string;
}

const addAdminFormSchema = z.object({
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
});

export default function Settings() {
  const { user } = useAuth();
  const [adminUsers, setAdminUsers] = useState<AdminUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const addAdminForm = useForm<z.infer<typeof addAdminFormSchema>>({
    resolver: zodResolver(addAdminFormSchema),
    defaultValues: {
      email: "",
    },
  });

  useEffect(() => {
    fetchAdminUsers();
  }, []);

  const fetchAdminUsers = async () => {
    setIsLoading(true);
    const { data, error } = await fromTable("admin_users")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      toast({
        variant: "destructive",
        title: "Fehler",
        description: "Admin-Benutzer konnten nicht geladen werden",
      });
      console.error(error);
    } else {
      setAdminUsers(data || []);
    }
    setIsLoading(false);
  };

  const handleAddAdmin = async (values: z.infer<typeof addAdminFormSchema>) => {
    try {
      // Check if email already exists in admin_users
      const { data: existingUser } = await fromTable("admin_users")
        .select("id")
        .eq("email", values.email)
        .single();

      if (existingUser) {
        toast({
          variant: "destructive",
          title: "Fehler",
          description: "Diese E-Mail-Adresse ist bereits als Administrator registriert",
        });
        return;
      }

      // Create user in auth system if they don't exist
      const { data: userData, error: userError } = await supabase.auth.admin.createUser({
        email: values.email,
        password: generateRandomPassword(12),
        email_confirm: true,
      });

      if (userError) throw userError;

      // Add user to admin_users table
      const { error } = await supabase
        .from("admin_users")
        .insert({ 
          id: userData.user.id, 
          email: values.email,
          role: "admin" 
        });

      if (error) throw error;

      toast({
        title: "Erfolg",
        description: "Administrator wurde hinzugefügt",
      });
      
      addAdminForm.reset();
      fetchAdminUsers();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Fehler",
        description: "Administrator konnte nicht hinzugefügt werden: " + (error.message || "Unbekannter Fehler"),
      });
    }
  };

  const generateRandomPassword = (length: number) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Einstellungen</h1>
        <p className="text-muted-foreground">Verwalten Sie Ihre Administratoren und Einstellungen</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Administratoren</CardTitle>
          <CardDescription>
            Verwalten Sie Benutzer mit Administratorzugriff
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Aktuelle Administratoren</h3>
            <div className="border rounded-md">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>E-Mail</TableHead>
                    <TableHead>Rolle</TableHead>
                    <TableHead>Hinzugefügt am</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {adminUsers.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={3} className="text-center py-4 text-muted-foreground">
                        Keine Administratoren gefunden
                      </TableCell>
                    </TableRow>
                  ) : (
                    adminUsers.map((admin) => (
                      <TableRow key={admin.id}>
                        <TableCell>{admin.email}</TableCell>
                        <TableCell>{admin.role}</TableCell>
                        <TableCell>
                          {new Date(admin.created_at).toLocaleDateString("de-DE")}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start border-t p-4">
          <h3 className="text-lg font-medium mb-4">Administrator hinzufügen</h3>
          <Form {...addAdminForm}>
            <form
              onSubmit={addAdminForm.handleSubmit(handleAddAdmin)}
              className="w-full space-y-4"
            >
              <div className="flex gap-4">
                <FormField
                  control={addAdminForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>E-Mail</FormLabel>
                      <FormControl>
                        <Input placeholder="admin@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="mt-8">
                  <UserPlus className="mr-2 h-4 w-4" /> Hinzufügen
                </Button>
              </div>
            </form>
          </Form>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Hilfe & Support</CardTitle>
          <CardDescription>
            Hilfe bei der Verwendung des Admin-Dashboards
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-md bg-muted p-4">
              <h3 className="font-medium">Inhalte bearbeiten</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Verwenden Sie den Reiter "Inhalte", um Text und Bilder auf Ihrer Website zu bearbeiten.
              </p>
            </div>
            
            <div className="rounded-md bg-muted p-4">
              <h3 className="font-medium">Projekte verwalten</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Fügen Sie neue Projekte hinzu oder bearbeiten Sie bestehende Projekte im Reiter "Projekte".
              </p>
            </div>
            
            <div className="rounded-md bg-muted p-4">
              <h3 className="font-medium">Team verwalten</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Fügen Sie neue Teammitglieder hinzu oder bearbeiten Sie das bestehende Team im Reiter "Team".
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
