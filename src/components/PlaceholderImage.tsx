interface PlaceholderImageProps {
  width: number;
  height: number;
  text: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

export default function PlaceholderImage({
  width,
  height,
  text,
  bgColor = "#3B82F6",
  textColor = "#FFFFFF",
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      <div className="text-center p-4">
        <div className="text-sm font-medium leading-tight">
          {text.split(' ').map((word, index) => (
            <div key={index}>{word}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
