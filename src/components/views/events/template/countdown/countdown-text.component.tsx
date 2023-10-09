import { textSizes } from "@/components/common/text";

interface CountdownTextProps {
  title: string;
  text: string;
}

export default function CountdownText({ title, text }: CountdownTextProps) {
  return (
    <div className="flex flex-col items-center">
      <span
        className={`text-primary-1000 dark:text-primary-50 ${textSizes["2xl"]}`}
      >
        {text}
      </span>
      <span
        className={`text-primary-1000 dark:text-primary-50 ${textSizes["sm"]}`}
      >
        {title}
      </span>
    </div>
  );
}
