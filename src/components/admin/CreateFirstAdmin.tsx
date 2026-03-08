
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

export default function CreateFirstAdmin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateAdmin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 6) {
      toast({ variant: "destructive", title: "Fehler", description: "Das Passwort muss mindestens 6 Zeichen lang sein." });
      return;
    }

    if (password !== confirmPassword) {
      toast({ variant: "destructive", title: "Fehler", description: "Die Passwörter stimmen nicht überein." });
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('create-admin-user', {
        body: { email, password }
      });

      if (error) throw error;

      if (data?.success) {
        toast({
          title: "Erfolg",
          description: "Admin-Benutzer wurde erfolgreich erstellt. Sie können sich jetzt anmelden.",
        });
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        throw new Error(data?.error || 'Fehler beim Erstellen des Admin-Benutzers');
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
    <div className="min-h-screen flex items-center justify-center bg-muted p-4">
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
            <Input
              type="password"
              placeholder="Passwort (min. 6 Zeichen)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
            <Input
              type="password"
              placeholder="Passwort bestätigen"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={6}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Erstelle Admin...' : 'Admin erstellen'}
            </Button>
          </form>
          <div className="mt-4 text-sm text-muted-foreground">
            <p>Nach der Erstellung können Sie sich unter <a href="/admin/login" className="underline">/admin/login</a> anmelden.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
