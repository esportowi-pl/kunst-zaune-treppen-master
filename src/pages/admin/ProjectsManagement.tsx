
import React, { useEffect, useState } from "react";
import { fromTable } from "@/integrations/supabase/helpers";
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
import { Edit, Trash, Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { format } from "date-fns";

interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  category: string;
  completion_date: string | null;
  location: string | null;
  created_at: string;
  updated_at: string;
}

const formSchema = z.object({
  title: z.string().min(1, "Titel ist erforderlich"),
  description: z.string().min(1, "Beschreibung ist erforderlich"),
  image_url: z.string().url("Ungültige URL").optional().or(z.literal("")),
  category: z.string().min(1, "Kategorie ist erforderlich"),
  completion_date: z.string().optional(),
  location: z.string().optional(),
});

export default function ProjectsManagement() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      image_url: "",
      category: "",
      completion_date: "",
      location: "",
    },
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (currentProject) {
      form.reset({
        title: currentProject.title,
        description: currentProject.description,
        image_url: currentProject.image_url || "",
        category: currentProject.category,
        completion_date: currentProject.completion_date 
          ? format(new Date(currentProject.completion_date), "yyyy-MM-dd")
          : "",
        location: currentProject.location || "",
      });
    } else {
      form.reset({
        title: "",
        description: "",
        image_url: "",
        category: "",
        completion_date: "",
        location: "",
      });
    }
  }, [currentProject, form]);

  const fetchProjects = async () => {
    setIsLoading(true);
    const { data, error } = await fromTable("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        variant: "destructive",
        title: "Fehler",
        description: "Projekte konnten nicht geladen werden",
      });
      console.error(error);
    } else {
      setProjects(data || []);
    }
    setIsLoading(false);
  };

  const handleOpenDialog = (project?: Project) => {
    setCurrentProject(project || null);
    setIsDialogOpen(true);
  };

  const handleOpenDeleteDialog = (project: Project) => {
    setCurrentProject(project);
    setIsDeleteDialogOpen(true);
  };

  const handleSave = async (values: z.infer<typeof formSchema>) => {
    try {
      // Transform the data to match the database schema
      const dataToSave = {
        title: values.title,
        description: values.description,
        image_url: values.image_url || null,
        category: values.category,
        completion_date: values.completion_date || null,
        location: values.location || null,
      };

      if (currentProject?.id) {
        // Update
        const { error } = await fromTable("projects")
          .update(dataToSave)
          .eq("id", currentProject.id);

        if (error) throw error;
        toast({
          title: "Erfolg",
          description: "Projekt wurde aktualisiert",
        });
      } else {
        // Insert
        const { error } = await fromTable("projects")
          .insert(dataToSave);

        if (error) throw error;
        toast({
          title: "Erfolg",
          description: "Neues Projekt wurde erstellt",
        });
      }
      setIsDialogOpen(false);
      fetchProjects();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Fehler",
        description: error.message || "Es ist ein Fehler aufgetreten",
      });
    }
  };

  const handleDelete = async () => {
    if (!currentProject?.id) return;

    try {
      const { error } = await supabase
        .from("projects")
        .delete()
        .eq("id", currentProject.id);

      if (error) throw error;
      toast({
        title: "Erfolg",
        description: "Projekt wurde gelöscht",
      });
      setIsDeleteDialogOpen(false);
      fetchProjects();
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
          <h1 className="text-3xl font-bold">Projekte</h1>
          <p className="text-muted-foreground">Verwalten Sie Ihre Projekte</p>
        </div>
        <Button onClick={() => handleOpenDialog()} className="flex items-center">
          <Plus className="mr-2 h-4 w-4" /> Neues Projekt
        </Button>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Titel</TableHead>
              <TableHead>Kategorie</TableHead>
              <TableHead>Standort</TableHead>
              <TableHead>Fertigstellung</TableHead>
              <TableHead className="w-[150px]">Aktionen</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-10 text-muted-foreground">
                  Noch keine Projekte vorhanden
                </TableCell>
              </TableRow>
            ) : (
              projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="font-medium">{project.title}</TableCell>
                  <TableCell>{project.category}</TableCell>
                  <TableCell>{project.location || "-"}</TableCell>
                  <TableCell>
                    {project.completion_date
                      ? format(new Date(project.completion_date), "dd.MM.yyyy")
                      : "-"}
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleOpenDialog(project)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-destructive hover:text-destructive"
                        onClick={() => handleOpenDeleteDialog(project)}
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
              {currentProject ? "Projekt bearbeiten" : "Neues Projekt erstellen"}
            </DialogTitle>
            <DialogDescription>
              Füllen Sie die Felder aus und klicken Sie auf Speichern, wenn Sie fertig sind.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSave)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Titel*</FormLabel>
                    <FormControl>
                      <Input placeholder="Projekttitel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Kategorie*</FormLabel>
                      <FormControl>
                        <Input placeholder="z.B. Metallzaun" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="completion_date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fertigstellung</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Standort</FormLabel>
                    <FormControl>
                      <Input placeholder="z.B. Berlin, Deutschland" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Beschreibung*</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Projektbeschreibung"
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
            <DialogTitle>Projekt löschen</DialogTitle>
            <DialogDescription>
              Sind Sie sicher, dass Sie dieses Projekt löschen möchten? Diese Aktion kann nicht rückgängig gemacht werden.
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
