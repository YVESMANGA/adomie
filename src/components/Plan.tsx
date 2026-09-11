import React, { useState, useRef, useEffect } from "react";

interface ImageSectionProps {
  imageSrc?: string;
  imageAlt?: string;
}

export const HeroImageSection: React.FC<ImageSectionProps> = ({
  imageSrc = "/plan.webp",
  imageAlt = "Plan du projet",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Si l'image est déjà présente dans le cache du navigateur au montage du composant
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, [imageSrc]);

  return (
    <section className="relative w-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="relative max-w-full overflow-hidden w-full">
        {/* Loader / Skeleton pendant le chargement */}
        {!isLoaded && (
          <div className="w-full h-64 bg-slate-900 animate-pulse rounded-lg" />
        )}

        {/* Image */}
        <img
          ref={imgRef}
          src={imageSrc}
          alt={imageAlt}
          onLoad={() => setIsLoaded(true)}
          className={`w-auto h-auto max-w-full max-h-[85vh] object-contain mx-auto transition-opacity duration-500 ${
            isLoaded
              ? "opacity-100 relative"
              : "opacity-0 absolute top-0 left-0"
          }`}
        />
      </div>
    </section>
  );
};

export default HeroImageSection;
