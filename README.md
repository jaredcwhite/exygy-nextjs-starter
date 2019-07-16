# Next.js test repo

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

## Running Yourself

I think all you'll need to do is clone the repo, run `yarn install` and then `yarn run dev`. That's the theory anyway :)