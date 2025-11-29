export type ButtonProps = {
  link: string;
  name: string;
};

export default function Button({ link, name }: ButtonProps) {
  return (
    <a href={link} className="btn" target="_blank" rel="noopener noreferrer">
      {name}
    </a>
  );
}
