import Image from "next/image";

export function Logo({
  className,
  size = 36,
  ...props
}: {
  className?: string;
  size?: number;
} & Omit<React.ComponentProps<typeof Image>, "src" | "alt">) {
  return (
    <Image
      src="/logo-only.svg"
      alt="Logo Taruna Merah Putih"
      width={size}
      height={size}
      className={className}
      {...props}
    />
  );
}
