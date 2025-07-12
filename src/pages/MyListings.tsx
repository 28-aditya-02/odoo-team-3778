import Header from "@/components/Header";
import { ImageUpload } from "@/components/listings/ImageUpload";
import { PreviousListings } from "@/components/listings/PreviousListings";
import { ProductDescription } from "@/components/listings/ProductDescription";
import { Card } from "@/components/ui/card";

export default function MyListings() {
  // You can manage state here if you want to use the data
  const handleImagesChange = (images: string[]) => {
    // handle image array (save to state, etc)
    console.log(images);
  };

  const handleDescriptionChange = (desc: string) => {
    // handle description (save to state, etc)
    console.log(desc);
  };

  const handleStatusChange = (status: 'available' | 'swap') => {
    // handle status (save to state, etc)
    console.log(status);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ImageUpload onImagesChange={handleImagesChange} />
      <ProductDescription
        onDescriptionChange={handleDescriptionChange}
        onStatusChange={handleStatusChange}
      />
      <PreviousListings />
      
    </div>
  );
} 