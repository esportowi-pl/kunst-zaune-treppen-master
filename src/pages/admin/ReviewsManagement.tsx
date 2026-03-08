
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Star, Trash2, Edit, Plus } from 'lucide-react';
import { fromTable } from '@/integrations/supabase/helpers';
import { useToast } from '@/hooks/use-toast';

interface Review {
  id: string;
  client_name: string;
  client_location: string;
  project_type: string;
  rating: number;
  review_text: string;
  google_review_url?: string;
  is_featured: boolean;
  created_at: string;
}

export default function ReviewsManagement() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [editingReview, setEditingReview] = useState<Review | null>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    client_name: '',
    client_location: '',
    project_type: '',
    rating: 5,
    review_text: '',
    google_review_url: '',
    is_featured: false
  });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const { data, error } = await fromTable('reviews')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching reviews:', error);
        toast({
          title: "Błąd",
          description: "Nie udało się pobrać opinii. " + error.message,
          variant: "destructive",
        });
        return;
      }

      setReviews(data || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      toast({
        title: "Błąd",
        description: "Nie udało się pobrać opinii.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingReview) {
        const { error } = await fromTable('reviews')
          .update(formData)
          .eq('id', editingReview.id);

        if (error) throw error;
        
        toast({
          title: "Sukces",
          description: "Opinia została zaktualizowana.",
        });
      } else {
        const { error } = await fromTable('reviews')
          .insert([formData]);

        if (error) throw error;
        
        toast({
          title: "Sukces", 
          description: "Nowa opinia została dodana.",
        });
      }

      resetForm();
      fetchReviews();
    } catch (error: any) {
      console.error('Error saving review:', error);
      toast({
        title: "Błąd",
        description: "Nie udało się zapisać opinii. " + (error.message || ''),
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Czy na pewno chcesz usunąć tę opinię?')) return;

    try {
      const { error } = await supabase
        .from('reviews')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Sukces",
        description: "Opinia została usunięta.",
      });
      
      fetchReviews();
    } catch (error: any) {
      console.error('Error deleting review:', error);
      toast({
        title: "Błąd",
        description: "Nie udało się usunąć opinii. " + (error.message || ''),
        variant: "destructive",
      });
    }
  };

  const handleToggleFeatured = async (id: string, currentValue: boolean) => {
    try {
      const { error } = await supabase
        .from('reviews')
        .update({ is_featured: !currentValue })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Sukces",
        description: `Opinia ${!currentValue ? 'dodana do' : 'usunięta z'} wyróżnionych.`,
      });
      
      fetchReviews();
    } catch (error: any) {
      console.error('Error updating featured status:', error);
      toast({
        title: "Błąd",
        description: "Nie udało się zaktualizować statusu opinii. " + (error.message || ''),
        variant: "destructive",
      });
    }
  };

  const resetForm = () => {
    setFormData({
      client_name: '',
      client_location: '',
      project_type: '',
      rating: 5,
      review_text: '',
      google_review_url: '',
      is_featured: false
    });
    setIsAddingNew(false);
    setEditingReview(null);
  };

  const startEdit = (review: Review) => {
    setFormData({
      client_name: review.client_name,
      client_location: review.client_location,
      project_type: review.project_type,
      rating: review.rating,
      review_text: review.review_text,
      google_review_url: review.google_review_url || '',
      is_featured: review.is_featured
    });
    setEditingReview(review);
    setIsAddingNew(true);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  if (isLoading) {
    return <div className="text-center py-8">Ładowanie opinii...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Zarządzanie Opiniami</h1>
          <p className="text-muted-foreground">
            Zarządzaj opiniami klientów wyświetlanymi na stronie głównej
          </p>
        </div>
        <Button 
          onClick={() => setIsAddingNew(true)}
          className="flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Dodaj Opinię
        </Button>
      </div>

      {isAddingNew && (
        <Card>
          <CardHeader>
            <CardTitle>
              {editingReview ? 'Edytuj Opinię' : 'Dodaj Nową Opinię'}
            </CardTitle>
            <CardDescription>
              Wprowadź szczegóły opinii klienta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="client_name" className="block text-sm font-medium mb-1">
                    Imię i Nazwisko Klienta*
                  </label>
                  <Input
                    id="client_name"
                    value={formData.client_name}
                    onChange={(e) => setFormData({...formData, client_name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="client_location" className="block text-sm font-medium mb-1">
                    Lokalizacja*
                  </label>
                  <Input
                    id="client_location"
                    value={formData.client_location}
                    onChange={(e) => setFormData({...formData, client_location: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="project_type" className="block text-sm font-medium mb-1">
                    Typ Projektu*
                  </label>
                  <Input
                    id="project_type"
                    value={formData.project_type}
                    onChange={(e) => setFormData({...formData, project_type: e.target.value})}
                    placeholder="np. Ogrodzenie metalowe, Schody drewniane"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="rating" className="block text-sm font-medium mb-1">
                    Ocena (1-5)*
                  </label>
                  <select
                    id="rating"
                    value={formData.rating}
                    onChange={(e) => setFormData({...formData, rating: Number(e.target.value)})}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    required
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num} gwiazdek</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="review_text" className="block text-sm font-medium mb-1">
                  Treść Opinii*
                </label>
                <Textarea
                  id="review_text"
                  value={formData.review_text}
                  onChange={(e) => setFormData({...formData, review_text: e.target.value})}
                  rows={4}
                  required
                />
              </div>

              <div>
                <label htmlFor="google_review_url" className="block text-sm font-medium mb-1">
                  Link do Google Review (opcjonalnie)
                </label>
                <Input
                  id="google_review_url"
                  type="url"
                  value={formData.google_review_url}
                  onChange={(e) => setFormData({...formData, google_review_url: e.target.value})}
                  placeholder="https://g.page/..."
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="is_featured"
                  checked={formData.is_featured}
                  onCheckedChange={(checked) => setFormData({...formData, is_featured: checked})}
                />
                <label htmlFor="is_featured" className="text-sm font-medium">
                  Wyróżniona (wyświetla się na stronie głównej)
                </label>
              </div>

              <div className="flex gap-2">
                <Button type="submit">
                  {editingReview ? 'Zaktualizuj' : 'Dodaj'} Opinię
                </Button>
                <Button type="button" variant="outline" onClick={resetForm}>
                  Anuluj
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Lista Opinii ({reviews.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Klient</TableHead>
                <TableHead>Lokalizacja</TableHead>
                <TableHead>Projekt</TableHead>
                <TableHead>Ocena</TableHead>
                <TableHead>Wyróżniona</TableHead>
                <TableHead>Akcje</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reviews.map((review) => (
                <TableRow key={review.id}>
                  <TableCell className="font-medium">{review.client_name}</TableCell>
                  <TableCell>{review.client_location}</TableCell>
                  <TableCell>{review.project_type}</TableCell>
                  <TableCell>
                    <div className="flex">{renderStars(review.rating)}</div>
                  </TableCell>
                  <TableCell>
                    <Switch
                      checked={review.is_featured}
                      onCheckedChange={() => handleToggleFeatured(review.id, review.is_featured)}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => startEdit(review)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(review.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {reviews.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              Brak opinii. Dodaj pierwszą opinię klienta.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
