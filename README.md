# Setup Server

## Install up Server:

Run `npm i --save-dev express nodemon prisma dotenv typescript ts-node @types/node @types/express concurrently @prisma/client`  
Then `npx prisma init`

## Create routes/api

- post
  - /api/posts - GET
  - /api/posts - POST -- name, prompt, image

## Image

- Save to MongoDB -- Use `Buffer.from(image, 'base64')` to convert 'base64' to buffer in node.js and data type is 'Bytes' in Presma model.
- Read from MongoDB -- Use `image.toString('base64')` to convert buffer to 'base64' in node.js
- Use on client -- Use `` src={`data:image/png;base64,${image}`} ``

## TypeScript

```
 const downloadRef = useRef(null)

 downloadRef.current?.click() -- Property 'click' does not exist on type 'never'.ts(2339)

```

- Fix: `const downloadRef = useRef<HTMLAnchorElement>(null)`
