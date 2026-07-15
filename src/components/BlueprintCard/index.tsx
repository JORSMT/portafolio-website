import type { BlueprintCardProps } from "./interface";

export default function BlueprintCard({
  children,
  className,
  reveal = false,
  as: Tag = "div",
  style,
}: BlueprintCardProps) {
  return (
    <Tag
      className={className ? `blueprint ${className}` : "blueprint"}
      data-reveal={reveal ? "" : undefined}
      style={style}
    >
      <i className="corner tl" />
      <i className="corner tr" />
      <i className="corner bl" />
      <i className="corner br" />
      {children}
    </Tag>
  );
}
