This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# Next.js, TypeScript + MUI + styled components example

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


Using styled-components as an engine at this moment is not working when used in a SSR projects with bable. The reason is that the babel-plugin-styled-components is not picking up correctly the usages of the styled() utility inside the @mui packages. As a solution we could able to use swc compiler. This is a example code base which has been configured to use

## How to use

1. First, Download the example [or clone the repo](https://github.com/subodha/next-ssr-ts-swc-mui-sc-example.git):

2. Second, run the Installation:
```bash
yarn
# or
npm install
```

3. Then, run the development server:
```bash
yarn dev
# or
npm run dev
```

:tw-2757: May be you will get a error 
`./node_modules/@mui/system/ThemeProvider/ThemeProvider.js:18:20
Module not found: Can't resolve '@mui/styled-engine'`

Please install the `@mui/styled-engine-sc ` manually and re run the development server

```bash
yarn add @mui/styled-engine-sc
# or
npm i @mui/styled-engine-sc
```



## The idea behind the example
<!-- #default-branch-switch -->

The project uses [Next.js](https://github.com/vercel/next.js), which is a framework for server-rendered React apps.

It includes `@mui/material` with [styled-components](https://styled-components.com/) as a style engine for your application.](https://mui.com/guides/interoperability/#styled-components).

:smile: In this example, it has been **RESOLVED** the issue occure when using **styled-components as an engine in a SSR projects** with bable.
The reason is that the babel-plugin-styled-components is not picking up correctly the usages of the styled() utility inside the @mui packages.
As a solution we could able to use swc compiler.
