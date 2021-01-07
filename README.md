# Exygy demo repo for Next.js

You will need Node and Yarn installed on your machine.

After cloning this repo, run:

```
yarn install

yarn dev
```

and then visit [http://localhost:3000](http://localhost:3000) to browse the site.

To load the Storybook preview, run:

```
yarn storybook
```

## Technology

* Typescript 4
* Next.js 10
* Storybook 6
* React 17

## Repo History

### July 2019

Here are the steps I took to initialize this repo:

```
mkdir nextjs-starter-kit
cd nextjs-starter-kit/
yarn init -y
yarn add react react-dom next
```

Then I added scripts to the `package.json` file and ran:

`yarn run dev`

Which will let you preview the site at `http://localhost:3000`

Other than the `pages` folder, Next.js does not impose a particular folder hierarchy, so for example my choice to put a layout in `layouts` was simply due to familiarity with past frameworks like Rails.

Most of the code here is based off of the whole ["Basics" tutorial at nextjs.org](https://nextjs.org/learn/basics/getting-started).
