
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

export default function CreateFirstAdmin() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://qjxfdfdujrjyedqukwfy.supabase.co/functions/v1/create-admin-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqeGZkZmR1anJqeWVkcXVrd2Z5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5MDQ4ODUsImV4cCI6MjA2NTQ4MDg4NX0.uwGY_lv30rGfBjIlsIk07g-UZhdB3HY2jDaatIsmwFk`
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Erfolg",
          description: `Admin-Benutzer wurde erstellt. Temporäres Passwort: ${data.password}`,
        });
      } else {
        throw new Error(data.error || 'Fehler beim Erstellen des Admin-Benutzers');
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Fehler",
        description: error instanceof Error ? error.message : 'Unbekannter Fehler',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Ersten Admin-Benutzer erstellen</CardTitle>
          <CardDescription>
            Erstellen Sie den ersten Administrator für das CMS-System
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCreateAdmin} className="space-y-4">
            <Input
              type="email"
              placeholder="Admin E-Mail-Adresse"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Erstelle Admin...' : 'Admin erstellen'}
            </Button>
          </form>
          <div className="mt-4 text-sm text-gray-600">
            <p>Nach der Erstellung erhalten Sie ein temporäres Passwort.</p>
            <p>Bitte ändern Sie es nach dem ersten Login.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
