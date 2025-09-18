'use server';

import { storage } from '@/lib/firebase';
import { ref, uploadBytes, getDownloadURL, listAll, deleteObject } from 'firebase/storage';
import { revalidatePath } from 'next/cache';

type UploadState = {
  message: 'success' | 'error' | null;
  error?: string | null;
};

type MediaFile = {
    name: string;
    url: string;
};

export async function uploadFileAction(formData: FormData): Promise<UploadState> {
  const file = formData.get('file') as File;
  if (!file) {
    return { message: 'error', error: 'No file provided.' };
  }

  try {
    const storageRef = ref(storage, `media/${file.name}`);
    await uploadBytes(storageRef, file);
    
    revalidatePath('/media');
    return { message: 'success' };
  } catch (e: any) {
    console.error('Upload error:', e);
    return { message: 'error', error: e.message };
  }
}

export async function listFilesAction(): Promise<MediaFile[]> {
    try {
        const listRef = ref(storage, 'media/');
        const res = await listAll(listRef);

        const files = await Promise.all(
            res.items.map(async (itemRef) => {
                const url = await getDownloadURL(itemRef);
                return {
                    name: itemRef.name,
                    url: url,
                };
            })
        );
        return files;
    } catch(e: any) {
        console.error('List files error:', e);
        return [];
    }
}

export async function deleteFileAction(fileName: string): Promise<UploadState> {
    try {
        const fileRef = ref(storage, `media/${fileName}`);
        await deleteObject(fileRef);
        revalidatePath('/media');
        return { message: 'success' };
    } catch (e: any) {
        console.error('Delete error:', e);
        if (e.code === 'storage/object-not-found') {
            return { message: 'error', error: 'File not found.' };
        }
        return { message: 'error', error: e.message };
    }
}
