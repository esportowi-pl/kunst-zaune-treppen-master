
import React, { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { Edit, Trash, Plus, UserCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";

interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string | null;
  image_url: string | null;
  created_at: string;
  updated_at: string;
}

const formSchema = z.object({
  name: z.string().min(1, "Name ist erforderlich"),
  position: z.string().min(1, "Position ist erforderlich"),
  bio: z.string().optional(),
  image_url: z.string().url("Ungültige URL").optional().or(z.literal("")),
});

export default function TeamManagement() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentMember, setCurrentMember] = useState<TeamMember | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      position: "",
      bio: "",
      image_url: "",
    },
  });

  useEffect(() => {
    fetchMembers();
  }, []);

  useEffect(() => {
    if (currentMember) {
      form.reset({
        name: currentMember.name,
        position: currentMember.position,
        bio: currentMember.bio || "",
        image_url: currentMember.image_url || "",
      });
    } else {
      form.reset({
        name: "",
        position: "",
        bio: "",
        image_url: "",
      });
    }
  }, [currentMember, form]);

  const fetchMembers = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("team_members")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        variant: "destructive",
        title: "Fehler",
        description: "Teammitglieder konnten nicht geladen werden",
      });
      console.error(error);
    } else {
      setMembers(data || []);
    }
    setIsLoading(false);
  };

  const handleOpenDialog = (member?: TeamMember) => {
    setCurrentMember(member || null);
    setIsDialogOpen(true);
  };

  const handleOpenDeleteDialog = (member: TeamMember) => {
    setCurrentMember(member);
    setIsDeleteDialogOpen(true);
  };

  const handleSave = async (values: z.infer<typeof formSchema>) => {
    try {
      // Transform the data to match the database schema
      const dataToSave = {
        name: values.name,
        position: values.position,
        bio: values.bio || null,
        image_url: values.image_url || null,
      };

      if (currentMember?.id) {
        // Update
        const { error } = await supabase
          .from("team_members")
          .update(dataToSave)
          .eq("id", currentMember.id);

        if (error) throw error;
        toast({
          title: "Erfolg",
          description: "Teammitglied wurde aktualisiert",
        });
      } else {
        // Insert
        const { error } = await supabase
          .from("team_members")
          .insert(dataToSave);

        if (error) throw error;
        toast({
          title: "Erfolg",
          description: "Neues Teammitglied wurde erstellt",
        });
      }
      setIsDialogOpen(false);
      fetchMembers();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Fehler",
        description: error.message || "Es ist ein Fehler aufgetreten",
      });
    }
  };

  const handleDelete = async () => {
    if (!currentMember?.id) return;

    try {
      const { error } = await supabase
        .from("team_members")
        .delete()
        .eq("id", currentMember.id);

      if (error) throw error;
      toast({
        title: "Erfolg",
        description: "Teammitglied wurde gelöscht",
      });
      setIsDeleteDialogOpen(false);
      fetchMembers();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Fehler",
        description: error.message || "Es ist ein Fehler aufgetreten",
      });
    }
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
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Team</h1>
          <p className="text-muted-foreground">Verwalten Sie Ihre Teammitglieder</p>
        </div>
        <Button onClick={() => handleOpenDialog()} className="flex items-center">
          <Plus className="mr-2 h-4 w-4" /> Neues Teammitglied
        </Button>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Bild</TableHead>
              <TableHead className="w-[150px]">Aktionen</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-10 text-muted-foreground">
                  Noch keine Teammitglieder vorhanden
                </TableCell>
              </TableRow>
            ) : (
              members.map((member) => (
                <TableRow key={member.id}>
                  <TableCell className="font-medium">{member.name}</TableCell>
                  <TableCell>{member.position}</TableCell>
                  <TableCell>
                    {member.image_url ? (
                      <div className="w-10 h-10 relative rounded-full overflow-hidden">
                        <img
                          src={member.image_url}
                          alt={member.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ) : (
                      <UserCircle className="w-10 h-10 text-muted-foreground" />
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleOpenDialog(member)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-destructive hover:text-destructive"
                        onClick={() => handleOpenDeleteDialog(member)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Edit/Create Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>
              {currentMember ? "Teammitglied bearbeiten" : "Neues Teammitglied erstellen"}
            </DialogTitle>
            <DialogDescription>
              Füllen Sie die Felder aus und klicken Sie auf Speichern, wenn Sie fertig sind.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSave)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name*</FormLabel>
                    <FormControl>
                      <Input placeholder="Max Mustermann" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Position*</FormLabel>
                    <FormControl>
                      <Input placeholder="z.B. Geschäftsführer" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Biografie</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Kurze Beschreibung der Person"
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bild URL</FormLabel>
                    <FormControl>
                      <Input placeholder="z.B. https://example.com/image.jpg" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="submit">Speichern</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Teammitglied löschen</DialogTitle>
            <DialogDescription>
              Są Sie sicher, dass Sie dieses Teammitglied löschen möchten? Diese Aktion kann nicht rückgängig gemacht werden.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Abbrechen
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Löschen
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
