# Next.js, TypeScript + MUI + styled components example

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

:sparkles: In this example, it has been **RESOLVED** the issue occure when using **styled-components as an engine in a SSR projects** with bable.
The reason is that the babel-plugin-styled-components is not picking up correctly the usages of the styled() utility inside the @mui packages.
As a solution we could able to use swc compiler wich is next js default compiler :rocket: .

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

:exclamation: May be you will get a error 
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

:sparkles: In this example, it has been **RESOLVED** the issue occure when using **styled-components as an engine in a SSR projects** with bable.
The reason is that the babel-plugin-styled-components is not picking up correctly the usages of the styled() utility inside the @mui packages.
As a solution we could able to use swc compiler wich is next js default compiler :rocket: .
