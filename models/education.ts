interface Education {
    id: number;
    user_id: number;
    university: string;
    period?: string; // ISO 8601 format (if date is used)
    body?: string;
    education_provider_id?: number;
    media?: string;
    is_media: boolean;
  }