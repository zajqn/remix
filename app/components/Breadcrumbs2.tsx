import { Breadcrumbs as Bc, Anchor } from '@mantine/core';
import { useMatches, useLocation, Link } from "@remix-run/react";

const Breadcrumbs2 = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Bc separator="→" mt="xs" sx={{fontWeight: 'bold', marginBottom: '2rem'}}>
      {pathnames.length > 0 ? (
        <Anchor href="/">HOME</Anchor>
      ) : (
        <span>HOME</span>
      )}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <span key={name}>{name.toUpperCase()}</span>
        ) : (
          <Link to={routeTo} key={name}>
            {name.toUpperCase()}
          </Link>
        );
      })}
    </Bc>
  )
}

export default Breadcrumbs2