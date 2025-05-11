
import React, { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileEdit, Image, Users } from "lucide-react";

export default function Dashboard() {
  const [counts, setCounts] = useState({
    content: 0,
    projects: 0,
    team: 0,
  });

  useEffect(() => {
    const fetchCounts = async () => {
      const [contentCount, projectsCount, teamCount] = await Promise.all([
        supabase.from("website_content").select("id", { count: "exact", head: true }),
        supabase.from("projects").select("id", { count: "exact", head: true }),
        supabase.from("team_members").select("id", { count: "exact", head: true }),
      ]);
      
      setCounts({
        content: contentCount.count || 0,
        projects: projectsCount.count || 0,
        team: teamCount.count || 0,
      });
    };

    fetchCounts();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Willkommen im Admin-Bereich von JW Zaune & Treppen</p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Webseiteninhalte</CardTitle>
            <FileEdit className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{counts.content}</div>
            <p className="text-xs text-muted-foreground">Inhalte verwalten</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Projekte</CardTitle>
            <Image className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{counts.projects}</div>
            <p className="text-xs text-muted-foreground">Projekte verwalten</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{counts.team}</div>
            <p className="text-xs text-muted-foreground">Teammitglieder verwalten</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Erste Schritte</CardTitle>
          <CardDescription>Befolgen Sie diese Schritte, um Ihre Website zu verwalten</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-md bg-muted p-4">
            <h3 className="font-medium">1. Inhalte hinzufügen</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Fügen Sie Inhalte für Ihre Webseiten hinzu oder bearbeiten Sie bestehende Texte.
            </p>
          </div>
          
          <div className="rounded-md bg-muted p-4">
            <h3 className="font-medium">2. Projekte verwalten</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Fügen Sie neue Projekte hinzu oder bearbeiten Sie bestehende Projektdetails.
            </p>
          </div>
          
          <div className="rounded-md bg-muted p-4">
            <h3 className="font-medium">3. Teaminformationen aktualisieren</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Fügen Sie neue Teammitglieder hinzu oder aktualisieren Sie bestehende Profile.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
