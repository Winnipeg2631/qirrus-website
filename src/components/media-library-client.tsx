'use client';

import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { uploadFileAction, listFilesAction, deleteFileAction } from '@/app/actions/media-actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, Upload, Trash2, Copy, Check } from 'lucide-react';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Upload className="mr-2 h-4 w-4" />
      )}
      Upload
    </Button>
  );
}

function CopyButton({ textToCopy }: { textToCopy: string }) {
    const [copied, setCopied] = useState(false);
    const { toast } = useToast();

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopied(true);
            toast({
                title: "Copied!",
                description: "The URL has been copied to your clipboard.",
            });
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <Button size="icon" variant="ghost" onClick={handleCopy}>
            {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
        </Button>
    );
}

type MediaFile = {
    name: string;
    url: string;
};

export function MediaLibraryClient({ initialFiles }: { initialFiles: MediaFile[] }) {
  const [files, setFiles] = useState<MediaFile[]>(initialFiles);
  const { toast } = useToast();
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  const handleUpload = async (formData: FormData) => {
    setUploadError(null);
    const file = formData.get('file') as File;
    if (!file || file.size === 0) {
      setUploadError('Please select a file to upload.');
      return;
    }

    const result = await uploadFileAction(formData);

    if (result.message === 'error') {
      setUploadError(result.error || 'An unknown error occurred.');
    } else {
      toast({
        title: 'Upload Successful',
        description: `${file.name} has been uploaded.`,
      });
      // Refresh file list
      const updatedFiles = await listFilesAction();
      setFiles(updatedFiles);
    }
  };
  
  const handleDelete = async (fileName: string) => {
    setIsDeleting(fileName);
    try {
        const result = await deleteFileAction(fileName);
        if (result.message === 'success') {
            toast({
                title: 'File Deleted',
                description: `${fileName} has been deleted successfully.`,
            });
            setFiles(files.filter(file => file.name !== fileName));
        } else {
             toast({
                title: 'Error',
                description: result.error || 'Could not delete the file.',
                variant: 'destructive'
            });
        }
    } catch(e) {
         toast({
            title: 'Error',
            description: 'An unexpected error occurred.',
            variant: 'destructive'
        });
    } finally {
        setIsDeleting(null);
    }
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="p-6">
          <form action={handleUpload} className="flex flex-col sm:flex-row items-center gap-4">
            <Input id="file" name="file" type="file" className="flex-grow" />
            <SubmitButton />
          </form>
          {uploadError && <p className="mt-2 text-sm text-destructive">{uploadError}</p>}
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Your Files</h2>
        {files.length === 0 ? (
          <p className="text-muted-foreground">You haven't uploaded any files yet.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {files.map((file) => (
              <Card key={file.name} className="overflow-hidden group relative">
                <div className="aspect-square relative">
                    <Image
                      src={file.url}
                      alt={file.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
                 <div className="absolute top-1 right-1 flex gap-1 bg-background/50 rounded-md p-0.5">
                    <CopyButton textToCopy={file.url} />
                    <Button size="icon" variant="ghost" onClick={() => handleDelete(file.name)} disabled={isDeleting === file.name}>
                        {isDeleting === file.name ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
                    </Button>
                </div>
                <div className="p-2 bg-muted/80">
                  <p className="text-xs font-medium truncate" title={file.name}>
                    {file.name}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
