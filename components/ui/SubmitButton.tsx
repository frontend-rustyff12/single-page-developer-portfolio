export type ButtonProps = {
  name: string;
};

export default function SubmitButton({ name }: ButtonProps) {
  return (
    <button type="submit" className="btn">
      {name}
    </button>
  );
}
