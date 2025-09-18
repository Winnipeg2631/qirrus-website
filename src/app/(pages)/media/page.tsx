import { MediaLibraryClient } from '@/components/media-library-client';
import { listFilesAction } from '@/app/actions/media-actions';
import { Metadata } from 'next';
import { UploadCloud } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Media Library | Qirrus',
  description: 'Upload and manage your images and videos.',
};

export default async function MediaPage() {
  const initialFiles = await listFilesAction();

  return (
    <div className="container mx-auto px-4 py-8">
       <div className="mb-8 flex flex-col items-center text-center">
         <div className="flex items-center gap-3">
          <UploadCloud className="h-8 w-8 text-accent" />
          <h1 className="text-3xl font-bold md:text-4xl">Media Library</h1>
        </div>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Upload and manage your images and videos for your website and menus.
        </p>
      </div>
      <MediaLibraryClient initialFiles={initialFiles} />
    </div>
  );
}
