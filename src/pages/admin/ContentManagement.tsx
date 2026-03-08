
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

interface WebsiteContent {
  id: string;
  page: string;
  section: string;
  title: string;
  content: string;
  image_url: string | null;
  created_at: string;
  updated_at: string;
}

const formSchema = z.object({
  page: z.string().min(1, "Seite ist erforderlich"),
  section: z.string().min(1, "Abschnitt ist erforderlich"),
  title: z.string().min(1, "Titel ist erforderlich"),
  content: z.string().min(1, "Inhalt ist erforderlich"),
  image_url: z.string().url("Ungültige URL").optional().or(z.literal("")),
});

export default function ContentManagement() {
  const [contents, setContents] = useState<WebsiteContent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentContent, setCurrentContent] = useState<WebsiteContent | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      page: "",
      section: "",
      title: "",
      content: "",
      image_url: "",
    },
  });

  useEffect(() => {
    fetchContents();
  }, []);

  useEffect(() => {
    if (currentContent) {
      form.reset({
        page: currentContent.page,
        section: currentContent.section,
        title: currentContent.title,
        content: currentContent.content,
        image_url: currentContent.image_url || "",
      });
    } else {
      form.reset({
        page: "",
        section: "",
        title: "",
        content: "",
        image_url: "",
      });
    }
  }, [currentContent, form]);

  const fetchContents = async () => {
    setIsLoading(true);
    const { data, error } = await fromTable("website_content")
      .select("*")
      .order("page", { ascending: true })
      .order("section", { ascending: true });

    if (error) {
      toast({
        variant: "destructive",
        title: "Fehler",
        description: "Inhalte konnten nicht geladen werden",
      });
      console.error(error);
    } else {
      setContents(data || []);
    }
    setIsLoading(false);
  };

  const handleOpenDialog = (content?: WebsiteContent) => {
    setCurrentContent(content || null);
    setIsDialogOpen(true);
  };

  const handleOpenDeleteDialog = (content: WebsiteContent) => {
    setCurrentContent(content);
    setIsDeleteDialogOpen(true);
  };

  const handleSave = async (values: z.infer<typeof formSchema>) => {
    try {
      // Transform the data to match the database schema
      const dataToSave = {
        page: values.page,
        section: values.section,
        title: values.title,
        content: values.content,
        image_url: values.image_url || null,
      };

      if (currentContent?.id) {
        // Update
        const { error } = await fromTable("website_content")
          .update(dataToSave)
          .eq("id", currentContent.id);

        if (error) throw error;
        toast({
          title: "Erfolg",
          description: "Inhalt wurde aktualisiert",
        });
      } else {
        // Insert
        const { error } = await fromTable("website_content")
          .insert(dataToSave);

        if (error) throw error;
        toast({
          title: "Erfolg",
          description: "Neuer Inhalt wurde erstellt",
        });
      }
      setIsDialogOpen(false);
      fetchContents();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Fehler",
        description: error.message || "Es ist ein Fehler aufgetreten",
      });
    }
  };

  const handleDelete = async () => {
    if (!currentContent?.id) return;

    try {
      const { error } = await fromTable("website_content")
        .delete()
        .eq("id", currentContent.id);

      if (error) throw error;
      toast({
        title: "Erfolg",
        description: "Inhalt wurde gelöscht",
      });
      setIsDeleteDialogOpen(false);
      fetchContents();
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
          <h1 className="text-3xl font-bold">Webseiteninhalte</h1>
          <p className="text-muted-foreground">Verwalten Sie die Inhalte Ihrer Webseite</p>
        </div>
        <Button onClick={() => handleOpenDialog()} className="flex items-center">
          <Plus className="mr-2 h-4 w-4" /> Neuer Inhalt
        </Button>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Seite</TableHead>
              <TableHead>Abschnitt</TableHead>
              <TableHead>Titel</TableHead>
              <TableHead className="w-[150px]">Aktionen</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contents.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-10 text-muted-foreground">
                  Noch keine Inhalte vorhanden
                </TableCell>
              </TableRow>
            ) : (
              contents.map((content) => (
                <TableRow key={content.id}>
                  <TableCell>{content.page}</TableCell>
                  <TableCell>{content.section}</TableCell>
                  <TableCell>{content.title || "-"}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleOpenDialog(content)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-destructive hover:text-destructive"
                        onClick={() => handleOpenDeleteDialog(content)}
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
              {currentContent ? "Inhalt bearbeiten" : "Neuen Inhalt erstellen"}
            </DialogTitle>
            <DialogDescription>
              Füllen Sie die Felder aus und klicken Sie auf Speichern, wenn Sie fertig sind.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSave)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="page"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Seite*</FormLabel>
                      <FormControl>
                        <Input placeholder="z.B. home" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="section"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Abschnitt*</FormLabel>
                      <FormControl>
                        <Input placeholder="z.B. hero" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Titel*</FormLabel>
                    <FormControl>
                      <Input placeholder="Titel des Abschnitts" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Inhalt*</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Inhalt des Abschnitts"
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
            <DialogTitle>Inhalt löschen</DialogTitle>
            <DialogDescription>
              Sind Sie sicher, dass Sie diesen Inhalt löschen möchten? Diese Aktion kann nicht rückgängig gemacht werden.
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
