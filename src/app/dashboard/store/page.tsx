"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Wand2 } from "lucide-react";
import PageHeader from "@/components/shared/page-header";
import { generateStoreImageAction } from "@/app/actions/ai";
import { useToast } from "@/hooks/use-toast";

// Mock store data
const storeData = {
  storeName: "TechSpot",
  category: "Electronics",
  address: "456 Gadget Ave, Silicon Valley",
  storeEmail: "support@techspot.com",
  imageURL: "https://picsum.photos/seed/storeelectronics/600/400"
};

const formSchema = z.object({
  storeName: z.string().min(2, "Store name must be at least 2 characters."),
  category: z.string().min(2, "Category is required."),
  address: z.string().min(10, "Address is required."),
  storeEmail: z.string().email("Invalid email address."),
  imageURL: z.string().url("Invalid URL.").optional().or(z.literal("")),
});

export default function StoreSettingsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: storeData,
  });

  const [imagePreview, setImagePreview] = useState(storeData.imageURL);

  async function handleGenerateImage() {
    setIsGenerating(true);
    const { storeName, category } = form.getValues();
    const result = await generateStoreImageAction(storeName, category);
    if (result.success && result.imageURL) {
      form.setValue("imageURL", result.imageURL);
      setImagePreview(result.imageURL);
      toast({ title: "Image generated successfully!" });
    } else {
      toast({ title: "Image generation failed", description: result.error, variant: "destructive" });
    }
    setIsGenerating(false);
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    console.log(values);
    setTimeout(() => setIsLoading(false), 2000);
  }

  return (
    <div>
      <PageHeader
        title="Store Settings"
        description="Update your store's information."
      />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="storeName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Store Name</FormLabel>
                <FormControl><Input placeholder="My Awesome Store" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl><Input placeholder="e.g., Electronics, Books" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl><Input placeholder="123 Main St, Anytown, USA" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="storeEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Email</FormLabel>
                <FormControl><Input placeholder="contact@mystore.com" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imageURL"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Store Image URL</FormLabel>
                <div className="flex items-center gap-2">
                  <FormControl>
                    <Input placeholder="https://example.com/image.png" {...field} onChange={(e) => {
                      field.onChange(e);
                      setImagePreview(e.target.value);
                    }}/>
                  </FormControl>
                  <Button type="button" variant="outline" onClick={handleGenerateImage} disabled={isGenerating}>
                    {isGenerating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                    Generate with AI
                  </Button>
                </div>
                {imagePreview && (
                  <div className="mt-4 w-full max-w-sm aspect-video relative rounded-md overflow-hidden border">
                    <Image src={imagePreview} alt="Store preview" fill className="object-cover" />
                  </div>
                )}
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save Changes
          </Button>
        </form>
      </Form>
    </div>
  );
}
