export interface SavedItem {
  id: string;
  created_at: string;
  source: 'youtube' | 'twitter' | 'instagram' | 'substack';
  source_url: string;
  title: string;
  author_name: string | null;
  summary: string;
  metadata: Record<string, any>;
  embedding?: number[];
  is_digested: boolean;
}
