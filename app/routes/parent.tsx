import { useMatches } from "@remix-run/react";

export default function Parent() {
  const matches = useMatches();
  console.log(matches)

  if (matches.length === 0) {
    return <div>URL không khớp với mẫu định sẵn</div>;
  }

  const { id } = matches[0].params;
  return <div>ID được truyền vào là: {id}</div>;
}