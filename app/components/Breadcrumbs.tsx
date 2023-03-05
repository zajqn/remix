import { Breadcrumbs as Bc, Anchor } from '@mantine/core';
import { BreadcrumbsModel } from '~/models/allModel';

export default function Breadcrumbs({items}: {items: BreadcrumbsModel[]}) {
  const breadcrumbs = items.map((item: any, index: number) => (
    <Anchor href={item.path} key={index}>
      {item.name}
    </Anchor>
  ))
  
  return (
    <>
      <Bc>{breadcrumbs}</Bc>
    </>
  );
}
