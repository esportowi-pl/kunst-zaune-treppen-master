
import { supabase } from './client';

/**
 * Typed helper to access Supabase tables that may not yet be in auto-generated types.
 * Use this instead of supabase.from() directly to avoid TypeScript errors.
 */
export function fromTable(table: string) {
  return (supabase as any).from(table);
}
