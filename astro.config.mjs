import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  site: "https://jaime.one",
  fonts: [{
    provider: fontProviders.local(),
    name: "Swiza",
    cssVariable: "--font--swiza",
    options: {
      variants: [
        {
          src: ['./src/assets/fonts/swiza-thin.woff2'],
          weight: '100',
          style: 'normal',
          fallbacks: ["sans-serif"]
        },
        {
          src: ['./src/assets/fonts/swiza-thinitalic.woff2'],
          weight: '100',
          style: 'italic',
          fallbacks: ["sans-serif"]
        },
        {
          src: ['./src/assets/fonts/swiza-extralight.woff2'],
          weight: '200',
          style: 'normal',
          fallbacks: ["sans-serif"]
        },
        {
          src: ['./src/assets/fonts/swiza-extralightitalic.woff2'],
          weight: '200',
          style: 'italic',
          fallbacks: ["sans-serif"]
        },
        {
          src: ['./src/assets/fonts/swiza-light.woff2'],
          weight: '300',
          style: 'normal',
          fallbacks: ["sans-serif"]
        },
        {
          src: ['./src/assets/fonts/swiza-lightitalic.woff2'],
          weight: '300',
          style: 'italic',
          fallbacks: ["sans-serif"]
        },
        {
          src: ['./src/assets/fonts/swiza-regular.woff2'],
          weight: '400',
          style: 'normal',
          fallbacks: ["sans-serif"]
        },
        {
          src: ['./src/assets/fonts/swiza-regularitalic.woff2'],
          weight: '400',
          style: 'italic',
          fallbacks: ["sans-serif"]
        },
        {
          src: ['./src/assets/fonts/swiza-medium.woff2'],
          weight: '500',
          style: 'normal',
          fallbacks: ["sans-serif"]
        },
        {
          src: ['./src/assets/fonts/swiza-mediumitalic.woff2'],
          weight: '500',
          style: 'italic',
          fallbacks: ["sans-serif"]
        },
        {
          src: ['./src/assets/fonts/swiza-semibold.woff2'],
          weight: '600',
          style: 'normal',
          fallbacks: ["sans-serif"]
        },
        {
          src: ['./src/assets/fonts/swiza-bold.woff2'],
          weight: '700',
          style: 'normal',
          fallbacks: ["sans-serif"]
        },
        {
          src: ['./src/assets/fonts/swiza-bolditalic.woff2'],
          weight: '700',
          style: 'italic',
          fallbacks: ["sans-serif"]
        },
      ]
    }
  }]
});
