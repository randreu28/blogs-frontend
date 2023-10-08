type Props = {
  error: string;
};

export default function Error({ error }: Props) {
  console.error(error);
  return <p className="p-5 text-red-500"> {error}</p>;
}
