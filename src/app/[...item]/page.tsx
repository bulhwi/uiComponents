// 'use client'
//
// import { ROUTE_PATH, isParentRoute, routePaths, routes } from '@/routes'
//
// const ItemPage = ({ params: { item } }: { params: { item: string[] } }) => {
//   const path = ['', ...item].join('/') as ROUTE_PATH
//   const route = routes[path]
//   if (!routePaths.includes(path) || isParentRoute(route) || !route.children) return null
//
//   const Component = route.children
//   return <Component />
// }
//
// export default ItemPage

const ItemPage = ({params: {item}}: {params: {item: string[]}}) => {
  console.log(item);
  const path = ['', ...item].join('/');
  console.log(path)
  return (
    <div>Item page {path}</div>
  )
}

export default ItemPage;