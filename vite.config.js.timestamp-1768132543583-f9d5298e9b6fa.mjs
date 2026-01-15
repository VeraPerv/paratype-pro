// vite.config.js
import { ViteImageOptimizer } from "file:///C:/Users/79137/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/champion/paratype-pro/node_modules/vite-plugin-image-optimizer/dist/index.mjs";
import VitePluginSvgSpritemap from "file:///C:/Users/79137/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/champion/paratype-pro/node_modules/@spiriit/vite-plugin-svg-spritemap/dist/index.js";
var vite_config_default = {
  plugins: [
    VitePluginSvgSpritemap("source/img/sprite/*.svg", {
      styles: false,
      injectSVGOnDev: true
    }),
    // input https://www.npmjs.com/package/html-minifier-terser options
    // ViteMinifyPlugin({}),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|svg)$/i,
      includePublic: false,
      logStats: true,
      ansiColors: true,
      svg: {
        multipass: true,
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                cleanupNumericValues: false,
                convertPathData: {
                  floatPrecision: 2,
                  forceAbsolutePath: false,
                  utilizeAbsolute: false
                },
                removeViewBox: false,
                // https://github.com/svg/svgo/issues/1128
                cleanupIds: false
              }
            }
          },
          "removeDimensions"
        ]
      },
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 80,
        palette: true
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
        progressive: true
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
        progressive: true
      },
      // Cache assets in cacheLocation. When enabled, reads and writes asset files with their hash suffix from the specified path.
      cache: true,
      cacheLocation: "./.cache"
    })
  ],
  css: {
    devSourcemap: true
  },
  publicDir: "public",
  root: "./source",
  build: {
    outDir: "../dist"
  },
  base: "./",
  server: {
    port: 3e3
  }
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFw3OTEzN1xcXFxPbmVEcml2ZVxcXFxcdTA0MjBcdTA0MzBcdTA0MzFcdTA0M0VcdTA0NDdcdTA0MzhcdTA0MzkgXHUwNDQxXHUwNDQyXHUwNDNFXHUwNDNCXFxcXGNoYW1waW9uXFxcXHBhcmF0eXBlLXByb1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcNzkxMzdcXFxcT25lRHJpdmVcXFxcXHUwNDIwXHUwNDMwXHUwNDMxXHUwNDNFXHUwNDQ3XHUwNDM4XHUwNDM5IFx1MDQ0MVx1MDQ0Mlx1MDQzRVx1MDQzQlxcXFxjaGFtcGlvblxcXFxwYXJhdHlwZS1wcm9cXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLzc5MTM3L09uZURyaXZlLyVEMCVBMCVEMCVCMCVEMCVCMSVEMCVCRSVEMSU4NyVEMCVCOCVEMCVCOSUyMCVEMSU4MSVEMSU4MiVEMCVCRSVEMCVCQi9jaGFtcGlvbi9wYXJhdHlwZS1wcm8vdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBWaXRlSW1hZ2VPcHRpbWl6ZXIgfSBmcm9tICd2aXRlLXBsdWdpbi1pbWFnZS1vcHRpbWl6ZXInO1xuaW1wb3J0IFZpdGVQbHVnaW5TdmdTcHJpdGVtYXAgZnJvbSAnQHNwaXJpaXQvdml0ZS1wbHVnaW4tc3ZnLXNwcml0ZW1hcCc7XG4vLyBpbXBvcnQgeyBWaXRlTWluaWZ5UGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tbWluaWZ5JztcblxuLyoqIEB0eXBlIHtpbXBvcnQoJ3ZpdGUnKS5Vc2VyQ29uZmlnfSAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBwbHVnaW5zOiBbXG4gICAgVml0ZVBsdWdpblN2Z1Nwcml0ZW1hcCgnc291cmNlL2ltZy9zcHJpdGUvKi5zdmcnLCB7XG4gICAgICBzdHlsZXM6IGZhbHNlLFxuICAgICAgaW5qZWN0U1ZHT25EZXY6IHRydWUsXG4gICAgfSksXG4gICAgLy8gaW5wdXQgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvaHRtbC1taW5pZmllci10ZXJzZXIgb3B0aW9uc1xuICAgIC8vIFZpdGVNaW5pZnlQbHVnaW4oe30pLFxuICAgIFZpdGVJbWFnZU9wdGltaXplcih7XG4gICAgICB0ZXN0OiAvXFwuKGpwZT9nfHBuZ3xzdmcpJC9pLFxuICAgICAgaW5jbHVkZVB1YmxpYzogZmFsc2UsXG4gICAgICBsb2dTdGF0czogdHJ1ZSxcbiAgICAgIGFuc2lDb2xvcnM6IHRydWUsXG4gICAgICBzdmc6IHtcbiAgICAgICAgbXVsdGlwYXNzOiB0cnVlLFxuICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3ByZXNldC1kZWZhdWx0JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBvdmVycmlkZXM6IHtcbiAgICAgICAgICAgICAgICBjbGVhbnVwTnVtZXJpY1ZhbHVlczogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29udmVydFBhdGhEYXRhOiB7XG4gICAgICAgICAgICAgICAgICBmbG9hdFByZWNpc2lvbjogMixcbiAgICAgICAgICAgICAgICAgIGZvcmNlQWJzb2x1dGVQYXRoOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIHV0aWxpemVBYnNvbHV0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVWaWV3Qm94OiBmYWxzZSwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3N2Zy9zdmdvL2lzc3Vlcy8xMTI4XG4gICAgICAgICAgICAgICAgY2xlYW51cElkczogZmFsc2UsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ3JlbW92ZURpbWVuc2lvbnMnLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHBuZzoge1xuICAgICAgICAvLyBodHRwczovL3NoYXJwLnBpeGVscGx1bWJpbmcuY29tL2FwaS1vdXRwdXQjcG5nXG4gICAgICAgIHF1YWxpdHk6IDgwLFxuICAgICAgICBwYWxldHRlOiB0cnVlXG4gICAgICB9LFxuICAgICAganBlZzoge1xuICAgICAgICAvLyBodHRwczovL3NoYXJwLnBpeGVscGx1bWJpbmcuY29tL2FwaS1vdXRwdXQjanBlZ1xuICAgICAgICBxdWFsaXR5OiA4MCxcbiAgICAgICAgcHJvZ3Jlc3NpdmU6IHRydWVcbiAgICAgIH0sXG4gICAgICBqcGc6IHtcbiAgICAgICAgLy8gaHR0cHM6Ly9zaGFycC5waXhlbHBsdW1iaW5nLmNvbS9hcGktb3V0cHV0I2pwZWdcbiAgICAgICAgcXVhbGl0eTogODAsXG4gICAgICAgIHByb2dyZXNzaXZlOiB0cnVlXG4gICAgICB9LFxuICAgICAgLy8gQ2FjaGUgYXNzZXRzIGluIGNhY2hlTG9jYXRpb24uIFdoZW4gZW5hYmxlZCwgcmVhZHMgYW5kIHdyaXRlcyBhc3NldCBmaWxlcyB3aXRoIHRoZWlyIGhhc2ggc3VmZml4IGZyb20gdGhlIHNwZWNpZmllZCBwYXRoLlxuICAgICAgY2FjaGU6IHRydWUsXG4gICAgICBjYWNoZUxvY2F0aW9uOiAnLi8uY2FjaGUnLFxuICAgIH0pLFxuICBdLFxuICBjc3M6IHtcbiAgICBkZXZTb3VyY2VtYXA6IHRydWVcbiAgfSxcbiAgcHVibGljRGlyOiAncHVibGljJyxcbiAgcm9vdDogJy4vc291cmNlJyxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6ICcuLi9kaXN0JyxcbiAgfSxcbiAgYmFzZTogJy4vJyxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogMzAwMCxcbiAgfVxufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdWEsU0FBUywwQkFBMEI7QUFDMWMsT0FBTyw0QkFBNEI7QUFJbkMsSUFBTyxzQkFBUTtBQUFBLEVBQ2IsU0FBUztBQUFBLElBQ1AsdUJBQXVCLDJCQUEyQjtBQUFBLE1BQ2hELFFBQVE7QUFBQSxNQUNSLGdCQUFnQjtBQUFBLElBQ2xCLENBQUM7QUFBQTtBQUFBO0FBQUEsSUFHRCxtQkFBbUI7QUFBQSxNQUNqQixNQUFNO0FBQUEsTUFDTixlQUFlO0FBQUEsTUFDZixVQUFVO0FBQUEsTUFDVixZQUFZO0FBQUEsTUFDWixLQUFLO0FBQUEsUUFDSCxXQUFXO0FBQUEsUUFDWCxTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sUUFBUTtBQUFBLGNBQ04sV0FBVztBQUFBLGdCQUNULHNCQUFzQjtBQUFBLGdCQUN0QixpQkFBaUI7QUFBQSxrQkFDZixnQkFBZ0I7QUFBQSxrQkFDaEIsbUJBQW1CO0FBQUEsa0JBQ25CLGlCQUFpQjtBQUFBLGdCQUNuQjtBQUFBLGdCQUNBLGVBQWU7QUFBQTtBQUFBLGdCQUNmLFlBQVk7QUFBQSxjQUNkO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLEtBQUs7QUFBQTtBQUFBLFFBRUgsU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBLE1BQU07QUFBQTtBQUFBLFFBRUosU0FBUztBQUFBLFFBQ1QsYUFBYTtBQUFBLE1BQ2Y7QUFBQSxNQUNBLEtBQUs7QUFBQTtBQUFBLFFBRUgsU0FBUztBQUFBLFFBQ1QsYUFBYTtBQUFBLE1BQ2Y7QUFBQTtBQUFBLE1BRUEsT0FBTztBQUFBLE1BQ1AsZUFBZTtBQUFBLElBQ2pCLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxjQUFjO0FBQUEsRUFDaEI7QUFBQSxFQUNBLFdBQVc7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=
